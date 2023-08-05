import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'
import { FaGraduationCap } from 'react-icons/fa';

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{ backgroundColor: theme.secondary }}>
            <div className="education-title">
                <h1 style={{ color: theme.primary }}>Atuação</h1>
            </div>

            <div className="education-body">

                <div className="education-description">

                    {educationData.map(edu => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            icon={edu.icon}

                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Education
