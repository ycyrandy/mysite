import React from 'react';
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames'
import selfie from '../assets/img/selfie.jpg'
import skills from '../assets/img/skills.svg'
import projectPic from '../assets/img/sample.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class MyContact extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <section className="hero-section">
                <div className="section-seperator white">
                    <FontAwesomeIcon className="seperator-icon white" icon="pen" />
                </div>
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="small-12 medium-8 large-9 cell z-index-2">
                            <div className="">
                                <h3>contact me</h3>
                                <p>
                                    I am building my backend API now. Please send the email to{" "}
                                    <a href="mailto:randyyang94@gmail.com">
                                        randyyang94@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
