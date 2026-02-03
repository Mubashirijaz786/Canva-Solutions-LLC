import { useState, useEffect } from 'react';
import api from '../api/axios';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [shouldSlide, setShouldSlide] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await api.get('/reviews/public');
                const data = res.data;

                // --- LOGIC MOVED HERE ---
                if (data.length >= 4) {
                    setShouldSlide(true);
                    setReviews([...data, ...data]); // Duplicate for slider
                } else {
                    setShouldSlide(false);
                    setReviews(data); // Original for grid
                }
                
                setLoading(false);
            } catch (err) {
                console.error("Data fetch error:", err);
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    return { reviews, shouldSlide, loading };
};

export default useReviews;
