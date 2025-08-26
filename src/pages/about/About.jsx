import "./About.css";
import AboutImage from "/About.jpg";
import { motion } from "framer-motion";

const About = () => {
  document.title = "ABED | About";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="about"
    >
      <img src={AboutImage} alt="My About image" />
      <h1>My Life</h1>
      <p>
        Since my childhood, I have always seen computers as a treasure. When I
        was 15, I learned HTML for the first time and the experience of writing
        my first website and the browser rendering it, was mind-blowing, a true
        game changer. it felt like I had discovered a hidden superpower inside
        my laptop.
      </p>
      <p>
        As I entered the university, I chose Computer Engineering as my major
        and began learning about core programming concepts like data structures,
        algorithms, and more. Those foundational courses had a huge impact on me
        and inspired my decision to transition fully into Computer Science.
      </p>
      <p>
        Afterwards I took a course in frontend development with React and not
        long after, I found an internship where I was introduced to both
        frontend and backend development. This is where I found my passion, and
        this is where I remembered my young self but this time, I found my path.
        Thanks to this experience, I decided to pursue a career a Full Stack Web
        Developer.
      </p>
      <p>
        You can take a look at my resume here:
        <a href="/resume-alrayyes.pdf" target="_blank">
          Resume &#8599;
        </a>
      </p>
    </motion.div>
  );
};

export default About;
