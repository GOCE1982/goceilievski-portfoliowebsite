import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'react-mdl';

const Education = ({
    startYear,
    endYear,
    schoolName,
    schoolDescription,
    link,
    imgSource
}) => {
    return (
        <Grid>
            <Cell col={4}>
                <p>{startYear} - {endYear}</p>
            </Cell>
            <Cell col={8}>
                <h4 style={{marginTop: '0px'}}>{schoolName}</h4>
                <p>{schoolDescription}</p>
                <p>
                    <img src={imgSource} style={{width: '65%'}} alt="" />
                </p>
                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </Cell>
        </Grid>
    )
};

Education.propTypes = {
    startYear: PropTypes.string.isRequired,
    endYear: PropTypes.string.isRequired,
    schoolDescription: PropTypes.string.isRequired,
    link: PropTypes.string,
    imgSource: PropTypes.string,
}

Education.defaultProps = {
    link: ""
}

export default Education;
