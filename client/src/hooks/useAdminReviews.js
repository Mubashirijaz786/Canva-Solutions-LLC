import { useState, useEffect, useCallback } from 'react';
import api from '../api/axios';

const useAdminReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    // 1. FETCH REVIEWS
    const fetchReviews = useCallback(async () => {
        try {
            const res = await api.get('/reviews');
            setReviews(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching reviews:", err);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchReviews();
    }, [fetchReviews]);

    // 2. ADD REVIEW (New)
    const addReview = async (reviewData) => {
        try {
            const res = await api.post('/reviews', { ...reviewData, status: 'Approved' });
            setReviews(prev => [res.data, ...prev]); // Add to top of list
            return { success: true };
        } catch (err) {
            console.error("Add failed:", err);
            return { success: false, message: err.message };
        }
    };

    // 3. EDIT REVIEW (New)
    const editReview = async (id, updatedData) => {
        try {
            const res = await api.put(`/reviews/${id}`, updatedData);
            // Update specific item in list
            setReviews(prev => prev.map(r => r._id === id ? { ...r, ...updatedData } : r));
            return { success: true };
        } catch (err) {
            console.error("Edit failed:", err);
            return { success: false, message: err.message };
        }
    };

    // 4. UPDATE STATUS
    const updateStatus = async (id, newStatus) => {
        try {
            await api.put(`/reviews/${id}`, { status: newStatus });
            setReviews(prev => prev.map(r => r._id === id ? { ...r, status: newStatus } : r));
        } catch (err) {
            console.error("Status update failed:", err);
        }
    };

    // 5. DELETE REVIEW
    const deleteReview = async (id) => {
        if(window.confirm("Delete this review permanently?")) {
            try {
                await api.delete(`/reviews/${id}`);
                setReviews(prev => prev.filter(r => r._id !== id));
            } catch (err) {
                console.error("Delete failed:", err);
            }
        }
    };

    return { reviews, loading, addReview, editReview, updateStatus, deleteReview };
};

export default useAdminReviews;