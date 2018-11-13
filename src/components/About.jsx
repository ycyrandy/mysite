import React from 'react';
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames'
import selfie from '../assets/img/selfie.jpg'

export class MyInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            scroll_to_top: true
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll(event) {
        let scroll_to_top = window.scrollY > 30 ? true : false
        this.setState({ scroll_to_top: scroll_to_top })
    }

    render() {
        let classname = classNames('about-selfie', { 'selfie-slide-in': this.state.scroll_to_top }, { 'selfie-slide-out': !this.state.scroll_to_top })
        return (
            <section className="hero-section">
                <div className="gap" />
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="small-12 medium-7 large-8 cell">
                            <div className="">
                                <h3>little bit about myself</h3>
                                <p>My name is Chenyao Yang, a Full-Stack developer. I am a candidate for Bachelor of Computer Science, Combinatorics and Optimization minor from the University of Waterloo.</p>
                                <p>I am an enthusiastic programmer who always seeking for the great algorithm and efficient structure. In my free time, I love playing basketball and seeking for good food(all the time).</p>
                            </div>

                        </div>
                        <div className="small-12 medium-5 large-4 cell">

                            <img className={classname} src={selfie} alt="My Selfie" />

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
