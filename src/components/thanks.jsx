
import React, { Component } from 'react';
import classNames from 'classnames';

export class Thanks extends Component {
    render() {
        return (


            <div className={classNames('big-div', 'thanks')}>
                <div className="inner-div">
                    <h2>Thank you!</h2>
                    <div className="inner-content">
                        <p className="special-heading">We can't wait to see you all!</p>
                    </div>
                </div>
            </div>


        )
    }
}

