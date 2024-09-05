import React from 'react';
import { Redirect } from 'react-router-dom';

import LucasCard from '../components/LucasCard';

import Computer from "../assets/computer.png";
import Math from "../assets/math.jpg";
import VotrCrowd from "../assets/VotrCrowd.jpg";
import Datamatch from "../assets/datamatch.png";
import Synthesizer from "../assets/synth.png";
import PlayHouse from "../assets/PlayHouse.png";

import '../styles/Projects.css';

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
            { link: "/cssquared", logo: Computer, title: "CSCS: Computer Science Course Selector", alt: "Computer logo"},
            { link: "/rshinyapps", logo: Math, title: "Interactive Abstract Math Visualization Apps", alt: "Math symbols"},
            { link: "/votrcrowd", logo: VotrCrowd, title: "VotrCrowd", alt: "Vote logo"},
            { link: "/polysymph", logo: Synthesizer, title: "PolySymph Synthesizer & TapJams", alt: "Mini keyboard"},
            { link: "/datamatch", logo: Datamatch, title: "Harvard Datamatch", alt: "Heart-shaped Datamatch logo"},
            { link: "/playhouse", logo: PlayHouse, title: "PlayHouse", alt: "PlayHouse logo"},
        ]

        const cards = cardInfos.map((card) =>
            <div onClick={() => this.handleClick(card.link)}>
                <LucasCard logo={card.logo} title={card.title} alt={card.alt} styleClass="card"/>
            </div>
        );

        if (this.state.redirectLink !== "/projects") {
            return <Redirect to={this.state.redirectLink}/>
        }

        return (
            <div className="projectsContainer">
                <h1>Projects</h1>
                <div className="cards">{cards}</div>
            </div>
        );
    }
}

export default Projects;