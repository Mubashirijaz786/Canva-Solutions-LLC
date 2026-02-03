// ✅ Step 1: Import images from your local folder
// Make sure the path matches your folder structure: src/assets/images/team/
import ahmadImg from '../assets/images/team/Ahmad.webp';
import hanzalaImg from '../assets/images/team/Hanzala.webp';
import husnainImg from '../assets/images/team/Husnain.webp';
import maleeqImg from '../assets/images/team/Maleeq.webp';
import moizImg from '../assets/images/team/Moiz.webp';
import mustafaImg from '../assets/images/team/Mustafa.webp';
import zaibImg from '../assets/images/team/Zaib.webp';

// ✅ Step 2: Use the imported variables in the 'image' field
export const teamMembers = [
    {
        id: 1,
        name: "Ahmad Aftab",
        role: "SEO Expert", 
        image: ahmadImg,
    },
    {
        id: 2,
        name: "Hanzala",
        role: "Wordpress Developer",
        image: hanzalaImg,
    },
    {
        id: 3,
        name: "Husnain Ali",
        role: "Wordpress & Full Stack Developer",
        image: husnainImg,
    },
    {
        id: 4,
        name: "Maleeq Jutt",
        role: "Full Stack Developer",
        image: maleeqImg,
    },
    {
        id: 5,
        name: "Moiz",
        role: "Shopyfy Developer",
        image: moizImg,
    },
    {
        id: 6,
        name: "Mustafa Fasahat",
        role: "Wordpress Developer",
        image: mustafaImg,
    },
    {
        id: 7,
        name: "Zaib Hasan",
        role: "Full stack Developer",
        image: zaibImg,
    }
];