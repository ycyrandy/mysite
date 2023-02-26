import React from 'react';
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames'
import projectPic from '../assets/img/sample.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class MyExperience extends React.Component {
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
                        <div className={classNames("image-cover", { "show-background": isVisible })}>
                            <img className="image" src={projectPic} alt="my project pic2" />
                        </div>
                    }
                </VisibilitySensor>
                <div className="section-seperator">
                    <FontAwesomeIcon className="seperator-icon dark" icon="laptop-code" />
                </div>
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="small-12 medium-8 large-9 cell z-index-2">
                            <div className="">
                                <h3>my experience</h3>
                                <p>Currently, I am a full-stack developer at Cohesity Inc. Primarily working on platform usability, Oracle data protection, Data Management as a Service(DMAAS) and customer site issues. Recently working on Oracle Protection V2, which aims to resolve data fuzziness and improve recovery stability. </p>
                                <p>Prior to that, I worked on IOS, Android and React web development at RhinoActive in London, Ontario. I also had a short internship at TCL in their tablet division.</p>
                                <p>I worked on several topics during my undergraduate studies, including 3D rendering, distributed system, concurrent and parallel programming, machine learning and thin operating system etc. The background of this section is one of my Ray-Tracing projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
