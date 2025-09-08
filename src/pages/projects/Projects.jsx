import "./Projects.css";
import ProjectInterface from "../../components/projectInterface/ProjectInterface";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import projectAssets from "../../constants/projectAssets";

const Projects = () => {
  const { t } = useTranslation();

  document.title = t("projects.title");

  const projects = t("projects.list", { returnObjects: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="projects"
    >
      {projects.map((project) => {
        const staticAssets = projectAssets[project.projectName];
        return (
          <ProjectInterface
            key={project.projectHeader}
            img={staticAssets.mainImage}
            imgAlt={project.imgAlt}
            developmentStatus={project.developmentStatus}
            projectHeader={project.projectHeader}
            link={staticAssets.link}
          />
        );
      })}
    </motion.div>
  );
};

export default Projects;
