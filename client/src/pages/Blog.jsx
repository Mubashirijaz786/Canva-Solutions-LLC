import React, { useState } from 'react';
import { 
    Calendar, 
    Clock, 
    User, 
    ArrowRight, 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Layout Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import ScrollToTop from '../components/common/ScrollToTop';
import MetaData from '../components/common/MetaData'; // ✅ Imported MetaData

// --- IMPORT STATIC DATA ---
import { blogData } from '../data/blogData';

const Blog = () => {
    
    // Simple data access (No search/filter needed now)
    const allPosts = blogData;

    return (
        <div className="w-full relative bg-[#020617] min-h-screen text-white selection:bg-blue-500/30">
            
            {/* ✅ SEO META TAGS ADDED */}
            <MetaData 
                title="Blog – Canva Solutions" 
                description="Explore expert insights on web development, app creation, SEO strategies, and digital business growth. Stay ahead with the latest tech trends from Canva Solutions."
                keywords="tech blog, web development insights, app development trends, SEO tips, digital marketing blog, software engineering articles, business growth strategies"
            />

          <div className="relative w-full flex items-center justify-center p-2 sm:p-4 z-50">
              
                <div className="relative z-10 w-full lg:w-[98%] bg-transparent border border-transparent flex flex-col px-4 sm:px-10 lg:px-16 pt-4">
                    <Navbar />
                </div>
            </div>
            {/* 2. HERO SECTION */}
            <section className="relative pt-20 pb-16 px-6 lg:px-16 overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 blur-[120px] pointer-events-none"></div>
                <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
                    <div className="inline-block border border-white/10 rounded-full px-5 py-2 text-sm font-medium text-gray-400 mb-8 bg-white/5 backdrop-blur-sm">
                        Insights & Updates
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-6 leading-[1.1] text-white tracking-tight">
                        The Canva <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Knowledge Hub</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        Expert advice on technology, design, and business growth. Stay ahead of the curve with our latest articles.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT LANDMARK */}
            <main id="main-content">
            {/* 3. BLOG POSTS LIST (All Large Cards) */}
            <section className="pb-32 px-6 lg:px-16 pt-10">
                <div className="container mx-auto max-w-[1400px] space-y-12">
                    
                    {allPosts.map((post) => (
                        <Link key={post.id} to={`/blog/${post.id}`} className="relative group rounded-[3rem] overflow-hidden border border-white/10 bg-[#0f172a] hover:border-blue-500/30 transition-all duration-500 block">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                
                                {/* Image Side */}
                                <div className="relative h-[400px] lg:h-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute top-8 left-8 z-20 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="p-10 lg:p-20 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                                        <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                                        <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <p className="text-white text-sm font-bold">{post.author}</p>
                                                <p className="text-gray-500 text-xs">{post.role}</p>
                                            </div>
                                        </div>
                                        <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                            <ArrowRight size={20} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* Empty State */}
                    {allPosts.length === 0 && (
                        <div className="text-center py-20 text-gray-500">No articles found.</div>
                    )}

                </div>
            </section>
        </main>

            {/* 4. FOOTER */}
            <Footer />

            {/* 5. FLOATING BUTTONS */}
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    );
};

export default Blog;