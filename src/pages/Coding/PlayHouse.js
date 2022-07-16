import React from 'react';
import '../../styles/App.css';
import PlayHouseScreen from "../../assets/PlayHouseScreen.png";

class PlayHouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="projectBody">
                <h2>PlayHouse: Redefining Virtual Performance</h2>
                
                <p>
                    During the summer of 2022, I worked as a mobile app developer for PlayHouse, a mobile playbook app designed to redefine virtual performance.
                    The app was originally designed during the height of the pandemic when live shows were cancelled and playrights needed to find an engaging way to create immersive experiences for audiences through a virtual format.
                    I mostly worked on frontend development, rendering screens such as the one below and managing navigation across the app.
                </p>

                <br/>

                <img src={PlayHouseScreen} style={{height: "25%", maxWidth: "25%"}}></img>
            </div>
            
        );
    }
}

export default PlayHouse;