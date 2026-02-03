import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Loader2, ArrowLeft } from 'lucide-react';
import { axiosPublic, axiosPrivate } from '../../api/axios'; // Use private instance for login to receive HttpOnly cookie
import { useAdminAuth } from '../context/AdminAuthContext';

const AdminLogin = () => {
    const { setAdminAuth } = useAdminAuth();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await axiosPrivate.post('/auth/login', { email, password });
            setAdminAuth(res.data); // User, Role, aur AccessToken save karein
            navigate('/admin');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Security check required.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 font-['Manrope']">
            <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl shadow-2xl relative">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-white mb-2 italic">Admin Portal</h1>
                    <p className="text-gray-400 text-sm">Authorized Access Only</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-gray-400 text-xs uppercase tracking-widest font-bold ml-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            <input 
                                type="email" required
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-all"
                                placeholder="admin@canvasolutions.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-gray-400 text-xs uppercase tracking-widest font-bold ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            <input 
                                type="password" required
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button 
                        disabled={loading}
                        className="w-full bg-blue-600 py-4 rounded-xl font-bold text-white hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : 'Enter Dashboard'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;