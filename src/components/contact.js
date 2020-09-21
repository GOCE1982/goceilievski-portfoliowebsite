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

class Contact extends Component {
    state = {
        success: false
    }

    setSuccess = () => {
        if(window.location.search.includes('success=true')) {
            this.setState({success: true})
        }
    }

    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h3>Send me a message</h3>
                        {this.state.success && (
                            <p style={{color: 'green'}}>Successfully sent message</p>
                        )}
                        <form name="contact" method="POST" data-netlify="true" action="/?success=true">
                            <input type="hidden" name="form-name" value="contact" />
                            <p>
                                <Textfield 
                                    onChange={() => {}}
                                    label="Name"
                                    style={{width: '200px'}}
                                />
                            </p>
                            <p>
                                <Textfield 
                                    onChange={() => {}}
                                    label="Email"
                                    style={{width: '200px'}}
                                />
                            </p>
                            <p>
                                <Textfield 
                                    onChange={() => {}}
                                    label="Message"
                                    floatingLabel
                                    rows="8"
                                    maxRows="12"
                                />
                            </p>
                            <p>
                                <Button type="submit">Send</Button>
                            </p>
                        </form>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
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