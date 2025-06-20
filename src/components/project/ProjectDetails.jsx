import "./ProjectDetails.css";
import projectData from "../../constants/projectData";
import { useParams } from "react-router";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { projectName } = useParams(); // destructure the clicked project name

  const projectDetails = projectData[projectName];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="project-details"
    >
      {/* Intro section */}
      <section>
        <img
          src={projectDetails.introductionImage}
          alt={projectDetails.iintroductionImageAlt}
        />
        <div>
          <h1>{projectDetails.introductionHeader}</h1>
          <p>
            {projectDetails.introductionParagraph.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </p>
        </div>
      </section>
      {/* Technologies Used section */}
      <section>
        <div>
          <h1>{projectDetails.technologiesHeader}</h1>
          <ol>
            {projectDetails.technologiesArray.map((technology) => (
              <li key={technology.name}>
                <span style={{ fontWeight: 700 }}>{technology.name}</span>
                <span> - </span>
                <span>{technology.aim}</span>
                <span> - </span>
                <span>{technology.reason}</span>
              </li>
            ))}
          </ol>
        </div>
        <img
          src={projectDetails.technologiesImage}
          alt={projectDetails.technologiesImageAlt}
        />
      </section>
      {/* Project Aim section */}
      <section>
        <img src={projectDetails.aimImage} alt={projectDetails.aimImageAlt} />
        <div>
          <h1>{projectDetails.aimHeader}</h1>
          <p>
            {projectDetails.aimParagraph.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </p>
        </div>
      </section>
      <section>
        {/* Project Links section */}
        <div>
          <h1>Links</h1>
          <a href={projectDetails.githubRepo} target="_blank">
            GitHub Repo &#8599;
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetails;
