import React, { useState } from 'react';
import { 
    Check, X, Trash2, Star, User, MessageSquare, Clock, CheckCircle2, XCircle, Plus, Pencil 
} from 'lucide-react';

import useAdminReviews from '../../hooks/useAdminReviews';
import ReviewFormModal from '../layouts/ReviewFormModal'; 

const ManageReviews = () => {
    
    // Updated Hook Destructuring
    const { reviews, loading, updateStatus, deleteReview, addReview, editReview } = useAdminReviews();
    
    // --- STATE ---
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviewToEdit, setReviewToEdit] = useState(null); // Stores the review object being edited

    // --- HANDLERS ---

    // Open Modal for NEW review
    const handleOpenAdd = () => {
        setReviewToEdit(null); // Clear edit data
        setIsModalOpen(true);
    };

    // Open Modal for EDIT review
    const handleOpenEdit = (review) => {
        setReviewToEdit(review); // Load data
        setIsModalOpen(true);
    };

    // Handle Form Submission (Add or Edit)
    const handleFormSubmit = async (formData) => {
        if (reviewToEdit) {
            // EDIT Mode
            await editReview(reviewToEdit._id, formData);
        } else {
            // ADD Mode
            await addReview(formData);
        }
    };

    // Helper: Star Rating
    const renderStars = (count) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-600"} />
            ))}
        </div>
    );

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    if (loading) return <div className="p-10 text-white">Loading Admin Panel...</div>;

    return (
        <div className="space-y-8">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-white">Review Management</h2>
                    <p className="text-gray-400 text-sm mt-1">Approve, Edit or Delete client reviews.</p>
                </div>
                
                <div className="flex items-center gap-4">
                    {/* Stats (Hidden on mobile) */}
                    <div className="hidden md:flex gap-4">
                        <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-400 text-sm font-bold flex items-center gap-2">
                            <Clock size={16} /> 
                            {reviews.filter(r => r.status === "Pending").length} Pending
                        </div>
                    </div>

                    {/* ADD REVIEW BUTTON */}
                    <button 
                        onClick={handleOpenAdd}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
                    >
                        <Plus size={20} /> Add Review
                    </button>
                </div>
            </div>

            {/* --- REVIEWS TABLE --- */}
            <div className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider font-bold">
                            <tr>
                                <th className="p-6">Client Info</th>
                                <th className="p-6">Review Content</th>
                                <th className="p-6">Date</th>
                                <th className="p-6">Status</th>
                                <th className="p-6 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-white/5">
                            {reviews.map((review) => (
                                <tr key={review._id} className="hover:bg-white/[0.02] transition-colors group">
                                    {/* Client Info */}
                                    <td className="p-6 align-top min-w-[200px]">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
                                                {review.author.charAt(0)}
                                            </div>
                                            <span className="text-white font-bold text-sm">{review.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-500 ml-11">
                                            <User size={12} /> {review.role}
                                        </div>
                                    </td>

                                    {/* Content */}
                                    <td className="p-6 align-top max-w-md">
                                        <div className="mb-2">{renderStars(review.rating)}</div>
                                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">"{review.quote}"</p>
                                    </td>

                                    {/* Date */}
                                    <td className="p-6 align-top text-xs text-gray-500 whitespace-nowrap">
                                        {formatDate(review.createdAt)}
                                    </td>

                                    {/* Status */}
                                    <td className="p-6 align-top">
                                        <span className={`
                                            inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border
                                            ${review.status === 'Approved' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                                              review.status === 'Rejected' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                                              'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'}
                                        `}>
                                            {review.status === 'Approved' && <CheckCircle2 size={12} />}
                                            {review.status === 'Rejected' && <XCircle size={12} />}
                                            {review.status === 'Pending' && <Clock size={12} />}
                                            {review.status}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="p-6 align-top text-right">
                                        <div className="flex justify-end gap-2">
                                            
                                            {/* Approve Button */}
                                            {review.status !== "Approved" && (
                                                <button onClick={() => updateStatus(review._id, "Approved")} className="p-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white transition-colors border border-green-500/20" title="Approve">
                                                    <Check size={16} />
                                                </button>
                                            )}

                                            {/* EDIT BUTTON (NEW) */}
                                            <button 
                                                onClick={() => handleOpenEdit(review)} 
                                                className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors border border-blue-500/20" 
                                                title="Edit"
                                            >
                                                <Pencil size={16} />
                                            </button>

                                            {/* Reject Button */}
                                            {review.status !== "Rejected" && (
                                                <button onClick={() => updateStatus(review._id, "Rejected")} className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors border border-red-500/20" title="Reject">
                                                    <X size={16} />
                                                </button>
                                            )}

                                            {/* Delete Button */}
                                            <button onClick={() => deleteReview(review._id)} className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/20 hover:text-white transition-colors" title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {!loading && reviews.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            <MessageSquare size={48} className="mx-auto mb-4 opacity-20" />
                            <p>No reviews found.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* MODAL (Handles both Add & Edit) */}
            <ReviewFormModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onSubmit={handleFormSubmit}
                initialData={reviewToEdit} // Pass data if editing
            />

        </div>
    );
};

export default ManageReviews;