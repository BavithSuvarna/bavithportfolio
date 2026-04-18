import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";

import achievement1 from "../assets/achievements/achievement-1.jpg";
import achievement2 from "../assets/achievements/achievement-2.jpg";
import achievement3 from "../assets/achievements/achievement-3.jpg";
import achievement4 from "../assets/achievements/achievement-4.jpg";
import achievement5 from "../assets/achievements/achievement-5.jpg";
import achievement6 from "../assets/achievements/achievement-6.jpg";

import experience1 from "../assets/experiences/experience-1.jpeg";
import experience2 from "../assets/experiences/experience-2.jpg";
export const HERO_CONTENT = `I’m currently studying Computer Science at Sahyadri College of Engineering and Management Mangalore. I’m always looking for new challenges and love exploring ways to turn ideas into real, working solutions. I believe in continuous learning, and whether it’s through building projects or connecting with others, I’m always growing and evolving. I’m excited to see where this journey takes me and would love to connect with others who are equally passionate about tech, learning, and making an impact.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. While currently advancing my engineering education, I’ve built several impactful full stack projects using technologies such as React, Flask, MySQL, and PHP. I’ve also gained hands-on experience through professional job simulations in areas like software engineering, data analytics, and cybersecurity, alongside earning an AWS Cloud Practitioner certification. My journey began with a deep curiosity for how systems work, and has grown into a commitment to continuously learn and tackle new challenges. I thrive in collaborative environments and enjoy turning complex problems into clean, functional solutions. Beyond coding, I stay active, explore emerging technologies and maintain a keen interest in cricket as a way to stay balanced and energized.`;

export const EXPERIENCES = [
  {
    year: "Jan 2026 - Present",
    role: "Software Engineer Intern",
    company: "Anvelos Softwares",
    image: experience1,
    description: `Working as a Software Engineer Intern at Anvelos Softwares, contributing to the development of innovative software solutions.`,
    technologies: ["Next.js", "AWS Cognito", "AWS S3"],
    companyUrl: "https://www.anvelos.com/",
  },
  {
    year: "Feb 2026 - Present",
    role: "Web Development Intern",
    company: "PAT Technologies",
    image: experience2,
    description: `Working as a Web Development Intern at PAT Technologies.`,
    technologies: ["ReactJS", "Python Libraries", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "DeepLock",
    image: project1,
    description:
      "An AI-powered platform that detects deepfake media across multiple formats and securely records verification results using blockchain technology.",
    technologies: ["Python", "Tensorflow", "React", "Flask", "Smart Contracts(Blockchain)"],
    github: "https://github.com/BavithSuvarna/DeepGuard",
  },
  {
    title: "QVista",
    image: project2,
    description:
      "QVista is a smart and user-friendly digital queue management system designed to streamline check-ins and reduce wait times. Users can effortlessly join the queue, while admins manage flow through real-time controls and status updates. With its clean interface and seamless experience.",
    technologies: ["MERN Stack", "REST APIs", "Git"],
    github: "https://github.com/BavithSuvarna/QVista",
    demo: "https://qvista.vercel.app"
  },
  {
    title: "Task Manager",
    image: project3,
    description:
      "Task Manager is a responsive full-stack web app that lets users register, log in, and manage tasks efficiently. It supports task creation, editing, completion, and deletion with a clean and intuitive UI. Built using the MERN stack and optimized for all devices.",
    technologies: ["MERN Stack", "REST APIs", "JWT Authentication"],
    github: "https://github.com/BavithSuvarna/Task-Manager",
    demo: "https://taskymanager.vercel.app"
  },
  {
    title: "Venture Jobs",
    image: project4,
    description:
      "VentureJobs is a responsive job listing platform built with React, Node.js, and Express, supporting job creation, browsing, and detailed views. It uses MongoDB for data storage and RESTful APIs for smooth backend integration. The project features dynamic routing, clean UI, and is deployed using Vercel with Git for version control.",
    technologies: ["MERN Stack", "REST APIs"],
    github: "https://github.com/BavithSuvarna/venturejobs",
    demo: "https://venturejobs.vercel.app"
  },
  {
    title: "FakeShield",
    image: project5,
    description:
      "FakeShield is a machine learning-based system that detects fake social media accounts and AI-generated content by analyzing user behavior, profile data, and image authenticity.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/BavithSuvarna/FakeShield",
  },
  {
    title: "My Portfolio",
    image: project6,
    description:
      "My personal portfolio website to showcase my skills, projects, and contact details.",
    technologies: ["React", "TailwindCSS", "Vercel"],
    github: "https://github.com/BavithSuvarna/bavithportfolio",
    demo: "https://bavithportfolio.vercel.app"
  },

  {
    title: "Personal Expense Tracker",
    image: project7,
    description:
      "A full-stack application that allows users to securely sign up, log in, and manage expenses in real time. Expenses can be added, edited, deleted, or filtered through a clean and responsive dashboard with category-wise summaries.",
    technologies: ["MERN Stack", "JWT Authentication", "Recharts", "REST APIs"],
    github: "https://github.com/BavithSuvarna/Personal-Expense-Tracker",
    demo: "https://easespend.vercel.app"

  },
];

export const ACHIEVEMENTS = [
  {
    title: "TechVision-2025 Runner-Up",
    images: [achievement1, achievement2, achievement3, achievement4],
    description:
      "Secured 2nd place for the DeepLock project at TechVision-2025, showcasing innovation in AI-based deepfake detection and blockchain security.",
    technologies: [],
  },
  {
    title: "Winners – Battle of Blue Whales: An Ultimate Auction Showdown",
    images: [achievement5, achievement6], // only 2 images here
    description:
      "Achieved first place in the “Battle of Blue Whales – An Ultimate Auction Showdown” competition held on 24th May 2025 at Sahyadri Carnival. Demonstrated strong analytical thinking, decision-making, and strategic bidding skills to outperform participants from various backgrounds.",
    technologies: [],
  },
];



export const CONTACT = {
  // address: "Mansa Thandela House Pithrody, Udyavara ",
  // phoneNo: "+91 9611303210 ",
  email: "suvarnabavith@gmail.com",
};
