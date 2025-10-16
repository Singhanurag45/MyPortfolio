// src/sections/Skills.jsx

import { motion } from "framer-motion";
import  SectionWrapper  from "../components/hoc/SectionWrapper.jsx";
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
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="w-28 h-28 flex flex-col items-center justify-center gap-2 p-4 glassmorphism shadow-lg hover:shadow-glow transition-all duration-300"
  >
    <img src={icon} alt={name} className="w-16 h-16 object-contain" />
    <p className="text-white text-sm text-center">{name}</p>
  </motion.div>
);

const Skills = () => {
  // First, flatten the nested array into a single array of all technologies
  const allTechnologies = skills.flatMap(category => category.technologies);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Technical Skills
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {/* Now, map over the single flattened array */}
        {allTechnologies.map((tech, index) => (
          <SkillCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
