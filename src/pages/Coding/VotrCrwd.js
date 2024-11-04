import React, { useEffect } from 'react';
import '../../styles/Project.css';

import TechStack from '../../components/TechStack';
// import Summary from '../../components/Summary';

function VotrCrwd() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-container">
            <h2>VotrCrwd</h2>
            <div className="row">
                <div>
                    <TechStack tech="JavaScript, React, HTML, CSS (Material UI), Google APIs"/>
                    <div>
                        <h3>Voter Information System</h3>
                        <p>
                            Through my journey into the tech world, I have been constantly inspired by the ways in which we can utiilize technology to improve all aspects of our society,
                            especially through emerging crossovers between technology and education, civics, social good, and more.
                            I pursued a CivicTech project at the annual hackathon between the consortium of Ivy League schools called IvyHacks.
                        </p>
                        <p>
                            In this hackathon, I helped design a project called&nbsp;
                            <a href="https://devpost.com/software/votrcrwd-edb5v0" target="_blank" rel="noopener noreferrer">VotrCrwd</a>, an all in one voting information system that provides polling station locations and capacities using real-time user location data in order to help voters track whether their polling location is unusually crowded and decide how safe it is to vote.
                            VotrCrwd also provides users with voter registration and absentee ballot request information. Here below is a video I made highlighting the main capaibilities of our initial prototype!
                        </p>
                    </div>
                </div>
                <div>
                    <iframe 
                        src="https://www.youtube.com/embed/5WL0OOjLrmU?si=_nMj9skU1Q6sD1zZ"
                        title="YouTube video player of VotrCrwd demo"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    />
                </div>
            </div>
        </div>
        
    );
}

export default VotrCrwd;