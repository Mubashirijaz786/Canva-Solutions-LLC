const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateTokens = (user) => {
    const accessToken = jwt.sign(
        { id: user._id, role: user.role }, 
        process.env.ACCESS_TOKEN_SECRET, 
        { expiresIn: '15m' }
    );
    const refreshToken = jwt.sign(
        { id: user._id }, 
        process.env.REFRESH_TOKEN_SECRET, 
        { expiresIn: '7d' }
    );
    return { accessToken, refreshToken };
};

// Yahan (req, res, next) lazmi hai
exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "Admin already exists" });

        const newUser = new User(req.body); 
        await newUser.save(); 
        res.status(201).json({ message: "Admin registered successfully" });
    } catch (err) {
        next(err); // Ye line 'next is not a function' error khatam karegi
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const { accessToken, refreshToken } = generateTokens(user);
        // ensure refreshToken array exists (model default should handle this)
        user.refreshToken = Array.isArray(user.refreshToken) ? [...user.refreshToken, refreshToken] : [refreshToken];
        await user.save();

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            // In development SameSite=None + Secure=false may be blocked by browsers for cross-site cookies.
            // Use 'Lax' in development to improve local workflow, require 'None' with secure=true in production.
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.json({ accessToken, role: user.role, email: user.email });
    } catch (err) {
        next(err);
    }
};

// Refresh route: exchange refresh token (from cookie) for a new access token
exports.refresh = async (req, res, next) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(401);

        const refreshToken = cookies.jwt;
        let payload;
        try {
            payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        } catch (err) {
            return res.sendStatus(403);
        }

        const user = await User.findById(payload.id);
        if (!user) return res.sendStatus(403);

        // Check that the presented refresh token exists for this user
        if (!user.refreshToken || !user.refreshToken.includes(refreshToken)) {
            return res.sendStatus(403);
        }

        // Optionally implement rotation: issue new refresh token and remove old
        const { accessToken, refreshToken: newRefresh } = generateTokens(user);

        // Replace the old refresh token with the new one
        user.refreshToken = user.refreshToken.filter(t => t !== refreshToken);
        user.refreshToken.push(newRefresh);
        await user.save();

        res.cookie('jwt', newRefresh, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.json({ accessToken });
    } catch (err) {
        next(err);
    }
};

// Logout: remove refresh token from DB and clear cookie
exports.logout = async (req, res, next) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(204); // No content

        const refreshToken = cookies.jwt;
        // Remove refresh token from any user that has it
        const user = await User.findOne({ refreshToken: refreshToken });
        if (user) {
            user.refreshToken = user.refreshToken.filter(t => t !== refreshToken);
            await user.save();
        }

        res.clearCookie('jwt', { httpOnly: true, sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', secure: process.env.NODE_ENV === 'production' });
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};