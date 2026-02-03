import React from 'react';
import { Star } from 'lucide-react';

// --- IMPORT IMAGES ---
import reviewBg from '../../assets/images/review-background.webp'; 
import reviewImg from '../../assets/images/review.webp'; 

const Testimonials = () => {
    
    // --- STATIC DATA FROM YOUR IMAGES ---
    const reviewsData = [
        {
            id: 1,
            quote: "Their innovative design and user-friendly interface have elevated our brand, making our services more accessible to our audience.",
            author: "Sara",
            role: "The Record",
            rating: 5
        },
        {
            id: 2,
            quote: "Got a shopping app built for my online store, and the results were solid. The app is user-friendly, visually appealing, and works smoothly on both iOS and Android.",
            author: "Adeel R.",
            role: "Mobile App",
            rating: 5
        },
        {
            id: 3,
            quote: "Canva Solutions transformed our online presence with a sleek, professional website that has significantly boosted client engagement.",
            author: "John",
            role: "Qubiz Consulting",
            rating: 5
        },
        {
            id: 4,
            quote: "They helped us create a website for our charity and also designed flyers and banners for our event. The team was incredibly helpful.",
            author: "Fatima H",
            role: "Website",
            rating: 5
        },
        {
            id: 5,
            quote: "Canva Solutions' expertise in web development has enhanced our outreach efforts, enabling us to better serve our community.",
            author: "David",
            role: "United Way",
            rating: 5
        },
        {
            id: 6,
            quote: "I hired this agency to redesign my website and optimize it for Google. I was blown away by their professionalism and how they explained everything in simple terms.",
            author: "Aiselfies",
            role: "Web + SEO",
            rating: 5
        }
    ];

    // Logic for Infinite Slider (Doubling the data for smooth loop)
    const sliderData = [...reviewsData, ...reviewsData]; 

    // Static Featured Review (Using John's review for the big card)
    const featuredTestimonial = {
        image: reviewImg, 
        quote: "Canva Solutions transformed our online presence with a sleek, professional website that has significantly boosted client engagement.",
        author: "Lisa",
        role: "Qubiz Consulting",
        rating: 5
    };

    const renderStars = (rating = 5) => (
        <div className="flex gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"} />
            ))}
        </div>
    );

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden" id="reviews">
            
            <div className="absolute inset-0 z-0">
                <img src={reviewBg} alt="Background" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-[#020617]/95 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-16 max-w-[1600px] relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block border border-white/10 rounded-full px-5 py-2 text-sm font-medium text-blue-300 mb-6 bg-white/5 backdrop-blur-sm">Testimonials</div>
                    <h2 className="text-4xl lg:text-6xl font-semibold text-white font-['Manrope'] tracking-tight leading-tight">Trusted by Brands <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Worldwide</span></h2>
                </div>

                {/* Featured Feature Card (Static) */}
                <div className="bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col-reverse lg:flex-row mb-20 backdrop-blur-md shadow-2xl min-h-[500px]">
                    <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-full group">
                        <img src={featuredTestimonial.image} alt={featuredTestimonial.author} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                    </div>
                    <div className="lg:w-3/5 p-10 lg:p-32 flex flex-col justify-center">
                        {renderStars(featuredTestimonial.rating)}
                        <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-12">“{featuredTestimonial.quote}”</blockquote>
                        <div>
                            <div className="text-2xl font-bold text-white mb-2">{featuredTestimonial.author}</div>
                            <div className="text-blue-400 text-lg font-medium">{featuredTestimonial.role}</div>
                        </div>
                    </div>
                </div>

                {/* --- INFINITE SLIDING TRACK --- */}
                <div className="relative w-full overflow-hidden">
                    
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none"></div>
                    
                    {/* Sliding Track */}
                    <div className="flex w-fit animate-loop-scroll hover:pause">
                        {sliderData.map((item, index) => (
                            <div key={index} className="w-[85vw] sm:w-[400px] shrink-0 px-4">
                                <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col h-[400px] group relative overflow-hidden transition-all hover:bg-white/10 hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        {renderStars(item.rating)}
                                        <blockquote className="text-gray-300 text-lg leading-relaxed flex-grow mb-6">"{item.quote}"</blockquote>
                                        <div className="mt-auto pt-6 border-t border-white/10">
                                            <div className="text-lg font-bold text-white mb-1">{item.author}</div>
                                            <div className="text-blue-400 text-sm font-medium">{item.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;