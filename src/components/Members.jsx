import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


export default class Members extends Component {
    render() {
        return (
        // like container
        <Container> 
            <Jumbotron>
            <h2>MEMBERS</h2>
            </Jumbotron>
        </Container>
        )
    }
}