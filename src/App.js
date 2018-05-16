import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Details } from './components/details.jsx';
import { Location } from './components/location.jsx';
import { Transport } from './components/transport.jsx';
import { Accomodation } from './components/accomodation.jsx';
import { RSVP } from './components/rsvp.jsx';
import { Luminary } from './components/luminary.jsx';
import { Thanks } from './components/thanks.jsx';

import flower from './images/flower1.png'
import amp from './images/noun_840428_cc.png'
import ScrollableAnchor from 'react-scrollable-anchor'

import classNames from 'classnames';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
            {/*<div className="inner-div">*/}
              {/*<h1 className="App-title">/h1>*/}
            {/*</div>*/}
        {/*</header>*/}
        <div className="content">
          <div className={classNames('big-div', 'title-area')}>
              <div className={classNames('inner-div', 'flower-div')}>
                  <div className="entrance-text">
                     <img src={flower} className="decorative-flower"/>

                      <a href='#section-details'> Details </a>
                      <a href='#section-location'> Location </a>
                      <a href='#section-transport'> Transport </a>
                      <a href='#section-accomodation'> Accomodation </a>
                      <a href='#section-rsvp'> RSVP </a>
                      <a href='#section-luminary'> Luminary </a>
                      <a href='#section-thanks'> Thanks </a>

                     <h1 className="name-one">Imogen Mary Charlotte Walker</h1>
                     <br/>
                     <img src={amp} className="amp"/>
                     <br/>
                     <h1 className="name-two">Celyn Lloyd Thomas</h1>
                     <h2 className="wedding-date">15.09.2018</h2>
                  </div>
                  <img src={flower} className="decorative-flower2"/>
              </div>
          </div>
          <div className={classNames('big-div', 'legend')}>
              <div className="inner-div">
              </div>
          </div>


          <ScrollableAnchor id={'section-details'}>
              <Details />
          </ScrollableAnchor>


          <ScrollableAnchor id={'section-location'}>
              <Location />
          </ScrollableAnchor>


          <ScrollableAnchor id={'section-transport'}>
            <Transport />
          </ScrollableAnchor>


          <ScrollableAnchor id={'section-accomodation'}>
              <Accomodation />
          </ScrollableAnchor>


          <ScrollableAnchor id={'section-rsvp'}>
              <RSVP />
          </ScrollableAnchor>

          <ScrollableAnchor id={'section-luminary'}>
              <Luminary />
          </ScrollableAnchor>


          <ScrollableAnchor id={'section-thanks'}>
              <Thanks />
          </ScrollableAnchor>

        </div>
      </div>
    );
  }
}

export default App;
