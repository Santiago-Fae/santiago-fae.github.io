import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    {
      cardTitle: "CheckouTT - API Twitter",
      cardSubtitle: "Personal Project",
      cardDetailedText: [
        "A Twitter API that manipulates the data of the given user, returning the other users who most interacted with him.",
        "Ranked in order of likes, retweets and replies on Twitter.",
        "It was not developed through courses, it is a totally authentic project.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["PHP", "API", "JavaScript"],
      links: [],
    },
    {
      cardTitle: "DWG - Parts quality control system",
      cardDetailedText: [
        "System developed together with the website and integrated into the CMS.",
        "Multiple languages (Integrated with ChatGPT to assist with automatic translation)",
        "Several steps and flows (Inspection Requests, Updates on inspections of a part, Contracts)",
        "Modeled and developed the entire database and back-end of the application",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["PHP", "MySQL", "JavaScript", "API", "Git"],
      links: [],  
    },
    {
      cardTitle: "Lauri Romario Silva - Website",
      cardSubtitle: "Freelancer",
      cardDetailedText: [
        "Developed the front and back (I didn't do the layout)",
        "Developed the management of all content in a proprietary and personalized CMS platform",
        "Accept cookies is a module developed from scratch by me, implemented in all the company's websites.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["PHP", "MySQL", "JavaScript", "Tailwind"],
      links: [
        {
          url: "https://www.lauriromariosilva.com.br/",
          text: "Website",
        },
      ],
    },
/*     {
      cardTitle: "Finance Assistant Chatbot",
      cardDetailedText: [
        "Created a chatbot for Fin-tech companies for helping students regarding finances.",
        "Tech stack comprises of Django, Rasa NLU and Postgresql.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "Django", "Rasa"],
      links: [
        {
          url: "https://github.com/Sitanshuk/HackPython",
          text: "View Source Code",
        },
      ],
    } */
  ];

  const [limit, setLimit] = useState(3);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  };

  const addButton = () => (
    <Fab color="primary" color="blue" aria-label="add">
      <AddIcon />
    </Fab>
  );

  return (
    <section id="projects" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Projects</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip key={i} label={name}></Chip>
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "12",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "350",
                      color: "#7e8890",
                      marginTop: "5px",
                    }}
                  >
                    {data.cardSubtitle}
                  </h4>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                  <div className="project-links">
                    {data.links.map((link, j) => (
                      <div>
                        <br></br>
                        <Button
                          key={j} // eslint-disable-line react/no-array-index-key
                          variant="contained"
                          color="default"
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <RemoveIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
