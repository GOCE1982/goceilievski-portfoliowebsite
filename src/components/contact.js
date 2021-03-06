import React, { Component } from 'react';
import { Grid,
         Cell,
         List,
         ListItemContent,
         ListItem,
         } from 'react-mdl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsappSquare, faViber, faSkype, faTelegram } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './ContactForm';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <ContactForm />
                    </Cell>
                    <Cell col={1}></Cell>
                    <Cell col={5}>
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