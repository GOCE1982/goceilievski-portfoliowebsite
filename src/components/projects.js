import React, { Component } from 'react';
import { Tab,
    Tabs,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardActions,
    Button,
    CardText,
    Spinner } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', paddingRight: '5px'}}>
                        <CardTitle style={{color: '#fff', fontSize: 'bold', height: '176px', background: 'url(https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png) center / cover'}}></CardTitle>
                        <CardText style={{wordWrap: 'break-word', justifyContent: 'space-evenly', textAlign: 'justify'}}>
                            The very fist project I finished while learning ReactJS. <br /> It exploits all the basics of React, plus using the Redux framework for state management. <br /> Heavily utilized the Twitter Bootstrap framework for the front-end. Used JSON placeholder for mocking the back-end and deployed it to a free Netlify hosting.
                        </CardText>
                        <CardActions border style={{justifyContent: 'space-between', display: 'flex'}}>
                            <Button colored href="https://github.com/GOCE1982/contact-manager" target="_blank">GitHub</Button>
                            <Button colored href="https://contactmanager-redux.netlify.app/" target="_blank">Live Demo</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', paddingRight: '5px'}}>
                        <CardTitle style={{color: '#fff', fontSize: 'bold', height: '176px', background: 'url(https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png) center / cover'}}></CardTitle>
                        <CardText style={{wordWrap: 'break-all', justifyContent: 'space-evenly', textAlign: 'justify'}}>
                            The second React project - a client manager.<br />Used Firebase on the back-end with enabled user authentication through react-redux-firebase.<br />A production level application with real-life usable features and persistance of the data in a cloud database.
                        </CardText>
                        <CardActions border style={{justifyContent: 'space-between', display: 'flex'}}>
                            <Button colored href="https://github.com/GOCE1982/react-client-panel" target="_blank">GitHub</Button>
                            <Button colored href="https://reactclientpanel-e6641.firebaseapp.com/" target="_blank">Live Demo</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div>
                    <h4>Work in progress</h4>
                    <Spinner/>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', paddingRight: '5px'}}>
                    <CardTitle style={{color: '#fff', fontSize: 'bold', height: '176px', background: 'url(https://seeklogo.net/wp-content/uploads/2015/09/nodejs-logo-vector-download.jpg) center / cover'}}></CardTitle>
                    <CardText style={{wordWrap: 'break-word'}}>
                        The fist project I finished while learning web development with NodeJS.<br />Used the Express framework with the EJS templating language, implemented user authentication with PassportJS and a backend REST API with full CRUD functionality.
                    </CardText>
                    <CardActions border style={{justifyContent: 'space-between', display: 'flex'}}>
                        <Button colored href="https://github.com/GOCE1982/c9/tree/master/YelpCamp" target="_blank">GitHub</Button>
                        <Button colored href="https://morning-savannah-29031.herokuapp.com/" target="_blank">Live Demo</Button>
                    </CardActions>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return(
                <div>
                    <h4>Work in progress</h4>
                    <Spinner/>
                </div>
            )
        }
    }

    
    render() {
        return (
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>NodeJS</Tab>
                <Tab>Django</Tab>
            </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;