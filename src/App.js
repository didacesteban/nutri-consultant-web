import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="row App-header">
        <div className="col col-lg-4 col-md-4 col-xs-12 text-left">
          <span className="App-title">Nutriconsultant.</span>
        </div>
        <div className="col col-lg-8 col-md-8 hidde-xs text-right">
          <span className="App-menu-item">Informate sobre nutrición</span>
          <span className="App-menu-item">¿Quienes somos?</span>
          <button className="App-menu-button">haz tu consulta</button>
        </div>
      </div>
    </div>
  );
}

export default App;
