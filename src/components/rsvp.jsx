import React, { Component } from 'react';
import classNames from 'classnames';

export class RSVP extends Component {
    render() {
        return (

            <div className={classNames('big-div', 'social')}>
                <div className="inner-div">
                    <h2>RSVP</h2>
                    <div className="inner-content">
                        <p>To RSVP please email XXXX</p>

                    </div>
                </div>
            </div>

        )
    }
}

