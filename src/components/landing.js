import React, { Component, Fragment } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Button} from 'react-mdl';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from "../img/img.jpg";

class Landing extends Component {
     render() {
         return(
             <Fragment>
                <Grid className="landing-grid">
                    <Cell col={12} style={{margin: '0', width: '100%'}} className="dark-overlay">
                        <img src={profile} alt="avatar" className="avatar-image" />
                        <p></p>
                        <h1 className="banner-text">Front-end Web Developer</h1>
                        <div style={{display: 'grid', justifyContent: 'center'}}>
                            <List>
                                <ListItem >
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Highly motivated</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Detail-oriented</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Independent & fully reliable</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont"><FontAwesomeIcon icon={faStar} pull="left"/>Great team player</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont">
                                        <a href='/projects' style={{textDecoration: 'none'}}><Button accent raised ripple>Personal Projects</Button></a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont">
                                        <div className="social-links">
                                            <a target="_blank" href="https://www.linkedin.com/in/goce-ilievski-06b863132/" rel="noopener noreferrer">
                                                <i className="fa fa-linkedin-square" area-hidden="true" />
                                            </a>
                                            
                                            <a target="_blank" href="https://github.com/GOCE1982" rel="noopener noreferrer">
                                                <i className="fa fa-github-square" area-hidden="true" />
                                            </a>
                                        </div>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                    <Cell col={12} style={{margin: '0 auto'}}>
                        <div className="banner-text">
                            <h6>HTML/CSS | Bootstrap 4 | Material-UI | JavaScript | React | Redux | NodeJS | Express | MongoDB</h6>
                        </div>
                    </Cell>
                </Grid> 
             </Fragment>
         )
     }
}

export default Landing;