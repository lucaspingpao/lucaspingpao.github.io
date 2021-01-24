import React from 'react';
import './../Coding.css';

class VotrCrowd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>

                <h1>🧩 Coding 🧩</h1>
                <hr/><br/>
                
                <u><h2>VotrCrowd: IvyHacks Hackathon</h2></u>
                <div>
                    Through my journey into the tech world, I have been constantly inspired by the ways in which we can utiilize technology to improve all aspects of our society,
                    especially through emerging crossovers between technology and education, civics, social good, and more.
                    I hope to pursue more EdTech projects similar to my RShiny visualization apps.
                    But one CivicTech project I pursued was at the first annual virtual hackathon between the consortium of Ivy League schools called IvyHacks.
                </div>

                <br/>

                <div>
                    In this hackathon, I helped design a project called
                    <a href="https://devpost.com/software/votrcrwd-edb5v0"> VotrCrwd</a>, an all in one voting information system that provides polling station locations and capacities using real-time user location data in order to help voters track whether their polling location is unusually crowded and decide how safe it is to vote.
                    VotrCrwd also provides users with voter registration and absentee ballot request information.
                </div>

                <br/>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5WL0OOjLrmU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>   
                
            </div>
            
        );
    }
}

export default VotrCrowd;