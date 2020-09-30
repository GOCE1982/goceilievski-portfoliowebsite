import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Cell, List, ListItem, ListItemContent, Button} from 'react-mdl';
import Hello from './typed';

class Landing extends Component {
     render() {
         return(
             <Fragment>
                <Grid className="landing-grid" style={{height: '100%'}}>
                    <Cell col={12} style={{margin: '0', width: '100%'}} className="dark-overlay">
                        
                        <p style={{paddingBottom: '8em'}}></p>
                        <Hello />
                        <div style={{display: 'grid', justifyContent: 'center'}}>
                            <List>
                                <ListItem>
                                    <ListItemContent>
                                        <Link to='/projects' style={{textDecoration: 'none'}}><Button className="list-item-cont" style={{backgroundColor: '#3d3d3d', fontFamily: 'monospace'}} raised ripple>View My Projects</Button></Link>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-item-cont">
                                        <div className="social-links">
                                            <a target="_blank" href="https://www.linkedin.com/in/goce-ilievski-06b863132/" rel="noopener noreferrer" style={{color: '#3d3d3d'}}>
                                                <i className="fa fa-linkedin-square" area-hidden="true" />
                                            </a>
                                            <a target="_blank" href="https://github.com/GOCE1982" rel="noopener noreferrer" style={{color: '#3d3d3d'}}>
                                                <i className="fa fa-github-square" area-hidden="true" />
                                            </a>
                                        </div>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        <div style={{display: 'grid', justifyContent: 'center'}}>
                            <p className="list-items">HTML/CSS | JavaScript | Node | Express.js | React | Redux | MySQL | MongoDB</p>
                        </div>
                    </Cell>
                </Grid> 
             </Fragment>
         )
     }
}

export default Landing;