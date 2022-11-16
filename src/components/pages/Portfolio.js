import React from "react";
import"../../styles.css/Variables.css"
import "../../styles.css/Portfolio.css";

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className = 'projectParentContainer'>
                <section className="projectChildContainer">
                    <h5 className="projectTitle">1</h5>
                    <img className="projectImages" src="https://media.istockphoto.com/id/609802128/photo/open-pantone-sample-colors-catalogue.jpg?b=1&s=170667a&w=0&k=20&c=I7mdRWLGqiojTM0EAM57bXARNCjsJqtmG6gVmpo1y1g=" alt="Test"></img>
                    <div className="projectLinkSection">
                        <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
                            <button className="deployableButton">
                                Deployable Link
                            </button>
                        </a>
                        <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
                            <button className="gitHubButton">
                                GitHub Repo
                            </button>
                        </a>
                    </div>
                </section>
                <section className="projectChildContainer">
                    <h5 className="projectTitle">2</h5>
                    <img className="projectImages" src="https://media.istockphoto.com/id/609802128/photo/open-pantone-sample-colors-catalogue.jpg?b=1&s=170667a&w=0&k=20&c=I7mdRWLGqiojTM0EAM57bXARNCjsJqtmG6gVmpo1y1g=" alt="Test"></img>
                    <div className="projectLinkSection">
                        <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
                            <button className="deployableButton">
                                Deployable Link
                            </button>
                        </a>
                        <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
                            <button className="gitHubButton">
                                GitHub Repo
                            </button>
                        </a>
                    </div>
                </section>
                <section className="projectChildContainer">
                    <h5 className="projectTitle">Workday Scheduler</h5>
                    <img className="projectImages" src="https://github.com/JaQwae/workday-scheduler/raw/main/images/workdayScreenshot.png" alt="Workday App Screenshot"></img>
                    <div className="projectLinkSection">
                        <a href="https://jaqwae.github.io/workday-scheduler/" target="_blank" rel='noreferrer'>
                            <button className= "deployableButton">
                                Deployable Link
                            </button>
                        </a>
                        <a href="https://github.com/JaQwae/workday-scheduler" target="_blank" rel='noreferrer'>
                            <button className= "gitHubButton">
                                GitHub Repo
                                </button>
                        </a>
                        
                    </div>
                </section>
                <section className="projectChildContainer">
                    <h5 className="projectTitle">Note Taker</h5>
                    <img className="projectImages" src="https://james-fisher-web-developer.com/media/note-taker-1.png" alt="Note Taker App Screenshot"></img>
                    <div className="projectLinkSection">
                        <a href="https://jay-note-taker.herokuapp.com/" target="_blank" rel='noreferrer'>
                            <button className="deployableButton">
                                Deployable Link
                            </button>
                        </a>
                        <a href="https://github.com/JaQwae/Note-Taker" target="_blank" rel='noreferrer'>
                            <button className= "gitHubButton">
                                GitHub Repo
                                </button>
                        </a>
                    </div>
                </section>
                <section className="projectChildContainer">
                    <h5 className="projectTitle">Project Title</h5>
                    <img className="projectImages" src="https://media.istockphoto.com/id/609802128/photo/open-pantone-sample-colors-catalogue.jpg?b=1&s=170667a&w=0&k=20&c=I7mdRWLGqiojTM0EAM57bXARNCjsJqtmG6gVmpo1y1g=" alt="Test"></img>
                    <div className="projectLinkSection">
                        <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
                            <button className="deployableButton">
                                Deployable Link
                            </button>
                        </a>
                        <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
                            <button className="gitHubButton">
                                GitHub Repo
                            </button>
                        </a>
                    </div>
                </section>
                <section className="projectChildContainer">
                    <h5 className="projectTitle">Project Title</h5>
                    <img className="projectImages" src="https://media.istockphoto.com/id/609802128/photo/open-pantone-sample-colors-catalogue.jpg?b=1&s=170667a&w=0&k=20&c=I7mdRWLGqiojTM0EAM57bXARNCjsJqtmG6gVmpo1y1g=" alt="Test"></img>
                    <div className="projectLinkSection">
                        <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
                            <button className="deployableButton">
                                Deployable Link
                            </button>
                        </a>
                        <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
                            <button className="gitHubButton">
                                GitHub Repo
                            </button>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}