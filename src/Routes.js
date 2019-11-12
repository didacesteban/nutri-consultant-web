import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/home/Home';
import Contact from './views/contact/Contact';
import About from './views/about/About';
import Blog from './views/blog/Blog';

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/consulta-nutricional-online">
            <Contact />
          </Route>
          <Route path="/sobre-nutriconsultant">
            <About />
          </Route>
          <Route path="/blog-nutricion">
            <Blog />
          </Route>
        </Switch>
    </Router>
  );
}
