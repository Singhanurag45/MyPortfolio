import { motion } from "framer-motion";
import { hero } from "../constants";
import leetcodeIcon from "../assets/leetcode-logo.png"; 
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left Side: Text Content & CTAs */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]"
          >
            Hii, I'm <span className="text-[#915eff]">{hero.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2"
          >
            {hero.tagline}
          </motion.p>

          {/* Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="bg-[#915eff] hover:bg-violet-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Contact Me
            </a>
            <a
              href={hero.resumeLink} // Make sure to add this to your constants file
              download="Anurag_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#915eff] text-[#915eff] hover:bg-[#915eff] hover:text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Download CV
            </a>

            <a
              href={hero.leetcodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#915eff] text-[#915eff] hover:bg-[#915eff] hover:text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <img
                src={leetcodeIcon}
                alt="LeetCode"
                className="w-6 h-6 mr-2 object-contain"
              />
              LeetCode
            </a>

          </motion.div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex-1 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
          >
            <img
              src="anurag-profile.png"
              alt="Anurag Singh"
              className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full object-cover border-8 border-tertiary shadow-glow"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
