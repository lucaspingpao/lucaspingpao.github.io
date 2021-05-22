import React from 'react';
import {Redirect} from 'react-router-dom';
import LucasCard from '../components/LucasCard';
import '../styles/App.css';
import Hundred from "../assets/hundred.png";
import Synth from "../assets/synth.png";

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
            {link:"/composition", logo:Synth, title:"Composition"}
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
                <h1>🎵 Music 🎵</h1>
                <hr/><br/>
                <h3>
                    I am enrolled in a special dual-degree program with the Berklee College of Music,
                    where I intend to get a Masters of Music in Music Production, Technology, and Innovation.
                </h3>
                <div className="text-top">Check out some of my projects by clicking one of the icons below!</div>

                <br/><br/>

                <div className="cards2">{cards}</div>
            </div>
            
        );
    }
}

export default Music;