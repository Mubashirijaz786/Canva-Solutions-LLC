import React, { useState, useEffect } from 'react';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Send,
    Loader2,
    ChevronDown,
    Paperclip,
    CheckCircle,
    DollarSign,
    ArrowRight,
    X,
    AlertCircle
} from 'lucide-react';

// Import Layout Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import ScrollToTop from '../components/common/ScrollToTop'; 
import ScrollRestoration from '../components/common/ScrollRestoration'; 
import MetaData from '../components/common/MetaData'; 
import { SITE_URL, CONTACT_EMAIL } from '../utils/config';

const Contact = () => {
    
    // ✅ 1. CONFIGURATION
    const YOUR_EMAIL = CONTACT_EMAIL;
    
    // State
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); 
    
    // File State
    const [fileName, setFileName] = useState("");
    const [fileError, setFileError] = useState("");

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        budget: '',
        service: '',
        message: ''
    });

    // Handle Success State
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('sent') === 'true') {
            setSubmitStatus('success');
            window.history.replaceState({}, document.title, window.location.pathname);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    }, []);

    // Handle Iframe Load
    const handleIframeLoad = () => {
        if (isSubmitting) {
            setIsSubmitting(false);
            setSubmitStatus('success');
            
            setFormData({
                name: '', email: '', phone: '', budget: '', service: '', message: ''
            });
            removeFile();
            
            document.getElementById("contact-form").reset();
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 25 * 1024 * 1024) {
                setFileError("File exceeds 25MB limit.");
                setFileName("");
                e.target.value = ""; 
            } else {
                setFileError("");
                setFileName(file.name);
            }
        }
    };

    const removeFile = () => {
        setFileName("");
        setFileError("");
        const fileInput = document.getElementById('file-upload');
        if (fileInput) fileInput.value = "";
    };

    // ✅ FINAL STYLING FIX
    const inputClass = `
        w-full px-6 py-4 rounded-xl 
        bg-white/5 
        border-none outline-none ring-0
        focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10
        text-white caret-white placeholder-gray-500 
        transition-all 
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
        [&:-webkit-autofill]:shadow-[0_0_0_1000px_#1e293b_inset] 
        [&:-webkit-autofill]:[-webkit-text-fill-color:white]
    `;

    return (
        <div className="w-full relative bg-[#020617] min-h-screen text-white selection:bg-blue-500/30">
            
            {/* ✅ SEO META TAGS FOR CONTACT PAGE */}
            <MetaData 
                title="Contact Us | Start Your Project with Canva Solutions" 
                description="Ready to build something amazing? Contact Canva Solutions for a free consultation on web development, mobile apps, and digital strategy. Let's grow your business today."
                keywords="contact canva solutions, hire web developers, mobile app quote, software agency contact, digital marketing consultation, project inquiry, get a quote"
            />

            <div className="relative w-full flex items-center justify-center p-2 sm:p-4 z-50">
              
                <div className="relative z-10 w-full lg:w-[98%] bg-transparent border border-transparent flex flex-col px-4 sm:px-10 lg:px-16 pt-4">
                    <Navbar />
                </div>
            </div>

            <section className="relative pt-20 pb-24 px-6 lg:px-16 overflow-hidden text-center">
                <div className="absolute inset-0 bg-blue-600/10 blur-[120px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-[1000px] relative z-10">
                    <div className="inline-block border border-white/10 rounded-full px-5 py-2 text-sm font-medium text-blue-400 mb-8 bg-white/5 backdrop-blur-sm">
                        Contact Us
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold font-['Manrope'] mb-8 leading-[1.1] text-white">
                        Let's Start a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">Conversation.</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? Want to modernize your workflow? Or just want to say hi? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <main id="main-content">
            <section className="pb-32 px-6 lg:px-16 pt-6 lg:pt-10">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
                        
                        {/* LEFT COLUMN: Contact Info */}
                        <div className="lg:col-span-2 space-y-12 relative z-20">
                            
                            <div className="space-y-6">
                                {/* Email Card */}
                                <a href="mailto:info@canvasolutions.co.uk?subject=Project%20Inquiry" className="block relative z-50 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer shadow-lg hover:shadow-blue-900/20">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Chat with us</h3>
                                    <p className="text-gray-400 mb-4">Our friendly team is here to help.</p>
                                    <span className="text-white font-bold group-hover:text-blue-400 transition-colors underline decoration-blue-500/30">info@canvasolutions.co.uk</span>
                                </a>

                                {/* Visit Us Card */}
                                <div className="relative z-50 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group shadow-lg hover:shadow-green-900/20">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                                        <MapPin size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-6">Visit us</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">USA Office</p>
                                            <a href="https://www.google.com/maps/search/?api=1&query=920+South+West+Pkwy+E+College+Station+TX+77840+USA" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-green-400 transition-colors leading-relaxed block">
                                               5900 Balcones Drive #29017 <br />Austin, TX, 78731, USA
                                            </a>
                                        </div>
                                      
                                    </div>
                                </div>

                                {/* Phone Card */}
                                <div className="relative z-50 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group shadow-lg hover:shadow-purple-900/20">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Call us</h3>
                                    <p className="text-gray-400 mb-4">Mon-Fri from 8am to 6pm.</p>
                                    <div className="flex flex-col gap-3">
                                        <a href="tel:+17374436352" className="text-white font-bold hover:text-purple-400 transition-colors w-fit block">🇺🇸 +1 737 443 6352</a>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: The Form */}
                        <div className="lg:col-span-3">
                            <div className="p-8 lg:p-12 rounded-[2.5rem] bg-[#0f172a] border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none"></div>

                                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400">
                                    Send us a message
                                </h2>
                                
                                <iframe 
                                    name="hiddenFrame" 
                                    style={{display: 'none'}} 
                                    onLoad={handleIframeLoad}
                                ></iframe>

                                <form 
                                    id="contact-form"
                                    action={`https://formsubmit.co/${YOUR_EMAIL}`} 
                                    method="POST" 
                                    encType="multipart/form-data" 
                                    target="hiddenFrame" 
                                    className="space-y-6 relative z-10"
                                    onSubmit={() => setIsSubmitting(true)}
                                >
                                    
                                    <input type="hidden" name="_template" value="table" />
                                    
                                    {/* ✅ FIX: ADDED UNIQUE 'TICKET ID' TO SUBJECT LINE TO PREVENT THREADING */}
                                    <input 
                                        type="hidden" 
                                        name="_subject" 
                                        value={`New Inquiry: ${formData.name || 'Client'} - Ticket #${Date.now().toString().slice(-6)}`} 
                                    />
                                    
                                    <input type="hidden" name="_order" value="name,email,phone,service,budget,message" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="text" name="_honey" style={{display: 'none'}} /> 
                                    <input type="hidden" name="_charset" value="UTF-8" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group space-y-2">
                                            <label className="text-sm font-bold text-gray-400 ml-2 group-focus-within:text-blue-400 transition-colors">Full Name</label>
                                            <input type="text" name="name" required placeholder="John Doe" className={inputClass} onChange={handleChange} />
                                        </div>
                                        <div className="group space-y-2">
                                            <label className="text-sm font-bold text-gray-400 ml-2 group-focus-within:text-blue-400 transition-colors">Email Address</label>
                                            <input type="email" name="email" required placeholder="john@company.com" className={inputClass} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group space-y-2">
                                            <label className="text-sm font-bold text-gray-400 ml-2 group-focus-within:text-blue-400 transition-colors">Phone Number</label>
                                            <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className={inputClass} onChange={handleChange} />
                                        </div>
                                        
                                        <div className="group space-y-2 relative">
                                            <label className="text-sm font-bold text-gray-400 ml-2 group-focus-within:text-blue-400 transition-colors">Estimated Budget</label>
                                            <div className="relative">
                                                <input 
                                                    type="number" 
                                                    name="budget"
                                                    value={formData.budget}
                                                    placeholder="5000"
                                                    className={`${inputClass} pl-12`} 
                                                    onChange={handleChange}
                                                />
                                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group space-y-2 relative">
                                        <label className="text-sm font-bold text-gray-400 ml-2 group-focus-within:text-blue-400 transition-colors">Interested Service</label>
                                        <div className="relative">
                                            <select name="service" className={`${inputClass} appearance-none cursor-pointer`} onChange={handleChange} defaultValue="">
                                                <option className="bg-[#1e293b] text-gray-400" value="" disabled>Select a service...</option>
                                                <option className="bg-[#1e293b] text-white" value="Web Design & Development">Web Design & Development</option>
                                                <option className="bg-[#1e293b] text-white" value="Mobile App Development">Mobile App Development</option>
                                                <option className="bg-[#1e293b] text-white" value="Graphic Designing">Graphic Designing</option>
                                                <option className="bg-[#1e293b] text-white" value="Social Media Management">Social Media Management</option>
                                                <option className="bg-[#1e293b] text-white" value="Content Writing">Content Writing</option>
                                                <option className="bg-[#1e293b] text-white" value="SEO Services">SEO Services</option>
                                                <option className="bg-[#1e293b] text-white" value="E-Commerce">E-Commerce</option>
                                                <option className="bg-[#1e293b] text-white" value="Custom Software Development">Custom Software Development</option>
                                            </select>
                                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                        </div>
                                    </div>

                                    <div className="group space-y-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-sm font-bold text-gray-400 ml-2">Attachment (Optional)</label>
                                            {fileName && (
                                                <button type="button" onClick={removeFile} className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors">
                                                    <X size={14} /> Remove
                                                </button>
                                            )}
                                        </div>
                                        
                                        <div className="relative">
                                            <input type="file" name="attachment" id="file-upload" className="hidden" onChange={handleFileChange} accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" />
                                            <label htmlFor="file-upload" className={`flex items-center justify-between w-full px-6 py-4 rounded-xl border border-dashed border-white/20 transition-all cursor-pointer ${fileError ? 'bg-red-500/10 border-red-500/50 text-red-400' : 'bg-white/5 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-white/10'}`}>
                                                <span className="flex items-center gap-2 truncate">
                                                    {fileError ? <AlertCircle size={18} /> : <Paperclip size={18} />}
                                                    {fileName || (fileError ? "File too large" : "Click to attach a file")}
                                                </span>
                                                <span className="text-xs bg-white/10 px-2 py-1 rounded whitespace-nowrap ml-2">Max 25MB</span>
                                            </label>
                                        </div>
                                        {fileError && (
                                            <div className="flex flex-col gap-1 ml-2 mt-1">
                                                <p className="text-xs text-red-400 font-medium">File exceeds 25MB limit.</p>
                                                <a href="mailto:info@canvasolutions.co.uk" className="text-xs text-blue-400 hover:text-blue-300 underline">Send large files directly via email →</a>
                                            </div>
                                        )}
                                    </div>

                                    <div className="group space-y-2">
                                        <label className="text-sm font-bold text-gray-400 ml-2 group-focus-within:text-blue-400 transition-colors">Message</label>
                                        <textarea name="message" value={formData.message} rows="4" placeholder="Tell us about your project goals..." className={`${inputClass} resize-none`} onChange={handleChange}></textarea>
                                    </div>

                                    <div className="pt-8 w-full flex justify-center flex-col items-center">
                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting || submitStatus === 'success'}
                                            className={`
                                                group relative flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white text-lg tracking-wide shadow-lg transition-all duration-300 transform
                                                ${submitStatus === 'success' ? 'bg-emerald-600 cursor-default ring-4 ring-emerald-500/20' : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-cyan-400/40 hover:-translate-y-1'}
                                                disabled:opacity-80 disabled:cursor-not-allowed
                                            `}
                                        >
                                            {isSubmitting ? (
                                                <>Processing <Loader2 className="animate-spin" size={20} /></>
                                            ) : submitStatus === 'success' ? (
                                                <>Sent Successfully <CheckCircle size={20} /></>
                                            ) : (
                                                <>Send Message <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
                                            )}
                                        </button>

                                        <div className={`text-center transition-all duration-500 ease-in-out overflow-hidden ${submitStatus === 'success' ? 'max-h-24 opacity-100 translate-y-0 mt-4' : 'max-h-0 opacity-0 -translate-y-4'}`}>
                                            <p className="text-gray-300 font-medium text-base">Thanks! We'll stay in touch within 24 hours.</p>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            </main>

            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
            <ScrollRestoration />
        </div>
    );
};

export default Contact;