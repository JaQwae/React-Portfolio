import React from "react";
import '../../styles.css/AboutMe.css'
export default function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <div className="about-me-content-container">
                <section className="profile-image-container">
                    <img  className = "profile-image" src="https://media-exp1.licdn.com/dms/image/C4E03AQGANkwtitDZeA/profile-displayphoto-shrink_800_800/0/1609799385127?e=2147483647&v=beta&t=x43-vFIz_X-ycyzxV9AuijKjjCWHV_IuJIfErDQzsXY" alt="Profile Placeholder"></img>
                </section>
                <section className="short-bio">
                    <p>This is how the text will look. fdkaslfjadflkjasldf asdfj asldfjasd;fa sfhas;f jjasdfna;dsf nasdfjasd;lfj asd;fjasfjasdfh asdifhasdkfh sadlfhlasdkhfsdal bfsdjlfhl asdkjf asdklhf asdjkf fj as;lfdj a;sfj ;asj f;sakdfj ;asj fd;asdjf;kjasdfjk;asf djsadfksadhf sadgjls ldjfbaslj kfh basbhkadfh bESFJHsle</p>
                </section>
            </div>
        </div>
    )
}