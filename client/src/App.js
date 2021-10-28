import Navbar from './components/navbar/Navbar';
import About from './components/pages/about/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';
import Footer from './components/footer/Footer';
import FooterContact from './components/footer-contact/FooterContact';
import Allblogpage from './components/pages/all-blogs-page/Allblogpage';
import Single from './components/pages/single-blog-page/Single';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';

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
          <Route exact path="/allblogs">
            <Allblogpage />
          </Route>
          <Route exact path="/blog/:id">
            <Single />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
        <FooterContact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
