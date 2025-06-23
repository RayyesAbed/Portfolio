import "./Contact.css";
import socialMediaLinks from "../../constants/socialMediaLinks";
import CircularProgress from "@mui/material/CircularProgress";
import ContactImage from "/Contact.jpg";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  document.title = "ABED | Contact";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangeMessage = (event) => setMessage(event.target.value);

  const handleSendEmail = async (event) => {
    event.preventDefault();

    setIsPending(true);

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setIsPending(false);
        setIsSuccessful(true);
        setIsError(false);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setIsPending(false);
        setIsError(true);
        console.error("Error details:", error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="contact"
    >
      <section>
        <form onSubmit={handleSendEmail} id="contact-form">
          <h1>Get in touch</h1>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleChangeName}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChangeEmail}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={handleChangeMessage}
            required
          />
          <button disabled={isPending}>
            {isPending ? <CircularProgress color="gray" size={30} /> : "Submit"}
          </button>
          {isSuccessful && !isPending && (
            <p id="successful-email-text">Email sent successfully!</p>
          )}
          {isError && !isPending && (
            <p id="failure-email-text">Error while sending email</p>
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
