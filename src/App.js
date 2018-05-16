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
                      <p>IWe’re delighted to invite you to Bim and Cel’s wedding on Saturday 15 September 2018.</p>
                      <h3>Time & Location</h3>
                      <p>Please arrive at 11.30 / 11.45 am for a 12 pm ceremony at the Catholic Parish of St Mary’s,
                          Bulwark Road, Chepstow, NP16 5JE.</p>

                          <p>A reception will follow in a field near Gaerllwyd crossroads, NP16 6BA.
                              The field will be clearly signposted and details of how to get there
                              if you’re driving are here [LINK]</p>

                      <h3>Dress</h3>
                          <p>We’ll be spending a lot of the day in the field so sensible(ish) shoes and warm
                              jumpers for the evening are advised.</p>

                      <h3>Event</h3>
                          <p>There is no curfew (!) so you are welcome stay and celebrate as long as you like.
                              Live music will go on until around around 1 am and the bar will be open until 2 am.
                              The bar is cash only - sadly there are no ATMs in the field but there are plenty in
                              Chepstow town centre!</p>

                      <h3>Parking</h3>
                          <p>For those of you with your own cars, there is lots of free parking on the streets
                              surrounding the church so you are welcome to park there. There is also plenty of
                              parking at the field.</p>

                      <h3>Taxi</h3>
                          <p>For those of you without cars, here is a list of local taxi companies [LINK]
                              We recommend booking a taxi in advance to get you home as they tend to be busy on
                              Saturday nights.</p>

                      <p>    If you have any questions or are stuck for transport, please let us know:
                      </p><br/>
                      <p>
                          Bim: imogenmcwalker@gmail.com<br/>

                          Cel: celynthomas@gmail.com </p>

                  </div>
              </div>
          </div>


          <div className={classNames('big-div', 'location')}>
              <div className="inner-div">
                <h2>LOCATION</h2>
                  <div className="inner-content">

                      <p>To get to the field from the church:

                          With the church on your left, head to the T-junction and turn left to reach the top of Chepstow (uphill from the church)



                          After the Esso Petrol Station, turn right at Larkfield roundabout (4th exit). Signposted towards …...
                          Continue for about 2 mins/half a mile down the road.

                          Turn left at Budgens (Before the racecourse roundabout) Signposted Shirenewton

                          Continue for about 10 mins until you get to Shirenewton/Mynyddbach, follow road round to the right.

                          Go past Carpenters Arms. Past The Huntsman Hotel

                          Continue on this road for 5-10 minutes until you get to Gaerllwyd. You should see the marquee in the field, or see home-made signposts.

                          When you see the signs, turn right off the main road (before you reach the crossroads), down a small lane and the field is on your left,


                          This should take about 20 minutes in the car</p>
                      {/*<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1mFZXZraFWcllwCRy6bNDoO78A7FplXHn" width="640" height="480"></iframe>*/}

                  </div>
                  <Location />
              </div>
          </div>



          <div className={classNames('big-div', 'transport')}>
              <div className="inner-div">
                <h2>TRANSPORT</h2>
                  <div className="inner-content">


                          <h3>Driving</h3>


                          <p>Chepstow is fairly rural and the easiest way to get there and get around is by car -
                              if you have the option of driving, we’d recommend it.</p>


                          <p>If you’re driving and have space in the car, let us know if you’re happy to car share. (#ecowarriors)</p>


                          <p>Feel free to leave your car in the field overnight.</p>


                          <h3>Train</h3>


                          <p>There are major train lines that go to both Bristol and Newport - we are basically smack bang in the middle of the two.</p>


                          <p>Chepstow’s train station isn’t connected to Bristol but is on the Newport - Gloucester line.</p>


                         <p>You can also get the National Express bus direct to Chepstow town centre.</p>


                         <h3>Flying</h3>


                         <p> Chepstow is about a 30-minute drive from Bristol, which is the closest airport.</p>



                        <p> For Edinburgh peeps, there’s an excellent easyJet flight between Edinburgh and Bristol.</p>


                        <h3> Taxis</h3>


                        <p>Here’s a list of taxi companies:</p>

                    <ul>
                      <li>Denzil Davies: +44 1291 424600</li>

                      <li>Jays taxis: +44 1291 626232</li>

                      <li>M&R: +44 1291 624482</li>

                      <li>Abbey Taxi: +44 1291 625847</li>

                      <li>RJM: +44 7488 333601</li>

                      <li>A&T: +44 70 9306 6352</li>

                      <li>K&M: +44 1291 622906</li>

                      <li>Castle Taxis: +44 1291 627131</li>

                      <li>Sed Cars: +44 1291 621621</li>

                      <li>Weeks and Sons Taxi: 01291441021</li>

                      </ul>

                  </div>
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
