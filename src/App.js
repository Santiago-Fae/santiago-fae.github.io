import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import Header from './Components/Header';
import Hero from './Components/Hero';
import Main from './Components/Main';
import AOS from "aos";
import "aos/dist/aos.css";
import useGoogleAnalytics from './Components/GoogleAnalytics'; // o caminho depende de onde você salvar o arquivo

AOS.init();

function App() {
  useGoogleAnalytics(); // Ativando o Google Analytics
  return (
    <div className="App" style={{background: "rgba(46, 45, 43, 1)"}}>
      <Header />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
