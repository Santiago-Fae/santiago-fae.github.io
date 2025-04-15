import img from "../assets/img/me/me-space-apps.jpg";
import Typed from "react-typed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

export default function Hero() {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
      <Container data-aos="zoom-in" data-aos-delay="500">
        <Row>
          <Col lg={6} className="item-center">
            <h1>Santiago Faé</h1>
            <br />
            <p>
              I'm a&nbsp;
              <span
                class="typed"
                data-typed-items="Developer, Tabla Player, Gamer"
              >
                <Typed
                  strings={["Developer", "Soccer Lover", "Full-Stack", "Chess Player"]}
                  loop
                  typeSpeed={90}
                  backSpeed={60}
                  smartBackspace
                  shuffle={false}
                  backDelay={500}
                  fadeOut={true}
                  fadeOutDelay={200}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span>
            </p>
            <div class="social-links">
              <a href="https://github.com/Santiago-Fae" aria-label='My github account'>
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/santiago-fae-92322020a/" aria-label='My linkedin account'>
                <i class="bx bxl-linkedin"></i>
              </a>
              <a href="mailto:santiagopoffo@hotmail.com" aria-label='My mail account'>
                <i class="bx bx-envelope"></i>
              </a>
              <a href="https://www.beecrowd.com.br/judge/pt/profile/573539" aria-label='My beecrowd profile'>
                <i class="bx bx-code-alt"></i>
              </a>
              <a href="https://www.instagram.com/santi_fae/" aria-label='My instagram account'>
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="https://www.chess.com/member/santi_fae" aria-label='My chess account'>
                <i class="bx bxs-chess"></i>
              </a>
            </div>
            <br />
            <Button
              variant="outlined"
              target="_blank"
              href="https://drive.google.com/file/d/10WmhuvEZbLGuSS4DnAzPmvNecTWxjLcv/view?usp=sharing"
              startIcon={<CloudDownloadIcon />}
              style={{
                color: "rgb(116, 128, 138)",
                borderColor: "rgb(116, 128, 138)",
              }}
            >
              Download Resume
            </Button>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <img
              src={img}
              height="100%"
              width="65%"
              style={{
                borderRadius: "30px",
                padding: "15px",
              }}
              alt="Me image in NASA Space Apps"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
