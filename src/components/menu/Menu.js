import React from 'react';
import {
  Link
} from "react-router-dom";
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.css';

function Menu() {
  return (
    <div className="Menu">
      <div className="row Menu-header">
        <div className="col col-lg-4 col-md-4 col-xs-12 text-left">
          <Link to="/" className="Menu-link"><span className="Menu-title">Nutriconsultant.</span></Link>
        </div>
        <div className="col col-lg-8 col-md-8 hidde-xs text-right">
          <Link to="/blog-nutricion" className="Menu-link"><span className="Menu-menu-item">Informate sobre nutrición</span></Link>
          <Link to="/sobre-nutriconsultant" className="Menu-link"><span className="Menu-menu-item">¿Quienes somos?</span></Link>
          <Link to="/consulta-nutricional-online" className="Menu-link"><button className="Menu-menu-button">haz tu consulta</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
