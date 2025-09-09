import "./ProjectDetails.css";
import projectData from "../../constants/projectData";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import {
  imageAnimationVariants,
  textAnimationVariants,
} from "../../constants/animationVariants";
import { useTranslation } from "react-i18next";

const ProjectDetails = () => {
  const { projectName } = useParams(); // destructure the clicked project name

  const { i18n } = useTranslation();

  const projectDetails = projectData[projectName];

  document.title = `ABED | Projects | ${projectDetails.title}`;

  return (
    <motion.div id="project-details">
      {/* Intro section */}
      <section>
        <motion.img
          variants={imageAnimationVariants}
          initial="initial"
          animate="animate"
          transition={imageAnimationVariants.transition}
          src={projectDetails.introductionImage}
          alt={projectDetails.introductionImageAlt[i18n.language]}
        />
        <motion.div
          variants={textAnimationVariants}
          initial="initial"
          animate="animate"
          transition={textAnimationVariants.transition}
        >
          <h1>{projectDetails.introductionHeader[i18n.language]}</h1>
          <div>
            {projectDetails.introductionParagraph[i18n.language].map(
              (paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              )
            )}
          </div>
        </motion.div>
      </section>
      {/* Technologies Used section */}
      <section>
        <motion.div
          variants={textAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={textAnimationVariants.transition}
          viewport={{ once: true }}
        >
          <h1>{projectDetails.technologiesHeader[i18n.language]}</h1>
          <ol>
            {projectDetails.technologiesArray[i18n.language].map(
              (technology) => (
                <li key={technology.name}>
                  <span style={{ fontWeight: 700 }}>{technology.name}</span>
                  <span> - </span>
                  <span>{technology.aim}</span>
                  <span> - </span>
                  <span>{technology.reason}</span>
                </li>
              )
            )}
          </ol>
        </motion.div>
        <motion.img
          variants={imageAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={imageAnimationVariants.transition}
          viewport={{ once: true }}
          src={projectDetails.technologiesImage}
          alt={projectDetails.technologiesImageAlt[i18n.language]}
        />
      </section>
      {/* Project Aim section */}
      <section>
        <motion.img
          variants={imageAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={imageAnimationVariants.transition}
          viewport={{ once: true }}
          src={projectDetails.aimImage}
          alt={projectDetails.aimImageAlt[i18n.language]}
        />
        <motion.div
          variants={textAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={textAnimationVariants.transition}
          viewport={{ once: true }}
        >
          <h1>{projectDetails.aimHeader[i18n.language]}</h1>
          <div>
            {projectDetails.aimParagraph[i18n.language].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
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
