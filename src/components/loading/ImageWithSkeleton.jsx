import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageWithSkeleton = ({
  height,
  width,
  isSkeletonCircle,
  imgSrc,
  imgAlt,
  imgId,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <Skeleton
          height={height}
          width={width}
          circle={isSkeletonCircle}
          baseColor="#666"
          highlightColor="#888"
        />
      )}
      <img
        src={imgSrc}
        alt={imgAlt}
        onLoad={() => setLoaded(true)}
        style={loaded ? { display: "block" } : { display: "none" }}
        id={imgId}
      />
    </>
  );
};

export default ImageWithSkeleton;
