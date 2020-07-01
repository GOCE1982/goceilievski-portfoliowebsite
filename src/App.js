import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/routes';
import { Link } from 'react-router-dom';

class App extends Component {

    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }

    render() {
        return (  
            <div>
                <Layout fixedHeader>
                    <Header className="header-color" title={<a style={{color: "#fff", textDecoration: 'none'}} href="/">PortfolioWebsite</a>}>
                        <Navigation>
                            <a href="/resume">Resume</a>
                            <a href="/projects">Projects</a>
                            <a href="/contact">Contact</a>
                            <a href="https://www.linkedin.com/in/goce-ilievski-06b863132/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square social-links" area-hidden="true" />
                            </a>
                            <a href="https://github.com/GOCE1982" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square social-links" area-hidden="true" />
                            </a>
                        </Navigation>
                    </Header>
                    <Drawer title="My Portfolio" > 
                        <Navigation>
                            <Link to="/" onClick={() => this.hideToggle()}>Home</Link>
                            <Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
                            <Link to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
                            <Link to="/contact" onClick={() => this.hideToggle()}>Contact</Link>
                            <Link target="_blank" to="//linkedin.com/in/goce-ilievski-06b863132/" onClick={() => this.hideToggle()}>LinkedIn</Link>
                            <Link target="_blank" to="//github.com/GOCE1982" onClick={() => this.hideToggle()}>GitHub</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div classname='page-content'>
                            <Main />
                        </div>
                    </Content>
                </Layout>
        </div>
        );
    }
}

export default App;
