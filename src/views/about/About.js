import React from 'react';
import Menu from '../../components/menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeadset, faUtensils } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <div>
      <Menu sectionActive={'about'} />
      <div className="Section-separator text-center">
        <div className="Section-title">
          ¿Quienes somos <span className="Section-logo">Nutriconsultant.</span>?
        </div>
      </div>
    </div>
  );
}

export default About;
