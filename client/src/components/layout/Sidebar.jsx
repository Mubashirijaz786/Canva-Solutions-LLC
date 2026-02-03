import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

// ✅ Custom Upwork Icon (Uses an actual Image for 100% accuracy)
const UpworkIcon = ({ size, className }) => (
  <img 
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/upwork.svg" 
    alt="Upwork"
    width={size} 
    height={size}
    className={className}
    style={{ 
      // This filter makes the black SVG white to match your theme
      // Remove this line if you want the original black/green color
      filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)" 
    }}
  />
);

const Sidebar = () => {
  
  const menuItems = [
    { 
      id: 3, 
      label: "Facebook", 
      icon: Facebook, 
      link: "https://www.facebook.com/canvasolutionsofficial" 
    },
    { 
      id: 4, 
      label: "Instagram", 
      icon: Instagram, 
      link: "https://www.instagram.com/canva_solutions_" 
    },
    { 
      id: 5, 
      label: "LinkedIn", 
      icon: Linkedin, 
      link: "https://www.linkedin.com/company/canva-solutions/?originalSubdomain=pk" 
    },
    { 
      id: 6, 
      label: "Upwork", 
      icon: UpworkIcon, 
      link: "https://upwork.com/freelancers/canvasolutions" 
    },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 p-2">
      {menuItems.map((item) => (
        <a 
          key={item.id}
          href={item.link}
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-end"
        >
          {/* Sliding Label (Left Side) */}
          <span className="
            absolute right-14 
            opacity-0 translate-x-4 
            group-hover:opacity-100 group-hover:translate-x-0 
            transition-all duration-300 ease-out
            bg-white text-slate-800 text-xs font-bold 
            py-1.5 px-3 rounded-lg shadow-lg
            whitespace-nowrap
            z-0
          ">
            {item.label}
            {/* Little triangle pointer */}
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></span>
          </span>

          {/* The Square Icon - Unified White/Glass Style */}
          <div className={`
            w-12 h-12 
            rounded-xl 
            flex items-center justify-center 
            
            /* Glass Effect */
            bg-white/10 backdrop-blur-md 
            border border-white/20
            text-white/80
            shadow-lg shadow-black/10

            /* Hover Effects */
            transform transition-all duration-300
            group-hover:bg-white/20 
            group-hover:text-white 
            group-hover:scale-110 
            group-hover:-rotate-3
            group-hover:border-white/40
            
            cursor-pointer
            relative z-10
          `}>
            {/* Render Icon */}
            <item.icon size={22} className={item.label === "Upwork" ? "" : "stroke-[2px]"} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;