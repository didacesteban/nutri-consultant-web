import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from './App';
import Contact from './views/contact/Contact';

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/consulta-nutricional-online">
            <Contact />
          </Route>
        </Switch>
    </Router>
  );
}
