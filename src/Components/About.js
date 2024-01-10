import img from "./images/me-5.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  window.addEventListener('load', () => {
    const apiUrl = 'https://api.chess.com/pub/player/santi_fae/stats'; // Substitua pelo URL da sua API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            // Manipule os dados da API aqui
            displayData(data);
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
  });
  function displayData(data) {
    // Exiba os dados da API aqui
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
              height="90%"
              width="50%"
              style={{ borderRadius: "50%", maxWidth: "300px",  width: "88%" }}
            />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Software Developer.</h3>
            <br></br>
            <p style={{ color: "#d8d8d8" }}>
              A Full Stack developer, passionate about technology, always looking to be better. <br></br>
              Because I was very curious, I started to study programming by myself and today I already have 2+ years of experience.
            </p>
            <br></br>
            <p style={{ color: "#d8d8d8" }}>
            Besides programming, I have other hobbies like Chess, it has an Elo of <span id="DataChess">1500+</span>, add me to play one day :) <br></br>
            I also practice Krav Maga, an Israeli defense technique, I am currently a yellow belt
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
