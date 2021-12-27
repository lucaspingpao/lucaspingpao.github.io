import React from 'react';
import {Redirect} from 'react-router-dom';
import '../styles/App.css';
import Title from "../components/Title";
import LucasCard from '../components/LucasCard';
import Computer from "../assets/computer.png";
import Music from "../assets/music.png";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLink: "/"
        };
    }

    handleClick(page) {
        const link = this.state.redirectLink.concat(page);
        this.setState({redirectLink: link})
    }

    render() {
        const cardInfos = [
            {link:"coding", logo:Computer, title:"Coding"},
            {link:"music", logo:Music, title:"Music"}
        ]

        const cards = cardInfos.map((card) =>
            <div onClick={() => this.handleClick(card.link)}>
                <LucasCard logo={card.logo} title={card.title} styleClass="card homeCard"/>
            </div>
        );

        if(this.state.redirectLink !== "/") {
            return <Redirect to={this.state.redirectLink}/>
        }
        return (
            <div>
                <Title
                    emoji = "👋"
                    title = "Welcome!"
                    subtitle = "My name is Lucas Pao, and I like to create."
                    color = "rgb(255, 248, 224)"
                />
                <div className="cards2">{cards}</div>
            </div>
        );
    }
}

export default Homepage;