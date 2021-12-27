import React from 'react';
import '../../styles/App.css';

class DJing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="projectBody">
                <h2>DJing / Controller Performance</h2>
                <p>
                    In spring 2021, I took a class on Electronic Performance, in which I learned how to use MIDI controllers to create sample loop-based performances in Ableton Live.
                    Here below are some of my featured electronic performances. Some controllers I used were the AKAI MPK Mini, AKAI APC40, Roland AX-Edge Keytar, and more!
                </p>

                <br/>

                <h3>Justice by Lucas Pao • June 2020</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mpok-ZkketY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <br/><br/><br/>

                <h3>Blinding Lights by The Weekend • March 2021</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/81f4R0SZUj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <br/><br/><br/>

                <h3>Say You Won't Let Go & See You Again MASHUP • May 2021</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wbZtKVcMz6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}

export default DJing;