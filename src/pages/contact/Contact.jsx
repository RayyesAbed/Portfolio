"use client";
import "./Contact.css";
import socialMediaLinks from "../../constants/socialMediaLinks";
import CircularProgress from "@mui/material/CircularProgress";
import ContactImage from "/Contact.jpg";
import { useActionState } from "react";
import sendEmail from "../../action/sendEmail";
import { motion } from "framer-motion";
import ImageWithSkeleton from "../../components/loading/ImageWithSkeleton";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  document.title = t("contact.title");

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
          <h1>{t("contact.header")}</h1>
          <input
            type="text"
            name="name"
            placeholder={t("contact.name")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.email")}
            required
          />
          <textarea
            placeholder={t("contact.message")}
            name="message"
            required
          />
          <button disabled={isPending}>
            {isPending ? (
              <CircularProgress color="gray" size={30} />
            ) : (
              t("contact.send-button")
            )}
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
        <ImageWithSkeleton
          height={530}
          width={660}
          imgSrc={ContactImage}
          imgAlt="Contact image"
          imgId="contact-image"
        />
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
