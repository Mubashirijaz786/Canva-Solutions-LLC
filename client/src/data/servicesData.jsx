import { 
    Monitor, 
    Smartphone, 
    ShoppingCart, 
    Code2, 
    Search, 
    Share2, 
    Palette, 
    PenTool 
} from 'lucide-react';

export const servicesData = [
    { 
        id: 1,
        title: "Web Design & Development", 
        desc: "Custom, high-performance websites built with React & Node.js.",
        icon: <Monitor size={80} strokeWidth={1} />, // Default size for home (can be overridden if needed)
        link: "/services/web-development",
        color: "blue"
    },
    { 
        id: 2,
        title: "Mobile App Development", 
        desc: "Native and cross-platform mobile apps for iOS and Android.",
        icon: <Smartphone size={80} strokeWidth={1} />,
        link: "/services/app-development",
        color: "purple"
    },
    { 
        id: 3,
        title: "E-Commerce Solutions", 
        desc: "Scalable online stores using Shopify or custom MERN stack.",
        icon: <ShoppingCart size={80} strokeWidth={1} />,
        link: "/services/e-commerce",
        color: "green"
    },
    { 
        id: 4,
        title: "Custom Software Dev", 
        desc: "Tailor-made software solutions to automate business processes.",
        icon: <Code2 size={80} strokeWidth={1} />,
        link: "/services/custom-software",
        color: "indigo"
    },
    { 
        id: 5,
        title: "SEO Services", 
        desc: "Data-driven strategies to rank your website #1 on Google.",
        icon: <Search size={80} strokeWidth={1} />,
        link: "/services/seo",
        color: "yellow"
    },
    { 
        id: 6,
        title: "Social Media Management", 
        desc: "Strategic content and campaigns to grow your brand presence.",
        icon: <Share2 size={80} strokeWidth={1} />,
        link: "/services/social-media",
        color: "pink"
    },
    { 
        id: 7,
        title: "Graphic Designing", 
        desc: "Visual identity, logos, and UI/UX designs that stand out.",
        icon: <Palette size={80} strokeWidth={1} />,
        link: "/services/graphic-design",
        color: "orange"
    },
    { 
        id: 8,
        title: "Content Writing", 
        desc: "SEO-optimized blogs and copy that engage your audience.",
        icon: <PenTool size={80} strokeWidth={1} />,
        link: "/services/content-writing",
        color: "cyan"
    }
];