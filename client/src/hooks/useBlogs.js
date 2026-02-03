import { useState, useEffect, useCallback } from 'react';
import api from '../api/axios'; // Your axios instance

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch All
    const fetchBlogs = useCallback(async () => {
        try {
            const res = await api.get('/blogs');
            setBlogs(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching blogs:", err);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    // Create
    const addBlog = async (blogData) => {
        try {
            const res = await api.post('/blogs', blogData);
            setBlogs(prev => [res.data, ...prev]);
            return { success: true };
        } catch (err) {
            return { success: false, error: err };
        }
    };

    // Delete
    const deleteBlog = async (id) => {
        if(window.confirm("Delete this post?")) {
            try {
                await api.delete(`/blogs/${id}`);
                setBlogs(prev => prev.filter(b => b._id !== id));
            } catch (err) {
                console.error(err);
            }
        }
    };

    return { blogs, loading, addBlog, deleteBlog, refetch: fetchBlogs };
};

export default useBlogs;