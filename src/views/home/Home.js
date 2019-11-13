import React from 'react';
import Menu from '../../components/menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeadset, faUtensils } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div>
      <Menu />
      <div className="Section-separator text-center">
        <div className="Section-title">
          Bienvenido a <span className="Section-logo">Nutriconsultant.</span>
        </div>
        <div className="Section-description">
          Descubre los puntos débiles en tu alimentación, los motivos que los han ocasionado y trabajemos juntos para corregirlos. <br/>
          <b>Sin presión ni obsesión.</b>
        </div>
      </div>
      <div className="row App-section">
        <div className="col col-lg-4 col-md-4 col-xs-12 text-center">
          <div className="Section-icon"><FontAwesomeIcon icon={faComment} /></div>
          <div className="Section-title-small">Escríbenos</div>
          Mándanos una consulta sobre nutición por e-mail y te ayudaremos lo antes posible
        </div>
        <div className="col col-lg-4 col-md-4 col-xs-12 text-center">
          <div className="Section-icon"><FontAwesomeIcon icon={faHeadset} /></div>
          <div className="Section-title-small">Online</div>
          Concierta una consulta online con nuestros nutricionistas
        </div>
        <div className="col col-lg-4 col-md-4 col-xs-12 text-center">
          <div className="Section-icon"><FontAwesomeIcon icon={faUtensils} /></div>
          <div className="Section-title-small">Aprende</div>
          Informate sobre nutrición y adopta un estilo de vida más saludable
        </div>
      </div>
    </div>
  );
}

export default Home;
