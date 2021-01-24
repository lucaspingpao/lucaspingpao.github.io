import React from 'react';
import './../Music.css';

class ElectronicComposition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>🧩 Music 🧩</h1>
                <hr/><br/>
                
                <u><h2>Composition</h2></u>

                <div>
                    I also love composing music, which I have been doing since I was 5 years old.
                    (hopefully I'll be able to dig up some of my old compositions to showcase on my website soon!)
                    I originally started composing classical orchestral masterpieces but eventually transitioned into producing EDM beats.
                    Here below is one of my featured productions I created this summer!
                </div>

                <br/>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/mpok-ZkketY?start=127" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
            </div>
            
        );
    }
}

export default ElectronicComposition;