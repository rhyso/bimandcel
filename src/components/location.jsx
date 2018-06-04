import React, { Component } from 'react';
import classNames from 'classnames';
import location from '../images/noun_location.png'

export class Location extends Component {
    render() {
        return (

            <div className={classNames('big-div', 'location')}>
                <div className="inner-div">
                    <h2>DIRECTIONS<img src={location} alt="location" className="section-icon"/></h2>
                    <div className="inner-content">

                        <p className="special-heading">To get to the field from the church:</p>

                        <div className="l-r-wrapper">

                            <h3>a.</h3>
                            <p>
                                With the church on your left, head to the T-junction and turn left to reach the top of Chepstow (uphill from the church)
                            </p>

                        </div>

                        <div className="l-r-wrapper">

                            <h3>b.</h3>
                            <p>
                                After the Esso Petrol Station, turn right at Larkfield roundabout (4th exit). Signposted towards …...
                                Continue for about 2 mins/half a mile down the road.
                            </p>

                        </div>

                        <div className="l-r-wrapper">

                            <h3>c.</h3>
                            <p>

                                Turn left at Budgens (Before the racecourse roundabout) Signposted Shirenewton

                            </p>

                        </div>

                        <div className="l-r-wrapper">

                            <h3>d.</h3>
                            <p>

                                Continue for about 10 mins until you get to Shirenewton/Mynyddbach, follow road round to the right.

                            </p>

                        </div>

                        <div className="l-r-wrapper">

                            <h3>e.</h3>
                            <p>

                                Go past Carpenters Arms. Past The Huntsman Hotel

                            </p>

                        </div>



                        <div className="l-r-wrapper">

                            <h3>f.</h3>
                            <p>

                                Continue on this road for 5-10 minutes until you get to Gaerllwyd. You should see the marquee in the field, or see home-made signposts.

                            </p>

                        </div>



                        <div className="l-r-wrapper">

                            <h3>g.</h3>
                            <p>

                                When you see the signs, turn right off the main road (before you reach the crossroads), down a small lane and the field is on your left.
                                The total journey should be about 20 minutes in the car

                            </p>

                        </div>



                    </div>
                </div>
            </div>

        )
    }
}

