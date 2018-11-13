import React from 'react';
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames'
import selfie from '../assets/img/selfie.jpg'
import skills from '../assets/img/skills.svg'
import projectPic from '../assets/img/sample.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class MySkill extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <section className="hero-section">
                <div className="section-seperator white">
                    <FontAwesomeIcon className="seperator-icon white" icon="terminal" />
                </div>
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="small-12 medium-8 large-9 cell z-index-2">
                            <div className="">
                                <h3>my skills</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>C++</td>
                                            <td>C</td>
                                            <td>JAVA</td>
                                            <td>Swift</td>
                                        </tr>
                                        <tr>
                                            <td>OpenGL</td>
                                            <td>JavaScript</td>
                                            <td>React</td>
                                            <td>Objective C</td>
                                        </tr>
                                        <tr>
                                            <td>SQL</td>
                                            <td>Git</td>
                                            <td>HTML</td>
                                            <td>JavaScript</td>
                                        </tr>
                                        <tr>
                                            <td>Python</td>
                                            <td>LUA</td>
                                            <td>Scheme</td>
                                            <td>MATLAB</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
