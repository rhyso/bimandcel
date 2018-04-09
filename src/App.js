import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import classNames from 'classnames';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="inner-div">
              <h1 className="App-title">Welcome to React</h1>
            </div>
        </header>
          <div className={classNames('big-div', 'title-area')}>
              <div className="inner-div">
                  <h1>Celyn Lloyd Thomas & Imogen Walker</h1>
              </div>
          </div>
          <div className={classNames('big-div', 'legend')}>
              <div className="inner-div">
              </div>
          </div>

          <div className={classNames('big-div', 'details')}>
              <div className="inner-div">
                <h2>DETAILS</h2>
              </div>
          </div>


          <div className={classNames('big-div', 'location')}>
              <div className="inner-div">
                <h2>LOCATION</h2>
                  <h3>Ceremony at 12 noon at the Catholic Parish of St Mary’s, Bulwark Road, Chepstow, NP16 5JE
                  </h3>
              </div>
          </div>

          <div className={classNames('big-div', 'transport')}>
              <div className="inner-div">
                <h2>TRANSPORT</h2>
              </div>
          </div>

          <div className={classNames('big-div', 'social')}>
              <div className="inner-div">
                <h2>SOCIAL</h2>
              </div>
          </div>

          <div className={classNames('big-div', 'thanks')}>
              <div className="inner-div">
                <h2>THANKS</h2>
              </div>
          </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
