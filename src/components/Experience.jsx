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
                            <img className="image" src={projectPic} />
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
                                <p>Currently, I am mainly working on IOS, Android and React Front-End Development at RhinoActive. I also have a short intern at Tablet department in TCL corporation.</p>
                                <p>I have good experience with 3D rendering technique which includes interactive rendering and Ray-Tracing, this background is one of my Ray-Tracing projects as an example.</p>
                                <p>There are many topics that I had been work on in University of Waterloo which includes distributed system, concurrent and parallel programming, machine learning, thin operating system and more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
