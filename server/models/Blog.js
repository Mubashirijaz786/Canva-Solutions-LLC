const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    text: { type: String, required: true }
});

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    excerpt: { type: String, required: true }, // Short description for card
    category: { type: String, required: true },
    author: { type: String, required: true },
    role: { type: String, default: "Editor" },
    readTime: { type: String, required: true },
    date: { type: String, required: true }, // e.g., "Jan 25, 2026"
    
    // Images
    image: { type: String, required: true }, // Main Hero Image
    innerImages: [{ type: String }], // Array containing exactly 2 images
    
    // Content
    intro: { type: String, required: true },
    sections: [sectionSchema] // Array of headings and paragraphs
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);