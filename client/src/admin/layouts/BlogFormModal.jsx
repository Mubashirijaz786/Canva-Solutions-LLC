import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import api from '../../api/axios'; // Adjust path

const BlogFormModal = ({ isOpen, onClose, onSuccess }) => {
    const [loading, setLoading] = useState(false);
    
    // Initial State
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        category: 'Technology',
        author: 'Admin',
        role: 'Editor in Chief',
        readTime: '5 min read',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        image: '',       // Main Hero Image
        innerImage1: '', // Image for body
        innerImage2: '', // Image for body
        intro: '',
        sections: [
            { heading: '', text: '' } // Start with 1 section
        ]
    });

    if (!isOpen) return null;

    // Handle Simple Inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Dynamic Sections
    const handleSectionChange = (index, field, value) => {
        const newSections = [...formData.sections];
        newSections[index][field] = value;
        setFormData({ ...formData, sections: newSections });
    };

    const addSection = () => {
        setFormData({
            ...formData,
            sections: [...formData.sections, { heading: '', text: '' }]
        });
    };

    const removeSection = (index) => {
        const newSections = formData.sections.filter((_, i) => i !== index);
        setFormData({ ...formData, sections: newSections });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Format data for backend
        const payload = {
            ...formData,
            innerImages: [formData.innerImage1, formData.innerImage2] // Combine images
        };

        try {
            await api.post('/blogs', payload);
            setLoading(false);
            if(onSuccess) onSuccess();
            onClose();
        } catch (err) {
            console.error(err);
            setLoading(false);
            alert("Failed to create blog");
        }
    };

    return (
        // 1. OUTER WRAPPER: Removed overflow-y-auto here
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            
            {/* 2. MODAL CONTAINER: Added 'flex flex-col' and 'max-h-[90vh]' */}
            <div className="bg-[#0f172a] border border-white/10 w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
                
                {/* 3. HEADER: Removed sticky, added 'shrink-0' so it doesn't shrink */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0f172a] rounded-t-2xl shrink-0">
                    <h3 className="text-xl font-bold text-white">Add New Blog Post</h3>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X className="text-gray-400 hover:text-white" />
                    </button>
                </div>

                {/* 4. SCROLLABLE BODY: This div handles the scrolling now */}
                <div className="overflow-y-auto p-8 custom-scrollbar">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input name="title" placeholder="Blog Title" required className="input-field" onChange={handleChange} />
                            <input name="category" placeholder="Category (e.g. Technology)" required className="input-field" onChange={handleChange} />
                            <input name="author" placeholder="Author Name" required className="input-field" value={formData.author} onChange={handleChange} />
                            <input name="readTime" placeholder="Read Time (e.g. 5 min)" required className="input-field" value={formData.readTime} onChange={handleChange} />
                        </div>

                        <textarea name="excerpt" placeholder="Short Excerpt (For Card Display)" rows="2" required className="input-field" onChange={handleChange} />

                        {/* Images */}
                        <div className="space-y-3">
                            <h4 className="text-blue-400 font-bold text-sm uppercase">Images (URLs)</h4>
                            <input name="image" placeholder="Main Hero Image URL" required className="input-field" onChange={handleChange} />
                            <div className="grid grid-cols-2 gap-4">
                                <input name="innerImage1" placeholder="Inner Image URL 1" className="input-field" onChange={handleChange} />
                                <input name="innerImage2" placeholder="Inner Image URL 2" className="input-field" onChange={handleChange} />
                            </div>
                        </div>

                        {/* Content Intro */}
                        <div>
                            <h4 className="text-blue-400 font-bold text-sm uppercase mb-2">Introduction</h4>
                            <textarea name="intro" placeholder="The first paragraph of the blog..." rows="4" required className="input-field" onChange={handleChange} />
                        </div>

                        {/* Dynamic Sections */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h4 className="text-blue-400 font-bold text-sm uppercase">Content Sections</h4>
                                <button type="button" onClick={addSection} className="text-xs bg-blue-600 px-3 py-1 rounded text-white flex items-center gap-1 hover:bg-blue-500 transition-colors">
                                    <Plus size={14} /> Add Section
                                </button>
                            </div>

                            {formData.sections.map((section, index) => (
                                <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10 relative">
                                    <button type="button" onClick={() => removeSection(index)} className="absolute top-2 right-2 text-red-400 hover:text-red-300 transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                    <input 
                                        placeholder={`Heading ${index + 1}`}
                                        className="input-field mb-2 font-bold"
                                        value={section.heading}
                                        onChange={(e) => handleSectionChange(index, 'heading', e.target.value)}
                                    />
                                    <textarea 
                                        placeholder="Paragraph text..."
                                        rows="3"
                                        className="input-field"
                                        value={section.text}
                                        onChange={(e) => handleSectionChange(index, 'text', e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>

                        <button type="submit" disabled={loading} className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all">
                            {loading ? "Publishing..." : "Publish Blog Post"}
                        </button>

                    </form>
                </div>
            </div>
            
            {/* Styles for scrollbar and inputs */}
            <style>{`
                .input-field {
                    width: 100%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 0.75rem;
                    padding: 0.75rem 1rem;
                    color: white;
                    outline: none;
                    transition: border-color 0.2s;
                }
                .input-field:focus { border-color: #3b82f6; }

                /* Custom Scrollbar for the modal body */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 0 0 16px 0;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </div>
    );
};

export default BlogFormModal;