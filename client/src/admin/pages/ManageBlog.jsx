import React, { useState } from 'react';
import { Plus, Search, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import useBlogs from '../../hooks/useBlogs'; // Import Hook
import BlogFormModal from '../layouts/BlogFormModal'; // Import Modal

const ManageBlog = () => {
    const { blogs, loading, deleteBlog, refetch } = useBlogs();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBlogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Manage Blog Posts</h2>
                <button onClick={() => setIsModalOpen(true)} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center gap-2 transition-colors">
                    <Plus size={18} /> Add New Post
                </button>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input 
                    type="text" 
                    placeholder="Search posts..." 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* Table */}
            <div className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-gray-400 text-sm uppercase">
                        <tr>
                            <th className="p-6 font-bold">Title</th>
                            <th className="p-6 font-bold">Category</th>
                            <th className="p-6 font-bold">Date</th>
                            <th className="p-6 font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {loading ? <tr><td colSpan="4" className="p-6 text-center text-white">Loading...</td></tr> : 
                        filteredBlogs.map((post) => (
                            <tr key={post._id} className="hover:bg-white/5 transition-colors">
                                <td className="p-6 text-white font-medium">{post.title}</td>
                                <td className="p-6 text-gray-400">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                                        {post.category}
                                    </span>
                                </td>
                                <td className="p-6 text-gray-400 text-sm">{post.date}</td>
                                <td className="p-6 text-right">
                                    <div className="flex justify-end gap-3">
                                        <Link to={`/blog/${post._id}`} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-green-600 hover:text-white text-gray-400 transition-colors">
                                            <Eye size={16} />
                                        </Link>
                                        <button onClick={() => deleteBlog(post._id)} className="p-2 rounded-lg bg-white/5 hover:bg-red-500 hover:text-white text-gray-400 transition-colors">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <BlogFormModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onSuccess={refetch} // Refresh list after adding
            />
        </div>
    );
};

export default ManageBlog;