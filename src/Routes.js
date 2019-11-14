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
import Post from './views/blog/components/post/Post';

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
          <Route exact path="/blog-nutricion">
            <Blog />
          </Route>
          <Route path="/blog-nutricion/:id" children={<Post />} />
        </Switch>
    </Router>
  );
}
