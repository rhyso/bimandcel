
import React, { Component } from 'react';
import classNames from 'classnames';
import luminaryIcon from '../images/noun_luminary.png'

export class Luminary extends Component {
    render() {
        return (


            <div className={classNames('big-div', 'thanks')}>
                <div className="inner-div">
                    <h2>Luminary<img src={luminaryIcon} alt="luminary" className="section-icon"/></h2>
                    <div className="inner-content">
                        <p>
                            My luminary,
                            my morning and evening
                            star. My light at noon
                            when there is no sun
                            and the sky lowers. My balance
                            of joy in a world
                            that has gone off joy's
                            standard. Yours the face
                            that young I recognised
                            as though I had known you
                            of old. Come, my eyes
                            said, out into the morning
                            of a world whose dew
                            waits for your footprint.
                            Before a green altar
                            with the thrush for priest
                            I took those gossamer
                            vows that neither the Church
                            could stale nor the Machine
                            tarnish, that with the years
                            have grown hard as flint,
                            lighter than platinum
                            on our ringless fingers.

                        </p>
                    </div>
                </div>
            </div>


        )
    }
}

