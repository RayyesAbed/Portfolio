import PlanItImage from "/PlanItLogo.webp";
import PlanItTechnologies from "/PlanItTechnologies.jpg";
import PlanItAimImage from "/PlanItAimImage.png";

const projectData = {
  planit: {
    title: "PlanIt",
    introductionHeader: {
      en: "PlanIt, The Intro",
      de: "PlanIt, die Einführung",
    },
    introductionImage: PlanItImage,
    introductionImageAlt: {
      en: "PlanIt Image",
      de: "PlanIt Bild",
    },

    introductionParagraph: {
      en: [
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
      de: [
        `PlanIt ist eine Habit-tracker Website und eine angehende iOS App.`,
        `Mit PlanIt können Sie Storys generieren mithilfe des Google Gemini KI Tools`,
        `Anschließend können Sie Ihre Geschicht erledigen, und können Ihren Fortschritt in Kalender sowie einem Chart sehen.
      `,
        `Sie können Ihre Storys anpassen. Wenn Sie eine Aufgabe erledigen, bekommen Sie XPs, die Sie Themen, neue Geschichte, kaufen können. Allerdings, wenn Sie diese Aufgaben nicht vor dem Abgabetermin erledigen, dann verlieren Sie XPs, also aufpassen bitte 😅`,
        `Derzeit ist PlanIt unter Entwicklung. Der Code ist auf GitHub als Repo verfügbar. Die Webseite wird bald angekündigt und später wird eine iOS Anwendung entwickelt.`,
      ],
    },
    technologiesHeader: {
      en: "Technologies Used",
      de: "Verwendete Technologien",
    },
    technologiesImage: PlanItTechnologies,
    technologiesImageAlt: {
      en: "Technologies Image",
      de: "Technologien Bild",
    },
    technologiesArray: {
      en: [
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

      de: [
        {
          name: "React",
          aim: "Frontend",
          reason:
            "Eine sehr starke Bibliothek, um Benutzeroberflächen schnell zu entwickeln.",
        },
        {
          name: "Express",
          aim: "Backend",
          reason:
            "Ein leichtes und effizientes Node.js Framework, das HTTP und Programmierschnittstellen einfach einrichten kann, mit dem ich den Backend-Bereich schnell entwickeln kann",
        },
        {
          name: "MongoDB",
          aim: "Datenbankmanagement",
          reason:
            "Ein flexibles Datenbanksystem, das gut skalieren kann und Vendor Lock-in zu vermeiden versucht",
        },
        {
          name: "Git",
          aim: "Versionskontrolle",
          reason:
            "Ein unverzichtbares Tool für Dokumentation, Änderungen verfolgen, sowie die Pflege eines klaren Versionverlaufs",
        },
        {
          name: "GitHub",
          aim: "Remote-Repository",
          reason:
            "Sehr populäre Plattform zum Hosten von Git-Repos, die nahtlose Zusammenarbeit anbietet, und kontinuierliche Bereitstellung ermöglicht.",
        },
        {
          name: "Postman",
          aim: "API-Testtool",
          reason:
            "Ein bekanntes API-Testen Tool, mit dem ich meine REST und GraphQL APIs testen kann.",
        },
      ],
    },
    aimHeader: {
      en: "My Target",
      de: "Mein Ziel",
    },
    aimParagraph: {
      en: [
        `The aim of PlanIt is to make your journey, as a dreamer and as a future hero, unforgettable and personalized.`,
        ` Every feature is thoughtfully designed to inspire, guide, and empower you to turn your aspirations into reality. 
      Whether you’re adding tasks, creating stories, or tracking your progress, PlanIt provides a seamless,
       user-centered experience that adapts to your unique style and ambitions.`,
        `My mission is to support you every step of the way, 
       celebrating your progress, fueling your creativity, and ensuring that the path you create truly reflects who you are and where you want to go.`,
      ],
      de: [
        `Meine Absicht ist es, Ihren Weg als Träumer und künftiger Held unvergesslich, spitzenmäßig, sowie personalisiert.`,
        ` Jedes Feature ist gestaltet, um Sie zu begeistern und ermächtigen, um Ihre Träume als Wahrheit zu ermöglichen.
        Egal ob Sie Aufgaben hinzufügen, Geschichte erstellen, oder den Fortschritt verfolgen, Sie werden immer ein echtes großartiges
        Erlebnis, das Ihr Ehrgeiz anpasst.`,
        `Meine Mission ist es, Sie jeden Schritt zu unterstützen, Ihre Kreativität zu steigern und sicherzustellen, 
        dass der Weg, den Sie schaffen, wirklich widerspiegelt, wer Sie sind und wohin Sie wollen`,
      ],
    },
    aimImage: PlanItAimImage,
    aimImageAlt: {
      en: "My Aim Image",
      de: "Mein Ziel Bild",
    },
    website: "#", // to be changed later
    githubRepo: "https://github.com/RayyesAbed/PlanIt", // to be changed soon
  },
};

export default projectData;
