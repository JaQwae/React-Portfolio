import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles.css/Resume.css";
import resume from '../../jaqwae-ellison-tech-resume.pdf'; 

export default function Resume() {
    return (
        <div className="resumePage">
            <h1 className="pageTitle">Resume</h1>
            
            <div className="skill-card-container">
                <div className="card skills-card" >
                    <div className="card-header skills-card-header">
                        Front-end Proficiencies
                    </div>
                    <ul className="list-group list-group-flush skills-card-list">
                        <li className="list-group-item skills-card-list-item">React.js</li>
                        <li className="list-group-item skills-card-list-item">JavaScript</li>
                        <li className="list-group-item skills-card-list-item">APIs</li>
                        <li className="list-group-item skills-card-list-item">Bootstrap & jQuery</li>
                        <li className="list-group-item skills-card-list-item">HTML, Advance CSS, & Git</li>
                    </ul>
                </div>
                <div className="card skills-card" >
                    <div className="card-header skills-card-header">
                        Back-end Proficiencies
                    </div>
                    <ul className="list-group list-group-flush skills-card-list">
                        <li className="list-group-item skills-card-list-item">Node.js</li>
                        <li className="list-group-item skills-card-list-item">SQL</li>
                        <li className="list-group-item skills-card-list-item">RESTful API</li>
                        <li className="list-group-item skills-card-list-item">Testing</li>
                        <li className="list-group-item skills-card-list-item">NoSQL</li>
                    </ul>
                </div>
                <div className="card skills-card" >
                    <div className="card-header skills-card-header">
                        Soft skills
                    </div>
                    <ul className="list-group list-group-flush skills-card-list">
                        <li className="list-group-item skills-card-list-item">Critical Thinking</li>
                        <li className="list-group-item skills-card-list-item">Teamwork</li>
                        <li className="list-group-item skills-card-list-item">Time Management</li>
                        <li className="list-group-item skills-card-list-item">Verbal and Written Communication</li>
                        <li className="list-group-item skills-card-list-item">Adaptability</li>
                    </ul>
                </div>
            </div>
                {/* <a className="resume-link" href="../../resume.pdf" target="_blank" rel='noreferrer'>
                    <button className="resume-button">
                        Download My Resume
                    </button>
                </a> */}
                <iframe className='resumeContainer'src={resume} title="resume" />
        </div>
    )
}