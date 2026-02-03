import React from 'react';
import { 
    Terminal, 
    Database, 
    Cloud, 
    Lock, 
    Settings, 
    CheckCircle2, 
    Cpu,
    Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Import Link

import ServiceLayout from './ServiceLayout';
import PrimaryButton from '../common/PrimaryButton';

// ✅ IMPORT LOCAL IMAGE
import softwareHero from '../../assets/images/Software.webp';

const CustomSoftware = () => {
    
    // External Link
    const calendlyLink = "https://calendly.com/canvasolutions-info/";

    // 1. Software Services
    const offerings = [
        {
            title: "Enterprise ERP & CRM",
            desc: "We build custom Enterprise Resource Planning and Customer Relationship Management systems tailored to your specific internal workflows.",
            icon: <Briefcase size={32} />
        },
        {
            title: "SaaS Product Development",
            desc: "From MVP to full-scale launch. We help startups and enterprises build subscription-based software products that scale.",
            icon: <Cloud size={32} />
        },
        {
            title: "Legacy System Migration",
            desc: "Modernize your outdated software. We migrate data and logic from legacy systems to modern cloud architectures without downtime.",
            icon: <Database size={32} />
        },
        {
            title: "API Development & Integration",
            desc: "Connect your disparate systems. We build robust RESTful and GraphQL APIs to let your software talk to banks, maps, and 3rd party tools.",
            icon: <Terminal size={32} />
        },
        {
            title: "Business Process Automation",
            desc: "Stop doing manual data entry. We create scripts and bots to automate repetitive tasks, saving your team hundreds of hours.",
            icon: <Settings size={32} />
        },
        {
            title: "Secure Fintech Solutions",
            desc: "Bank-grade security software. We build financial tools compliant with GDPR, PCI-DSS, and other regulatory standards.",
            icon: <Lock size={32} />
        }
    ];

    // 2. Tech Stack (Enterprise Focused)
    const techStack = [
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "C# / .NET", icon: "#️⃣" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "Kubernetes", icon: "☸️" }
    ];

    return (
        <ServiceLayout>
            
            {/* --- 1. CUSTOM HERO SECTION --- */}
            <section className="relative pt-24 pb-32 px-6 lg:px-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-600/5 blur-[150px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-[1400px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            Enterprise Grade Solutions
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-6 leading-[1.1] text-white">
                            Software Built For <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">Your Unique Needs.</span>
                        </h1>
                        
                        <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
                            Off-the-shelf software forces you to change your business. We build custom software that changes to fit your business. Scalable, secure, and owned by you.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            {/* LINK 1: Calendly */}
                            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                <PrimaryButton className="!px-8 !py-4 text-lg">
                                    Consult An Architect
                                </PrimaryButton>
                            </a>

                            {/* LINK 2: Portfolio */}
                            <Link to="/portfolio">
                                <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">
                                    View Case Studies
                                </button>
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white">100%</h4>
                                <p className="text-gray-500 text-sm">IP Ownership</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">24/7</h4>
                                <p className="text-gray-500 text-sm">System Monitoring</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative group">
                        {/* Glow Behind Image */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-indigo-600/30 to-violet-600/30 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a]">
                            
                            {/* ✅ USING LOCAL IMAGE */}
                            <img 
                                src={softwareHero} 
                                alt="Cybersecurity and Code" 
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl">
                                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-black">
                                    <Cpu size={24} fill="black" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase">System Architecture</p>
                                    <p className="text-white text-xl font-bold">Microservices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. TECH STACK --- */}
            <section className="py-16 bg-[#0f172a] border-y border-white/5">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
                    <p className="text-center text-gray-400 font-medium mb-8">BUILT ON ROBUST INFRASTRUCTURE</p>
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

            {/* --- 3. WHAT WE ENGINEER (Grid) --- */}
            <section className="py-32 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Solving Complex Problems</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We don't just write code; we engineer solutions that streamline operations, reduce costs, and give you a competitive advantage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((item, idx) => (
                            <div key={idx} className="group p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-indigo-500/30 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. THE ENGINEERING PROCESS --- */}
            <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1200px] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left: Process Steps */}
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">SDLC Methodology</h2>
                            <div className="space-y-6">
                                {[
                                    { step: "Discovery & Specs", desc: "We document every requirement, user role, and data flow before coding begins." },
                                    { step: "Architecture Design", desc: "We choose the right database, server structure, and security protocols." },
                                    { step: "Agile Development", desc: "Iterative sprints allow you to see progress and adjust features in real-time." },
                                    { step: "QA & Deployment", desc: "Automated unit testing, load testing, and secure deployment to production." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-indigo-500 text-black font-bold flex items-center justify-center shrink-0">
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
                            <div className="absolute inset-0 bg-indigo-500/20 blur-[80px]"></div>
                            <div className="relative p-8 rounded-3xl bg-[#020617] border border-indigo-500/30 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Why Custom Software?</h3>
                                <ul className="space-y-5">
                                    {[
                                        "No monthly licensing fees (You own it)",
                                        "Perfect fit for your workflows",
                                        "Easier to integrate with existing tools",
                                        "Higher security than public SaaS",
                                        "Scales infinitely as you grow"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white font-medium">
                                            <CheckCircle2 className="text-indigo-500 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 pt-8 border-t border-white/10">
                                    {/* Link 3: Calendly */}
                                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                        <PrimaryButton className="w-full justify-center !py-4 text-lg">
                                            Estimate My Project
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 5. FAQ SECTION (UPDATED EXACTLY FROM IMAGES) --- */}
            <section className="py-24 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1000px]">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { 
                                q: "What sets Canva Solutions apart from the rest of software development firms?", 
                                a: "We use our deep industry knowledge and strategic approach to generate innovative solutions that solve your business problems dramatically, leading to real value rather than just checking off tasks. Our teams invest the time to understand your business goals, ensuring our efforts deliver meaningful outcomes rather than just outputs. By lining up with your objectives, we not only meet but consistently exceed your expectations." 
                                //
                            },
                            { 
                                q: "What advantages come with selecting Canva Solutions as your custom software development partner?", 
                                a: "At Canva Solutions, our teams understand the difference between completion and success. Through our Project Management Office (PMO), we ensure high productivity and quality delivery across our global service centers while focusing on continuously improving our software development velocity and agility. With a strong product mindset, our agile teams are dedicated to delivering solutions that meet or exceed ROI expectations. Many of our customers will attest that our ability to deliver beyond expectations is why they have been working with us for over 5 years." 
                                //
                            },
                            { 
                                q: "What software technologies will Canva Solutions use for my project?", 
                                a: "Our highly skilled and diverse talent pool enables us to create custom software using the languages, platforms, and frameworks of your choice, ensuring compatibility of tools and seamless integrations that help avoid costly and unnecessary upgrades. We also offer technology modernization services that allow bringing current solutions into line with your new custom software." 
                                //
                            },
                            { 
                                q: "How much would custom software development cost?", 
                                
                                a: "The price can be quite wide-reaching, but hiring a developer for your custom software development would likely fall between $25/hr and $150/hr. The overall cost for your project may depend largely upon location, project size, expertise, and/or required skill sets. Your development strategy will determine the ultimate cost of your custom software development." 
                                //
                            }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-bold text-white hover:text-indigo-400 transition-colors">
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

export default CustomSoftware;