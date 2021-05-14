import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HealthCheck from './components/health-check';

import AmplifyReduxAuth from './components/auth/Wrapper';

class AppInner extends Component {
  render() {
    return (
      <div className="App-wrap">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A new React App</h1>
        </header>
        <AmplifyReduxAuth logoText={'New App'}>
          <HealthCheck />
        </AmplifyReduxAuth>
      </div>
    );
  }
}

export default AppInner;
