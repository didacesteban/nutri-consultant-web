import React from 'react';
import Menu from '../../components/menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeadset, faUtensils } from '@fortawesome/free-solid-svg-icons'

function Contact() {
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
    </div>
  );
}

export default Contact;
