import React from 'react';
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames'
import PDF from 'react-pdf-js';
import projectPic from '../assets/img/nonhier.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resume from '../assets/img/resume.pdf'

export class MyResume extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <section className="hero-section section-dark">
                <VisibilitySensor>
                    {({ isVisible }) =>
                        <div className={classNames("image-cover-right", { "show-background": isVisible })}>
                            <img className="image" src={projectPic} alt="my project pic" />
                        </div>
                    }
                </VisibilitySensor>
                <div className="section-seperator">
                    <FontAwesomeIcon className="seperator-icon dark" icon="file-alt" />
                </div>
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="small-12 medium-6 large-6 cell z-index-2">
                            <h3>my resume</h3>
                        </div>
                        <div className="small-12 medium-6 large-6 cell z-index-2">
                            <a href={resume}><PDF className="pdf-wrapper" file={resume} /></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
