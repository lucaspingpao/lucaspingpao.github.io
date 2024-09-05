import React, { useEffect } from 'react';
import '../../styles/Project.css';

import TapJams from "../../assets/TapJams.png";

function PolySymph() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projectContainer">
            <h2>Polysymph Synthesizer</h2>
            <div className="row">
                <div>
                    <p>
                        In the fall semester of 2020, I took a class called "How Music Works: Engineering the Acoustical World", in which we applied concepts from mechnical and eletrical engineering to explore and create our own musical systems.
                        For my final project in this class, I developed a web app called PolySymph (a wordplay on "Polyphonic Synthesizer" + "Symphony"),
                        a music composition app that allows the user to experiment with the fundamental components of a band in a uniquely displayed format.
                
                        I first synthesized original sounds on the backend in Python by superpositioning sinewave signals according to fixed (and random!) sets of Fourier coefficients.
                        I then mapped these sounds to the frontend user interface of the app using the micro web framework Flask.
                        Watch the video below to find out more about how I created the backend synthesizer that supports the audio signals in the app!
                    </p>
                </div>
                <div>
                    <iframe
                        src="https://www.youtube.com/embed/InGrKBRRCUc?si=bqKphcbbNVl7OQN3"
                        title="YouTube video player of Polysymb Synthesizer demo"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            
            <h2>TapJams</h2>
            <div className="row">
                <div>
                    <div>
                        <h3>Tech Stack:</h3>
                        <p class="techSkills">JavaScript, React, HTML, CSS (Material UI), Node.js, Express, SQL (PostgreSQL)</p>
                    </div>
                    <div>
                        <h3>Music Creation x Social Media</h3>
                        <p>
                            I then used this idea to develop a further prototype into the latest version of the app called TapJams,
                            a social music-making app for amateur musicians and general people interested in making their own songs in a fun, social, casual/non-professional setting.
                            The app will eventually feature an easily accessible user interface including unique virtual musical instruments and an in-app social media platform for allowing users to make their own beats and share them with their friends just a few taps away.
                            The product was incubated through Harvard's Innovation Labs through the Spring 2022 Venture Program.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={TapJams} alt="TapJams app page showing drum instruments and a drum machine interface to program one's own rhythm."></img>
                </div>
            </div>
        </div>
        
    );
}

export default PolySymph;
