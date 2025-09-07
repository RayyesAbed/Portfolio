import "./Welcome.css";
import Coffee from "/Coffee.png";
import Abdallah from "/Abdallah.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ImageWithSkeleton from "../../components/loading/ImageWithSkeleton";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();

  document.title = t("welcome.title");

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
          <p>{t("welcome.intro")}</p>
          <p>{t("welcome.passion")}</p>
          <p>{t("welcome.discover")}</p>
          <p>{t("welcome.coffee")} </p>
          <a
            id="fuel-link"
            href="https://buymeacoffee.com/abed_alrayyes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Coffee} alt="Coffee Icon" />
            <span> {t("welcome.fuel-me")}</span>
          </a>
        </div>
      </section>
      <section>
        <ImageWithSkeleton
          height={400}
          width={400}
          isSkeletonCircle={true}
          imgSrc={Abdallah}
          imgAlt="Abdallah Image"
          imgId="my-image"
        />
      </section>
    </motion.div>
  );
};

export default Welcome;
