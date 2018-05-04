import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Location} from './components/location.jsx';
import flower from './images/flower1.png'
import amp from './images/noun_840428_cc.png'

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

          <div className={classNames('big-div', 'details')}>
              <div className="inner-div">
                <h2>DETAILS</h2>
                  <div className="inner-content">
                      <p>Imogen Mary Charlotte Walker and Celyn Lloyd Thomas warmly invite you to their wedding on Saturday 15 September

                          Ceremony at 12 noon at the Catholic Parish of St Mary’s, Bulwark Road, Chepstow, NP16 5JE

                          Followed by a reception near Gaerllwyd, NP16 6BA (map and directions included)
                          <br/>
                          Parking at the church and the field

                          We’ll be spending a lot of the day in a field so sensible shoes and warm jumpers are advised.
                      </p>
                  </div>
              </div>
          </div>


          <div className={classNames('big-div', 'location')}>
              <div className="inner-div">
                <h2>LOCATION</h2>
                  <div className="inner-content">

                      <p>Ceremony at 12 noon at the Catholic Parish of St Mary’s, Bulwark Road, Chepstow, NP16 5JE</p>
                      {/*<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1mFZXZraFWcllwCRy6bNDoO78A7FplXHn" width="640" height="480"></iframe>*/}

                  </div>
                  <Location />
              </div>
          </div>


          <div className={classNames('big-div', 'accomodation')}>
              <div className="inner-div">
                  <h2>ACCOMODATION</h2>
                  <div className="inner-content">

                  <ul>
                      <li>Hotels:</li>
                      <li>Beaufort Hotel 2* - Beaufort Square Chepstow NP16 5EP</li>
                      <li>Castle View Hotel 3* - 16 Bridge Street, Chepstow NP16 5EZ</li>
                      <li>Racecourse Guest House 5* - St Lawrence Road, Chepstow NP16 6BE</li>
                      <li>St Pierre Park Hotel 4* - St Pierre Park, Chepstow, NP16 6YA</li>
                      <li>Stoulgrove Country House 5* - Stoulgrove Lane, Chepstow NP16 7QE</li>
                      <li>Lynchgate 5*, 47 Church Road, Caldicot, NP26 4HQ</li>
                      <li>Northgate House, Caerwent</li>
                      <li>Coach and Horses, Caerwent</li>
                      <li>The First Hurdle, Chepstow</li>
                      <li>Hampton by Hilton - Magor</li>
                      <li>Brooklands Motel - Portskewett</li>
                      <li>The George Hotel - Chepstow</li>
                      <li>The Huntsman - Shirenewton</li>
                      <li>Willowbrook - Pwllmeyric</li>
                      <li>47a Townhouse B&B - Chepstow</li>
                      <li>Days Inn - Magor</li>
                  </ul>

                      There are also a selection of Air BnBs nearby
                  </div>
              </div>
          </div>



          <div className={classNames('big-div', 'transport')}>
              <div className="inner-div">
                <h2>TRANSPORT</h2>
                  <div className="inner-content">
                  <p>There will be a minibus on hand taking guests from the reception back to the centre of Chepstow (or to their hotel within reason)

                      Please let us know in your RSVP whether you need transport from the church to the reception or whether you are happy making your own way. You can park your cars in the field.

                  </p>
                  </div>
              </div>
          </div>

          <div className={classNames('big-div', 'social')}>
              <div className="inner-div">
                <h2>RSVP</h2>
                  <div className="inner-content">
                      <p>To RSVP please email XXXX</p>

                  </div>
              </div>
          </div>

          <div className={classNames('big-div', 'thanks')}>
              <div className="inner-div">
                <h2>Luminary</h2>
                  <div className="inner-content">
                      <p>
                          My luminary,
                          my morning and evening
                          star. My light at noon
                          when there is no sun
                          and the sky lowers. My balance
                          of joy in a world
                          that has gone off joy's
                          standard. Yours the face
                          that young I recognised
                          as though I had known you
                          of old. Come, my eyes
                          said, out into the morning
                          of a world whose dew
                          waits for your footprint.
                          Before a green altar
                          with the thrush for priest
                          I took those gossamer
                          vows that neither the Church
                          could stale nor the Machine
                          tarnish, that with the years
                          have grown hard as flint,
                          lighter than platinum
                          on our ringless fingers.

                      </p>
                  </div>
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
