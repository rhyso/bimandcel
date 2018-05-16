
import React, { Component } from 'react';
import classNames from 'classnames';

export class Accomodation extends Component {
    render() {
        return (


            <div className={classNames('big-div', 'accomodation')}>
                <div className="inner-div">
                    <h2>ACCOMODATION</h2>
                    <div className="inner-content">


                        <div className="l-r-wrapper">

                            <h3> Hotels</h3>
                            <p>

                                <ul>
                                    <li><b>Beaufort Hotel 2*</b> - Beaufort Square Chepstow NP16 5EP</li>
                                    <li><b>Castle View Hotel 3*</b> - 16 Bridge Street, Chepstow NP16 5EZ</li>
                                    <li><b>Racecourse Guest House 5*</b> - St Lawrence Road, Chepstow NP16 6BE</li>
                                    <li><b>St Pierre Park Hotel 4*</b> - St Pierre Park, Chepstow, NP16 6YA</li>
                                    <li><b>Stoulgrove Country House 5*</b> - Stoulgrove Lane, Chepstow NP16 7QE</li>
                                    <li><b>Lynchgate 5*</b> - 47 Church Road, Caldicot, NP26 4HQ</li>
                                    <li><b>Northgate House</b> - Caerwent</li>
                                    <li><b>Coach and Horses</b> - Caerwent</li>
                                    <li><b>The First Hurdle</b> - Chepstow</li>
                                    <li><b>Hampton by Hilton</b> - Magor</li>
                                    <li><b>Brooklands Motel</b> - Portskewett</li>
                                    <li><b>The George Hotel</b> - Chepstow</li>
                                    <li><b>The Huntsman</b> - Shirenewton</li>
                                    <li><b>Willowbrook</b> - Pwllmeyric</li>
                                    <li><b>47a Townhouse B&B</b> - Chepstow</li>
                                    <li><b>Days Inn</b> - Magor</li>
                                </ul>

                            </p>

                        </div>

                        <p className="special-heading"> There are also a selection of Air BnBs nearby</p>


                    </div>
                </div>
            </div>


        )
    }
}

