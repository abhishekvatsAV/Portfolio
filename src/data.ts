import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./types";

export const skills: ISkill[] = [
  {
    name: "React",
  },
  {
    name: "Node",
  },
  {
    name: "Typescript",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Express",
  },
  {
    name: "Mongoose",
  },
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "C++",
  },
  {
    name: "SQL",
  },
  {
    name: "Python",
  },
];

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about:
      "a daily problem solver in <b>CodeChef</b>, <b>Codeforces</b> and <b>LeetCode</b> ",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Problem Tracker",
    description:
      "A valuable tool for avid DSA solvers and competitive programmers across multiple platforms. It enables problem tracking and provides visual insights into solved problems.",
    image_path: "/images/problemTrackerApp.png",
    deployed_url: "https://problemtracker.netlify.app/login",
    github_url: "https://github.com/abhishekvatsAV/problem-tracker-frontend",
    category: ["react"],
    key_techs: ["React", "Node", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 2,
    name: "Chat App",
    image_path: "/images/chatApp.png",
    deployed_url: "https://chit-talks-app.netlify.app/",
    github_url: "https://github.com/abhishekvatsAV/Chit_Chat_App_Frontend",
    category: ["node"],
    description:
      "Created a real-time messaging chat app using the MERN stack, powered by Socket.io for seamless communication. Secured user information with encrypted storage in MongoDB and enriched the app with a convenient Group Chat feature for enhanced collaboration.",
    key_techs: ["React", "Node", "Express", "MongoDB", "Chakra UI"],
  },

  {
    id: 3,
    name: "Memory Game",
    image_path: "/images/memoryGame.png",
    deployed_url: "https://memory-game-6fss.onrender.com/",
    github_url: "https://github.com/abhishekvatsAV/Memory_Game",
    category: ["react"],
    description:
      "Developed memory game using React JS with card flipping to match pairs, optimizing user experience with various Hooks.",
    key_techs: ["React", "CSS"],
  },

  {
    id: 4,
    name: "Calculator",
    image_path: "/images/calculator.png",
    deployed_url: "https://calculator-wljw.onrender.com/",
    github_url: "https://github.com/abhishekvatsAV/calculator",
    category: ["react"],
    description:
      "Basic Calculator App to solve simple arithmetic operations with a clean UI.",
    key_techs: ["React", "CSS"],
  },

  {
    id: 5,
    name: "Random Quote Generator",
    image_path: "/images/randomApp.png",
    deployed_url: "https://random-quote-machine-shc3.onrender.com/",
    github_url: "https://github.com/abhishekvatsAV/Random_Quote_Machine",
    category: ["react"],
    description:
      "React Application to generate random quotes with a single click and share them on Twitter. Using Rapid API.",
    key_techs: ["React", "Rapid API"],
  },
  {
    id: 6,
    name: "Portfolio",
    image_path: "/images/portfolio.png",
    deployed_url: "https://abhishekvats.tech/",
    github_url: "https://github.com/abhishekvatsAV/Portfolio",
    category: ["react"],
    description:
      "Personal Portfolio Website to showcase my skills and projects.",
    key_techs: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Typescript",
      "Redux",
    ],
  },
];
