import React from "react";
import "./Skills.css";
import skill1 from './c.png';
import skill2 from './java.png';
import skill3 from './js.png';
import skill4 from './oo.png';
import skill5 from './dsa.png';
import skill6 from './sql.png';
function Skills(props)
{
 
    const technicalSkills = [
        {
            skill: "C",
            image: skill1, // Placeholder for the image URL
            percentage: 80
        },
        {
            skill: "Java",
            image: skill2, // Placeholder for the image URL
            percentage: 80
        },
        {
            skill: "JavaScript",
            image: skill3, // Placeholder for the image URL
            percentage: 50
        },
        {
            skill: "OOPs",
            image: skill4, // Placeholder for the image URL
            percentage: 60
        },
        {
            skill: "DSA",
            image: skill5, // Placeholder for the image URL
            percentage: 60
        },
        {
            skill: "MySQL",
            image: skill6, // Placeholder for the image URL
            percentage: 50
        }
    ];
    const professionalSkills=[
        {
            name:"Teamwork",
            percentage: 94
        },
        {
            name:"Problem-Solving",
            percentage:60
        }
    ];

    
    return(
        <>
        <div className='common' theme={props.dabaa ? "dark" : "light"}>
            <div className="skill-section">
                <div className="technical-skills">
                    <h2 className="title">Technical Skills</h2>
                    {technicalSkills.map(skill => (
                        <div className="skill-bar" key={skill.name}>
                            <img src={skill.image} alt={skill.name} className="image" />
                            <div className="progress-bar">
                                <div className="progress" style={{ width:`${skill.percentage}%` }} />
                            </div>
                            <div id="per">{skill.percentage}%</div>
                        </div>
                    ))}
                </div>
                <div className="professional-skills">
  <h2 className="title">Professional Skills</h2>
  <div className="skills-wrapper">
    {professionalSkills.map(skill => (
        <div className="headi">{skill.name}
      <div className="circle" key={skill.name}>
        <div
          className="circle-progress"
          style={{ transform:`rotate(${(360 * (skill.percentage / 100))}deg)` }} />
        
        <div className="circle-text">{skill.percentage}%</div>
        
      </div>
      </div>
    ))}
  </div>
</div>

            </div>
        </div>
           </>
        
        

        
      

    );
}

export default Skills;