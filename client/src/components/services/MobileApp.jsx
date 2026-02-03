import React from 'react';
import { 
    Smartphone, 
    Layers, 
    Code2, 
    Zap, 
    Globe, 
    ShieldCheck, 
    CheckCircle2, 
    Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Import Link

import ServiceLayout from './ServiceLayout';
import PrimaryButton from '../common/PrimaryButton';

// ✅ IMPORT LOCAL IMAGE
import mobileHero from '../../assets/images/Mobile.webp';

const MobileApp = () => {
    
    // External Link
    const calendlyLink = "https://calendly.com/canvasolutions-info/";

    // 1. App Development Services
    const offerings = [
        {
            title: "iOS App Development",
            desc: "Native iOS applications built with Swift and SwiftUI that deliver flawless performance and a premium user experience on all Apple devices.",
            icon: <Smartphone size={32} />
        },
        {
            title: "Android App Development",
            desc: "Scalable, secure, and robust Android apps using Kotlin and Jetpack Compose to reach the massive global Android user base.",
            icon: <Code2 size={32} />
        },
        {
            title: "Cross-Platform (Flutter/React Native)",
            desc: "Save time and budget with a single codebase that runs natively on both iOS and Android without compromising quality.",
            icon: <Layers size={32} />
        },
        {
            title: "UI/UX App Design",
            desc: "We design intuitive, thumb-friendly interfaces that keep users engaged and reduce churn rates from day one.",
            icon: <Zap size={32} />
        },
        {
            title: "App Maintenance & Support",
            desc: "Regular updates, bug fixes, and performance monitoring to ensure your app stays compatible with new OS versions.",
            icon: <ShieldCheck size={32} />
        },
        {
            title: "IoT & Wearable Apps",
            desc: "Connecting mobile apps to smart devices, watches, and IoT hardware for a fully integrated digital ecosystem.",
            icon: <Globe size={32} />
        }
    ];

    // 2. Tech Stack
    const techStack = [
        { name: "React Native", icon: "⚛️" },
        { name: "Flutter", icon: "🐦" },
        { name: "Swift", icon: "🍎" },
        { name: "Kotlin", icon: "🤖" },
        { name: "Firebase", icon: "🔥" },
        { name: "Node.js", icon: "🟢" }
    ];

    return (
        <ServiceLayout>
            
            {/* --- 1. CUSTOM HERO SECTION --- */}
            <section className="relative pt-24 pb-32 px-6 lg:px-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-600/5 blur-[150px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-[1400px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                            Mobile Engineering
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-6 leading-[1.1] text-white">
                            Apps That Users <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Love to Use.</span>
                        </h1>
                        
                        <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
                            From disruptive startups to enterprise solutions, we build high-performance mobile apps that drive engagement and revenue.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            {/* LINK 1: Calendly */}
                            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                <PrimaryButton className="!px-8 !py-4 text-lg">
                                    Build My App
                                </PrimaryButton>
                            </a>

                            {/* LINK 2: Portfolio */}
                            <Link to="/portfolio">
                                <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">
                                    View Portfolio
                                </button>
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white">50+</h4>
                                <p className="text-gray-500 text-sm">Apps Published</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">4.8/5</h4>
                                <p className="text-gray-500 text-sm">Avg. App Store Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative group">
                        {/* Glow Behind Image */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/30 to-indigo-600/30 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a]">
                            
                            {/* ✅ USING LOCAL IMAGE */}
                            <img 
                                src={mobileHero} 
                                alt="Mobile App Development" 
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl">
                                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-black">
                                    <Cpu size={24} fill="black" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase">Performance</p>
                                    <p className="text-white text-xl font-bold">60fps Smooth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. TECH STACK --- */}
            <section className="py-16 bg-[#0f172a] border-y border-white/5">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
                    <p className="text-center text-gray-400 font-medium mb-8">BUILT WITH MODERN FRAMEWORKS</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {techStack.map((tech, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default group">
                                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</span>
                                <h3 className="text-sm font-bold text-white text-center">{tech.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. WHAT WE BUILD (Grid) --- */}
            <section className="py-32 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">End-to-End Mobile Solutions</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We handle the entire lifecycle of your app, from the first line of code to the final App Store submission and beyond.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((item, idx) => (
                            <div key={idx} className="group p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-purple-500/30 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. DEVELOPMENT PROCESS --- */}
            <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1200px] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left: Process Steps */}
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">How We Build World-Class Apps</h2>
                            <div className="space-y-6">
                                {[
                                    { step: "Strategy & Prototyping", desc: "We validate your idea and build clickable prototypes to test user flows." },
                                    { step: "Agile Development", desc: "We build in sprints, delivering working features every 2 weeks for your feedback." },
                                    { step: "Rigorous Testing", desc: "Automated and manual testing across different devices to ensure zero crashes." },
                                    { step: "Launch & Growth", desc: "We handle the App Store/Play Store submission and help you monitor analytics." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-purple-500 text-black font-bold flex items-center justify-center shrink-0">
                                                {i + 1}
                                            </div>
                                            {i !== 3 && <div className="w-0.5 h-full bg-white/10 my-2"></div>}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{item.step}</h4>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Visual Box */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500/20 blur-[80px]"></div>
                            <div className="relative p-8 rounded-3xl bg-[#020617] border border-purple-500/30 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Why Native/Cross-Platform?</h3>
                                <ul className="space-y-5">
                                    {[
                                        "Access to device features (Camera, GPS)",
                                        "Offline capabilities",
                                        "Superior performance and animations",
                                        "Better security & data protection",
                                        "Higher user retention rates"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white font-medium">
                                            <CheckCircle2 className="text-purple-500 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 pt-8 border-t border-white/10">
                                    {/* Link 3: Calendly */}
                                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                        <PrimaryButton className="w-full justify-center !py-4 text-lg">
                                            Launch Your App
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 5. FAQ SECTION (UPDATED) --- */}
            <section className="py-24 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1000px]">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { 
                                q: "How much does it cost to build a mobile app?", 
                                a: "And because of their purpose and features, mobile app development costs will vary depending on the complexity of the app. Other factors affecting the final price are the type of development platform and the type of service provider. Our teams maintain low mobile app development costs by agile, API-driven development practices, and work with your organization to choose the best and most cost-effective technologies to build your app." 
                                //
                            },
                            { 
                                q: "How long does it take to build a mobile application?", 
                                a: "The time taken to develop a mobile application will depend upon its purpose and complexity. For example, feature-rich apps with multiple purposes will take longer to develop than basic apps. A complex app could take two months or more, while a simpler app might be finished within a couple of weeks." 
                                //
                            },
                            { 
                                q: "How will you make sure that the mobile application is secure?", 
                                a: "We have many ways to develop secure mobile apps, and at Canva Solutions, we treat security as a first-class citizen and use as many of these techniques as possible to ensure an app’s security. First, we adhere to industry-standard data protection regulations. In addition, the best practices related to data authentication and authorization are employed and ensure secure data transmission through solid data encryption." 
                                //
                            },
                            { 
                                q: "What software technologies will Canva Solutions use for my project?", 
                                a: "Our highly skilled and diverse talent pool enables us to create custom software using the languages, platforms, and frameworks of your choice, ensuring compatibility of tools and seamless integrations that help avoid costly and unnecessary upgrades. We also offer technology modernization services that allow bringing current solutions into line with your new custom software." 
                                //
                            }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-bold text-white hover:text-purple-400 transition-colors">
                                    {faq.q}
                                    <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

        </ServiceLayout>
    );
};

export default MobileApp;