import React from 'react';
import '../../styles/App.css';
import Serendipity from '../../assets/serendipity.mp3';

class Composition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="projectBody">
                <h2>Classical Composition</h2>
                <p>
                    I also love composing music, which I have been doing since I was 5 years old.
                    (hopefully I'll be able to dig up even older compositions to showcase on my website soon!)
                    I originally started composing classical orchestral masterpieces but eventually transitioned into producing EDM beats.
                    Here below is an orchestral piece I composed back in 2016!
                </p>

                <br/><br/>

                <h3>Serendipity • November 2016</h3>
                <audio controls>
                    <source src={Serendipity} type="audio/mp3"/>
                </audio>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            
        );
    }
}

export default Composition;