// src/constants/index.js
import project1Image from "../assets/megamart.png"; 
import project2Image from "../assets/MomentShare.png";

// Social media and profile pictures
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/e-mail.png";
import profilePic from "../assets/anurag-profile.png";

// Technology icons
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import express from "../assets/tech/express.png"; 
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git_github.png";
import cpp from "../assets/tech/cpp.png";
import javasql from "../assets/tech/mysql.png";
import java_icon from "../assets/tech/java.png"; 
import python_icon from "../assets/tech/python.png"; 
import postman from "../assets/tech/postman.png"; 

// leetocde
import leetCodeProfilePic from "../assets/Leetcode/leetcode-profile.png";
import badge100 from "../assets/Leetcode/2025-100-days.gif";
import badgeAnnual from "../assets/Leetcode/2025-50-days.gif";
import badgeAnother from "../assets/Leetcode/2024-100-days.gif";
import badgeFourth from "../assets/Leetcode/2024-50-days.gif";


export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "leetcode", title: "LeetCode" },
  { id: "achievements", title: "Achievements" },
  { id: "contact", title: "Contact" },
];

export const hero = {
  name: "Anurag Singh",
  tagline:
    "MERN Stack Developer building efficient, user-centric web applications.",
  profilePic: profilePic,
  leetcodeLink: "https://leetcode.com/Anuragsingh_123",
  resumeLink: "/AnuragSingh_Full_stack.pdf",
};

export const aboutSection = {
  introduction: "Introduction",
  overview: "Overview.", // UPDATED: Text from your resume's objective
  text: "A MERN Stack Developer and Computer Science student at MAIT with expertise in React, Node.js, and MongoDB, complemented by a strong foundation in Data Structures and Algorithms. Seeking to contribute to impactful projects by building efficient, user-centric web applications.",
  education: {
    institution: "Maharaja Agrasen Institute of Technology, Delhi",
    degree: "B.Tech in Computer Science",
    gpa: "CGPA: 7.673",
    years: "2023–2026", // UPDATED: Coursework from your resume
    coursework: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Software Engineering",
      "Artificial Intelligence",
    ],
  },

};

// UPDATED: Skills section based on your resume
export const skills = [
  {
    title: "Frontend",
    technologies: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "React", icon: reactjs },
      { name: "Tailwind CSS", icon: tailwind },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: express },
      { name: "MongoDB", icon: mongodb },
    ],
  },
  {
    title: "Languages & Databases",
    technologies: [
      { name: "C++", icon: cpp },
      { name: "Java", icon: java_icon },
      { name: "Python", icon: python_icon },
      { name: "MySQL", icon: javasql },
    ],
  },
  {
    title: "Tools & Technologies",
    technologies: [
      { name: "Git & GitHub", icon: git }, // You can add more tools like Vercel here if you have icons
      { name: "Postman", icon: postman }
    ],
  },
];

// UPDATED: Projects section based on your resume
export const projects = [
  {
    name: "Moment Share – Social Media Platform",
    description:
      "Developed a full-stack social media platform to share moments and updates. Implemented user authentication, post creation, likes, comments, and real-time updates. Built with React on the frontend and Node.js, Express, and MongoDB on the backend, delivering a responsive and interactive user experience.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "nodejs", color: "text-green-500" },
      { name: "express", color: "text-yellow-500" },
      { name: "mongodb", color: "text-green-600" },
      { name: "tailwind", color: "text-cyan-500" },
    ],
    image: project2Image,
    source_code_link: "https://moment-share-beta.vercel.app/",
  },
  {
    name: "MegaMart – Full-Stack E-commerce Platform",
    description:
      "Architected and developed a complete MERN stack e-commerce application from scratch. Implemented a RESTful API with Node.js for product management and secure, JWT-based user authentication. Designed a responsive frontend in React featuring product catalogs, a dynamic shopping cart, and user account functionality.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "nodejs", color: "text-green-500" },
      { name: "express", color: "text-yellow-500" },
      { name: "mongodb", color: "text-green-600" },
      { name: "tailwind", color: "text-cyan-500" },
    ],
    image: project1Image,
    source_code_link: "https://github.com/Singhanurag45/MegaMart",
  },
];

// UPDATED: LeetCode stats based on your resume and previous info
export const leetCodeStats = {
  profilePic: leetCodeProfilePic,
  username: "Anurag singh",
  handle: "Anuragsingh_123", // Updated handle from resume link
  rank: "277,899", // Keeping previous detailed stats
  solvedProblems: {
    total: 372, // Updated to 350+ from resume
    easy: "205/695",
    medium: "152/1911",
    hard: "15/865",
    totalAvailable: 3677,
  },
 
  badges: [
    { id: 1, image: badge100, name: "100 Days Badge 2025" },
    { id: 2, image: badgeAnnual, name: "Annual Badge 2025" },
    { id: 3, image: badgeAnother, name: "Another Badge" },
    { id: 4, image: badgeFourth, name: "Fourth Badge" },
  ],

  submissionsPastYear: 600,
  totalActiveDays: 180,
  maxStreak: 33,
};

// UPDATED: Achievements and Certificates section from your resume
export const achievements = [
  {
    title: "Solved 450+ DSA Problems",
    description:
      "Solved 350+ problems on LeetCode and 100+ on GeeksforGeeks, strengthening problem-solving skills and proficiency in core computer science concepts.",
    link: "https://leetcode.com/Anuragsingh_123/", // Updated LeetCode profile link
  },
  {
    title: "Finalist — BUILD WARS Hackathon",
    description:
      "Collaborated in a team of 4 to develop an innovative tech solution under time constraints at E-Summit 2025 (MAIT).",
    link: "https://drive.google.com/file/d/1GCrv4DYGOFj0xgO8nqBbWuGGWJxf-NEI/view",
  },
  {
    title: "Secured AIR-30 (Top 2%) in IPU-LEET 2023",
    description:
      "Achieved a top-tier rank in the B.Tech entrance examination, showcasing strong academic and analytical abilities.",
    link: "https://drive.google.com/file/d/15EmEZv7wtEYqHnw3S7MHz6ba1LcbVLHB/view",
  },
  {
    title: "Web Development Course — Udemy",
    description:
      "Completed a comprehensive web development course by Hitesh Choudhary, gaining practical skills in modern web technologies.",
    link: "https://www.udemy.com/certificate/UC-4725a447-f532-4b01-92ac-bfe165521573/",
  },
  {
    title: "Data Structures & Algorithms (C++) — Coding Blocks",
    description:
      "Earned a Certificate of Excellence from Coding Blocks, demonstrating advanced proficiency in DSA.",
    link: "https://drive.google.com/file/d/1KRoKcUOVNWtpJQyhAoAV7UPoE7eW6z5M/view?usp=sharing",
  },
];
