import React from "react";
import Project1 from "../assets/image.png";
import Project2 from "../assets/p2.png";
import Project3 from "../assets/p3.png";
import Project4 from "../assets/p4.png";
import Project5 from "../Components/stock.jpg";
import Project6 from "../assets/banner3.jpg";
import "./Projects.css";

function Projects(props) {
    const projects = [
        {
            title: "Recipe Finder Website",
            image: Project1,
            desc: "A platform for discovering, saving, and sharing recipes. Users can search based on ingredients, meal types, or dietary restrictions.",
            tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            link: "https://asheesh109.github.io/Bon_Apetite/"
        },
        {
            title: "Freelancer Hub",
            image: Project2,
            desc: "A platform for freelancers and clients to connect and collaborate on projects.",
            tech: ["HTML", "CSS", "JavaScript"],
            link:"https://sakshi13-05.github.io/Stock-Comparison-System/"
        },
        {
            title: "Quiz",
            image: Project3,
            desc: "An interactive quiz app using Java and JSON to test knowledge on multiple topics.",
            tech: ["Java", "Swing", "Awt", "Json"],
            link:"https://sakshi13-05.github.io/Stock-Comparison-System/"
        },
        {
            title: "Virtual Banking System",
            image: Project4,
            desc: "A simulated banking system with user interface and backend using Java.",
            tech: ["Java", "JDBC", "Swing", "Awt"],
            link: "https://sakshi13-05.github.io/Stock-Comparison-System/ "
        },
        {
            title: "Stock Comparison System",
            image: Project5,
            desc: "Compares stock performance with live data using Java and JSON.",
            tech: ["HTML", "CSS", "JS", "JAVA"],
            link: " https://sakshi13-05.github.io/Stock-Comparison-System/"
            
          
        },
        {
            title: "MediGo",
image: Project6, 
desc: "Medical assistance platform for searching medicines, viewing details, and tracking search history using MERN stack.",
tech: ["React", "Node.js", "Express", "MongoDB"],
link: "https://medigo-ed4a0.web.app/"

            
          
        }

    ];

    return (
        <div className="common" theme={props.dabaa ? "dark" : "light"}>
            <div className="projects-container">
                <h2 className="pro-heading">-- My Projects --</h2>
                <div className="projects-collection">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="tech-stack">
                                {project.tech.map((tech, ind) => (
                                    <span key={ind} className="tech-collect">{tech}</span>
                                ))}
                            </div>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="#" className="pro-btn">
                                    Check Here
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
