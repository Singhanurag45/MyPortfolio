import { motion } from "framer-motion";
import githubIcon from "../../assets/github.png";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl w-full h-full flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-blue-500/50"
    >
      {/* Image Container */}
      <div className="relative w-full h-[240px] mb-5 overflow-hidden rounded-xl">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* GitHub Link */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 right-4"
        >
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            title="View Source Code"
            className="w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm flex justify-center items-center cursor-pointer hover:bg-blue-600 transition-colors duration-300 border border-slate-700 hover:border-blue-500"
          >
            <img
              src={githubIcon}
              alt="github"
              className="w-6 h-6 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
            />
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <motion.span
              key={tag.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`text-xs px-3 py-1 rounded-full bg-slate-700/50 backdrop-blur-sm border border-slate-600 ${tag.color} font-medium`}
            >
              {tag.name}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Hover Effect Border Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-xl"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
