import React from 'react';
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
                                <p>My name is Chenyao Yang, a Full-Stack developer. I obtained my bachelor's degree in computer science with a minor in combinatorics and optimization from the University of Waterloo in October 2017.</p>
                                <p>I am an enthusiastic programmer who always seek for the best algorithm and efficient structure. When I am free, I like playing basketball and discovering gourmet.</p>
                            </div>

                        </div>
                        <div className="small-12 medium-5 large-4 cell selfie-wrap">

                            <img className={classname} src={selfie} alt="My Selfie" />

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
