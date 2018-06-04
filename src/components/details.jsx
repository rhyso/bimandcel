import React, { Component } from 'react';
import classNames from 'classnames';
import info from '../images/info_noun.png'

export class Details extends Component {
    render() {
        return (

            <div className={classNames('big-div', 'details')}>
                <div className="inner-div">
                    <h2>DETAILS <img src={info} alt="details" className="section-icon"/></h2>
                    <div className="inner-content">
                        <p className="special-heading">We’re delighted to invite you to Bim and Cel’s wedding on Saturday 15 September 2018.</p>
                        <div className="l-r-wrapper">

                            <h3>Time & Location</h3>

                            <p>Please arrive by 11.45am for a 12 noon ceremony at the Catholic Parish of St Mary’s,
                                Bulwark Road, Chepstow, NP16 5JE.
                                <br/>
                                A reception will follow in a field near Gaerllwyd crossroads, NP16 6BA.
                                Don't worry, the field will be clearly signposted and details of how to get there
                                if you’re driving are <a href='#section-location'>here</a> </p>
                        </div>
                        <div className="l-r-wrapper">
                            <h3>Dress</h3>
                            <p>Relaxed wedding wear. We will be spending a lot of the day in the field so sensible(ish)
                               shoes and warm jumpers for the evening are advised
                            </p>
                        </div>

                        <div className="l-r-wrapper">

                            <h3>Event</h3>
                            <p>There is no curfew (!) so you are welcome stay and celebrate as long as you like.
                                Live music will go on until around around 1 am and the bar will be open until 2 am.
                                The bar is <b>cash only</b> - sadly there are no ATMs in the field but there are plenty in
                                Chepstow town centre!</p>
                        </div>

                        <div className="l-r-wrapper">

                            <h3>Parking</h3>
                            <p>For those of you with your own cars, there is lots of free parking on the streets
                                surrounding the church so you are welcome to park there. There is also plenty of
                                parking at the field.</p>
                        </div>

                        <div className="l-r-wrapper">

                            <h3>Taxi</h3>
                            <p>For those of you without cars, here is a list of local <a href='#section-transport'>taxi companies.</a>
                                We recommend booking a taxi in advance to get you home as they tend to be busy on
                                Saturday nights.<br/>
                                If you have any questions or are stuck for transport, please let us know:
                            </p>
                        </div>
                        <br/>
                        <div className="details-contact">
                            <p>
                                <b>Bim:</b> <a href="imogenmcwalker@gmail.com">imogenmcwalker@gmail.com</a><br/>

                                <b>Cel:</b> <a href="mailto:celynthomas@gmail.com">celynthomas@gmail.com</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default Details
