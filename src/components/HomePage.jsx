import React, { Component, useState } from 'react';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from "react-transition-group";
import Home from './Home';
import Navigator from './Navigator';
import MainCarousel from './Carousel';
import Footer from './Footer';


class HomePage extends Component {
  
  render() {
    return (
      <div className='HomePage'>
      {/* <video className="video" loop autoPlay>
          <source src='assets/videoplayback.mp4' type="video/mp4" />
          <source src='assets/videoplayback.mp4' type="video/ogg" />
          Your browser does not support the video tag.
      </video> */}
      <Navigator />
      <div className='ContentHome'>
      <br/><br/><br/><br/><br/>
      <MainCarousel />
      <br/><br/><br/><br/><br/>
      <Home />
      <br/><br/><br/><br/><br/>
      </div>
      <Footer />
    </div>
    );
  }
}

export default HomePage;
