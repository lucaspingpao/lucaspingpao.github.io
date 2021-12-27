import React from 'react';
import {Redirect} from 'react-router-dom';
import Title from "../components/Title";
import LucasCard from '../components/LucasCard';
import '../styles/App.css';
import Hundred from "../assets/hundred.png";
import Synth from "../assets/synth.png";
import Composition from "../assets/Composition.jpg";
import DJing from "../assets/DJing.jpg";
// import MusicBackground from "../assets/MusicBackground.JPG";

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLink: "/music"
        };
    }

    handleClick(page) {
        const link = this.state.redirectLink.concat(page);
        this.setState({redirectLink: link})
        console.log(this.state.redirectLink);
    }

    render() {
        const cardInfos = [
            {link:"/100daysongchallenge", logo:Hundred, title:"100 Day Song Challenge"},
            {link:"/composition", logo:Composition, title:"Composition"},
            {link:"/djing", logo:DJing, title:"DJing / Controller Performance"},
            {link:"/production", logo:Synth, title:"Electronic Production"}
        ]

        const cards = cardInfos.map((card) =>
            <div onClick={() => this.handleClick(card.link)}>
                <LucasCard logo={card.logo} title={card.title} styleClass="card"/>
            </div>
        );

        if(this.state.redirectLink !== "/music") {
            return <Redirect to={this.state.redirectLink}/>
        }

        return (
            <div>
                <Title
                    emoji = "🎵"
                    title = "Music"
                    subtitle = "I am enrolled in a special dual-degree program with the Berklee College of Music, where I intend to get a Masters of Music in Music Production, Technology, and Innovation."
                    color = "rgb(255, 224, 224)"
                />
                <div className="cards2">{cards}</div>
            </div>
            
        );
    }
}

export default Music;