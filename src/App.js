import React from 'react';
import Menu from './components/menu/Menu.js';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeadset, faUtensils } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <Menu />
      <div className="row App-section">
        <div className="col col-lg-4 col-md-4 col-xs-12 text-center">
          <div className="Section-icon"><FontAwesomeIcon icon={faComment} /></div>
          <div className="Section-title">Escríbenos</div>
          Mandanos una consulta sobre nutición por e-mail y te ayudaremos lo antes posible
        </div>
        <div className="col col-lg-4 col-md-4 col-xs-12 text-center">
          <div className="Section-icon"><FontAwesomeIcon icon={faHeadset} /></div>
          <div className="Section-title">Online</div>
          Concierta una consulta online con nuestros nutricionistas
        </div>
        <div className="col col-lg-4 col-md-4 col-xs-12 text-center">
          <div className="Section-icon"><FontAwesomeIcon icon={faUtensils} /></div>
          <div className="Section-title">Aprende</div>
          Informate sobre nutrición y adopta un estilo de vida más saludable
        </div>
      </div>
    </div>
  );
}

export default App;
