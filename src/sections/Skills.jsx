// src/sections/Skills.jsx

import { motion } from "framer-motion";
import SectionWrapper from "../components/hoc/SectionWrapper.jsx";
import { skills } from "../constants/index.js";

// This defines the fade-in animation for each skill icon
const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const SkillCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.05, 0.75)}
    whileHover={{ scale: 1.1, y: -5 }}
    className="w-28 h-28 flex flex-col items-center justify-center gap-2 p-4 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-blue-500/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
  >
    <img src={icon} alt={name} className="w-16 h-16 object-contain" />
    <p className="text-white text-xs text-center font-medium">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="relative w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                  <span className="w-1 h-6 bg-linear-to-b from-blue-500 to-cyan-500 rounded-full"></span>
                  {category.title}
                </h3>
                <div className="w-16 h-0.5 bg-linear-to-r from-blue-500 to-transparent"></div>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap justify-center gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <SkillCard
                    key={tech.name}
                    index={techIndex}
                    name={tech.name}
                    icon={tech.icon}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
