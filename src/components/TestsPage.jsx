import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './TestsPage.css';
import Navigator from './Navigator';
import Footer from './Footer';
import Tests from './Tests';


export default class TestsPage extends Component {
    render() {
        return (
        <div className='TestsPage'>
            <Navigator />
            <div className='ContentTests'>
            <br/><br/><br/><br/><br/>
            <Tests />
            <br/><br/><br/><br/><br/>
            </div>
            <Footer />
          </div>
        )
    }
}
