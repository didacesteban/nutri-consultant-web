import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeadset, faUtensils } from '@fortawesome/free-solid-svg-icons'

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [{
        image: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/3c1454cbd4ba418d62c08c1d51fc431d/5E4916D4/t51.2885-15/sh0.08/e35/s640x640/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 640w,https://instagram.fmad3-7.fna.fbcdn.net/vp/091a95803812d67012a249799d3cede6/5E467DD4/t51.2885-15/sh0.08/e35/s750x750/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 750w,https://instagram.fmad3-7.fna.fbcdn.net/vp/25133263f66b0043f78a272210bd161b/5E68EA31/t51.2885-15/e35/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 1080w',
        title: 'Hambre emocional',
        date: '13-07-1989',
        shortDescription: 'Aquellos días que nos sentimos tristes o sentimos un vacío y nos lleva a querer comer algo, porque sentimos que podemos llenar "eso que nos falta"',
        link: ''
      },{
        image: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/3c1454cbd4ba418d62c08c1d51fc431d/5E4916D4/t51.2885-15/sh0.08/e35/s640x640/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 640w,https://instagram.fmad3-7.fna.fbcdn.net/vp/091a95803812d67012a249799d3cede6/5E467DD4/t51.2885-15/sh0.08/e35/s750x750/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 750w,https://instagram.fmad3-7.fna.fbcdn.net/vp/25133263f66b0043f78a272210bd161b/5E68EA31/t51.2885-15/e35/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 1080w',
        title: 'Hambre emocional 2',
        date: '18-12-1991',
        shortDescription: 'Aquellos días que nos sentimos tristes o sentimos un vacío y nos lleva a querer comer algo, porque sentimos que podemos llenar "eso que nos falta"',
        link: ''
      },{
        image: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/3c1454cbd4ba418d62c08c1d51fc431d/5E4916D4/t51.2885-15/sh0.08/e35/s640x640/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 640w,https://instagram.fmad3-7.fna.fbcdn.net/vp/091a95803812d67012a249799d3cede6/5E467DD4/t51.2885-15/sh0.08/e35/s750x750/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 750w,https://instagram.fmad3-7.fna.fbcdn.net/vp/25133263f66b0043f78a272210bd161b/5E68EA31/t51.2885-15/e35/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 1080w',
        title: 'Hambre emocional',
        date: '13-07-1989',
        shortDescription: 'Aquellos días que nos sentimos tristes o sentimos un vacío y nos lleva a querer comer algo, porque sentimos que podemos llenar "eso que nos falta"',
        link: ''
      },{
        image: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/3c1454cbd4ba418d62c08c1d51fc431d/5E4916D4/t51.2885-15/sh0.08/e35/s640x640/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 640w,https://instagram.fmad3-7.fna.fbcdn.net/vp/091a95803812d67012a249799d3cede6/5E467DD4/t51.2885-15/sh0.08/e35/s750x750/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 750w,https://instagram.fmad3-7.fna.fbcdn.net/vp/25133263f66b0043f78a272210bd161b/5E68EA31/t51.2885-15/e35/56759097_1044038035793748_262629007288821982_n.jpg?_nc_ht=instagram.fmad3-7.fna.fbcdn.net&_nc_cat=100 1080w',
        title: 'Hambre emocional 2',
        date: '18-12-1991',
        shortDescription: 'Aquellos días que nos sentimos tristes o sentimos un vacío y nos lleva a querer comer algo, porque sentimos que podemos llenar "eso que nos falta"',
        link: ''
      }]
    }
  }

  render () {
    return (
      <div>
        <Menu />
        <div className="Section-separator text-center">
          <div className="Section-title">
            Blog de <span className="Section-logo">Nutrición.</span>
          </div>
        </div>
        <div className="row Blog-content">
          {this.state.posts.map(post => (
            <div className="col-md-6">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0">{post.title}</h3>
                  <div className="mb-1 text-muted">{post.date}</div>
                  <p className="card-text mb-auto">{post.shortDescription}</p>
                  <a href="#" className="stretched-link">Leer más</a>
                </div>
                <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" src={post.image} width="250" height="250" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;
