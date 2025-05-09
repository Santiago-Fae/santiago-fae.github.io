import SchoolIcon from "@material-ui/icons/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";

const Education = () => {
  const items = [
    {
      cardTitle: "Tamwood International College",
      cardSubtitle: "Web Development Program",
      cardDetailedText: [
        "The program focuses on the development of interactive and responsive websites using modern front-end technologies.",
        "Building dynamic websites with Content Management Systems (CMS)",
        "Integrating and consuming external APIs",
        "Writing clean, maintainable, and efficient code",
        "Preparing to work professionally as a Front-end Developer, with the ability to adapt to various roles in the web development industry.",
        "Includes 480 hours of real-world work experience, combining classroom instruction with hands-on industry practice.",
      ].map(function (course) {
        return <li>{course}</li>;
      }),
      date: "2025 - 2026",
    },
    {
      cardTitle: "University de Caxias do Sul",
      cardSubtitle: "Bachelor of Software Engineering",
      cardDetailedText: [
        "During college I got my first contact with the programming language C and Java.",
        "I was also introduced to the programming site 'https://www.beecrowd.com.br', which is made to train exercises and programming logic. I am in the top positions in my college, with more than 500 registered students and more than 200 solved exercises.",
        "And I had subjects like: Algorithms and data structure, database, software architecture...",
      ].map(function (course) {
        return <li>{course}</li>;
      }),
      date: "2020 - 2027",
    }
  ];

  return (
    <section id="education" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Education</h2>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => (
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
                  icon={<SchoolIcon />}
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
                      marginTop: "5px",
                    }}
                  >
                    {data.cardSubtitle}
                  </h4>
                  <h5
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1em",
                      fontWeight: "250",
                      color: "#7e8890",
                      marginTop: "5px",
                    }}
                  >
                    {data.coursesHead}
                  </h5>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                </VerticalTimelineElement>
              ))}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#0563bb",
                  color: "#fff",
                }}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
