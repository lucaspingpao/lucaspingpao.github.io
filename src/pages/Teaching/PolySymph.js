import React, { useEffect } from 'react';
import '../../styles/Project.css';

// import TechStack from '../../components/TechStack';
// import Summary from '../../components/Summary';

function PolySymph() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-container">
            <h2>Polysymph Synthesizer</h2>
            <div className="row">
                <div>
                    <div>
                        <h3>Skills:</h3>
                        <p class="tech-skills">Python, Flask, Audio Synthesis, Digital Signal Processing</p>
                    </div>
                    <h3>Harvard Math Department</h3>
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
                </div>
                <div>
                    <iframe
                        src="https://www.youtube.com/embed/InGrKBRRCUc?si=bqKphcbbNVl7OQN3"
                        title="YouTube video player of Polysymb Synthesizer demo"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    />
                </div>
            </div>
        </div>
        
    );
}

export default PolySymph;
