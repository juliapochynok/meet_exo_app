import React, { Component, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from "react-transition-group";
import Home from './components/Home';
import Members from './components/Members';
import Navigator from './components/Navigator';
import HomeCarousel from './components/Carousel';
import Footer from './components/Footer';


class App extends Component {
  
  render() {
    return (
      <div className='App'>
      {/* <video className="video" loop autoPlay>
          <source src='assets/videoplayback.mp4' type="video/mp4" />
          <source src='assets/videoplayback.mp4' type="video/ogg" />
          Your browser does not support the video tag.
      </video> */}
      <Navigator />
      <div className='Content'>
      <br/><br/><br/><br/><br/>
      <HomeCarousel />
      <br/><br/><br/><br/><br/>
      {/* <Router>
        <div>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/members" component={Members}/>
        </div>
      </Router> */}
      <Home />
      <br/><br/><br/><br/><br/>
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;
