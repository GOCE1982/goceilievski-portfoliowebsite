import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={12}>
                        <div style={{display: 'fixed', margin: 'auto', fontSize: '20px'}}>
                            {this.props.skill}
                            <ProgressBar style={{margin: '0', width: '100%', height: '0.3em', display: 'flex'}} progress={this.props.progress}/>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Skills;