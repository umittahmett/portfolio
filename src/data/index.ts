import PromeSolutionsImage from "../assets/images/projects/prome-solutions.webp";
import UydudaImage from "../assets/images/projects/uyduda.webp";
import SiliconBriteImage from "../assets/images/projects/silicon-brite.webp";
import BiletcenterImage from "../assets/images/projects/biletcenter.webp";
import DotDashImage from "../assets/images/projects/dot-dash.webp";
import BookStoreImage from "../assets/images/projects/book-store.webp";


export const projects = [
  {
    name: "Biletcenter",
    description:
      "Redesign of Biletcenter Dashboard – Online Ticketing System",
    myRole:
      "As a frontend developer, I contributed to the redesign of the Biletcenter online ticket purchasing system. My role involved translating Figma components into functional and responsive code, ensuring seamless functionality and an enhanced user experience. I focused on maintaining design accuracy while implementing key features to meet project requirements effectively.",
      technologies: [
        {
          icon: 'react',
          name: "React.JS",
          url: "https://react.dev",
        },
        {
          icon: 'tailwind',
          name: "Tailwind css",
          url: "https://tailwindcss.com",
        },
      ],
    image: BiletcenterImage,
    color: "#ff4333",
    
    websiteLink: "https://biletcenter.com",
  },
  {
    name: "Silicon Brite",
    description:
      "SiliconBrite Technologies is a semiconductor company founded in 2018. It specializes in energy management and voltage protection with analog and mixed signal solutions, providing reliable protection to electronic devices",
    myRole:
      "While working at Promesolutions, I was responsible for completely designing and developing this website from the ground up. I focused on creating a user-friendly, high-performance site that aligned with the company's goals.",
      technologies: [
        {
          icon: 'astro',
          name: "Astro.JS",
          url: "https://astro.build",
        },
        {
          icon: 'tailwind',
          name: "Tailwind css",
          url: "https://tailwindcss.com",
        },
      ],
    image: SiliconBriteImage,
    color: "#f97316",
    
    pageSpeedLink: "https://pagespeed.web.dev/report?url=https://siliconbrite.com",
    websiteLink: "https://siliconbrite.com",
  },
  {
    name: "Book Store",
    description:
      "As an e-commerce site focusing on book shopping, Book Store aims to bring different types of books together with readers.",
    myRole:
      "I designed and developed this website from scratch as a way to learn and practice Remix.js. Every aspect of the site, from the design to the functionality, was built to showcase my skills and understanding of modern web development.",
    technologies: [
      {
        icon: 'remix',
        name: "Remix.JS",
        url: "https://remix.run",
      },
      {
        icon: 'mongodb',
        name: "MongoDB",
        url: "https://www.mongodb.com",
      },
      {
        icon: 'tailwind',
        name: "Tailwind css",
        url: "https://tailwindcss.com",
      },
    ],
    image: BookStoreImage,
    color: "#f59e0b",
    
    // pageSpeedLink: "https://pagespeed.web.dev/report?url=https://remix-bookstore.vercel.app/",
    websiteLink: "https://remix-bookstore.vercel.app/",
  },
  {
    name: "Prome Solutions",
    description:
      "Prome Solutions is a technology company that offers solutions in areas such as artificial intelligence, web and mobile applications. While optimizing the operations of businesses with AI-based systems, it also aims to improve the customer experience with user-friendly designs and Shopify integrations.",
    myRole:
      "While working at the company, I was responsible for managing the landing website. I regularly updated the site, making improvements and enhancements to keep it optimized and up-to-date.",
    technologies: [
      {
        icon: 'astro',
        name: "Astro.JS",
        url: "https://astro.build",
      },
      {
        icon: 'tailwind',
        name: "Tailwind css",
        url: "https://tailwindcss.com",
      },
    ],
    image: PromeSolutionsImage,
    color: "#2563eb",
    
    pageSpeedLink: "https://pagespeed.web.dev/report?url=https://promesolutions.com/",
    websiteLink: "https://promesolutions.com/",
  },
  {
    name: "Dot Dash",
    description:
      "Text and audio file to Morse code translator with real-time playback",
    myRole:
      "Developed the complete application as a solo developer, implementing the Morse code translation logic, Web Audio API integration for real-time audio playback, and user interface with Vue.js and TypeScript. Built the audio file processing backend with Python to extract and analyze Morse code patterns from uploaded audio files.",
      technologies: [
        {
          icon: 'vue',
          name: "Vue.JS",
          url: "https://vuejs.org",
        },
        {
          icon: 'tailwind',
          name: "Tailwind css",
          url: "https://tailwindcss.com",
        },
        {
          icon: 'python',
          name: "Python",
          url: "https://python.org",
        }
      ],
    image: DotDashImage,
    color: "#9333ea",
    
    websiteLink: "https://dot-dash-app.vercel.app",
  },
  {
    name: "Baykara",
    description:
      "Baykara operates as a brand that provides technical services in satellite and television systems such as satellite dish installation, central satellite systems and television installation.",
    myRole:
      "I was responsible for designing and developing this website entirely from scratch. The project involved creating a responsive and user-friendly interface, ensuring it met the client’s needs while optimizing for performance and usability.",
    technologies: [
      {
        icon: 'next',
        name: "Next.JS",
        url: "https://nextjs.org/",
      },
      {
        icon: 'tailwind',
        name: "Tailwind css",
        url: "https://tailwindcss.com",
      },
    ],
    image: UydudaImage,
    color: "#f59e0b",
    pageSpeedLink: "https://pagespeed.web.dev/report?url=https://uyduda.com/",
    websiteLink: "https://uyduda.com/",
  },
]

export const technologies = [
  {
    name: "React.js",
    icon: 'react',
    url: "https://reactjs.org",
    showInSection: true
  },
  {
    name: "Vue.js",
    icon: 'vue',
    url: "https://vuejs.org",
    showInSection: true
  },
  {
    name: "Next.js",
    icon: 'next',
    url: "https://nextjs.org",
    showInSection: true
  },
  {
    name: "Remix.js",
    icon: 'remix',
    url: "https://remix.run",
    showInSection: true
  },
  {
    name: "Astro.js",
    icon: 'astro',
    url: "https://astro.build",
    showInSection: true
  },
  {
    name: "Tailwind CSS",
    icon: 'tailwind',
    url: "https://tailwindcss.com",
    showInSection: true
  },
  {
    name: 'Python',
    icon: 'python',
    url: 'https://python.org',
    showInSection: false
  }
];

export const contactLinks = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/%C3%BCmit-ahmet-a5843027a/",
    icon: 'linkedin',
  },
  {
    name: "Github",
    url: 'https://github.com/umittahmett',
    icon: 'github',
  },
  {
    name: "Email",
    url: "mailto:umitahmet10@gmail.com",
    icon: 'mail',
  },
];

export const navbarNavigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Technologies", href: "#technologies" },
  { name: "Contact", href: "#contact" },
];