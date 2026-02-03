const Blog = require('../models/Blog');

// Create
exports.createBlog = async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get All
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get One (By ID)
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete
exports.deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json("Blog deleted");
    } catch (err) {
        res.status(500).json(err);
    }
}; 