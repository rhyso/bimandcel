
import React, { Component } from 'react';
import classNames from 'classnames';
import camping_icon from '../images/noun_camp.png'

export class Camping extends Component {
    render() {
        return (


            <div className={classNames('big-div', 'transport')}>
                <div className="inner-div">
                    <h2>CAMPING<img src={camping_icon} alt="camping" className="section-icon"/></h2>
                    <div className="inner-content">



                        <div className="l-r-wrapper">

                            <h3>Camping</h3>
                            <p>

                                Sorry, we realised we missed off all our camping information from the website -   D'oh!

                                For all those who are camping, there is plenty of space for tents / gazebos / yurts / vans / misc outdoor furniture.

                            </p>

                        </div>

                        <div className="l-r-wrapper">

                            <h3></h3>
                            <p>

                                You're welcome to arrive at any time on the Friday and get set up (or Thursday. Thursday is also good). We'll all be around and about, doing last minute preparations in the field so there will be plenty of company.

                                Think of it like a festival so bring a couple of drinks and snacks to keep yourselves going for Friday day and evening and in the mornings. Also, there is a pub about a 5 minute drive down the road called The Huntsman if you want to go there for food. Walking there is a bit precarious as it's along a dark country road but it's a very short drive or taxi ride.

                            </p>

                        </div>


                        <div className="l-r-wrapper">

                            <h3>Facilities</h3>
                            <p>


                                In the true spirit of festival camping, there will be toilets but there is no running water up at the field. So no showers. Soz. We're going to bring crates of water bottles but if you desperately want a shower in the morning, Chepstow leisure centre opens at 8.15 am so you could go in for a wee pre-wedding swim...


                            </p>

                        </div>



                        <div className="l-r-wrapper">

                            <h3>Changing</h3>
                            <p>


                                Please do use the small yurt to hang your clothes on the Friday night and change in on the Saturday morning if the weather is a bit wet.


                            </p>

                        </div>


                        <div className="l-r-wrapper">

                            <h3></h3>
                            <p>


                                We're sure you're all over it but make sure you've got transport to and from the church in the morning.<br/>

                                Any questions - just ask.

                            </p>

                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

