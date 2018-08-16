
import React, { Component } from 'react';
import classNames from 'classnames';

export class Updates extends Component {
    render() {
        return (


            <div className={classNames('big-div', 'updates')}>
                <div className="inner-div">
                    <div class="ribbon"><span>update</span></div>

                    <h2>UPDATES</h2>
                    <div className="inner-content">

                        <p className="special-heading"> <h3>WE'RE NEARLY GETTING MARRIED!</h3></p>

                            <div className="l-r-wrapper">
                                    <h3></h3>
                                    <p>

                                        We are so excited to see you all. Here are a couple of reminders ahead of the day:

                                    </p>

                            </div>


                            <div className="l-r-wrapper">
                                <h3>1.</h3>
                                <p>

                                    Bring cash with you for the bar.

                                </p>

                            </div>

                            <div className="l-r-wrapper">
                                    <h3>2. </h3>
                                    <p>

                                              Make sure you've organised or thought about taxis or lifts in cars to get to and from the field -
                                              we'll be leaving the church after 1pm and the live music will finish around 1am.
                                              If you've got space in your car, please offer it to any straggler guests!

                                    </p>

                            </div>



                            <div className="l-r-wrapper">
                                    <h3>3.</h3>
                                    <p>
                                            Bring a warm jumper in case it gets chilly in the evening and a brolly if it looks like rain.
                                    </p>


                             </div>

                            <div className="l-r-wrapper">
                                <h3>4. </h3>
                                <p>

                                    The bar in the field won't be stocking any spirits (although there will be lots of beer, wine and cider!)
                                    there will be free mixers at the bar so feel free to bring a spirit if you wish.
                                    <br />
                                    <br />
                                    We have also added some more information about <a href='#section-camping' className="camping-content-link"> camping here. </a>
                                </p>

                            </div>

                    </div>
                </div>

            </div>

        )
    }
}

