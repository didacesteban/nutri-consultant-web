import React from 'react';
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.css';

function Menu() {
  return (
    <div className="Menu">
      <div className="row Menu-header">
        <div className="col col-lg-4 col-md-4 col-xs-12 text-left">
          <span className="Menu-title">Nutriconsultant.</span>
        </div>
        <div className="col col-lg-8 col-md-8 hidde-xs text-right">
          <span className="Menu-menu-item">Informate sobre nutrición</span>
          <span className="Menu-menu-item">¿Quienes somos?</span>
          <button className="Menu-menu-button">haz tu consulta</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
