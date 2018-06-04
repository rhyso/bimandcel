import React, { Component } from 'react';
import './App.css';

import { Details } from './components/details.jsx';
import { Location } from './components/location.jsx';
import { Transport } from './components/transport.jsx';
import { Maps } from './components/maps.jsx';
import { Accomodation } from './components/accomodation.jsx';
import { RSVP } from './components/rsvp.jsx';
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
                     <img src={flower} alt="Flowers" className="decorative-flower"/>

                      <nav>
                        <a href='#section-details'> Details </a>
                        <a href='#section-location'> Directions </a>
                        <a href='#section-maps'> Maps </a>
                        <a href='#section-transport'> Transport </a>
                        <a href='#section-accomodation'> Accomodation </a>
                        <a href='#section-rsvp'> RSVP </a>
                        <a href='#section-luminary'> Luminary </a>
                        <a href='#section-thanks'> Thanks </a>
                      </nav>

                     <h1 className="name-one">Imogen Mary Charlotte Walker</h1>
                     <br/>
                     <img src={amp} alt="amp" className="amp"/>
                     <br/>
                     <h1 className="name-two">Celyn Lloyd Thomas</h1>
                     <h3 className="wedding-date">15.09.2018</h3>
                  </div>
                  <img src={flower} title="flowers" alt="flowers" className="decorative-flower2"/>
              </div>
          </div>

          <ScrollableAnchor id={'section-details'}>
              <Details />
          </ScrollableAnchor>


          <ScrollableAnchor id={'section-location'}>
              <Location />
          </ScrollableAnchor>

          <ScrollableAnchor id={'section-maps'}>
              <Maps />
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


          <ScrollableAnchor id={'section-thanks'}>
              <Thanks />
          </ScrollableAnchor>

          <div className={classNames('big-div', 'legend')}>
              <div className="inner-div">
              </div>
           </div>

        </div>
      </div>
    );
  }
}

export default App;
