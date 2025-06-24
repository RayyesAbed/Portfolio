import emailjs from "@emailjs/browser";

const sendEmail = async (prevState, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const templateParams = {
    from_name: name,
    reply_to: email,
    message: message,
  };

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    );
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send email!" };
  }
};

export default sendEmail;
