import React from 'react';
import '../../styles/App.css';

class PolySymph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="projectBody">
                <h2>Polysymph Synthesizer</h2>

                <p>
                    In the fall semester of 2020, I took a class called "How Music Works: Engineering the Acoustical World", in which we applied concepts from mechnical and eletrical engineering to explore and create our own musical systems.
                    For my final project in this class, I developed a web app called <a href="https://polysymph.herokuapp.com" target="_blank" style={{color: "green"}}>PolySymph</a> (a wordplay on "Polyphonic Synthesizer" + "Symphony"),
                    a music composition app that allows the user to experiment with the fundamental components of a band in a uniquely displayed format.
                </p>

                <p>
                    I first synthesized original sounds on the backend in Python by superpositioning sinewave signals according to fixed (and random!) sets of Fourier coefficients.
                    I then mapped these sounds to the frontend user interface of the app using the micro web framework Flask.
                    Find the complete web app <a href="https://polysymph.herokuapp.com" target="_blank" style={{color: "green"}}>here</a>, or
                    watch the video below to find out more about how I created the backend synthesizer that supports the audio signals in the app!
                </p>

                <br/>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/Lcgwm4ci7l4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
            
        );
    }
}

export default PolySymph;