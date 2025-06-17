import { useEffect, useState } from "react";
import "./CoffeeLoader.css";

const CoffeeLoader = () => {
  const [phase, setPhase] = useState("filling");

  useEffect(() => {
    const fillTime = 4000; // 4 seconds to fill
    const pauseTime = 1000; // 1 second full
    const totalTime = fillTime + pauseTime;

    const timer = setTimeout(() => {
      setPhase("drinking");
    }, totalTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`coffee-container ${phase}`}>
      <div className="coffee-liquid">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none"></svg>
      </div>
      <div className="coffee-text">
        {phase === "filling"
          ? "Filling my coffee..."
          : "Drinking. Almost ready!"}
      </div>
    </div>
  );
};

export default CoffeeLoader;
