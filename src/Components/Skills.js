const Skills = () => {

  const skills = [
    "PHP", "MySQL", "JavaScript", "API", "Tailwind", "Laravel",
    "Java", "C", "Git", "Github"
  ]
  return (
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
        </div>
        <div>
          <ul>
              {
                skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))
              }
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;