import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class MyHeader extends React.Component {
    constructor() {
        super()
        this.state = {
          scroll_to_top: false
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
        if (this.state.scroll_to_top) {
            document.body.classList.add('sticky-wrapper');
          } else {
            document.body.classList.remove('sticky-wrapper')
          }
        return (
            <header className="sticky-header">
                <h1 className="sticky-header-title">Chenyao Yang</h1>
                <FontAwesomeIcon className="bouncing-arrow" icon="angle-down" />
                <h3 className="menu align-center sticky-menu">
                    Chenyao Yang
                </h3>
            </header>
        );
    }
}
