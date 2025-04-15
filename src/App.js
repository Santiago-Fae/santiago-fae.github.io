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
import useGoogleAnalytics from './Components/GoogleAnalytics';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectDetail from './Components/ProjectDetail';

AOS.init();

function App() {
  useGoogleAnalytics();
  return (
    <Router>
      <div className="App" style={{background: "rgba(46, 45, 43, 1)"}}>
        <Header />
        <Switch>
          <Route exact path="/" render={() => (
            <>
              <Hero />
              <Main />
            </>
          )} />
          <Route path="/project/:projectId" component={ProjectDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;