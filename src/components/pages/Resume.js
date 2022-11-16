import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles.css/Resume.css";

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <a className="resume-link" href="https://www.google.com/" target="_blank" rel='noreferrer'>
                <button class="resume-button">
                    Download My Resume
                </button>
            </a>
            <div className="skill-card-container">
                <div class="card skills-card" >
                    <div class="card-header skills-card-header">
                        Front-end Proficiencies
                    </div>
                    <ul class="list-group list-group-flush skills-card-list">
                        <li class="list-group-item skills-card-list-item">React.js</li>
                        <li class="list-group-item skills-card-list-item">JavaScript</li>
                        <li class="list-group-item skills-card-list-item">APIs</li>
                        <li class="list-group-item skills-card-list-item">Bootstrap & jQuery</li>
                        <li class="list-group-item skills-card-list-item">HTML, Advance CSS, & Git</li>
                    </ul>
                </div>
                <div class="card skills-card" >
                    <div class="card-header skills-card-header">
                        Back-end Proficiencies
                    </div>
                    <ul class="list-group list-group-flush skills-card-list">
                        <li class="list-group-item skills-card-list-item">Node.js</li>
                        <li class="list-group-item skills-card-list-item">SQL</li>
                        <li class="list-group-item skills-card-list-item">RESTful API</li>
                        <li class="list-group-item skills-card-list-item">Testing</li>
                        <li class="list-group-item skills-card-list-item">NoSQL</li>
                    </ul>
                </div>
                <div class="card skills-card" >
                    <div class="card-header skills-card-header">
                        Soft skills
                    </div>
                    <ul class="list-group list-group-flush skills-card-list">
                        <li class="list-group-item skills-card-list-item">Critical Thinking</li>
                        <li class="list-group-item skills-card-list-item">Teamwork</li>
                        <li class="list-group-item skills-card-list-item">Time Management</li>
                        <li class="list-group-item skills-card-list-item">Verbal and Written Communication</li>
                        <li class="list-group-item skills-card-list-item">Adaptability</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}