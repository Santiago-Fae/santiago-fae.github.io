const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
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
        <div class="credits" style={{ color: "#74808a" }}>
          Made with <span style={{ color: "#e25555" }}>&hearts;</span> using
          React
        </div>
      </div>
    </footer>
  );
};

export default Footer;
