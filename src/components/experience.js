import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.from} - {this.props.to}</p>
                    </Cell>
                    <Cell col={8}>
                    <h4 style={{marginTop: '0'}}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Experience;