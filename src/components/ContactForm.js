import React, { Component } from 'react';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            alert: null
        }
    }

    handleSubmit = e => {
        if((this.state.name === '' && this.state.email === '') || this.state.message === '') {
            this.setState({alert: 'Please enter your name, email and message'});
            setTimeout(() => this.setState({alert: null}), 3000);
        } else {
            fetch('/contact', {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...this.state })
            })
            .then(() => this.setState({alert: 'Message successfully sent'}))
            .then(setTimeout(() => this.setState({alert: null}), 3000))
            .then(() => this.setState({
                name: "",
                email: "",
                message: ""
            }))
            .catch(err => alert(err))
        }

        e.preventDefault();
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value} );

    render() {
        const { name, email, message, alert } = this.state;

        return (
            <div>
               <h3>Send me a message</h3>
                {alert !== null && <p style={{color: '#2255dd', fontSize: '17px'}}>{`${alert}`}</p>}
                <form className="form" netilify onSubmit={this.handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>
                            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message: <textarea name="message" value={message} rows="5" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form> 
            </div>
        )
    }
}

export default ContactForm;