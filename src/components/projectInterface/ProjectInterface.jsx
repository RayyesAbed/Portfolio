import { Link } from "react-router";
import "./ProjectInterface.css";

const ProjectInterface = ({
  img,
  imgAlt,
  developmentStatus,
  projectHeader,
  link,
}) => {
  return (
    <Link to={link} className="project-interface">
      <img src={img} alt={imgAlt} />
      <div className="project-headers">
        <h4>{developmentStatus}</h4>
        <h2>{projectHeader}</h2>
      </div>
    </Link>
  );
};

export default ProjectInterface;
