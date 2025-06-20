import "./Projects.css";
import ProjectInterface from "../../components/projectInterface/ProjectInterface";
import projects from "../../constants/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="projects"
    >
      {projects.map((project) => (
        <ProjectInterface
          key={project.projectHeader}
          img={project.img}
          imgAlt={project.imgAlt}
          developmentStatus={project.developmentStatus}
          projectHeader={project.projectHeader}
          link={project.link}
        />
      ))}
    </motion.div>
  );
};

export default Projects;
