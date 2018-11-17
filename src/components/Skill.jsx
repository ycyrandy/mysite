import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class MySkill extends React.Component {

    render() {
        return (
            <section className="hero-section">
                <div className="section-seperator white">
                    <FontAwesomeIcon className="seperator-icon white" icon="terminal" />
                </div>
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="small-12 medium-8 large-9 cell z-index-2">
                            <h3>my skills</h3>
                            <div className="table-wrap">
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
