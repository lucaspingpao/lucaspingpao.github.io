import React from 'react';
import './../Coding.css';

class PolySymph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>🧩 Coding 🧩</h1>
                <hr/><br/>
                <u><h2>Polysymph Synthesizer</h2></u>

                <div>
                    In the fall semester of 2020, I took a class called "How Music Works: Engineering the Acoustical World", in which we applied concepts from mechnical and eletrical engineering to explore and create our own musical systems.
                    For my final project, I developed a web app called <a href="https://polysymph.herokuapp.com" target="_blank" style={{color: "green"}}>PolySymph</a> (a wordplay of Polyphonic Synthesizer + Symphony),
                    a music composition app that allows the user to experiment with the fundamental components of a band in a uniquely displayed format.
                </div>

                <br/>

                <div>
                    I first synthesized original sounds on the backend in Python by superpositioning sinewave signals according to fixed (and random!) sets of Fourier coefficients.
                    Watch the video to find out more about this aspect of the project!
                </div>

                <br/><br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Lcgwm4ci7l4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/><br/>

                <div>
                    I then mapped these sounds to the frontend of the app using the micro web framework Flask.
                    You can find the whole product <a href="https://polysymph.herokuapp.com" target="_blank" style={{color: "green"}}>here</a>!
                </div>

                <br/>
            </div>
            
        );
    }
}

export default PolySymph;