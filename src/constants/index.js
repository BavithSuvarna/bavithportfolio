import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import achievement1 from "../assets/achievements/achievement-1.jpg";
import achievement2 from "../assets/achievements/achievement-2.jpg";
import achievement3 from "../assets/achievements/achievement-3.jpg";
import achievement4 from "../assets/achievements/achievement-4.jpg";


export const HERO_CONTENT = `I’m currently studying Computer Science at Sahyadri College of Engineering and Management Mangalore. I’m always looking for new challenges and love exploring ways to turn ideas into real, working solutions. I believe in continuous learning, and whether it’s through building projects or connecting with others, I’m always growing and evolving. I’m excited to see where this journey takes me and would love to connect with others who are equally passionate about tech, learning, and making an impact.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. While currently advancing my engineering education, I’ve built several impactful full stack projects using technologies such as React, Flask, MySQL, and PHP. I’ve also gained hands-on experience through professional job simulations in areas like software engineering, data analytics, and cybersecurity, alongside earning an AWS Cloud Practitioner certification. My journey began with a deep curiosity for how systems work, and has grown into a commitment to continuously learn and tackle new challenges. I thrive in collaborative environments and enjoy turning complex problems into clean, functional solutions. Beyond coding, I stay active, explore emerging technologies and maintain a keen interest in cricket as a way to stay balanced and energized.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "DeepLock",
    image: project1,
    description:
      "An AI-powered platform that detects deepfake media across multiple formats and securely records verification results using blockchain technology.",
    technologies: ["Python", "Tensorflow", "React", "Flask", "Smart Contracts(Blockchain)"],
    github: "https://github.com/yourusername/deeplock",
  },
  {
    title: "FakeShield",
    image: project2,
    description:
      "FakeShield is a machine learning-based system that detects fake social media accounts and AI-generated content by analyzing user behavior, profile data, and image authenticity.",
    technologies: ["Python (Flask)", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/BavithSuvarna/FakeShield",
  },
  // {
  //   title: "MallTrack",
  //   image: project3,
  //   description:
  //     "A PHP-based web application that streamlines mall operations through role-based access, rent tracking, and real-time data management using MySQL.",
  //   technologies: ["HTML", "CSS", "PHP", "MySQL"],
  //   github: "https://github.com/yourusername/malltrack",
  // },
  {
    title: "Personal Expense Tracker",
    image: project4,
    description:
      "A simple Node.js app for managing personal expenses: log new expenses, retrieve them by category or date, and analyze spending patterns. Features include spending analysis and daily/weekly/monthly summaries via cron jobs.",
    technologies: ["Node.js"],
    github: "https://github.com/BavithSuvarna/expense-tracker",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "TechVision Runner-Up",
    image1: achievement1,
    image2: achievement2,
    image3: achievement3,
    image4: achievement4,
    description:
      "Secured 2nd place for the DeepLock project at TechVision-2025, showcasing innovation in AI-based deepfake detection and blockchain security.",
    technologies: [],
  },
];



export const CONTACT = {
  // address: "Mansa Thandela House Pithrody, Udyavara ",
  // phoneNo: "+91 9611303210 ",
  email: "suvarnabavith@gmail.com",
};
