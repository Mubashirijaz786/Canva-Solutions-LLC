import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/common/ScrollToTop';
import ScrollRestoration from './components/common/ScrollRestoration';
import Sidebar from './components/layout/Sidebar';

// Pages - Load Home immediately, lazy load others
import Home from './pages/Home';
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Blog = lazy(() => import('./pages/Blog'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const BlogPost = lazy(() => import('./components/blogs/BlogPost'));

// Services Sub-pages - All lazy loaded in separate chunk
const Ecommerce = lazy(() => import('./components/services/Ecommerce'));
const SEO = lazy(() => import('./components/services/SEO'));
const ContentWriting = lazy(() => import('./components/services/ContentWriting'));
const GraphicDesign = lazy(() => import('./components/services/GraphicDesign'));
const SocialMedia = lazy(() => import('./components/services/SocialMedia'));
const MobileApp = lazy(() => import('./components/services/MobileApp'));
const WebDevelopment = lazy(() => import('./components/services/WebDevelopment'));
const CustomSoftware = lazy(() => import('./components/services/CustomSoftware'));

// Admin - Lazy loaded in separate chunk (not needed by most users)
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));
const Dashboard = lazy(() => import('./admin/pages/Dashboard'));
const ManageBlog = lazy(() => import('./admin/pages/ManageBlog'));
const ManageReviews = lazy(() => import('./admin/pages/ManageReviews'));

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#020617]">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="text-white/50">Loading...</p>
    </div>
  </div>
);

const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center h-full text-white/50 text-2xl font-bold border-2 border-dashed border-white/10 rounded-2xl">
    {title} &mdash; Coming Soon
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollRestoration />
      <ScrollToTop />
      <Sidebar />
      
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Home page loads immediately */}
          <Route path="/" element={<Home />} />
          
          {/* Public pages - lazy loaded on demand */}
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Service sub-pages - in separate chunk */}
          <Route path="/services/e-commerce" element={<Ecommerce />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/content-writing" element={<ContentWriting />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/app-development" element={<MobileApp />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Admin panel - in separate chunk, only loaded when accessed */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="blogs" element={<ManageBlog />} />
            <Route path="projects" element={<Placeholder title="Manage Portfolio" />} />
            <Route path="team" element={<Placeholder title="Manage Team Members" />} />
            <Route path="messages" element={<Placeholder title="View Inquiries" />} />
            <Route path="reviews" element={<ManageReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;