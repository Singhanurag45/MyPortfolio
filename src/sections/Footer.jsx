// src/sections/Footer.jsx

import React from "react";
import { motion } from "framer-motion";

// Import your social and utility icons
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import leetcodeIcon from "../assets/leetcode-logo.png";
import emailIcon from "../assets/e-mail.png";
import arrowUpIcon from "../assets/up-arrow.png";

const socialLinks = [
  {
    name: "GitHub",
    icon: githubIcon,
    link: "https://github.com/Singhanurag45",
  },
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    link: "https://www.linkedin.com/in/anurag-singh-9598b4207/",
  },
  {
    name: "LeetCode",
    icon: leetcodeIcon,
    link: "https://leetcode.com/Anuragsingh_123",
  },
  {
    name: "Email",
    icon: emailIcon,
    link: "anuragsinghrbl2002@gmail.com",
  },
];

const footerLinks = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-tertiary py-12 px-6 sm:px-16 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* --- Main Footer Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Column 1: Brand & Info */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">Anurag Singh</h3>
            <p className="text-secondary text-sm">
              <span className="mr-2">👨‍💻</span> MERN Stack Developer based in
              Delhi, India <span className="ml-1">📍</span>
            </p>
            <p className="text-secondary text-xs mt-4">
              <span className="mr-2">✨</span> Built with React & Tailwind CSS
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              <span className="mr-2">🔗</span> Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="text-secondary hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              <span className="mr-2">🤝</span> Connect
            </h4>
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="transform hover:scale-125 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-7 h-7 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Sub-Footer with Copyright and Back to Top --- */}
        <div className="border-t border-gray-800 pt-6 flex justify-between items-center">
          <p className="text-secondary text-sm">
            Crafted with 💜 by Anurag Singh © {new Date().getFullYear()}. All
            Rights Reserved.
          </p>
          <button
            onClick={handleScrollToTop}
            className="bg-primary p-2 rounded-full hover:bg-[#915eff] transition-colors duration-300"
            title="Back to Top"
          >
            <img src={arrowUpIcon} alt="Back to Top" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
