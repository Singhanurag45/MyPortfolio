// src/sections/Achievements.jsx
import { motion } from "framer-motion";
import { achievements } from "../constants"; // Ensure this is imported

const AchievementCard = ({ title, description, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-tertiary p-5 rounded-2xl w-full"
  >
    <h3 className="text-white font-bold text-xl">{title}</h3>
    <p className="mt-2 text-secondary text-sm">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-400 hover:underline mt-4 inline-block"
    >
      View Link
    </a>
  </motion.div>
);

const Achievements = () => {
  return (
    <div id="achievements" className="max-w-7xl mx-auto p-8">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
        Achievements
      </h2>
      <div className="mt-12 flex flex-col gap-7 justify-center max-w-3xl mx-auto">
        {achievements.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
