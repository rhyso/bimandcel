
import React, { Component } from 'react';
import classNames from 'classnames';
import accom from '../images/noun_accom.png'

export class Accomodation extends Component {
    render() {
        return (


            <div className={classNames('big-div', 'accomodation')}>
                <div className="inner-div">
                    <h2>ACCOMODATION<img src={accom} className="section-icon"/></h2>
                    <div className="inner-content">


                        <div className="l-r-wrapper">

                            <h3> Hotels</h3>
                            <p>

                                <ul>
                                    <li><b><a href="http://www.beauforthotelchepstow.com/#ad-image-0" target="_blank">Beaufort Hotel 2*</a></b> - Beaufort Square Chepstow NP16 5EP</li>
                                    <li><b><a href="https://www.booking.com/hotel/gb/castle-view.en-gb.html?aid=346025" target="_blank">Woodfield arms 3*</a></b> - 16 Bridge Street, Chepstow NP16 5EZ</li>
                                    <li><b><a href="http://www.racecourseguesthouse.co.uk/" target="_blank">Racecourse Guest House 5*</a></b> - St Lawrence Road, Chepstow NP16 6BE</li>
                                    <li><b><a href="https://www.marriott.co.uk/hotels/travel/cwlgs-st-pierre-marriott-hotel-and-country-club/" target="_blank">St Pierre Park Hotel 4*</a></b> - St Pierre Park, Chepstow, NP16 6YA</li>
                                    <li><b><a href="https://www.stoulgrovebandb.com/" target="_blank">Stoulgrove Country House 5*</a></b> - Stoulgrove Lane, Chepstow NP16 7QE</li>
                                    <li><b><a href="http://www.thelychgate.wales/" target="_blank">Lynchgate 5*</a></b> - 47 Church Road, Caldicot, NP26 4HQ</li>
                                    <li><b><a href="http://www.northgatehousebb.co.uk/" target="_blank"> Northgate House</a></b> - Caerwent</li>
                                    <li><b><a href="http://www.caerwent-coachandhorses.co.uk/" target="_blank"> Coach and Horses</a></b> - Caerwent</li>
                                    <li><b><a href="http://thefirsthurdle.co.uk/" target="_blank"> The First Hurdle</a></b> - Chepstow</li>
                                    <li><b><a href="http://hamptoninn3.hilton.com/en/hotels/united-kingdom/hampton-by-hilton-newport-east-BRSNEHX/index.html" target="_blank">
                                        Hampton by Hilton</a></b> - Magor</li>
                                    <li><b><a href="http://brooklands.awardspace.co.uk/" target="_blank"> Brooklands Motel</a></b> - Portskewett</li>
                                    <li><b><a href="http://www.georgehotelchepstow.co.uk/" target="_blank"> The George Hotel</a></b> - Chepstow</li>
                                    <li><b><a href="http://www.thehuntsmanhotel.co.uk/" target="_blank"> The Huntsman</a></b> - Shirenewton</li>
                                    <li><b><a href="https://www.booking.com/hotel/gb/willowbrook-guesthouse.en-gb.html" target="_blank"> Willowbrook</a></b> - Pwllmeyric</li>
                                    <li><b><a href="https://www.bedandbreakfast.eu/bed-and-breakfast/chepstow/47a-townhouse-b-b-in-chepstow/2829241/" target="_blank">
                                        47a Townhouse B&B</a></b> - Chepstow</li>
                                    <li><b><a href="https://www.wyndhamhotels.com/en-uk/days-inn/magor-united-kingdom/days-inn-magor/overview" target="_blank">
                                        Days Inn</a></b> - Magor</li>
                                </ul>

                            </p>

                        </div>

                        <p className="special-heading"> There are also a selection of &nbsp;
                            <a href="https://www.airbnb.co.uk/s/Shirenewton/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJvXh7E4bqcUgRd6-srr2DKDg&query=Shirenewton&allow_override%5B%5D=&s_tag=MQm9jtpY"
                               target="_blank">
                                AirBnB's </a>nearby</p>


                    </div>
                </div>
            </div>


        )
    }
}

