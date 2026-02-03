import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../common/PrimaryButton';

// --- IMPORT BLOG DATA ---
import { blogData } from '../../data/blogData';

const InsightsBlog = () => {
    
    // Get the first 3 posts for the Home Page
    const posts = blogData.slice(0, 3);

    return (
        <section className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
            
            {/* Standard Wide Container */}
            <div className="container mx-auto px-6 lg:px-12 max-w-[1500px] relative z-10">
                
                {/* --- HEADER --- */}
                <div className="text-center mb-24">
                    <div className="inline-block border border-white/10 rounded-full px-5 py-2 text-sm font-medium text-gray-400 mb-8 bg-white/5 backdrop-blur-sm">
                        Insights Blog
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-semibold text-white font-['Manrope'] tracking-tight leading-tight">
                        Dive into what’s next <br />
                        in tech, design, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">AI-driven marketing</span>
                    </h2>
                </div>

                {/* --- BLOG GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
                    {posts.map((post) => (
                        <Link 
                            to={`/blog/${post.id}`} // <--- Link to specific blog
                            key={post.id} 
                            className="
                                group 
                                bg-[#0f172a] 
                                border border-white/10 
                                rounded-[2rem] 
                                overflow-hidden 
                                flex flex-col
                                min-h-[580px] 
                                transition-all duration-500
                                hover:border-blue-500/30 
                                hover:-translate-y-2
                                hover:shadow-2xl
                            "
                        >
                            
                            {/* Image Wrapper */}
                            <div className="relative h-[300px] overflow-hidden shrink-0">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="p-10 flex flex-col flex-grow">
                                
                                {/* Meta Data */}
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-4 py-1.5 bg-[#FFE5A3] text-black text-xs font-bold uppercase tracking-wider rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-400 text-sm font-medium">
                                        {post.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-8 leading-snug group-hover:text-blue-200 transition-colors font-['Manrope'] line-clamp-3">
                                    {post.title}
                                </h3>

                                {/* Read More Button */}
                                <div className="mt-auto">
                                    <button className="
                                        inline-flex items-center gap-2 
                                        px-8 py-3 
                                        rounded-xl 
                                        border border-white/20 
                                        text-white 
                                        font-medium 
                                        transition-all duration-300
                                        group-hover:bg-white group-hover:text-black group-hover:border-white
                                    ">
                                        <ArrowRight size={18} /> Read More
                                    </button>
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>

                {/* --- BOTTOM CTA --- */}
                <div className="flex justify-center">
                    <Link to="/blog">
                        <PrimaryButton className="!px-10 !py-5 text-lg">
                            Explore the Blog
                        </PrimaryButton>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default InsightsBlog;