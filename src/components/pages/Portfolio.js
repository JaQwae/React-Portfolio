import React from "react";
import"../../styles.css/Variables.css"
import "../../styles.css/Portfolio.css";

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className = 'projectParentContainer'>
                <section className="projectChildContainer">
                    <h5 className="projectTitle">The Legend of Orion</h5>
                    <img className="projectImages" src="https://github.com/josuepaniagua/Orion/raw/main/assets/screenshots/screenshot1.png" alt="Test"></img>
                    <div className="projectLinkSection">
                        <a href="https://josuepaniagua.github.io/Orion/" target="_blank" rel='noreferrer'>
                            <button className="deployableButton">
                                Deployable Link
                            </button>
                        </a>
                        <a href="https://github.com/josuepaniagua/Orion" target="_blank" rel='noreferrer'>
                            <button className="gitHubButton">
                                GitHub Repo
                            </button>
                        </a>
                    </div>
                </section>
                <section className="projectChildContainer">
                    <h5 className="projectTitle">Social Network API</h5>
                    <img className="projectImages" src="https://user-images.githubusercontent.com/91682561/164995464-9faac1f0-fcc1-458c-b344-4003eb603606.png" alt="Test"></img>
                    <div className="projectLinkSection">
                        {/* <a href="https://www.google.com/" target="_blank" rel='noreferrer'> */}
                            <button className="deployableButton">
                                No Deployable Link Available
                            </button>
                        {/* </a> */}
                        <a href="https://github.com/JaQwae/Social-Network-API" target="_blank" rel='noreferrer'>
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
                    <h5 className="projectTitle">E-Commerce Backend</h5>
                    <img className="projectImages" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4nDQRHuzmq2qgeRMrvP4rvcOWP1mUsO3BQ&usqp=CAU" alt="Test"></img>
                    <div className="projectLinkSection">
                        {/* <a href="https://www.google.com/" target="_blank" rel='noreferrer'> */}
                            <button className="deployableButton">
                                No Deployable Link Available
                            </button>
                        {/* </a> */}
                        <a href="https://github.com/JaQwae/E-commerce-Back-End" target="_blank" rel='noreferrer'>
                            <button className="gitHubButton">
                                GitHub Repo
                            </button>
                        </a>
                    </div>
                </section>
                <section className="projectChildContainer">
                    <h5 className="projectTitle">Tech Blog</h5>
                    <img className="projectImages" src="https://github.com/JaQwae/Tech-Blog/raw/main/images/techBlog%20Screenshot.png" alt="Test"></img>
                    <div className="projectLinkSection">
                        <a href="https://radiant-gorge-67933.herokuapp.com/" target="_blank" rel='noreferrer'>
                            <button className="deployableButton">
                                Deployable Link
                            </button>
                        </a>
                        <a href="https://github.com/JaQwae/Tech-Blog" target="_blank" rel='noreferrer'>
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