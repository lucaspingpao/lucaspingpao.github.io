import React from 'react';
import {Redirect} from 'react-router-dom';
import '../styles/App.css';
import LucasFace from "../assets/Lucas Pao Berklee.jpg";

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
            <div className="homeLayout">
                <div>
                    <h1>Lucas Pao</h1>
                    <h2 style={{margin: "0"}}>Software Engineer.</h2>
                    <h2 style={{margin: "0"}}>Full-Stack Developer.</h2>
                    <h2 style={{margin: "0"}}>Mobile App Developer.</h2>
                    <br/>
                    <button onClick={() => this.handleClick("projects")}>Projects</button>
                    <button onClick={() => this.handleClick("experience")}>Experience</button>
                </div>
                <div style={{padding: "10%"}}>
                    <img src={LucasFace} style={{width: "100%", height: "auto", borderRadius: "150px"}} alt="Portrait of Lucas' face."></img>
                </div>
            </div>
        );
    }
}

export default Homepage;