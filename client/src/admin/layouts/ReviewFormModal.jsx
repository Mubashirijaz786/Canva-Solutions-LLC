import React, { useState, useEffect } from 'react';
import { X, Star, User, Briefcase, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import PrimaryButton from '../../components/common/PrimaryButton'; 

// Now accepts 'initialData' (for editing) and 'onSubmit' (to handle logic in parent)
const ReviewFormModal = ({ isOpen, onClose, onSubmit, initialData = null }) => { 
    
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [formData, setFormData] = useState({ author: '', role: '', quote: '' });

    // --- EFFECT: Pre-fill form if Editing ---
    useEffect(() => {
        if (isOpen && initialData) {
            setFormData({
                author: initialData.author,
                role: initialData.role,
                quote: initialData.quote
            });
            setRating(initialData.rating);
        } else if (isOpen && !initialData) {
            // Reset if adding new
            setFormData({ author: '', role: '', quote: '' });
            setRating(0);
        }
    }, [isOpen, initialData]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (rating === 0) {
            alert("Please select a star rating!");
            return;
        }

        // Send data to parent (ManageReviews.jsx)
        await onSubmit({ ...formData, rating });
        
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            
            <div className="bg-[#0f172a] border border-white/10 w-full max-w-lg rounded-[2rem] shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
                
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
                >
                    <X size={20} />
                </button>

                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] pointer-events-none"></div>

                <div className="p-8 md:p-10 relative z-10">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {initialData ? "Edit Review" : "Add New Review"}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {initialData ? "Update client feedback details" : "Manually add client feedback"}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        
                        {/* Star Rating */}
                        <div className="flex justify-center gap-2 mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                    className="transition-transform hover:scale-110 focus:outline-none"
                                >
                                    <Star 
                                        size={32} 
                                        className={`transition-colors duration-200 ${
                                            star <= (hover || rating) 
                                                ? "text-yellow-400 fill-yellow-400" 
                                                : "text-gray-600"
                                        }`} 
                                    />
                                </button>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input 
                                    required 
                                    placeholder="Client Name" 
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:border-blue-500 focus:outline-none"
                                    value={formData.author}
                                    onChange={(e) => setFormData({...formData, author: e.target.value})} 
                                />
                            </div>
                            
                            <div className="relative">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input 
                                    required 
                                    placeholder="Role / Company" 
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:border-blue-500 focus:outline-none"
                                    value={formData.role}
                                    onChange={(e) => setFormData({...formData, role: e.target.value})} 
                                />
                            </div>

                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-3 text-gray-500" size={18} />
                                <textarea 
                                    required 
                                    rows="4" 
                                    placeholder="Client Feedback..." 
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white focus:border-blue-500 focus:outline-none resize-none"
                                    value={formData.quote}
                                    onChange={(e) => setFormData({...formData, quote: e.target.value})}
                                ></textarea>
                            </div>
                        </div>

                        <PrimaryButton className="w-full justify-center !py-3 text-base mt-2">
                            {initialData ? "Update Review" : "Submit Review"} 
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewFormModal;