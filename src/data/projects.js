const projectsData = [
  {
    id: "checkoutt",
    cardTitle: "CheckouTT - API Twitter",
    cardSubtitle: "Personal Project",
    cardDetailedText: [
      "A Twitter API that manipulates the data of the given user, returning the other users who most interacted with him.",
      "Ranked in order of likes, retweets and replies on Twitter.",
      "It was not developed through courses, it is a totally authentic project.",
    ],
    fullDescription: `This is a personal project I developed to analyze Twitter data.
    The API manipulates the data of the given user, returning the other users who most interacted with them.
    The ranking is done by order of likes, retweets and replies on Twitter.
    It was an independently developed project, without following courses or tutorials.`,
    technologies: ["PHP", "API", "JavaScript"],
    links: [],
    images: []
  },
  {
    id: "majuseg",
    cardTitle: "Majuseg",
    cardSubtitle: "E-commerce",
    cardDetailedText: [
      "A great ecommerce, tailor-made for the customer.",
      "Personalized filters within the website, different prices according to the customer, among other unique features.",
      "It includes everything an ecomerce can have, coupons, shipping, shopping cart.",
      "Modeled and developed the entire database and back-end of the application",
      "Without any ready-made tools, such as wordpress.",
    ],
    fullDescription: `Majuseg is an e-commerce developed specifically for the client.
    I implemented personalized filters within the website, different prices according to the customer, among other unique features.
    It includes everything an e-commerce can have: coupons, shipping, shopping cart.
    I modeled and developed the entire database and back-end of the application without using ready-made tools, such as WordPress.`,
    technologies: ["PHP", "MySQL", "JavaScript", "API", "Git"],
    links: [
      {
        url: "https://www.majuseg.com.br/produtos?order=novidade&",
        text: "E-commerce",
      },
    ],
    images: []
  },
  {
    id: "dwg",
    cardTitle: "DWG",
    cardSubtitle: "Parts quality control system",
    cardDetailedText: [
      "System developed together with the website and integrated into the CMS.",
      "Multiple languages (Integrated with ChatGPT to assist with automatic translation)",
      "Several steps and flows (Inspection Requests, Updates on inspections of a part, Contracts)",
      "Modeled and developed the entire database and back-end of the application",
    ],
    fullDescription: `
    <p><strong>DWG</strong> is a parts quality control system that was developed together with the website and integrated into the CMS.<br>
    The system supports multiple languages (integrated with <strong>ChatGPT</strong> to assist with automatic translation).<br>
    It has various stages and flows, including inspection requests, updates on inspections of a part, and contracts.<br>
    I was responsible for modeling and developing the entire database and back-end of the application.<br>
    The system generates <strong>PDF</strong> reports that contain all the information about the inspection process.</p>
    
    <p>The system solves the problem of industrial parts quality control, allowing companies to manage the entire inspection process
    from initial request to final approval, all in an integrated digital environment.</p>
    
    <p><strong>The main features include:</strong></p>
    <ul>
      <li>Creation and management of inspection requests</li>
      <li>Real-time tracking of inspection status</li>
      <li>Support for multiple languages for international use</li>
      <li>Digital contracts system</li>
      <li>Detailed quality reports</li>
    </ul>
    `,    
    technologies: ["PHP", "MySQL", "JavaScript", "API", "Git"],
    links: [
      {
        url: "https://www.dwgquality.com/en",
        text: "Website",
      }
    ],
    page: "./project/dwg",
    images: [
      "/img/projects/dwg/system_dwg.png",
      "/img/projects/dwg/pdf.png",
      "/img/projects/dwg/informations.png"
    ]
  },
  {
    id: "product-system",
    cardTitle: "Product System - API",
    cardSubtitle: "Project",
    cardDetailedText: [
      "RESTful API developed using the NestJS framework. It follows the principles of Clean Architecture and the MVC pattern. The API uses DTOs for data transfer",
      "Project Architecture: Services, Infrastructure and Entities",
    ],
    fullDescription: `This project is a RESTful API developed using the NestJS framework.
    It follows the principles of Clean Architecture and the MVC pattern.
    The API uses DTOs for data transfer.
    
    The project architecture is divided into:
    - Services
    - Infrastructure
    - Entities
    
    This API allows complete management of products in a system, including CRUD operations and validations.`,
    technologies: ["NestJS", "TypeScript", "MySQL"],
    links: [
      {
        url: "https://github.com/Santiago-Fae/nestjs-products-system/",
        text: "Repository",
      },
    ],
    images: []
  },
  {
    id: "lauri-romario",
    cardTitle: "Lauri Romario Silva",
    cardSubtitle: "Freelancer",
    cardDetailedText: [
      "Developed the front and back (I didn't do the layout)",
      "Developed the management of all content in a proprietary and personalized CMS platform",
      "Accept cookies is a module developed from scratch by me, implemented in all the company's websites.",
    ],
    fullDescription: `This was a freelance project where I developed the front-end and back-end of the site (I didn't do the layout).
    I developed the management of all content in a proprietary and personalized CMS platform.
    
    A highlight of the project is the cookie acceptance module, which I developed from scratch and was implemented across all the company's websites.
    
    The site has complete content management functionality, allowing the client to easily update all information.`,
    technologies: ["PHP", "MySQL", "JavaScript", "Tailwind"],
    links: [
      {
        url: "https://www.lauriromariosilva.com.br/",
        text: "Website",
      },
    ],
    images: []
  }
];

// Helper function to get the formatted data for the Projects component
const getProjectsData = () => {
  return projectsData.map(project => ({
    ...project,
    cardDetailedText: project.cardDetailedText.map(text => <li>{text}</li>)
  }));
};

// Helper function to get the raw project data for the ProjectDetail component
const getProjectDetailsData = () => {
  return projectsData;
};

export { projectsData, getProjectsData, getProjectDetailsData };