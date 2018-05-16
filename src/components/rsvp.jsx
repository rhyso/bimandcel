import React, { Component } from 'react';
import classNames from 'classnames';
import rsvpLogo from '../images/noun_rsvp.png'

export class RSVP extends Component {
    render() {
        return (

            <div className={classNames('big-div', 'social')}>
                <div className="inner-div">
                    <h2>RSVP<img src={rsvpLogo} className="section-icon"/></h2>
                    <div className="inner-content">
                        <p>To RSVP please email XXXX</p>

                    </div>
                </div>
            </div>

        )
    }
}

