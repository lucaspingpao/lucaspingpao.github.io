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
                            One semester, I took a class called "How Music Works: Engineering the Acoustical World", in which we applied concepts from mechnical and eletrical engineering to explore and create our own musical systems.
                            For my final project in this class, I developed a web app called PolySymph (a wordplay on "Polyphonic Synthesizer" + "Symphony"),
                            a music composition app that allows the user to experiment with the fundamental components of a band in a uniquely displayed format.
                        </p>
                        <p>
                            I synthesized original sounds on the backend in Python by superpositioning sinewave signals according to fixed (and random!) sets of Fourier coefficients
                            and mapped these sounds to the frontend using Flask.
                            Additionally, I created a tutorial video explaining the building process of the backend synthesizer and some of the mathematical concepts behind digital sound synthesis.
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
