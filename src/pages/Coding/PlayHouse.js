import React from 'react';
import '../../styles/App.css';
import PlayHouseScreen from "../../assets/PlayHouseScreen.png";

class PlayHouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="projectBody">
                <h2>PlayHouse: Redefining Virtual Performance</h2>
                
                <p>
                    I worked as a mobile app developer for PlayHouse Show Companion, a mobile playbook app designed to redefine virtual performance.
                    The app was originally designed during the height of the pandemic when live shows were cancelled and playrights needed to find an engaging way to create immersive experiences for audiences through a virtual format.
                    I mostly worked on frontend development in React Native JS, rendering screens such as the one below and redesigning the navigation system across the app.
                </p>

                <br/><br/>

                <img src={PlayHouseScreen} style={{height: "25%", maxWidth: "25%"}} alt="App page showing a hypothetical list of shows coming up and how many days away until that show is happening."></img>
            </div>
            
        );
    }
}

export default PlayHouse;