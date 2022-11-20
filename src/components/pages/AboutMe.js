import React from "react";
import '../../styles.css/AboutMe.css'
export default function AboutMe() {
    return (
        <div>
            <h1 className="pageTitle">About Me</h1>
            <div className="about-me-content-container">
                <section className="profile-image-container">
                    <img  className = "profile-image" src="https://media-exp1.licdn.com/dms/image/C4E03AQGANkwtitDZeA/profile-displayphoto-shrink_800_800/0/1609799385127?e=2147483647&v=beta&t=x43-vFIz_X-ycyzxV9AuijKjjCWHV_IuJIfErDQzsXY" alt="Profile Placeholder"></img>
                </section>
                <section className="short-bio">
                    <h3 className="about-me-title-primary">Welcome!</h3>
                    <p className="about-me-text">Hello, my name is JaQwae Ellison, and I'm a freelance software engineer based in Austin! Currently, I am attending the Web Development Bootcamp at UT Austin, where its core focal point is Javascript! I have designed over two dozen web applications and collaborated with colleges on a few more. I'm eagerly looking to improve my skill set and branch into other technologies and languages.</p>
                    <h6 className="about-me-title-secondary">My goals:</h6>
                    <ul className="about-me-list"> 
                        <li className="about-me-list-items">Make the switch from optometry to tech.</li>
                        <li className="about-me-list-items">Design inclusive and interactive applications that make people's lives easier</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}