import Navbar from './components/navbar/Navbar';
import About from './components/pages/about/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
