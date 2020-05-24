import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './DiscographyPage.css';
import Navigator from './Navigator';
import Footer from './Footer';
import Albums from './Albums';


export default class DiscographyPage extends Component {
    render() {
        return (
        <div className='DiscographyPage'>
            <Navigator />
            <br/><br/><br/>
            <div className='ContentMem'>
            <br/><br/><br/><br/><br/>
            <Albums />
            <br/><br/><br/><br/><br/>
            </div>
            <Footer />
          </div>
        )
    }
}

