import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Button } from 'react-mdl';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from "../img/img.jpg";

class Landing extends Component {
     render() {
         return(
             <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12} style={{paddingTop: '3.5em', margin: 0}} className="dark-overlay">
                            <img src={profile} alt="avatar" className="avatar-image" />
                            <p></p>
                            <h4 className="banner-text">Fullstack JavaScript Web Developer</h4>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <List>
                                <ListItem >
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Highly Motivated</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Fully Commited</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Team Player</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Big Tech Nerd</ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        <div className="page-content">
                            <Button raised colored ripple href="/projects">Browse My Projects</Button>
                        </div>
                    </Cell>
                </Grid> 
             </div>
         )
     }
}

export default Landing;