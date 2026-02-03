// 1. Import all images from your local folder
import usmanBilla from '../assets/images/portfolio/usmanbilla.webp';
import chaseIt from '../assets/images/portfolio/chaseit.webp';
import training from '../assets/images/portfolio/traning.webp';
import crewter from '../assets/images/portfolio/Crewter.webp';
import talkNest from '../assets/images/portfolio/talknest.webp';
import nordjouren from '../assets/images/portfolio/Nordjouren.webp';
import staxmatic from '../assets/images/portfolio/Staxmatic.webp';
import gota from '../assets/images/portfolio/gota.webp';
import theRecord from '../assets/images/portfolio/the record.webp';
import qbiz from '../assets/images/portfolio/Qbiz.webp';
import callvet from '../assets/images/portfolio/callvet.webp';
import unitedWay from '../assets/images/portfolio/united way.webp';
import liferay from '../assets/images/portfolio/liferay.webp';
import youAndMe from '../assets/images/portfolio/youandme.webp';
import crystalSolution from '../assets/images/portfolio/Crystalsolution.webp';
import kissanGhar from '../assets/images/portfolio/kissanghar.webp';
import nest from '../assets/images/portfolio/nest.webp';

// Dashboard / Web Analytics Images
import webAnalytics from '../assets/images/portfolio/webanalrics.webp';
import webAna from '../assets/images/portfolio/webana.webp';
import web1 from '../assets/images/portfolio/web1.webp';
import web2 from '../assets/images/portfolio/web2.webp';
import web3 from '../assets/images/portfolio/web3.webp';
import web4 from '../assets/images/portfolio/web4.webp';
import web5 from '../assets/images/portfolio/web5.webp';
import web6 from '../assets/images/portfolio/web6.webp';

// 2. Define Categories
export const categories = ["All", "Web Dev", "E-Commerce", "Dashboards", "Mobile Apps"];

// 3. Portfolio Data
export const projects = [
    {
        id: 1,
        title: "Usman Billa Fabrics",
        category: "E-Commerce",
        image: usmanBilla,
        desc: "A premium fashion e-commerce store with seamless checkout and inventory management.",
        tags: ["E-Commerce", "Fashion", "Web"],
        link: "https://usmanbillafabrics.com/",
        color: "blue"
    },
    {
        id: 2,
        title: "Chase IT Global",
        category: "Web Dev",
        image: chaseIt,
        desc: "Interactive web platform offering dynamic user experiences and modern design aesthetics.",
        tags: ["Web Design", "Corporate", "React"],
        link: "https://chaseitglobal.com/global-coverage",
        color: "indigo"
    },
    {
        id: 3,
        title: "Training Via Science",
        category: "Web Dev",
        image: training,
        desc: "Educational platform designed for corporate training and employee development tracking.",
        tags: ["LMS", "Education", "SaaS"],
        link: "#",
        color: "green"
    },
    {
        id: 4,
        title: "Crewter",
        category: "Dashboards",
        image: crewter,
        desc: "Comprehensive HR and recruitment dashboard for managing candidate pipelines.",
        tags: ["Dashboard", "HR Tech", "Vue.js"],
        link: "https://crewter.com/",
        color: "purple"
    },
    {
        id: 5,
        title: "Talk Nest",
        category: "Mobile Apps",
        image: talkNest,
        desc: "Social communication app fostering community engagement with real-time messaging.",
        tags: ["Social", "Mobile", "App"],
        link: "http://talknest.com/",
        color: "pink"
    },
    {
        id: 6,
        title: "Nord jouren",
        category: "Web Dev",
        image: nordjouren,
        desc: "Professional corporate website designed for the Scandinavian market.",
        tags: ["Corporate", "Business", "Web"],
        link: "https://nordjouren.se/",
        color: "cyan"
    },
    {
        id: 7,
        title: "Gota Fasadvard",
        category: "Web Dev",
        image: gota,
        desc: "Service-based website for property maintenance and renovation services.",
        tags: ["Service", "Business", "Web"],
        link: "https://gotafasadvard.se/",
        color: "blue"
    },
    {
        id: 8,
        title: "The Records",
        category: "Web Dev",
        image: theRecord,
        desc: "Secure online records retrieval system with a modern user interface.",
        tags: ["Data", "Secure", "Web"],
        link: "https://www.therecordsco.com/#",
        color: "teal"
    },
    {
        id: 9,
        title: "Qbiz Consulting",
        category: "Web Dev",
        image: qbiz,
        desc: "Professional consulting firm website featuring service breakdowns and case studies.",
        tags: ["Consulting", "Corporate", "Web"],
        link: "#",
        color: "gray"
    },
    {
        id: 10,
        title: "Callvet",
        category: "Web Dev",
        image: callvet,
        desc: "Veterinary clinic website with appointment booking and service information.",
        tags: ["Healthcare", "Booking", "Web"],
        link: "https://www.callvet.pk/",
        color: "green"
    },
    {
        id: 11,
        title: "United Way",
        category: "Web Dev",
        image: unitedWay,
        desc: "Non-profit organization platform focused on community impact and donations.",
        tags: ["Non-Profit", "Charity", "Web"],
        link: "https://www.unitedway.org/",
        color: "red"
    },
    {
        id: 12,
        title: "Liferay",
        category: "Web Dev",
        image: liferay,
        desc: "Digital experience platform website showcasing enterprise solutions.",
        tags: ["Enterprise", "Tech", "Web"],
        link: "https://www.liferay.com/",
        color: "blue"
    },
    {
        id: 13,
        title: "Staxmatic",
        category: "Web Dev",
        image: staxmatic,
        desc: "High-tech industrial website featuring service catalogs and quote estimation tools.",
        tags: ["Industrial", "Tech", "B2B"],
        link: "https://staxmatic.com/",
        color: "orange"
    },
    {
        id: 14,
        title: "You & Me",
        category: "Mobile Apps",
        image: youAndMe,
        desc: "Relationship and lifestyle app focused on connecting people with shared interests.",
        tags: ["Lifestyle", "Mobile", "iOS"],
        link: "#",
        color: "red"
    },
    {
        id: 15,
        title: "Crystal Solution",
        category: "Web Dev",
        image: crystalSolution,
        desc: "Corporate portfolio for a leading software consultancy firm.",
        tags: ["Agency", "Portfolio", "Web"],
        link: "https://crystalsolution.com.np/",
        color: "blue"
    },
    {
        id: 16,
        title: "Kissan Ghar",
        category: "E-Commerce",
        image: kissanGhar,
        desc: "Agricultural e-commerce marketplace connecting farmers with suppliers.",
        tags: ["AgriTech", "Marketplace", "Web"],
        link: "https://www.kissanghar.pk/",
        color: "green"
    },
    {
        id: 17,
        title: "Nest",
        category: "Web Dev",
        image: nest,
        desc: "Modern real estate or home services platform.",
        tags: ["Real Estate", "Web", "Design"],
        link: "#",
        color: "yellow"
    },
    // --- DASHBOARD / ANALYTICS SECTION ---
    {
        id: 18,
        title: "Analytics Dashboard",
        category: "Dashboards",
        image: webAnalytics,
        desc: "Data visualization platform for tracking KPIs and business performance.",
        tags: ["Analytics", "Data", "Admin"],
        link: "#",
        color: "indigo"
    },
    {
        id: 19,
        title: "WebAna SaaS",
        category: "Dashboards",
        image: webAna,
        desc: "SaaS application interface designed for high usability and complex data management.",
        tags: ["SaaS", "UI/UX", "Product"],
        link: "#",
        color: "purple"
    },
    {
        id: 20,
        title: "FinTech Admin",
        category: "Dashboards",
        image: web1,
        desc: "Secure financial administration panel with dark mode and real-time charts.",
        tags: ["FinTech", "Admin", "Secure"],
        link: "#",
        color: "gray"
    },
    {
        id: 21,
        title: "CRM System",
        category: "Dashboards",
        image: web2,
        desc: "Customer Relationship Management tool for sales teams to track leads.",
        tags: ["CRM", "Business", "Tool"],
        link: "#",
        color: "blue"
    },
    {
        id: 22,
        title: "Project Tracker",
        category: "Dashboards",
        image: web3,
        desc: "Task management interface for agile teams with kanban boards.",
        tags: ["Productivity", "Management", "App"],
        link: "#",
        color: "orange"
    },
    {
        id: 23,
        title: "Sales Overview",
        category: "Dashboards",
        image: web4,
        desc: "Comprehensive sales tracking dashboard with regional breakdowns.",
        tags: ["Sales", "Data", "Admin"],
        link: "#",
        color: "cyan"
    },
    {
        id: 24,
        title: "Marketing Analytics",
        category: "Dashboards",
        image: web5,
        desc: "Marketing performance dashboard integrating social and web data.",
        tags: ["Marketing", "Analytics", "Tool"],
        link: "#",
        color: "pink"
    },
    {
        id: 25,
        title: "User Management",
        category: "Dashboards",
        image: web6,
        desc: "Admin interface for managing user roles, permissions, and activity logs.",
        tags: ["Admin", "Security", "Management"],
        link: "#",
        color: "teal"
    }
];