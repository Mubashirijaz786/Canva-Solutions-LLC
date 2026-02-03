import React from 'react';

// Importing Components
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import Services from '../components/home/Services';
import ScrollingTicker from '../components/home/ScrollingTicker';
import FeaturedWork from '../components/home/FeaturedWork';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import InsightsBlog from '../components/home/InsightsBlog';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';
import Footer from '../components/layout/Footer';

import ScrollToTop from '../components/common/ScrollToTop';
// <--- NEW IMPORT
import WhatsAppButton from '../components/common/WhatsAppButton'; 
import MetaData from '../components/common/MetaData';


const Home = () => {
  return (
    <div className="w-full relative bg-[#020617]">
      {/* ✅ UPDATED: Professional SEO Meta Tags */}
      <MetaData 
        title="Canva Solutions" 
        description="Transform your business with Canva Solutions. We specialize in custom web development, mobile apps, SEO, and graphic design to drive real digital growth."
        keywords="web development agency, mobile app developers, SEO experts, graphic design, ecommerce solutions, custom software, digital marketing agency, Canva Solutions"
      />

      <Hero />
      
      {/* MAIN CONTENT LANDMARK */}
      <main id="main-content">
        <div id="trusted-section"> 
          <TrustedBy />
        </div>

        <Services />
        <ScrollingTicker />
        <FeaturedWork />
        <WhyChooseUs />
        <Testimonials />
        <InsightsBlog />
        <Stats />
        <FAQ />
        <FinalCTA />
      </main>
      {/* END MAIN CONTENT */}

      <Footer />
      
      {/* Floating Action Buttons */}
      <WhatsAppButton />
      <ScrollToTop />
      
    </div>
  );
};

export default Home;