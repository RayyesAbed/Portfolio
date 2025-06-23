import "./Welcome.css";
import Coffee from "/Coffee.png";
import Abdallah from "/Abdallah.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Welcome = () => {
  document.title = "ABED | Welcome";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="welcome"
    >
      <section>
        <h2 id="hi-text">
          <Typewriter
            words={["Servus", "Hello", "مرحبا"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={3000}
          />
        </h2>
        <div id="welcome-paragraph">
          <p>
            Welcome to my website! I am Abdallah, a full stack web developer in
            the making. You can also call me Abed.
          </p>
          <p>
            Crafting websites is my passion! The idea behind developing a
            product that could be a game changer in our lives, is mind-blowing.
          </p>
          <p>
            Discover more about my projects and me in the navigation bar, and
            ways we can collaborate.
          </p>
          <p>Feel free to buy me a coffee, It would really make my day! </p>
          <a id="fuel-link" href="#" target="_blank" rel="noopener noreferrer">
            {/* I will add the real link later */}
            <img src={Coffee} alt="Coffee Icon" />
            <span> Fuel me</span>
          </a>
        </div>
      </section>
      <section>
        <img src={Abdallah} alt="Abdallah Image" id="my-image" />
      </section>
    </motion.div>
  );
};

export default Welcome;
