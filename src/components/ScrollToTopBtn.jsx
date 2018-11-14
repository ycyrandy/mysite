import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class ScrollToTopButton extends React.Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render() {
        return (
            <div className="back-to-top">
                <a className="z-index-2" onClick={() => { this.scrollToTop() }}>
                    <FontAwesomeIcon className="icon" icon="angle-up" />
                </a>
            </div>

        )


    }
} 