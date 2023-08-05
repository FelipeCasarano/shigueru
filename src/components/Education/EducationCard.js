import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';


import './Education.css'


function EducationCard({ id, institution, course, icon }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={icon} alt="" />
                </div>
                <div className="education-details">

                    <h4 style={{ color: theme.tertiary }}>{course}</h4>

                </div>
            </div>
        </Fade>
    )
}

export default EducationCard
