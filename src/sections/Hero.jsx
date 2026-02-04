import { motion } from "framer-motion";
import { hero } from "../constants";
import leetcodeIcon from "../assets/leetcode-logo.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center bg-[#050816]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        
        {/* Left Side: Terminal Style Content */}
        <div className="flex-1 font-mono">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-[#915eff] text-xl">const</span>{" "}
            <span className="text-white text-xl font-bold">developer</span> = {"{"}
          </motion.div>

          <div className="pl-6 border-l-2 border-[#915eff]/30">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white lg:text-[70px] sm:text-[50px] text-[40px] font-black"
            >
              name: <span className="text-[#915eff]">"{hero.name}"</span>,
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#dfd9ff] lg:text-[24px] sm:text-[20px] text-[16px] mt-2"
            >
              role: <span className="text-yellow-400">"{hero.tagline}"</span>,
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-500 italic mt-2"
            >
              // Building scalable apps & solving algorithms
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4"
          >
            {"}"};
          </motion.div>

          {/* Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {/* Contact Button */}
            <a href="#contact" className="bg-[#915eff] px-6 py-3 rounded-md font-bold hover:bg-opacity-80 transition-all flex items-center shadow-lg transform hover:scale-105">
              <span>contact.send()</span>
            </a>

            {/* Resume Button */}
            <a 
              href={hero.resumeLink} 
              download="Anurag_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#915eff] text-white px-6 py-3 rounded-md font-bold hover:bg-[#915eff]/10 transition-all flex items-center shadow-lg transform hover:scale-105"
            >
              <span>resume.download()</span>
            </a>
            
            {/* LeetCode Button */}
            <a 
              href={hero.leetcodeLink} 
              target="_blank" 
              className="border border-gray-500 text-gray-300 px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-white/5 transition-all shadow-lg transform hover:scale-105"
            >
              <img src={leetcodeIcon} alt="LeetCode" className="w-5 h-5" />
              <span>leetCode.view()</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: The "Code Window" Profile */}
        <div className="flex-1 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative p-1 rounded-2xl bg-gradient-to-br from-[#915eff] to-transparent shadow-2xl"
          >
            {/* Window Header */}
            <div className="bg-[#1d1836] rounded-t-xl p-3 flex gap-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="text-gray-400 text-xs ml-2 font-mono">anurag_profile.tsx</span>
            </div>
            
            <div className="overflow-hidden rounded-b-xl bg-[#050816]">
              <img
                src="/anurag-profile.png"
                alt="Anurag Singh"
                className="w-[280px] h-[320px] sm:w-[350px] sm:h-[400px] object-cover block grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Decorative Floating "Tags" */}
          <motion.div 
             animate={{ y: [0, -12, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-5 -right-5 bg-[#1d1836] p-3 rounded-lg border border-[#915eff] shadow-glow z-10"
          >
            <span className="text-[#915eff] font-mono text-sm font-bold">&lt;FullStack /&gt;</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;