import img from "./images/main-me.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  window.addEventListener('load', () => {
    const apiUrl = 'https://api.chess.com/pub/player/santi_fae/stats';
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(data => {
        displayData(data);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  });
  function displayData(data) {
    document.getElementById('DataChess').innerHTML = data.chess_rapid.last.rating;
  } 
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={img}
              height="100%"
              width="100%"
              style={{ borderRadius: "30px", maxWidth: "300px",  width: "100%" }}
              alt="Me image"
            />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Software Developer.</h3>
            <br></br>
            <p style={{ color: "#d8d8d8" }}>
              A Full Stack programmer, passionate about technology, with a stack of NodeJs, PHP, MongoDB, MySQL, Angular, Git and other small experiences, but always open to new ones. <br></br>
            </p>
            <p style={{ color: "#d8d8d8" }}>
              I've worked on complete projects on my own, I can be versatile in many areas and when necessary I work very well in a group, often taking responsibility for initiatives and acting as a leader.
            </p>
            <p style={{ color: "#d8d8d8" }}>
              Because I was very curious, I started to study programming by myself and today I already have 3+ years of experience.<br></br>
              I took part in some Hackathons, such as NASA Space Apps, where we developed an application in just two days.
              I'm passionate about challenges and situations that take me out of my comfort zone, because they force me to improve.
            </p>
            <p style={{ color: "#d8d8d8" }}>
            Besides programming, I have other hobbies, like chess, it has an elo of <span id="DataChess">1500+</span>, add me to play one day :) and I love soccer, I support Internacional (Porto Alegre's soccer team) <br></br>
            I also practice Krav Maga, an Israeli defense technique, I am currently a yellow belt.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
