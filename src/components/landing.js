import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from "../img/img.jpg";

class Landing extends Component {
     render() {
         return(
             <div>
                <Grid className="landing-grid">
                    <Cell col={12} style={{paddingTop: '3.5em', margin: 'auto'}} className="dark-overlay">
                        <img src={profile} alt="avatar" className="avatar-image" />
                        <p></p>
                        <h1 className="banner-text">Front-end Developer</h1>
                        <div style={{display: 'grid', justifyContent: 'center'}}>
                            <List>
                                <ListItem >
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Highly motivated</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Self-driven</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Laid-back personality</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Passionate about tech</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont">
                                        <Link to={'/projects'}>View My Personal Projects</Link>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont">
                                        <div className="social-links">
                                            <Link target="_blank" to="//linkedin.com/in/goce-ilievski-06b863132/">
                                                <i className="fa fa-linkedin-square" area-hidden="true" />
                                            </Link>
                                            
                                            <Link target="_blank" to="//github.com/GOCE1982">
                                                <i className="fa fa-github-square" area-hidden="true" />
                                            </Link>
                                        </div>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        <div className="banner-text">
                            <h6>HTML/CSS | Bootstrap 4 | Material-UI | JavaScript | React | Redux | NodeJS | Express | MongoDB</h6>
                        </div>
                    </Cell>
                </Grid> 
             </div>
         )
     }
}

export default Landing;