import React from 'react';
import {Redirect} from 'react-router-dom';
import LucasCard from './LucasCard';
import './Coding.css';
import Computer from "../assets/computer.png";
import Math from "../assets/math.jpg";
import Data from "../assets/data.png";
import IvyHacks from "../assets/ivyhacks.png";
import Datamatch from "../assets/datamatch.png";
import Synthesizer from "../assets/synth.png";

class Coding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLink: "/coding"
        };
    }

    handleClick(page) {
        const link = this.state.redirectLink.concat(page);
        this.setState({redirectLink: link})
    }

    render() {
        if(this.state.redirectLink !== "/coding") {
            return <Redirect to={this.state.redirectLink}/>
        }

        return (
            <div>
                <h1>🧩 Coding 🧩</h1>
                
                <hr/><br/>
                <h3>I am currently a sophomore at Harvard studying Mathematics and Computer Science.</h3>
                <div>Check out some of my projects by clicking one of the icons below!</div>
                <br/><br/><br/>
                
                <div className="cards">
                    <div onClick={() => this.handleClick("/cssquared")}><LucasCard logo={Computer} title="CSCS: Computer Science Course Selector"/></div>
                    <div onClick={() => this.handleClick("/rshinyapps")}><LucasCard logo={Math} title="Math Visualization Apps in RShiny"/></div>
                    <div onClick={() => this.handleClick("/wavelearning")}><LucasCard logo={Data} title="Wave Learning Festival: Data Analysis and Web Apps"/></div>
                    <div onClick={() => this.handleClick("/votrcrowd")}><LucasCard logo={IvyHacks} title="VotrCrowd: IvyHacks Hackathon"/></div>
                    <div onClick={() => this.handleClick("/polysymph")}><LucasCard logo={Synthesizer} title="PolySymph Synthesizer"/></div>
                    <div onClick={() => this.handleClick("/datamatch")}><LucasCard logo={Datamatch} title="Harvard Datamatch"/></div>
                </div>
            </div>
        );
    }
}

export default Coding;