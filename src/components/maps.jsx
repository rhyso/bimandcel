
import React, { Component } from 'react';
import classNames from 'classnames';
import map_icon from '../images/noun_map.png'

export class Maps extends Component {
    render() {


        return (


            <div className={classNames('big-div', 'maps')}>
                <div className="inner-div">
                    <h2>MAPS<img src={map_icon} className="section-icon"/></h2>
                    <div className="inner-content">




                        <div className="l-r-wrapper">

                            <h3>The Church</h3>
                            <p>
                                {
                                    <div class="mapouter">
                                        <div class="gmap_canvas">
                                            <iframe width="600" height="500" id="gmap_canvas"
                                                    src="https://maps.google.com/maps?q=NP16 5JE&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                                    frameborder="0" scrolling="no" marginheight="0"
                                                    marginwidth="0"></iframe>
                                        </div>
                                    </div>
                                }
                            </p>

                        </div>



                        <div className="l-r-wrapper">

                            <h3>Event Map</h3>
                            <p>
                                {
                                    <div class="mapouter">
                                        <div class="gmap_canvas">
                                            <iframe width="600" height="500" id="gmap_canvas"
                                                    src="https://maps.google.com/maps?q=NP16 6BA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                    frameborder="0" scrolling="no" marginheight="0"
                                                    marginwidth="0"></iframe>
                                        </div>
                                    </div>
                                }
                            </p>

                        </div>



                        <div className="l-r-wrapper">

                            <h3>Print Maps here</h3>
                            <p>

                                <ul>
                                    <li><b><a href="https://goo.gl/maps/MDK7woyc1xG2" title="Church map">Church Map</a></b></li>

                                    <li><b><a href="https://goo.gl/maps/2yC6iT7aRcv" title="Event Map">Event Map link</a></b></li>

                                </ul>

                            </p>

                        </div>


                    </div>
                </div>
            </div>

        )
    }
}

