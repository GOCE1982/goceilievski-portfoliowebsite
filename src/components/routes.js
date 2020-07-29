import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import TitleComponent from './title';

const withTitle = ({ component: Component, title }) => {
    return class Title extends Component {
        render() {
            return (
                <React.Fragment>
                    <TitleComponent title={title} />
                    <Component {...this.props} />
                </React.Fragment>
            );
        }
    };
};

const LandingComponent = withTitle({ component: Landing, title: 'My Portfolio'})
const ResumeComponent = withTitle({ component: Resume, title: 'My Resume'})
const ProjectsComponent = withTitle({ component: Projects, title: 'My Projects'})
const ContactComponent = withTitle({ component: Contact, title: 'Contact Me'})

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingComponent} />
        <Route path="/resume" component={ResumeComponent} />
        <Route path="/projects" component={ProjectsComponent} />
        <Route path="/contact" component={ContactComponent} />
    </Switch>
)

export default Main;