import React, { Component } from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faWhatsappSquare, faViber, faSkype } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <div style={{paddingTop:"1em"}}>
                            <h3>Goce Ilievski (Gotse Illiewsky)</h3>
                            <img src="https://scontent.fskp2-1.fna.fbcdn.net/v/t1.0-9/p720x720/53665537_10217377693927722_405943734539124736_o.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=VtZJFCzL0boAX9W_joA&_nc_ht=scontent.fskp2-1.fna&_nc_tp=6&oh=ec3624d5cbbe9d97fea4bbd0453c4d47&oe=5F1E93A9" alt="profile" className="profile-pic"/>
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div>
                            <List>
                                <ListItem>
                                    <ListItemContent className="contact-list">
                                        <FontAwesomeIcon icon={faWhatsappSquare} size="2x" transform="down-4 grow-2.5 left-8" fixedWidth />
                                        <FontAwesomeIcon icon={faViber} size="2x" transform="down-4 left-4" fixedWidth />
                                        +38970770189
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="contact-list">
                                        <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" transform="shrink-1 grow-2.5 down-4 left-8" fixedWidth/>
                                        goce.ilievski@live.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="contact-list">
                                        <FontAwesomeIcon icon={faPaperPlane} size="2x" transform="shrink-2 down-4 left-8" fixedWidth/>
                                        @Gotze_I
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="contact-list">
                                        <FontAwesomeIcon icon={faSkype} size="2x" transform="down-4 grow-2 left-8" fixedWidth/>
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