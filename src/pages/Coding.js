import React from 'react';
import {Redirect} from 'react-router-dom';
import LucasCard from '../components/LucasCard';
import '../styles/App.css';
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
        const cardInfos = [
            {link:"/cssquared", logo:Computer, title:"CSCS: Computer Science Course Selector"},
            {link:"/rshinyapps", logo:Math, title:"Math Visualization Apps in RShiny"},
            {link:"/wavelearning", logo:Data, title:"Wave Learning Festival: Data Analysis and Web Apps"},
            {link:"/votrcrowd", logo:IvyHacks, title:"VotrCrowd: IvyHacks Hackathon"},
            {link:"/polysymph", logo:Synthesizer, title:"PolySymph Synthesizer"},
            {link:"/datamatch", logo:Datamatch, title:"Harvard Datamatch"}
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
                <h1>🧩 Coding 🧩</h1>
                
                <hr/><br/>
                <h2>I am currently a rising junior at Harvard studying Computer Science and Mathematics.</h2>
                <div className="text-top">Check out some of my projects by clicking one of the icons below!</div>
                <br/><br/>
                
                <div className="cards">{cards}</div>
            </div>
        );
    }
}

export default Coding;