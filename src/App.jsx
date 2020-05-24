import React, { Component, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MembersPage from './components/MembersPage';
import HomePage from './components/HomePage';
import TestsPage from './components/TestsPage';
import DiscographyPage from './components/DiscographyPage';
import InfoPage from './components/InfoPage';
import Navigator from './components/Navigator';
import Footer from './components/Footer';


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/members' component={MembersPage} />
        <Route path='/tests' component={TestsPage} />
        <Route path='/discography' component={DiscographyPage} />
        <Route path='/info' component={InfoPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
