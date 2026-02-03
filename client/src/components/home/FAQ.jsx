import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        
        <div 
            onClick={onClick}
            className={`
                mb-4 rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300
                ${isOpen 
                    ? 'bg-white/10 border-blue-500/30' // Open State Styles
                    : 'bg-white/5 border-white/10 hover:bg-white/10' // Closed State Styles
                }
            `}
        >
            {/* --- HEADER SECTION --- */}
            <div className="w-full flex items-center justify-between p-6">
                <span className="text-lg font-bold text-white pr-8 select-none">{question}</span>
                <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300
                    ${isOpen ? 'bg-blue-500 text-white rotate-180' : 'bg-white/10 text-gray-400'}
                `}>
                    <ChevronDown size={18} />
                </div>
            </div>
            
            {/* --- ANSWER SECTION (Inside the same box) --- */}
            <div 
                className={`
                    transition-all duration-600 ease-linear 
                    ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                {/* Content padding matches header padding for alignment */}
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    // State to track which question is open (null = all closed)
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What makes Canva Solutions different from any other digital agency?",
            answer: "We don't just build websites; we build business engines. By combining AI-driven data analysis with high-end creativity, we ensure every pixel and line of code contributes directly to your ROI."
        },
        {
            question: "Do you only work with startups?",
            answer: "While we specialize in high-growth startups, we also partner with established enterprises looking to modernize their digital presence and leverage AI for scale."
        },
        {
            question: "How fast can you deliver results?",
            answer: "It depends on the scope, but our AI-accelerated workflow allows us to deliver MVPs in as little as 8 weeks, compared to the industry standard of 4-6 months."
        },
        {
            question: "What services do you actually provide?",
            answer: "We are a full-service agency offering Brand Strategy, UI/UX Design, Web & Mobile Development, and AI-Driven Marketing campaigns."
        },
        {
            question: "Do you offer custom solutions or fixed packages?",
            answer: "Every business is unique. While we have framework packages for transparency, 90% of our work is tailored specifically to your business goals and market position."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
            
            <div className="container mx-auto px-6 lg:px-16 max-w-[1400px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* LEFT COLUMN: Sticky Header */}
                    <div className="lg:col-span-5 text-left">
                        <div className="sticky top-32">
                            <div className="inline-block border border-blue-500/30 rounded-full px-4 py-2 text-xs font-medium text-blue-400 mb-6 bg-blue-500/10 backdrop-blur-sm">
                                FAQ
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-semibold text-white font-['Manrope'] tracking-tight leading-[1.1]">
                                Got Questions? <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    We’ve Got Answers.
                                </span>
                            </h2>
                            <p className="mt-6 text-gray-400 text-lg max-w-md">
                                Everything you need to know about how we work, our process, and how we can help you grow.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Accordion List */}
                    <div className="lg:col-span-7">
                        {faqs.map((faq, index) => (
                            <FAQItem 
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;