"use client";
import "./Contact.css";
import socialMediaLinks from "../../constants/socialMediaLinks";
import CircularProgress from "@mui/material/CircularProgress";
import ContactImage from "/Contact.jpg";
import { useActionState } from "react";
import sendEmail from "../../action/sendEmail";
import { motion } from "framer-motion";

const Contact = () => {
  document.title = "ABED | Contact";

  const [state, formAction, isPending] = useActionState(sendEmail, {
    success: null,
    message: "",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="contact"
    >
      <section>
        <form action={formAction} id="contact-form">
          <h1>Get in touch</h1>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" name="message" required />
          <button disabled={isPending}>
            {isPending ? <CircularProgress color="gray" size={30} /> : "Submit"}
          </button>
          {state.message && (
            <p
              id="email-text"
              className={`${state.success ? "success" : "failure"}`}
            >
              {state.message}
            </p>
          )}
        </form>
      </section>
      <section>
        <img src={ContactImage} alt="Contact image" id="contact-image" />
        <ul id="social-media-accounts">
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank">
              <img src={link.icon} alt={link.alt} className={link.className} />
            </a>
          ))}
        </ul>
      </section>
    </motion.div>
  );
};

export default Contact;
