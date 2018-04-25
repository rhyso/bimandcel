import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Location} from './components/location.jsx';
import flower from './images/flower1.png'
import champ from './images/champ-tran.jpg'

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
                  <img src={flower} className="decorative-flower"/>
                  <h1>Celyn Lloyd Thomas & Imogen Walker</h1>
                  <img src={champ} className="champ-open"/>
                  <img src={flower} className="decorative-flower2"/>
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
                  <Location />
              </div>
          </div>


          <div className={classNames('big-div', 'accomodation')}>
              <div className="inner-div">
                  <h2>ACCOMODATION</h2>
                  <h3>Camping:
                      Hotels:
                      Beaufort Hotel 2* - Beaufort Square Chepstow NP16 5EP
                      Castle View Hotel 3* - 16 Bridge Street, Chepstow NP16 5EZ
                      Racecourse Guest House 5* - St Lawrence Road, Chepstow NP16 6BE
                      St Pierre Park Hotel 4* - St Pierre Park, Chepstow, NP16 6YA
                      Stoulgrove Country House 5* - Stoulgrove Lane, Chepstow NP16 7QE
                      Lynchgate 5*, 47 Church Road, Caldicot, NP26 4HQ
                      Northgate House, Caerwent
                      Coach and Horses, Caerwent
                      The First Hurdle, Chepstow
                      Hampton by Hilton - Magor
                      Brooklands Motel - Portskewett
                      The George Hotel - Chepstow
                      The Huntsman - Shirenewton
                      Willowbrook - Pwllmeyric
                      47a Townhouse B&B - Chepstow
                      Days Inn - Magor

                      There are also a selection of Air BnBs nearby
                  </h3>
              </div>
          </div>


          <div className={classNames('big-div', 'transport')}>
              <div className="inner-div">
                <h2>TRANSPORT</h2>
                  <h3>There will be a minibus on hand taking guests from the reception back to the centre of Chepstow (or to their hotel within reason)

                      Please let us know in your RSVP whether you need transport from the church to the reception or whether you are happy making your own way. You can park your cars in the field.

                      To RSVP please email XXXX
                  </h3>
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
      </div>
    );
  }
}

export default App;
