import React, { Component } from 'react';
import { Grid,
         Cell,
         List,
         ListItemContent,
         ListItem,
         Textfield,
         Button
         } from 'react-mdl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsappSquare, faViber, faSkype, faTelegram } from '@fortawesome/free-brands-svg-icons';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class Contact extends Component {
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
            this.setState({alert: 'Please enter something'});
            setTimeout(() => this.setState({alert: null}), 3000);
        } else {
            fetch('/#contact', {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...this.state })
            })
            .then(() => this.setState({alert: 'Message successfully sent'}))
            .then(setTimeout(() => this.setState({alert: null}), 3000))
            .catch(err => alert(err))
        }

        e.preventDefault();
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value} );

    render() {
        const { name, email, message, alert } = this.state;

        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h3>Send me a message</h3>
                        {alert !== null ? <p style={{color: '#2838dd', fontSize: '20px'}}>{`${alert}`}</p> : null}
                        <form name="contact" method="POST" data-netlify="true" action="/?success=true" onSubmit={this.handleSubmit}>
                            <input type="hidden" name="form-name" value="contact" />
                            <p>
                                <Textfield 
                                    onChange={this.handleChange}
                                    label="Name"
                                    name="name"
                                    value={name}
                                    style={{width: '200px'}}
                                />
                            </p>
                            <p>
                                <Textfield 
                                    onChange={this.handleChange}
                                    label="Email"
                                    name="email"
                                    value={email}
                                    style={{width: '200px'}}
                                />
                            </p>
                            <p>
                                <Textfield 
                                    onChange={this.handleChange}
                                    label="Message"
                                    name="message"
                                    value={message}
                                    floatingLabel
                                    rows="8"
                                    maxRows="12"
                                />
                            </p>
                            <p>
                                <Button style={{width: '200px'}} raised type="submit">Send</Button>
                            </p>
                        </form>
                    </Cell>
                    <Cell col={6}>
                        <h3 style={{textAlign: 'left'}}>Contact Me</h3>
                        
                        <div>
                            <List>
                                <ListItem>
                                    <ListItemContent className="contact-list">
                                        <FontAwesomeIcon icon={faWhatsappSquare} size="2x" transform="down-4 grow-2 left-8" fixedWidth />
                                        <FontAwesomeIcon icon={faViber} size="2x" transform="down-4 left-4 shrink-2" fixedWidth />
                                        +38970770189
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="contact-list">
                                        <FontAwesomeIcon icon={faEnvelope} size="2x" transform="grow-2 shrink-3 down-4 left-6"/>
                                        goce.ilievski@live.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="contact-list">
                                        <FontAwesomeIcon icon={faTelegram} size="2x" transform="down-4 left-8" fixedWidth/>
                                        @Gotze_I
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="contact-list">
                                        <FontAwesomeIcon icon={faSkype} size="2x" transform="down-4 grow-2 shrink-1 left-8" fixedWidth/>
                                        ID: goce.sk.nl
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;