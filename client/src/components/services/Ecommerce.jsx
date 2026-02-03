import React from 'react';
import { 
    ShoppingCart, 
    CreditCard, 
    BarChart3, 
    Smartphone, 
    ShieldCheck, 
    Zap,
    Layers,
    CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

import ServiceLayout from '../../components/services/ServiceLayout';
import PrimaryButton from '../../components/common/PrimaryButton';

// ✅ IMPORT YOUR LOCAL IMAGE HERE
// Make sure the file name and extension (.jpg, .png) match exactly what is in your folder!
import ecommerceHero from '../../assets/images/E-commerce.webp'; 

const Ecommerce = () => {
    
    // External Link
    const calendlyLink = "https://calendly.com/canvasolutions-info/";

    // 1. Key Features Data
    const features = [
        {
            title: "Custom Storefront Design",
            desc: "We don't do cookie-cutter templates. We design unique, brand-centric storefronts that tell your story and guide visitors toward making a purchase.",
            icon: <ShoppingCart size={32} />
        },
        {
            title: "Secure Payment Gateways",
            desc: "Seamless integration with Stripe, PayPal, Razorpay, and other global payment providers to ensure secure and frictionless transactions.",
            icon: <CreditCard size={32} />
        },
        {
            title: "Inventory Management",
            desc: "Automated real-time inventory tracking that syncs across multiple channels, preventing stockouts and overselling.",
            icon: <Layers size={32} />
        },
        {
            title: "Mobile-First Optimization",
            desc: "With 70% of traffic coming from mobile, we ensure your store offers a native-app-like experience on all devices.",
            icon: <Smartphone size={32} />
        },
        {
            title: "Analytics & Reporting",
            desc: "Deep integration with Google Analytics 4 and custom dashboards to track sales, conversion rates, and customer behavior.",
            icon: <BarChart3 size={32} />
        },
        {
            title: "Advanced Security",
            desc: "SSL certification, DDoS protection, and secure checkout processes to build trust and protect sensitive customer data.",
            icon: <ShieldCheck size={32} />
        }
    ];

    // 2. Platforms We Master
    const platforms = [
        { name: "Shopify Plus", logo: "🛍️", desc: "Best for scalable D2C brands." },
        { name: "WooCommerce", logo: "📦", desc: "Flexible & customizable for WordPress." },
        { name: "Magento", logo: "🟧", desc: "Enterprise-level power & complexity." },
        { name: "Custom MERN", logo: "⚛️", desc: "Total control with React & Node.js." }
    ];

    return (
        <ServiceLayout>
            
            {/* --- 1. CUSTOM HERO SECTION --- */}
            <section className="relative pt-24 pb-32 px-6 lg:px-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[150px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-[1400px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            E-Commerce Solutions
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-6 leading-[1.1] text-white">
                            Turn Visitors Into <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Loyal Customers</span>
                        </h1>
                        
                        <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
                            We build high-converting online stores that look stunning, load instantly, and drive massive sales growth. From startups to enterprise retailers.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            {/* LINK 1: Calendly */}
                            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                <PrimaryButton className="!px-8 !py-4 text-lg">
                                    Build My Store
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
                                <h4 className="text-3xl font-bold text-white">200+</h4>
                                <p className="text-gray-500 text-sm">Stores Launched</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">$50M+</h4>
                                <p className="text-gray-500 text-sm">Revenue Generated</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative group">
                        {/* Glow Behind Image */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-green-600/30 to-blue-600/30 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a]">
                            
                            {/* ✅ USING YOUR LOCAL IMAGE VARIABLE HERE */}
                            <img 
                                src={ecommerceHero} 
                                alt="E-commerce Solutions" 
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl">
                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-black">
                                    <Zap size={24} fill="black" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase">Conversion Rate</p>
                                    <p className="text-white text-xl font-bold">+145%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. PLATFORMS WE MASTER --- */}
            <section className="py-16 bg-[#0f172a] border-y border-white/5">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
                    <p className="text-center text-gray-400 font-medium mb-8">POWERING STORES ON TOP PLATFORMS</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {platforms.map((plat, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                                <span className="text-4xl mb-3">{plat.logo}</span>
                                <h3 className="text-lg font-bold text-white">{plat.name}</h3>
                                <p className="text-xs text-gray-500 mt-1">{plat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. WHAT WE OFFER (Grid) --- */}
            <section className="py-32 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Complete E-Commerce Ecosystem</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We don't just build websites; we build complete sales engines. From inventory to checkout, we optimize every pixel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, idx) => (
                            <div key={idx} className="group p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-green-500/30 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. PROBLEM vs SOLUTION --- */}
            <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1200px] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">Why Standard Themes Fail</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <div className="text-red-500 mt-1">✕</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Slow Loading Speeds</h4>
                                        <p className="text-gray-400 text-sm">Bloated code in standard themes kills your SEO and frustrates users.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <div className="text-red-500 mt-1">✕</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Generic Design</h4>
                                        <p className="text-gray-400 text-sm">Your brand gets lost in a sea of look-alike stores. No differentiation.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <div className="text-red-500 mt-1">✕</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Poor Mobile UX</h4>
                                        <p className="text-gray-400 text-sm">Clunky checkouts on mobile lead to 80% cart abandonment rates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-green-500/20 blur-[80px]"></div>
                            <div className="relative p-8 rounded-3xl bg-[#020617] border border-green-500/30 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6">The Canva Solutions Edge</h3>
                                <ul className="space-y-5">
                                    {["Sub-second Load Times", "Custom Conversion Funnels", "One-Click Checkout", "AI-Powered Product Recommendations", "24/7 Support & Maintenance"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white font-medium">
                                            <CheckCircle2 className="text-green-500 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-10 pt-8 border-t border-white/10">
                                    {/* LINK 3: Calendly */}
                                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                                        <PrimaryButton className="w-full justify-center !py-4 text-lg">
                                            Scale Your Revenue
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. FAQ SECTION --- */}
            <section className="py-24 px-6 lg:px-16">
                <div className="container mx-auto max-w-[1000px]">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What is e-commerce, and how does it work?", a: "E-commerce is a buying and selling activity in the online world through websites or apps. It lets customers navigate through the products, add items to the cart, and make transactions through secure payments. Through e-commerce, businesses can even handle their inventory, monitor sales, and have direct contact with the customer for generating sales growth very efficiently." },
                            { q: "What are the benefits of having an e-commerce shop?", a: "An e-commerce store has the following benefits: It is available for customers at all times of the day. Reach audiences worldwide. Less overhead compared to a physical store. Analytical benefits: It allows analysis of behavior and sales, helping in strategies development. It is a scalable solution answering contemporary shopping needs." },
                            { q: "How do I ensure my e-commerce website is secure?", a: "Security is the need to gain customers’ trust. Major steps include: SSL Certificate, to authenticate that data transfer will be encrypted. Secure Payment gateways like PayPal and Stripe. Maintenance and updating of your website and plugins. Protection of customers’ sensitive information from fraud detection and data protection. These protect your customers’ sensitive information." },
                            { q: "How can I generate and develop loyalty to my e-commerce store?", a: "Worth Customer attraction, SEO: Optimize product pages for search Social Media Marketing: The traffic can be driven from exciting posts and advertisements. Email Campaign: Let the customers know about promotion and new arrival. User Experience: Providing fast loading, mobile-friendliness, and easy navigation are some ways to develop a connection with customers. All these improve the probability of visibility and conversion." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-bold text-white hover:text-green-400 transition-colors">
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

export default Ecommerce;