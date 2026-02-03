import React from 'react';
import { 
    Users, 
    Award, 
    Zap, 
    Heart, 
    CheckCircle2, 
    Linkedin,
    Twitter,
    Calendar,
    Search
} from 'lucide-react';

// Layout Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FinalCTA from '../components/home/FinalCTA';
import WhatsAppButton from '../components/common/WhatsAppButton';
import ScrollToTop from '../components/common/ScrollToTop';
import MetaData from '../components/common/MetaData';

// Assets & Data
import { teamMembers } from '../data/teamData';
import hamzaImage from '../assets/images/Hamza.webp'; 
import aboutHero from '../assets/images/about.webp'; 

const About = () => {
    const sliderTeam = [...teamMembers, ...teamMembers];

    return (
        <div className="w-full relative bg-[#020617] min-h-screen text-white selection:bg-blue-500/30 ">
            
            <MetaData 
                title="About Us | Canva Solutions" 
                description="Meet the expert team behind Canva Solutions. We are a professional software house delivering high-performance digital solutions."
                keywords="about canva solutions, web development team, software agency, Hamza Hussain"
            />

            {/* 1. NAVBAR - EXACTLY SAME AS BLOG PAGE */}
            <div className="relative w-full flex items-center justify-center p-2 sm:p-4 z-50">
                <div className="relative z-10 w-full lg:w-[98%] bg-transparent border border-transparent flex flex-col px-4 sm:px-10 lg:px-16 pt-4">
                    <Navbar />
                </div>
            </div>

            <main id="main-content">
                {/* 2. HERO SECTION */}
                <section className="relative pt-20 pb-32 px-6 lg:px-16 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-blue-600/10 blur-[120px] pointer-events-none"></div>
                    <div className="container mx-auto max-w-[1000px] relative z-10">
                        <div className="inline-block border border-white/10 rounded-full px-5 py-2 text-sm font-medium text-blue-400 mb-8 bg-white/5 backdrop-blur-sm uppercase tracking-widest">
                            About Canva Solutions
                        </div>
                      
                    </div>
                </section>

                {/* 3. IMAGE & STATS GRID */}
                <section className="px-6 lg:px-16 pb-24 pt-6">
                    <div className="container mx-auto max-w-[1400px]">
                        <div className="relative rounded-[3rem] overflow-hidden aspect-video lg:aspect-[21/9] mb-16 group border border-white/5 shadow-2xl">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img 
                                src={aboutHero} 
                                alt="Canva Solutions Innovation Center" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
                            />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                { num: "5+", label: "Years Experience", icon: <Calendar size={24} /> },
                                { num: "150+", label: "Projects Shipped", icon: <CheckCircle2 size={24} /> },
                                { num: "40+", label: "Team Members", icon: <Users size={24} /> },
                                { num: "12", label: "Global Awards", icon: <Award size={24} /> },
                            ].map((stat, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.num}</div>
                                    <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. FOUNDER SECTION - TEXT LEFT | IMAGE RIGHT */}
                <section className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            
                            {/* LEFT SIDE: TEXT CONTENT */}
                            <div className="space-y-10 order-2 lg:order-1">
                                <div>
                                    <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-3">Professional Software House</h3>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Meet the Founder</h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div> Our Mission
                                        </h4>
                                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                                            Canva Solutions is a professional software house delivering high-performance digital solutions for businesses, startups, and entrepreneurs. We design and develop fast, user-friendly, and scalable web applications built for long-term growth.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div> Specialized Expertise
                                        </h4>
                                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                                            We specialize in <strong>WordPress, PHP, Laravel, BuddyBoss, WooCommerce, LMS platforms, Kajabi, and Go High Level.</strong> Our work focuses on clean architecture, strong performance, and easy-to-manage systems.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div> Tailored Solutions
                                        </h4>
                                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                                            From eCommerce stores to SaaS MVPs, we deliver solutions tailored to your goals. Every project starts with clear planning and ends with a stable, optimized, and reliable product.
                                        </p>
                                    </div>
                                </div>

                                {/* Vision Box */}
                                <div className="p-8 bg-blue-600/10 border-l-4 border-blue-500 rounded-r-2xl backdrop-blur-sm shadow-xl">
                                    <h4 className="text-white font-bold text-lg mb-2">Founder’s Vision</h4>
                                    <p className="text-gray-300 italic text-lg leading-relaxed">
                                        "To build reliable, scalable, and performance-driven digital solutions that help businesses grow with confidence."
                                    </p>
                                    <p className="mt-4 text-white font-bold text-xl">— Hamza Hussain</p>
                                </div>
                            </div>
                            
                            {/* RIGHT SIDE: IMAGE */}
                            <div className="relative order-1 lg:order-2">
                                <div className="absolute -inset-4 bg-blue-500/20 rounded-[2rem] blur-3xl -z-10"></div>
                                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <img 
                                        src={hamzaImage} 
                                        className="w-full h-[650px] object-cover transform hover:scale-105 transition-transform duration-700" 
                                        alt="Hamza Hussain - Founder" 
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-center lg:text-left">
                                        <p className="text-white font-bold text-2xl">Hamza Hussain</p>
                                        <p className="text-blue-400 font-medium uppercase tracking-wide text-sm">Founder & Digital Architect</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 5. CORE VALUES */}
                <section className="py-24 px-6 lg:px-16">
                    <div className="container mx-auto max-w-[1400px]">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
                            <p className="text-gray-400">The principles that guide every line of code we write.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Innovation First", desc: "We don't follow trends; we set them. We are constantly exploring new stacks and technologies.", icon: <Zap size={32} /> },
                                { title: "Radical Transparency", desc: "No hidden fees, no confusing jargon. We keep you in the loop at every stage of the project.", icon: <Search size={32} /> },
                                { title: "User Obsession", desc: "We build for the end-user. If it's not intuitive and enjoyable, it's not finished.", icon: <Heart size={32} /> }
                            ].map((val, idx) => (
                                <div key={idx} className="p-10 rounded-[2rem] bg-[#0f172a] border border-white/10 hover:border-blue-500/30 transition-all group">
                                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                        {val.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. TEAM SLIDER */}
                <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-16 mb-16 text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Meet The Minds</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">The talented developers, designers, and strategists behind your success.</p>
                    </div>

                    <div className="relative w-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none"></div>

                        <div className="flex w-fit animate-loop-scroll hover:pause">
                            {sliderTeam.map((member, index) => (
                                <div key={index} className="w-[300px] shrink-0 mx-4 relative group">
                                    <div className="relative overflow-hidden rounded-3xl aspect-[3/4] border border-white/10 bg-white/5">
                                        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300 z-10"></div>
                                        <img 
                                            src={member.image} 
                                            alt={member.name} 
                                            className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                            <button aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                                                <Linkedin size={18} />
                                            </button>
                                            <button aria-label="Twitter" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors">
                                                <Twitter size={18} />
                                            </button>
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                            <p className="text-blue-400 text-xs font-bold uppercase tracking-wide">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <FinalCTA />
            </main>

            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    );
};

export default About;