import React from 'react';
import {Redirect} from 'react-router-dom';
import Title from "../components/Title";
import LucasCard from '../components/LucasCard';
import '../styles/App.css';
import Computer from "../assets/computer.png";
import Math from "../assets/math.jpg";
import IvyHacks from "../assets/ivyhacks.png";
import VotrCrowd from "../assets/VotrCrowd.jpg";
import Datamatch from "../assets/datamatch.png";
import Synthesizer from "../assets/synth.png";
import PlayHouse from "../assets/PlayHouse.png";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLink: "/projects"
        };
    }

    handleClick(page) {
        const link = this.state.redirectLink.concat(page);
        this.setState({redirectLink: link})
    }

    render() {
        const cardInfos = [
            {link:"/cssquared", logo:Computer, title:"CSCS: Computer Science Course Selector"},
            {link:"/rshinyapps", logo:Math, title:"Interactive Abstract Math Visualization Apps"},
            {link:"/votrcrowd", logo:VotrCrowd, title:"VotrCrowd"},
            {link:"/polysymph", logo:Synthesizer, title:"PolySymph Synthesizer & TapJams"},
            {link:"/datamatch", logo:Datamatch, title:"Harvard Datamatch"},
            {link:"/playhouse", logo:PlayHouse, title:"PlayHouse"},
        ]

        const cards = cardInfos.map((card) =>
            <div onClick={() => this.handleClick(card.link)}>
                <LucasCard logo={card.logo} title={card.title} styleClass="card"/>
            </div>
        );

        if(this.state.redirectLink !== "/projects") {
            return <Redirect to={this.state.redirectLink}/>
        }

        return (
            <div>
                <h1>Projects</h1>
                <div className="cards">{cards}</div>
            </div>
        );
    }
}

export default Projects;