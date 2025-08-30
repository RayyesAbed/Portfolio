import { Link } from "react-router";
import "./ProjectInterface.css";
import ImageWithSkeleton from "../loading/ImageWithSkeleton";

const ProjectInterface = ({
  img,
  imgAlt,
  developmentStatus,
  projectHeader,
  link,
}) => {
  return (
    <Link to={link} className="project-interface">
      <ImageWithSkeleton
        height={350}
        width={500}
        imgSrc={img}
        imgAlt={imgAlt}
      />
      <div className="project-headers">
        <h4>{developmentStatus}</h4>
        <h2>{projectHeader}</h2>
      </div>
    </Link>
  );
};

export default ProjectInterface;
