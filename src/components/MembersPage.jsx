import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './MembersPage.css';
import Navigator from './Navigator';
import Footer from './Footer';
import Members from './Members';


export default class MembersPage extends Component {
    render() {
        return (
            <div className='MembersPage'>
            <Navigator />
            <br/><br/><br/>
            <div className='ContentMem'>
            <br/><br/><br/><br/><br/>
            <Members />
            <br/><br/><br/><br/><br/>
            </div>
            <Footer />
          </div>
        )
    }
}



