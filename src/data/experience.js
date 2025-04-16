const experienceData = [
  {
    date: "April 2024 - Present",
    cardTitle: "PlanMob",
    cardSubtitle: "Full Stack Developer",
    cardDetailedText: [
      "Developed the Clock project backend with NestJS, ensuring security, scalability, and maintainability.",
      "Implemented JWT and OAuth2 authentication.",
      "Built a microservices architecture with RabbitMQ for asynchronous communication and WebSockets for real-time notifications.",
      "Created unit and integration tests to enhance reliability and minimize errors.",
      "Contributed to the Angular frontend by developing dynamic forms and screens."
    ],
    links: []
  },
  {
    date: "June 2021 - April 2024",
    cardTitle: "Ilex",
    cardSubtitle: "Full Stack Developer",
    cardDetailedText: [
      "Developed the back-end for websites using the company’s content management system, following the architectural standards of model-view-controller, object-relational mapping using the active record pattern, and CRUD operations.",
      "Developed a customized web system for DWG Quality, covering the entire quality control cycle, including requests and process updates, automatic email notifications, management screens, and a customer interface for quality control tracking.",
      "Integrated application programming interfaces from ChatGPT, Instagram, and Twitter, enhancing website functionality and online presence.",
      "Implemented search engine optimization strategies to improve search rankings, boost organic traffic, and enhance visibility.",
    ],
    links: [      
      {
        url: "https://ilex.com.br/",
        text: "Website",
      },    
      {
        url: "https://www.linkedin.com/company/ilexagenciatech/posts/?feedView=all",
        text: "Linkedin",
      },
    ]
  },
  {
    date: "June 2022 – Present",
    cardTitle: "Freelancer",
    cardSubtitle: "Full Stack Developer",
    cardDetailedText: [
      "After a year of experience I started working independently on several projects.",
      "From creating small applications to entire websites.",
      "I took the opportunity to leave my comfort zone and develop projects in other languages ​​such as Java.",
    ],
    links: []
  },
];

// Helper function to get the formatted data for the Experience component
const getExperienceData = () => {
  return experienceData.map(project => ({
    ...project,
    cardDetailedText: project.cardDetailedText.map(text => <li>{text}</li>)
  }));
};

// Helper function to get the raw project data for the ProjectDetail component
const getProjectDetailsData = () => {
  return experienceData;
};

export { experienceData, getExperienceData, getProjectDetailsData };