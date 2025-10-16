import { motion } from "framer-motion";
import githubIcon from "../../assets/github.png"; // Make sure you have a github icon in assets

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            title="View Source Code"
            // UPDATED: Increased container size from w-10 h-10 to w-12 h-12
            className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
          >
            <img
              src={githubIcon}
              alt="github"
              // UPDATED: Increased icon size from w-1/2 h-1/2 to w-3/5 h-3/5 for better visibility
              className="w-3/5 h-3/5 object-contain"
            />
          </a>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-2xl">{name}</h3>
        <p className="mt-2 text-secondary text-sm">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-sm ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
