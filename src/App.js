import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import TenantCompany from './components/TenantCompany'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="container">
              <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1 className="App-title">Tenant Company</h1>
              </header>
              {/* <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p> */}
              <TenantCompany/>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
