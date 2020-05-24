import React, { Component } from 'react'
import './ContactPage.css';
import Navigator from '../general/Navigator';
import Footer from '../general/Footer';
import Form from './Form';


export default class ContactPage extends Component {
    render() {
        return (
        <div className='InfoPage'>
         <video className="video2" loop autoPlay>
                <source src='assets/videoplayback.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Navigator />
            <Form />
            <Footer />
          </div>
        )
    }
}