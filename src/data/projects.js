// src/data/projects.js

import seshImg from "../assets/sesh-copy.jpg";
import vaultageImg from "../assets/vaultage-pic.jpg";
import linkstoreImg from "../assets/linkstore-pic.jpg";
import blockaderImg from "../assets/blockader-pic.jpg";
import scrollImg from "../assets/scroll-pic.jpg";
import dbwpImg from "../assets/dbwp-pic.jpg";
import epianosImg from "../assets/ep-pic.jpg";
import portfolioImg from "../assets/portfolio-pic.jpg";

export const projects = [
  {
    title: "SESH",
    description: "Minimal workout tracker built with MERN.",
    longDescription:
      "A fast and minimal workout tracker built using the MERN stack and RTK Query. Features workout creation, editing, persistent data handling, and scalable API architecture.",
    image: seshImg,
    live: "https://sesh-app.onrender.com",
    repo: "https://github.com/DB-1984/sesh-app",
    stack: ["MERN", "RTK Query", "Redux", "MongoDB"],
  },

  {
    title: "Vaultage",
    description: "Headless storage API with Prisma + Supabase.",
    longDescription:
      "A headless storage API using Express, Prisma ORM, and Supabase storage. Designed around scalable backend architecture and efficient asset management.",
    image: vaultageImg,
    live: "https://vaultage.onrender.com",
    repo: "https://github.com/DB-1984/vaultage",
    stack: ["Express", "Prisma", "Supabase", "PostgreSQL"],
  },

  {
    title: "LinkStore",
    description: "Personal resource library with tagging system.",
    longDescription:
      "A searchable personal resource library with authentication, tagging, comments, and categorisation features. Built with Next.js and MongoDB.",
    image: linkstoreImg,
    live: "https://linkstore-app.onrender.com",
    repo: "https://github.com/DB-1984/linkstore",
    stack: ["Next.js", "MongoDB", "OAuth", "Tailwind"],
  },

  {
    title: "Blockader",
    description: "FSE block theme with custom blocks & patterns.",
    longDescription:
      "A commercial-style Full Site Editing WordPress theme built entirely without plugins. Includes custom blocks, patterns, templates, theme.json configuration, and extensive editor customisation.",
    image: blockaderImg,
    live: "https://blockader.onrender.com",
    repo: "https://github.com/DB-1984/blockader",
    stack: ["WordPress", "FSE", "Gutenberg", "PHP"],
  },

  {
    title: "Scroll",
    description: "Searchable note system built with Django.",
    longDescription:
      "A Django-powered note and content management system using PostgreSQL and Supabase integration. Includes search functionality and Google OAuth authentication.",
    image: scrollImg,
    live: "https://scroll-app.onrender.com",
    repo: "https://github.com/DB-1984/scroll-app",
    stack: ["Django", "Supabase", "PostgreSQL", "OAuth"],
  },

  {
    title: "DBWP",
    description: "Custom WordPress build with REST search system.",
    longDescription:
      "A custom WordPress development site showcasing REST API integration, dynamic search functionality, and lightweight no-plugin architecture.",
    image: dbwpImg,
    live: "https://dbwp-pro.onrender.com",
    repo: "https://github.com/DB-1984/dbwp-pro",
    stack: ["WordPress", "PHP", "REST API", "JavaScript"],
  },

  {
    title: "ePianos",
    description: "E-commerce platform for Yamaha dealer.",
    longDescription:
      "Built on a tailored starter theme, the ePianos website evolved far beyond its original structure into a fully bespoke platform. Modular code allows features to be added, modified, or disabled without plugin dependency. Opayo payment integration was embedded directly into the site to remove checkout friction. Dynamic meta queries surface related products, videos, and blog content to drive cross-sell behaviour. All WooCommerce templates are customised/overridden for optimal performance, with a custom dual desktop/mobile mega menu and AJAX add to cart. Performance, SEO, and mobile optimisation are core priorities, supported by Advanced Custom Fields and WP Rocket.",
    image: epianosImg,
    live: "https://epianos.co.uk",
    repo: "",
    stack: ["WooCommerce", "PHP", "JS/ES6", "REST API"],
  },

  {
    title: "React Portfolio",
    description: "Modern portfolio SPA built with React and Framer Motion.",
    longDescription:
      "A fully componentised React portfolio built with Vite, Tailwind CSS, and Framer Motion. Features reusable UI architecture, animated modal systems, data-driven rendering, and responsive SPA design patterns.",
    image: portfolioImg,
    live: "",
    repo: "https://github.com/DB-1984",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
];
