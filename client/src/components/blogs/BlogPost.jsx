import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Tag, User } from 'lucide-react';

// --- IMPORTS ---
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ScrollToTop from '../common/ScrollToTop';
import WhatsAppButton from '../common/WhatsAppButton';

// --- IMPORT DATA ---
import { blogData } from '../../data/blogData';

const BlogPost = () => {
    const { id } = useParams(); 
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const foundBlog = blogData.find(post => post.id === parseInt(id));
        if (foundBlog) {
            setBlog(foundBlog);
        }
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) return <div className="bg-[#020617] min-h-screen text-white flex items-center justify-center">Loading...</div>;

    return (
        <div className="w-full relative bg-[#020617] min-h-screen text-white selection:bg-blue-500/30 overflow-x-hidden">
            
            <div className="relative w-full flex items-center justify-center p-2 sm:p-4 z-50">
              
                <div className="relative z-10 w-full lg:w-[98%] bg-transparent border border-transparent flex flex-col px-4 sm:px-10 lg:px-16 pt-4">
                    <Navbar />
                </div>
            </div>

            <article className="pb-24 relative z-10">
                
                {/* --- HEADER SECTION (Unchanged) --- */}
                <div className="container mx-auto px-6 lg:px-16 max-w-5xl text-center mb-16 pt-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-wide mb-8">
                        <Tag size={14} />
                        {blog.category}
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-10 font-['Manrope'] tracking-tight">
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm md:text-base border-y border-white/5 py-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                                {blog.author.charAt(0)}
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold leading-none">{blog.author}</p>
                                <p className="text-xs text-gray-500 mt-1">{blog.role}</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-white/10"></div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-blue-500" />
                            <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-blue-500" />
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                </div>

                {/* --- MAIN HERO IMAGE (Unchanged) --- */}
                <div className="container mx-auto px-4 lg:px-16 max-w-6xl mb-20">
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 group">
                        <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                    </div>
                </div>

                {/* --- NEW CONTENT LAYOUT --- */}
                <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
                    
                    {/* Introduction */}
                    <div className="prose prose-lg prose-invert max-w-none mb-12">
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                            {blog.intro}
                        </p>
                    </div>

                    {/* DYNAMIC SECTIONS LOOP */}
                    <div className="space-y-16">
                        {blog.sections && blog.sections.map((section, index) => (
                            <div key={index}>
                                {/* Heading */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    {section.heading}
                                </h3>
                                
                                {/* Paragraph */}
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    {section.text}
                                </p>

                                {/* LOGIC: Insert Image 1 after 2nd Section (index 1) */}
                                {index === 1 && blog.innerImages?.[0] && (
                                    <div className="my-12 rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                                        <img 
                                            src={blog.innerImages[0]} 
                                            alt="Detail view 1" 
                                            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                )}

                                {/* LOGIC: Insert Image 2 after 4th Section (index 3) */}
                                {index === 3 && blog.innerImages?.[1] && (
                                    <div className="my-12 rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                                        <img 
                                            src={blog.innerImages[1]} 
                                            alt="Detail view 2" 
                                            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* --- BOTTOM ACTIONS --- */}
                    <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <Link 
                            to="/Blog" 
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-6 py-3 rounded-xl hover:bg-white/5"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Back to All Articles</span>
                        </Link>

                        
                    </div>
                </div>

            </article>

            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    );
};

export default BlogPost;