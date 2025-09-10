import { useTranslation } from "react-i18next";
import ImageWithSkeleton from "../../components/loading/ImageWithSkeleton";
import "./About.css";
import AboutImage from "/About.jpg";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();

  document.title = "ABED | About";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="about"
    >
      <ImageWithSkeleton
        height="70vh"
        width="100%"
        imgSrc={AboutImage}
        imgAlt="My About image"
      />
      <h1>{t("about.header")}</h1>
      <p>{t("about.text1")}</p>
      <p>{t("about.text2")}</p>
      <p>{t("about.text3")}</p>
      <p>
        {t("about.resume-paragraph")}
        <a href={t("about.resume-link")} target="_blank">
          {t("about.resume-text")} &#8599;
        </a>
      </p>
    </motion.div>
  );
};

export default About;
