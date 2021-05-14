import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

import AppInner from './App_Inner';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppInner />
        </div>
      </Provider>
    );
  }
}

export default App;
