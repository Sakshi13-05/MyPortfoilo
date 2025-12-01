import React from 'react';
import './About.css';
import './Common.css';

function AboutMe(props) {
    const education = [
        {
            year: "2020-2021",
            title: "SSC",
            institution: "Don Bosco High School",
            description: "Scored 92.60%",
        },
        {
            year: "2022-2023",
            title: "HSC, CET",
            institution: "R.V.Nerurkar Junior College",
            description: "Scored 87.83% in boards and 91.48 percentile in CET",
        },
        {
            year: "2023-2024",
            title: "SEM-1, SEM-2",
            institution: "Terna Engineering College",
            description: "Scored 9.94 CGPA and 9.40 in respective semesters",
        }
    ];
    
    return (
        <div className='common' theme={props.dabaa ? "dark" : "light"}>
            <div className="about" theme={props.dabaa ? "dark" : "light"}>
                <h1 className="about-title">About Me</h1>
                
                <div className="about-timeline">
                    {education.map((ele, index) => (
                        <div key={index} className="about-item">
                            <div className="about-dot"></div>
                            <div className="about-card">
                                <h3>{ele.year}</h3>
                                <h2>{ele.title}</h2>
                                <h4>{ele.institution}</h4>
                                <p>{ele.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
