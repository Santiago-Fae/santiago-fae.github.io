import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  const items = [
    {
      date: "April 2024 - Present",
      cardTitle: "PlanMob",
      cardSubtitle: "Full Stack Developer",
      cardDetailedText: [
        "I started at the company with the clock project. I was in charge of building the entire backend, using NestJs, a Node Js framework.",
        "During development I applied JWT concepts for authentication, DTOs, microservices for scalability, queues using RabbitMQ, clean architecture and other standards for quality and easy code maintenance in the future. In addition, I applied unit tests and integration tests to guarantee functionality and prevent errors.",
        "When necessary, I also worked on the front-end with Angular to build forms and dynamic screens.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "June 2021 - April 2024",
      cardTitle: "Ilex",
      cardSubtitle: "Full Stack Developer",
      cardDetailedText: [
        "I developed, refactored and improved the company's own CMS and applied it to more than 50 websites and ecommerces.",
        "With the architectural standards adopted by the company of MVC, ORM (Active Record) and CRUD, I developed the back-end of websites, on the company's own CMS platform, adapting it to specifications and variations from client to client.",
        "Integrated APIs from major tech giants like ChatGPT, Instagram and Twitter",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "June 2022 – Present",
      cardTitle: "Freelancer",
      cardSubtitle: "Full Stack Developer",
      cardDetailedText: [
        "After a year of experience I started working independently on several projects.",
        "From creating small applications to entire websites.",
        "I took the opportunity to leave my comfort zone and develop projects in other languages ​​such as Java.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
/*     {
      date: "September 2019 – October 2019",
      cardTitle: "Techskills IT Consultants",
      cardSubtitle: "Backend Developer",
      cardDetailedText: [
        "Developed applications using Spring Framework for Backend Restful API’s.",
        "Wrote SQL/JPQL queries for Data persistence using Spring Data JPA.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "August 2018 – January 2019",
      cardTitle: "TechSkills IT Consultants",
      cardSubtitle: "Fullstack Developer Intern",
      cardDetailedText:
        "Developed a Meeting App website which handles all the data that happens in a meeting. In this project I developed several REST API's using Spring Boot and used the MVC architecture. These API's are being consumed in the frontend.",
    }, */
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#343a40" }}
                    date={data.date}
                    dateClassName="timeline-date"
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "#0563bb",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "14",
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
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
