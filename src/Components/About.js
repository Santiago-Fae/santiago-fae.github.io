import img from "../assets/img/me/main-me.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  window.addEventListener('load', () => {
    const apiUrl = 'https://api.chess.com/pub/player/santi_fae/stats';
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error');
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
              I’m a Full Stack Developer passionate about technology, always eager to learn and explore new tools and methodologies. My main stack includes Node.js, PHP, MongoDB, MySQL, Angular, and Git. I also have experience with a range of other technologies and am always open to diving into new ones. <br></br>
            </p>
            <p style={{ color: "#d8d8d8" }}>
            With over 4 years of hands-on experience, I’ve worked on more than 100 content management systems, e-commerce platforms, and web applications. I’ve even developed the entire backend of a SaaS platform on my own. I’m versatile, capable of managing projects independently, but I also thrive in collaborative environments — often stepping up to lead initiatives when needed.
            </p>
            <p style={{ color: "#d8d8d8" }}>
            My journey began with curiosity — I taught myself how to code and never stopped learning since. I’ve participated in hackathons like NASA Space Apps, where I helped build a full application in just two days. I enjoy challenges and love stepping out of my comfort zone because that’s when real growth happens.
            </p>
            <p style={{ color: "#d8d8d8" }}>
            Beyond tech, I have a few other passions: I play chess (ELO <span id="DataChess">1500+</span> — feel free to challenge me sometime!), I’m a big fan of soccer (go Internacional!), and I practice Krav Maga, currently at orange belt level.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
