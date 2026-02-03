const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// --- 1. IMPORT ROUTES ---
const reviewRoutes = require('./routes/reviewRoutes');
const blogRoutes = require('./routes/blogs'); // <--- NEW BLOG ROUTE

dotenv.config();
const app = express();

// --- 2. MIDDLEWARE ---
app.use(express.json()); 
app.use(cors()); 

// --- 3. DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Database Connected Successfully"))
    .catch((err) => console.log("❌ DB Connection Error:", err));

// --- 4. API ROUTES ---
app.use('/api/reviews', reviewRoutes); // Existing Reviews
app.use('/api/blogs', blogRoutes);     // <--- NEW BLOGS ENDPOINT

// --- 5. SERVER START ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend Server running on Port ${PORT}`);
});