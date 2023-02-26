import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as emailjs from 'emailjs-com';

export class MyContact extends React.Component {
    constructor() {
        super()
        this.state = {
            contactName: "",
            contactEmail: "",
            contactNum: "",
            contactMsg: "",
            sending: false,
            sended: false
        }
        emailjs.init('user_K0hipQPhR2obKAjUxVFj3');
        this.onContactFormChange = this.onContactFormChange.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
    }

    sendEmail(event, component) {
        event.preventDefault()
        if (this.state.sending || this.state.sended) {
            return
        }
        var template_params = {
            "reply_to": "",
            "from_name": this.state.contactName,
            "to_name": "chenyao",
            "message_html": this.state.contactMsg,
            "from_phone": this.state.contactNum,
            "from_email": this.state.contactEmail
        }
        this.setState({
            sending: true
        })
        emailjs.send("mailgun", 'template_contact_me', template_params)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                component.setState({
                    sended: true
                })
            }, function (err) {
                console.log('FAILED...', err);
                component.setState({
                    sending: false
                })
            });
    }

    onContactFormChange(event) {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        });
    }

    submitFormContent() {
        let submitClassname = this.state.sended ? "sended" : this.state.sending ? "sending" : ""
        if (this.state.sended) {
            return (
                <div className={"grid-x form-content " + submitClassname} />
            )
        }
        return (
            <div className={"grid-x form-content " + submitClassname}>
                <div className="small-12 medium-12 large-12 cell input-div">
                    <label>Name*</label>
                    <input type="text" name="contactName" placeholder="..." onChange={this.onContactFormChange} required />
                </div>
                <div className="small-12 medium-6 large-6 cell input-div">
                    <label>Email*</label>
                    <input type="email" name="contactEmail" placeholder="..." onChange={this.onContactFormChange} required />
                </div>
                <div className="small-12 medium-6 large-6 cell input-div">
                    <label>Phone Number(Optional)</label>
                    <input type="number" name="contactNum" placeholder="..." onChange={this.onContactFormChange} />
                </div>
                <div className="small-12 medium-12 large-12 cell input-div">
                    <label>Message*</label>
                    <textarea style={{resize : "none"}} name="contactMsg" rows="7" cols="50" maxLength="500" placeholder="...(under 500)" onChange={this.onContactFormChange} required />
                </div>
            </div>
        )
    }

    submitForm() {
        let submitClassname = this.state.sended ? "sended-form" : this.state.sending ? "sending-form" : ""
        let submitText = this.state.sended ? "Thank you, I have received your message" : this.state.sending ? "sending" : "send"
        return (
            <form className={submitClassname} onSubmit={(e) => this.sendEmail(e, this)}>
                {this.submitFormContent()}

                <div className="small-12 medium-12 large-12 cell submit-div">
                    <input type="submit" value={submitText} />
                </div>
            </form>
        )
    }

    render() {
        return (
            <section className="hero-section">
                <div className="section-seperator white">
                    <FontAwesomeIcon className="seperator-icon white" icon="pen" />
                </div>
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="small-12 medium-8 large-9 cell z-index-2">
                            <div className="">
                                <h3>contact me</h3>
                                <p>
                                    Want more details? Let's get in touch,
                                </p>
                            </div>
                        </div>
                    </div>
                    {this.submitForm()}
                </div>
            </section>
        );
    }
}
