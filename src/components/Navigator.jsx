import React, { Component, useState } from 'react';
import './Navigator.css'


export default class Navigator extends Component {

    render() {
    
        return (
        <div className="Header">
            <nav>
                <a className="MainContainerA" href="/tests">Tests</a>
                <a className="MainContainerA"  href="/members">Members</a>
                <a href="/" className="MainTitle"> <strong>MEET &nbsp;
                <img href="/" className="Logo1" src={require("../logo.png")} alt="img-logo" />&nbsp; EXO</strong> </a>
                <a className="MainContainerA"  href="/discography">Discography</a>
                <a className="MainContainerA"  href="/info">Info</a>
            </nav>
        </div>
        
        )
    }
}


