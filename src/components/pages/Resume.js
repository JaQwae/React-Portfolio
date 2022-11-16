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
                        <li class="list-group-item skills-card-list-item">Test 1</li>
                        <li class="list-group-item skills-card-list-item">Test 2</li>
                        <li class="list-group-item skills-card-list-item">Test 3</li>
                        <li class="list-group-item skills-card-list-item">Test 4</li>
                        <li class="list-group-item skills-card-list-item">Test 5</li>
                    </ul>
                </div>
                <div class="card skills-card" >
                    <div class="card-header skills-card-header">
                        Back-end Proficiencies
                    </div>
                    <ul class="list-group list-group-flush skills-card-list">
                        <li class="list-group-item skills-card-list-item">Test 1</li>
                        <li class="list-group-item skills-card-list-item">Test 2</li>
                        <li class="list-group-item skills-card-list-item">Test 3</li>
                        <li class="list-group-item skills-card-list-item">Test 4</li>
                        <li class="list-group-item skills-card-list-item">Test 5</li>
                    </ul>
                </div>
                <div class="card skills-card" >
                    <div class="card-header skills-card-header">
                        Soft skills
                    </div>
                    <ul class="list-group list-group-flush skills-card-list">
                        <li class="list-group-item skills-card-list-item">Test 1</li>
                        <li class="list-group-item skills-card-list-item">Test 2</li>
                        <li class="list-group-item skills-card-list-item">Test3</li>
                        <li class="list-group-item skills-card-list-item">Test 4</li>
                        <li class="list-group-item skills-card-list-item">Test 5</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}