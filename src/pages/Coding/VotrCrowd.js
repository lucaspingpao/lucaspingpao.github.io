import React, { useEffect } from 'react';
import '../../styles/Project.css';

function VotrCrowd() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projectContainer">
            <h2>VotrCrowd</h2>
            <div className="row">
                <div>
                    <div>
                        <h3>Tech Stack:</h3>
                        <p class="techSkills">JavaScript, React, HTML, CSS (Material UI), Google APIs</p>
                    </div>
                    <div>
                        <h3>Voter Information System</h3>
                        <p>
                            Through my journey into the tech world, I have been constantly inspired by the ways in which we can utiilize technology to improve all aspects of our society,
                            especially through emerging crossovers between technology and education, civics, social good, and more.
                            I pursued a CivicTech project at the annual hackathon between the consortium of Ivy League schools called IvyHacks.
                        </p>
                        <p>
                            In this hackathon, I helped design a project called&nbsp;
                            <a href="https://devpost.com/software/votrcrwd-edb5v0">VotrCrowd</a>, an all in one voting information system that provides polling station locations and capacities using real-time user location data in order to help voters track whether their polling location is unusually crowded and decide how safe it is to vote.
                            VotrCrwd also provides users with voter registration and absentee ballot request information. Here below is a video I made highlighting the main capaibilities of our initial prototype!
                        </p>
                    </div>
                </div>
                <div>
                    <iframe 
                        src="https://www.youtube.com/embed/5WL0OOjLrmU?si=_nMj9skU1Q6sD1zZ"
                        title="YouTube video player of Votrcrowd demo"
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

export default VotrCrowd;