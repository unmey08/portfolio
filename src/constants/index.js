import { adp, egen, agm } from "../assets/images";
import {
  bitbucket,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  jira,
  mongodb,
  nextjs,
  nodejs,
  postgres,
  react,
  redux,
  sass,
  tailwindcss,
  chess,
  typescript,
  rocket,
  movie,
  leaderboard,
} from "../assets/icons";

export const skills = [
  // Frontend
  { imageUrl: javascript, name: "JavaScript", group: "Frontend" },
  { imageUrl: typescript, name: "TypeScript", group: "Frontend" },
  { imageUrl: react, name: "React", group: "Frontend" },
  { imageUrl: nextjs, name: "Next.js", group: "Frontend" },
  { imageUrl: redux, name: "Redux", group: "Frontend" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", group: "Frontend" },
  // Backend
  { imageUrl: nodejs, name: "Node.js", group: "Backend" },
  { imageUrl: express, name: "Express", group: "Backend" },
  { imageUrl: postgres, name: "PostgreSQL", group: "Backend" },
  { imageUrl: mongodb, name: "MongoDB", group: "Backend" },
  // Tools
  { imageUrl: git, name: "Git", group: "Tools" },
  { imageUrl: github, name: "GitHub", group: "Tools" },
];

export const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "ADP | Vancouver, BC (Canada · Remote)",
    icon: adp,
    iconBg: "#fbc3bc",
    iconDarkBg: "#1e293bf2",
    date: "July 2025 - June 2026",
    points: [
      "🏆 Won 'Most Impactful Product Feature' award for building an end-to-end GenAI pipeline (Amazon Q, MCP servers) that compressed a recurring multi-week delivery process to under 2 hours.",
      "Built complex tax and compliance management UIs using React, Redux, and TypeScript for large-scale enterprise clients — including multi-entity account setup, tax jurisdiction configuration, and remittance workflows.",
      "Adopted ADP's AI-powered SDLC pipeline (GitHub Copilot, Amazon Q), automating story analysis, code generation, and PR creation from Jira tickets through QA verification, meaningfully compressing feature delivery cycle time.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "ADP | Pune (India)",
    icon: adp,
    iconBg: "#fbc3bc",
    iconDarkBg: "#1e293bf2",
    date: "March 2022 - August 2024",
    points: [
      "Overhauled the Launchpad web app UX by implementing a custom design system in React, Redux, and TypeScript — adopted across multiple product teams.",
      "Integrated a GenAI-powered Benefits chatbot (LLM) delivering personalised responses to thousands of employee inquiries.",
      "Cut regression testing time by 30% by introducing Selenium automation, freeing the team for feature work.",
    ],
  },
  {
    title: "Senior Application Developer",
    company_name:
      "AGM Tech Solutions - on Contract at ADP | Parsippany, NJ (US)",
    icon: agm,
    iconBg: "#fbc3bc",
    iconDarkBg: "#1e293bf2",
    date: "July 2020 - February 2022",
    points: [
      "Engineered a PDF annotation tool in React & Redux used by 20 consultants to process 1600+ insurance documents — improved ML model accuracy to 93%.",
      "Mentored a 3-person team to digitise Plan Summary pages, enabling automated Benefits & Coverage document processing.",
    ],
  },
  {
    title: "Application Developer",
    company_name: "Egen Solutions - on Contract at ADP | Parsippany, NJ (US)",
    icon: egen,
    iconBg: "#fbc3bc",
    iconDarkBg: "#1e293bf2",
    date: "January 2020 - June 2020",
    points: [
      "Created accessible, responsive React JS components for Workforce Now Launchpad Benefits pages, enabling implementation consultants to craft insurance plans for smaller businesses with an average employee size of 40.",
      "Actively engaged in the full SDLC, from analysis and design to development, integration, and testing.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: "mail-outline",
    link: "mailto:unmey08@gmail.com",
    className: "hover:text-teal-600",
  },
  {
    name: "GitHub",
    iconUrl: "logo-github",
    link: "https://github.com/unmey08",
    className: "hover:text-gray-500",
  },
  {
    name: "LinkedIn",
    iconUrl: "logo-linkedin",
    link: "https://www.linkedin.com/in/unmey",
    className: "hover:text-sky-600",
  },
];

export const projects = [
  {
    iconUrl: rocket,
    theme: "btn-back-orange",
    name: "SpaceX Launches",
    description:
      "React app fetching and displaying all SpaceX launch missions with filtering and mission details.",
    tech: "React 19 · TypeScript · Vite · Tailwind CSS · React Router",
    githubLink: "https://github.com/unmey08/spacex-app",
    link: "https://spacex-react-app-alpha.vercel.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-blue",
    name: "Propulse",
    description:
      "Full-stack property rental platform with listings, search, and user authentication.",
    tech: "Next.js 14 · TypeScript · Tailwind CSS · MongoDB · Mongoose",
    githubLink: "https://github.com/unmey08/propulse-property-finder",
    link: "https://propulse-property-finder.vercel.app/",
  },
  {
    iconUrl: movie,
    theme: "btn-back-pink",
    name: "Movie Database",
    description:
      "Browse and search millions of movies powered by the TMDB API with real-time Appwrite-backed state.",
    tech: "React 19 · Vite · Tailwind CSS · Appwrite",
    githubLink: "https://github.com/unmey08/movie-database-app",
    link: "https://pink-gaur-558324.hostingersite.com/",
  },
  {
    iconUrl: leaderboard,
    theme: "btn-back-yellow",
    name: "Leaderboard",
    description:
      "Dynamic leaderboard with add, update, delete, sorting, filtering, pagination, and confetti rewards.",
    tech: "React 19 · Node.js · Express · MongoDB · Tailwind CSS",
    githubLink: "https://github.com/unmey08/leaderboard-app",
    link: "https://leaderboard-app-mftq.onrender.com/",
  },
  {
    iconUrl: chess,
    theme: "btn-back-green",
    name: "Chess.com Clone",
    description:
      "Real-time two-player chess game with move validation, turn management, and live sync via WebSockets.",
    tech: "Node.js · Express · Socket.io · Chess.js · EJS",
    githubLink: "https://github.com/unmey08/chesscom-clone",
    link: "https://github.com/unmey08/chesscom-clone",
  },
];

export const options = [
  {
    icon: "sunny",
    text: "light",
    id: 1,
    uiText: "Light",
  },
  {
    icon: "moon",
    text: "dark",
    id: 2,
    uiText: "Dark",
  },
];
