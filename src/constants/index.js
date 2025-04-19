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
} from "../assets/icons";

export const skills = [
  {
    imageUrl: bitbucket,
    name: "Bitbucket",
    type: "Version Control",
    hover: false,
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
    hover: false,
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
    hover: false,
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    hover: false,
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
    hover: false,
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
    hover: false,
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    hover: false,
  },
  {
    imageUrl: jira,
    name: "Jira",
    type: "Agile",
    hover: false,
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    hover: false,
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
    hover: false,
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    hover: false,
  },
  {
    imageUrl: postgres,
    name: "PostgreSQL",
    type: "Backend",
    hover: false,
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    hover: false,
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
    hover: false,
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
    hover: false,
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
    hover: false,
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
    hover: false,
  },
];

export const experiences = [
  {
    title: "Senior Frontend Engineer",
    company_name: "ADP | Pune, India",
    icon: adp,
    iconBg: "#fbc3bc",
    iconDarkBg: "#1e293bf2",
    date: "March 2022 - August 2024",
    points: [
      "Integrated Benefits Assist MFE chatbot leveraging LLM to deliver intelligent and personalized responses to employee inquiries.",
      "Spearheaded the frontend development integration of Gen AI models into the Plan Setup page.",
      "Overhauled the user experience of the Launchpad web application by implementing a custom design system built with ReactJS, Redux, and TypeScript.",
      "Collaborated closely with the Product Managers and UX Designers to continuously introduce new features and ensure the application’s evolution aligns with changing user needs",
      "Initiated automated daily regression testing using Java and Selenium, reducing testing time by 30% and improving code.",
    ],
  },
  {
    title: "Senior Application Developer",
    company_name:
      "AGM Tech Solutions - on Contract at ADP  | Parsippany, New Jersey",
    icon: adp,
    iconBg: "#fbc3bc",
    iconDarkBg: "#1e293bf2",
    date: "July 2020 - February 2022",
    points: [
      "Architected a data extraction & auto-population solution for Benefits documents with custom insights & a PDF viewer for highlighting source data",
      "Mentored a 3-person frontend team using React JS, Redux, and TypeScript to digitize Plan Summary pages, enabling automated Summary of Benefits & Coverage document processing",
      "Engineered a React JS and Redux PDF annotation tool for 20 consultants, streamlining data extraction from 1600+ insurance documents, and improving machine learning model training accuracy to 93%.",
    ],
  },
  {
    title: "Application Developer",
    company_name:
      "Egen Solutions - on Contract at ADP | Parsippany, New Jersey",
    icon: adp,
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
    theme: "btn-back-blue",
    name: "SpaceX Launches",
    description:
      "Developed a React application built using Vite that provides details about all SpaceX launch missions.",
    githubLink: "https://github.com/unmey08/spacex-app",
    link: "https://spacex-react-app-alpha.vercel.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-red",
    name: "Propulse",
    description:
      "Created a property rental full-stack web application using Next.js, Tailwind and MongoDB",
    githubLink: "https://github.com/unmey08/propulse-property-finder",
    link: "https://propulse-property-finder.vercel.app/",
  },
  {
    iconUrl: chess,
    theme: "btn-back-green",
    name: "Chess.com Clone",
    description:
      "Developed a two-player Chess.com clone using NodeJS, ChessJS, Web sockets and EJS.",
    githubLink: "https://github.com/unmey08/chesscom-clone",
    link: "https://github.com/unmey08/chesscom-clone",
  },
  {
    iconUrl: movie,
    theme: "btn-back-pink",
    name: "Movie Database",
    description:
      "Created a React application that contains all the movies in the TMDB Database.",
    githubLink: "https://github.com/unmey08/movie-database-app",
    link: "https://pink-gaur-558324.hostingersite.com/",
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
