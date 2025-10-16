import { motion } from "framer-motion";
import { aboutSection } from "../constants";

const About = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto p-8 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-secondary sm:text-[18px] text-[14px] uppercase tracking-wider">
          {aboutSection.introduction}
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          {aboutSection.overview}
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]"
      >
        {aboutSection.text}
      </motion.p>

      {/* Education Details */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 text-left bg-tertiary p-8 rounded-2xl max-w-3xl mx-auto"
      >
        <h3 className="text-white font-bold text-3xl mb-4">Education</h3>
        <p className="text-white text-xl font-semibold">
          {aboutSection.education.institution}
        </p>
        <p className="text-secondary text-lg">
          {aboutSection.education.degree} — {aboutSection.education.gpa}
        </p>
        <p className="text-secondary text-base mb-4">
          {aboutSection.education.years}
        </p>
        <p className="text-white text-lg font-semibold mb-2">
          Relevant Coursework:
        </p>
        <ul className="list-disc pl-5 text-secondary">
          {aboutSection.education.coursework.map((course, index) => (
            <li key={index} className="mb-1">
              {course}
            </li>
          ))}
        </ul>
      </motion.div>

    </div>
  );
};

export default About;
