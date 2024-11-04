import React, { useEffect } from 'react';
import '../../styles/Project.css';

import TechStack from '../../components/TechStack';
// import Summary from '../../components/Summary';
import PlayHouseScreen from "../../assets/PlayHouseScreen.png";

function PlayHouse() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-container">
            <h2>PlayHouse</h2>
            <div className="row">
                <div>
                    <TechStack tech="React Native, JavaScript, HTML, CSS, Google Firebase"/>
                    <div>
                        <h3>Redefining Virtual Performance</h3>
                        <p>
                            <a href="https://getplayhouse.weebly.com" target="_blank" rel="noopener noreferrer">PlayHouse</a>
                            &nbsp;is a mobile playbook app designed to redefine virtual performance.
                            The app was originally designed during the height of the pandemic when live shows were cancelled and playrights needed to find an engaging way to create immersive experiences for audiences through a virtual format.
                            I mostly worked on frontend development in React Native (JavaScript), rendering screens such as the one below and redesigning the navigation system across the app.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={PlayHouseScreen} alt="App page showing a hypothetical list of shows coming up and how many days away until that show is happening."></img>
                </div>
            </div>
        </div>
        
    );
}

export default PlayHouse;