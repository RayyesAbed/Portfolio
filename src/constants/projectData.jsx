import PlanItImage from "/PlanItLogo.webp";
import PlanItTechnologies from "/PlanItTechnologies.jpg";
import PlanItAimImage from "/PlanItAimImage.png";

const projectData = {
  planit: {
    title: "PlanIt",
    introductionHeader: "PlanIt, The Intro",
    introductionImage: PlanItImage,
    introductionImageAlt: "PlanIt Image",

    introductionParagraph: [
      `PlanIt is a habit tracker website and in the future,
     an iOS application.`,
      `With PlanIt, you can use its core selling feature,
      AI story generation thanks to the powerful Google Gemini AI tool.`,
      `Afterwards you can view your stories and commit to them. You can view your progress in a chart or view them in a calendar. 
      `,
      `You can also tweak your story tasks. When you complete a task, you get points which you can use to customize your account, theme, and to
      buy more stories, but but but, be careful! if you don't manage to complete the task before its deadline, you lose points! So please commit to your tasks 😅`,
      `Currently PlanIt's code is available on GitHub. The website is soon to be released with a following iOS release later.`,
    ],
    technologiesHeader: "Technologies Used",
    technologiesImage: PlanItTechnologies,
    technologiesImageAlt: "Technologies Image",
    technologiesArray: [
      {
        name: "React",
        aim: "Frontend",
        reason:
          "A powerful and flexible UI library that allows me to build dynamic, component-driven interfaces with speed and scalability.",
      },
      {
        name: "Express",
        aim: "Backend",
        reason:
          " A lightweight and efficient Node.js framework that simplifies setting up HTTP routes and APIs. Its minimal setup and rich ecosystem make it ideal for rapid backend development.",
      },
      {
        name: "MongoDB",
        aim: "Database Management",
        reason:
          "A flexible NoSQL database that allows for dynamic schema design, making it easy to adapt as the application grows. Its scalability and developer-friendly syntax help avoid vendor lock-in.",
      },
      {
        name: "Git",
        aim: "Version Control",
        reason:
          "Essential for tracking changes, documenting, and maintaining a clean version history.",
      },
      {
        name: "GitHub",
        aim: "Remote Repository",
        reason:
          "The most popular platform for hosting Git repositories, enabling seamless collaboration, version control, and continuous deployment options.",
      },
      {
        name: "Postman",
        aim: "API Testing",
        reason:
          "A popular API Testing tool that I used for testing both my REST and GraphQL APIs.",
      },
    ],
    aimHeader: "My Target",
    aimParagraph: [
      `The aim of PlanIt is to make your journey, as a dreamer and as a future hero, unforgettable and personalized.`,
      ` Every feature is thoughtfully designed to inspire, guide, and empower you to turn your aspirations into reality. 
      Whether you’re adding tasks, creating stories, or tracking your progress, PlanIt provides a seamless,
       user-centered experience that adapts to your unique style and ambitions.`,
      `My mission is to support you every step of the way, 
       celebrating your progress, fueling your creativity, and ensuring that the path you create truly reflects who you are and where you want to go.`,
    ],
    aimImage: PlanItAimImage,
    aimImageAlt: "My Aim Image",
    website: "#", // to be changed later
    githubRepo: "#", // to be changed soon
  },
};

export default projectData;
