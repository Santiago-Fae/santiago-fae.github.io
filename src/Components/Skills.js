const Skills = () => {

  const skills = [
    {
      name: "Programming Languages",
      items: [
        "JavaScript", "TypeScript", "Node.js", "PHP", "Java", "C"
      ]
    },
    {
      name: "Frameworks & Libraries",
      items: [
        "NestJS", "Angular", "Laravel", "Tailwind"
      ]
    },
    {
      name: "Architectural Patterns",
      items: [
        "Model-View-Controller (MVC)", "Clean Architecture", "Microservices"
      ]
    },
    {
      name: "Authentication & Security",
      items: [
        "JSON Web Tokens (JWT)", "OAuth2"
      ]
    },
    {
      name: "Database Management",
      items: [
        "MySQL", "MongoDB", "SQL", "NoSQL", "Active Record (ORM)"
      ]
    },
    {
      name: "Messaging & Communication",
      items: [
        "RabbitMQ", "WebSockets"
      ]
    },
    {
      name: "Testing & Quality Assurance",
      items: [
        "Unit Testing", "Integration Testing"
      ]
    },
    {
      name: "API Development & Integration",
      items: [
        "RESTful APIs", "Third-Party API Integration"
      ]
    },
    {
      name: "Web Development",
      items: [
        "Content Management Systems", "E-commerce Platforms", "Web Systems"
      ]
    },
    {
      name: "Version Control",
      items: [
        "Git", "GitHub", "GitLab"
      ]
    }
  ];
    return (
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
        </div>
        <div>
          <ul className="skills-list-container">
              {
  /*               skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                )) */
                skills.map((skill, i) => (
                  <li key={i}>
                    <strong>{skill.name}:</strong>
                     <ul className="skills-list">
                      {skill.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))
              }
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;