import React from 'react';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeadset, faUtensils } from '@fortawesome/free-solid-svg-icons'

function Blog() {
  return (
    <div>
      <Menu />
      <div className="Section-separator text-center">
        <div className="Section-title">
          Blog de <span className="Section-logo">Nutrición.</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
