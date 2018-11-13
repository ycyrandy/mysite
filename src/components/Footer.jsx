import React from 'react';
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames'
import { ScrollToTopButton } from './ScrollToTopBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resume from '../assets/img/resume-grad.pdf'
import foooterPic from '../assets/img/footer-background.jpg'
import linkedInLogo from '../assets/img/linkedin-in-brands.svg'
import { link } from 'fs';

export class MyFooter extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <footer className="hero-section section-dark">
                <div className={classNames("image-cover footer-background")}>
                    <img className="image" src={foooterPic} alt="my-pic" />
                </div>
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="small-12 medium-12 large-12 cell z-index-2">
                            <h4 />
                            <h5 style={{ 'textAlign': 'center' }}>Thank you for visiting my website</h5>
                            <h6 className="chinese-intro">- I you do care, my name is 杨尘曜 -</h6>
                            <div className="social-media">
                                <a className="z-index-2" href="https://www.linkedin.com/in/chenyaoyang">
                                    <img src={linkedInLogo} alt="linkedIn" />
                                </a>
                            </div>
                            
                        </div>

                    </div>
                </div>
                <ScrollToTopButton scrollStepInPx="50" delayInMs="16.66" />
            </footer>
        );
    }
}
