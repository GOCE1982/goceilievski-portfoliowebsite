import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Landing extends Component {
     render() {
         return(
             <div className="demo-grid-1">
                <Grid>
                    <Cell col={4}>
                        <div>
                            <img src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png" alt="avatar" className="avatar-image" />
                            <p></p>
                            <h4 className="banner-text">Fullstack Web Developer</h4>
                            <List>
                                <ListItem >
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Self-taught & highly motivated</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Fully commited</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Highly flexible</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Easy-going personality</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Available 24/7</ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                    <Cell col={4} style={{paddingTop: '17.5%'}}>
                        <div className="banner-text" >
                            <h1>Front-end skills</h1>
                        </div>
                        <List>
                            <ListItem >
                                <ListItemContent className="list-items">HTML</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className="list-items">CSS</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className="list-items">JavaScript ES7+</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className="list-items">React</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className="list-items">Redux</ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>
                    <Cell col={4} style={{paddingTop: '17.5%'}}>
                        <div className="banner-text">
                            <h1>Back-end skills</h1>
                        </div>
                        <List>
                            <ListItem >
                                <ListItemContent className="list-items">NodeJS</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className="list-items">Express</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className="list-items">MongoDB</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className="list-items">MySQL</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className="list-items">PostgreSQL</ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>
                </Grid> 
             </div>
         )
     }
}

export default Landing;