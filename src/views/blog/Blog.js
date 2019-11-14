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
        image: 'https://scontent-mad1-1.cdninstagram.com/vp/8fc2f8c44c2501706b13b1bd3d20a08c/5E479009/t51.2885-15/sh0.08/e35/s640x640/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 640w,https://scontent-mad1-1.cdninstagram.com/vp/a236940d650879077bf7d4b785668c92/5E4D9309/t51.2885-15/sh0.08/e35/s750x750/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 750w,https://scontent-mad1-1.cdninstagram.com/vp/3658178c6590b992ac03a395a0902b31/5E6AF3EC/t51.2885-15/e35/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 1080w',
        title: 'Hambre emocional',
        date: '13-07-1989',
        shortDescription: 'Aquellos días que nos sentimos tristes o sentimos un vacío y nos lleva a querer comer algo, porque sentimos que podemos llenar "eso que nos falta"',
        link: ''
      },{
        image: 'https://scontent-mad1-1.cdninstagram.com/vp/8fc2f8c44c2501706b13b1bd3d20a08c/5E479009/t51.2885-15/sh0.08/e35/s640x640/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 640w,https://scontent-mad1-1.cdninstagram.com/vp/a236940d650879077bf7d4b785668c92/5E4D9309/t51.2885-15/sh0.08/e35/s750x750/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 750w,https://scontent-mad1-1.cdninstagram.com/vp/3658178c6590b992ac03a395a0902b31/5E6AF3EC/t51.2885-15/e35/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 1080w',
        title: 'Hambre emocional 2',
        date: '18-12-1991',
        shortDescription: 'Aquellos días que nos sentimos tristes o sentimos un vacío y nos lleva a querer comer algo, porque sentimos que podemos llenar "eso que nos falta"',
        link: ''
      },{
        image: 'https://scontent-mad1-1.cdninstagram.com/vp/8fc2f8c44c2501706b13b1bd3d20a08c/5E479009/t51.2885-15/sh0.08/e35/s640x640/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 640w,https://scontent-mad1-1.cdninstagram.com/vp/a236940d650879077bf7d4b785668c92/5E4D9309/t51.2885-15/sh0.08/e35/s750x750/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 750w,https://scontent-mad1-1.cdninstagram.com/vp/3658178c6590b992ac03a395a0902b31/5E6AF3EC/t51.2885-15/e35/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 1080w',
        title: 'Hambre emocional',
        date: '13-07-1989',
        shortDescription: 'Aquellos días que nos sentimos tristes o sentimos un vacío y nos lleva a querer comer algo, porque sentimos que podemos llenar "eso que nos falta"',
        link: ''
      },{
        image: 'https://scontent-mad1-1.cdninstagram.com/vp/8fc2f8c44c2501706b13b1bd3d20a08c/5E479009/t51.2885-15/sh0.08/e35/s640x640/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 640w,https://scontent-mad1-1.cdninstagram.com/vp/a236940d650879077bf7d4b785668c92/5E4D9309/t51.2885-15/sh0.08/e35/s750x750/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 750w,https://scontent-mad1-1.cdninstagram.com/vp/3658178c6590b992ac03a395a0902b31/5E6AF3EC/t51.2885-15/e35/55952378_326616618046774_4503395431466775511_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110 1080w',
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
          {this.state.posts.map((post, index) => (
            <div className="col-md-6" key={index}>
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
