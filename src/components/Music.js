import React from 'react';
import {Redirect} from 'react-router-dom';
import LucasCard from './LucasCard';
import './Music.css';
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
        if(this.state.redirectLink !== "/music") {
            return <Redirect to={this.state.redirectLink}/>
        }

        return (
            <div>
                <h1>🎵 Music 🎵</h1>
                <hr/><br/>
                <h3>I am also enrolled in a special dual-degree program with the Berklee College of Music, where I intend to get a Masters in Music in Contemporary Performance and Produciton.</h3>
                <div>Check out some of my projects by clicking one of the icons below!</div>

                <br/><br/><br/>

                <div className="cards">
                    <div onClick={() => this.handleClick("/100daysongchallenge")}><LucasCard logo={Hundred} title="100 Day Song Challenge"/></div>
                    <div onClick={() => this.handleClick("/composition")}><LucasCard logo={Synth} title="Composition"/></div>
                </div>
            </div>
            
        );
    }
}

export default Music;