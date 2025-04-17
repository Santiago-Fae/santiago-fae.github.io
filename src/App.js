import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import Header from './Components/Header';
import HeaderDetails from './Components/ProjectDetail/Header';
import Hero from './Components/Hero';
import Main from './Components/Main';
import AOS from "aos";
import "aos/dist/aos.css";
import useGoogleAnalytics from './Components/GoogleAnalytics';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';

AOS.init();

function App() {
  useGoogleAnalytics();
  return (
    <Router>
      <div className="App" style={{background: "rgba(46, 45, 43, 1)"}}>
        <Switch>
          <Route exact path="/" render={() => (
            <>
              <Header />
              <Hero />
              <Main />
            </>
          )} />
          {/* <Route path="/project/:projectId" component={ProjectDetail} /> */}
          <Route exact path="/project/:projectId" render={() => (
            <>
              <HeaderDetails />
              <ProjectDetail />
            </>
          )} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;