import React from 'react';
import {Redirect} from 'react-router-dom';
import Title from "../components/Title";
import LucasCard from '../components/LucasCard';
import '../styles/App.css';
import Computer from "../assets/computer.png";
import Math from "../assets/math.jpg";
import IvyHacks from "../assets/ivyhacks.png";
import Datamatch from "../assets/datamatch.png";
import Synthesizer from "../assets/synth.png";
import PlayHouse from "../assets/PlayHouse.png";

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
        const cardInfos = [
            {link:"/cssquared", logo:Computer, title:"CSCS: Computer Science Course Selector"},
            {link:"/rshinyapps", logo:Math, title:"Math Visualization Apps in RShiny"},
            {link:"/votrcrowd", logo:IvyHacks, title:"VotrCrowd: IvyHacks Hackathon"},
            {link:"/polysymph", logo:Synthesizer, title:"PolySymph Synthesizer"},
            {link:"/datamatch", logo:Datamatch, title:"Harvard Datamatch"},
            {link:"/playhouse", logo:PlayHouse, title:"PlayHouse"},
        ]

        const cards = cardInfos.map((card) =>
            <div onClick={() => this.handleClick(card.link)}>
                <LucasCard logo={card.logo} title={card.title} styleClass="card"/>
            </div>
        );

        if(this.state.redirectLink !== "/coding") {
            return <Redirect to={this.state.redirectLink}/>
        }

        return (
            <div>
                <Title
                    emoji = "🧩"
                    title = "Coding"
                    subtitle = "I am currently a senior at Harvard studying Computer Science and Mathematics."
                    color = "rgb(224, 255, 231)"
                />
                <div className="cards">{cards}</div>
            </div>
        );
    }
}

export default Coding;