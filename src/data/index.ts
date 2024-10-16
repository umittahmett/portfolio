import PromeSolutionsImage from "../assets/images/projects/prome-solutions.webp";
import UydudaImage from "../assets/images/projects/uyduda.webp";
import SiliconBriteImage from "../assets/images/projects/silicon-brite.webp";
import BookStoreImage from "../assets/images/projects/book-store.webp";


export const projects = [
  {
    name: "Silicon Brite",
    description:
      "SiliconBrite Technologies is a semiconductor company founded in 2018. It specializes in energy management and voltage protection with analog and mixed signal solutions, providing reliable protection to electronic devices",
    myRole:
      "I worked as a front-end developer on this project, focusing on building interactive and user-friendly interfaces.",
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
    referance: {
      name: "Kaan Ikizler",
      url: "https://kaanikizler.com",
    },
  },
  {
    name: "Book Store",
    description:
      "As an e-commerce site focusing on book shopping, Book Store aims to bring different types of books together with readers. Users can review and easily purchase the books they want through the site.",
    myRole:
      "I worked as a front-end developer on this project, focusing on building interactive and user-friendly interfaces.",
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
    referance: {
      name: "Umit Ahmet",
      url: "https://umitahmed.com",
    },
  },
  {
    name: "Prome Solutions",
    description:
      "Prome Solutions is a technology company that offers solutions in areas such as artificial intelligence, web and mobile applications. While optimizing the operations of businesses with AI-based systems, it also aims to improve the customer experience with user-friendly designs and Shopify integrations.",
    myRole:
      "I worked as a front-end developer on this project, focusing on building interactive and user-friendly interfaces.",
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
    referance: {
      name: "Kaan Ikizler",
      url: "https://promesolutions.com",
    },
  },
 
  {
    name: "Uyduda",
    description:
      "Uyduda operates as a brand that provides technical services in satellite and television systems such as satellite dish installation, central satellite systems and television installation.",
    myRole:
      "I worked as a front-end developer on this project, focusing on building interactive and user-friendly interfaces.",
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
    referance: {
      name: "Emre Kırca",
      url: "https://emrekirca.com",
    },
  },
]

export const technologies = [
  {
    name: "React",
    icon: 'react',
    url: "https://reactjs.org",
    since: "Februar 2023",
  },
  {
    name: "Next.JS",
    icon: 'next',
    url: "https://nextjs.org",
    since: "November 2023",
  },
  {
    name: "Remix.JS",
    icon: 'remix',
    url: "https://remix.run",
    since: "July 2024",
  },
  {
    name: "Astro.JS",
    icon: 'astro',
    url: "https://astro.build",
    since: "Februar 2024",
  },
  {
    name: "Tailwind CSS",
    icon: 'tailwind',
    url: "https://tailwindcss.com",
    since: "June 2023",
  },
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
    name: "Instagram",
    url: 'https://instagram.com/umittahmett',
    icon: 'instagram',
  },
  {
    name: "Twitter",
    url: 'https://x.com/umitahmed_',
    icon: 'twitter',
  },
  {
    name: "Email",
    url: "mailto:umitahmet20@gmail.com",
    icon: 'mail',
  },
];

export const navbarNavigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Technologies", href: "#technologies" },
  { name: "Contact", href: "#contact" },
];