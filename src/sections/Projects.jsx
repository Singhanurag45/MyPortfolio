import { projects } from "../constants";
import ProjectCard from "../components/ui/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="max-w-7xl mx-auto p-8">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
        My Projects
      </h2>
      <div className="mt-12 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
