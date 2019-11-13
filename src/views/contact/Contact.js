import React from 'react';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeadset } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div>
      <Menu />
      <div className="Section-separator text-center">
        <div className="Section-title">
          Obtén soporte nutricional <span className="Section-logo">Online.</span>
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-6 col-md-6 col-xs-12 Contact-form-layout">
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Asunto</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Consulta a tratar" />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Consulta</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="form-group">
              <button type="button" class="btn btn-dark">Enviar consulta</button>
            </div>
          </form>
        </div>
        <div className="col col-lg-6 col-md-6 col-xs-12 Contact-logo-layout text-center">
          <div className="Contact-logo-center-layout">
            <div className="Contact-logo"><FontAwesomeIcon icon={faComment} /></div>
            A través de este formulario atenderemos lo antes posible cualquier tipo de <b>consulta sobre nutrición</b> o
            sobre la plataforma.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-6 col-md-6 col-xs-12 Contact-logo-layout text-center">
          <div className="Contact-logo-center-layout">
            <div className="Contact-logo"><FontAwesomeIcon icon={faHeadset} /></div>
            Déjanos tu e-mail y te mandaremos toda la información para poder concertar una <b>cita online</b> y empezar
            a trabajar en tu plan nutricional.
          </div>
        </div>
        <div className="col col-lg-6 col-md-6 col-xs-12 Contact-form-layout">
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <button type="button" class="btn btn-dark">Solicitar información</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
