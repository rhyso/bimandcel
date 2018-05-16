
import React, { Component } from 'react';
import classNames from 'classnames';
import transport from '../images/noun_transport.png'

export class Transport extends Component {
    render() {
        return (


            <div className={classNames('big-div', 'transport')}>
                <div className="inner-div">
                    <h2>TRANSPORT<img src={transport} className="section-icon"/></h2>
                    <div className="inner-content">



                        <div className="l-r-wrapper">

                            <h3>Driving</h3>
                            <p>

                                Chepstow is fairly rural and the easiest way to get there and get around is by car -
                                if you have the option of driving, we’d recommend it.


                                If you’re driving and have space in the car, let us know if you’re happy to car share. (#ecowarriors)


                                Feel free to leave your car in the field overnight.

                            </p>

                        </div>



                        <div className="l-r-wrapper">

                            <h3>Train</h3>
                            <p>
                                There are major train lines that go to both Bristol and Newport - we are basically smack bang in the middle of the two.


                                Chepstow’s train station isn’t connected to Bristol but is on the Newport - Gloucester line.


                                You can also get the National Express bus direct to Chepstow town centre.
                            </p>

                        </div>



                        <div className="l-r-wrapper">

                            <h3>Flying</h3>
                            <p>

                                Chepstow is about a 30-minute drive from Bristol, which is the closest airport.


                                For Edinburgh peeps, there’s an excellent easyJet flight between Edinburgh and Bristol.

                            </p>

                        </div>



                        <div className="l-r-wrapper">

                            <h3> Taxis</h3>
                            <p>

                                <ul>
                                    <li><b>Denzil Davies:</b> +44 1291 424600</li>

                                    <li><b>Jays taxis:</b> +44 1291 626232</li>

                                    <li><b>M&R:</b> +44 1291 624482</li>

                                    <li><b>Abbey Taxi:</b> +44 1291 625847</li>

                                    <li><b>RJM:</b> +44 7488 333601</li>

                                    <li><b>A&T:</b> +44 70 9306 6352</li>

                                    <li><b>K&M:</b> +44 1291 622906</li>

                                    <li><b>Castle Taxis:</b> +44 1291 627131</li>

                                    <li><b>Sed Cars:</b> +44 1291 621621</li>

                                    <li><b>Weeks and Sons Taxi:</b> 01291441021</li>

                                </ul>

                            </p>

                        </div>


                    </div>
                </div>
            </div>

        )
    }
}

