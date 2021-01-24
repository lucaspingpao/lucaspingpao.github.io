import React from 'react';
import {Redirect} from 'react-router-dom';
import './Homepage.css';
import LucasCard from './LucasCard';
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
        if(this.state.redirectLink !== "/") {
            return <Redirect to={this.state.redirectLink}/>
        }
        return (
            <div>
                <h1>👋 Welcome! 👋</h1>
                
                <hr/><br/>
                <h2>My name is Lucas Pao, and I like to create.</h2>
                <div>Check out some of my projects by clicking one of the icons below!</div>
                
                <br/><br/><br/>

                <div className="cards">
                    <div onClick={() => this.handleClick("coding")}><LucasCard logo={Computer} title="Coding" page="home"/></div>
                    <div onClick={() => this.handleClick("music")}><LucasCard logo={Music} title="Music" page="home"/></div>
                </div>
            </div>
        );
    }
}

export default Homepage;