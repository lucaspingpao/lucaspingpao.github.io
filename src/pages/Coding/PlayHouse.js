import React, { useEffect } from 'react';
import '../../styles/Project.css';

import PlayHouseScreen from "../../assets/PlayHouseScreen.png";

function PlayHouse() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projectContainer">
            <h2>PlayHouse Show Companion</h2>
            <div className="row">
                <div>
                    <div>
                        <h3>Tech Stack:</h3>
                        <p class="techSkills">JavaScript, React Native, HTML, CSS, Firebase</p>
                    </div>
                    <div>
                        <h3>Redefining Virtual Performance</h3>
                        <p>
                            I worked as a mobile app developer for&nbsp;
                            <a href="https://getplayhouse.weebly.com" target="_blank" rel="noopener noreferrer">PlayHouse Show Companion</a>
                            , a mobile playbook app designed to redefine virtual performance.
                            The app was originally designed during the height of the pandemic when live shows were cancelled and playrights needed to find an engaging way to create immersive experiences for audiences through a virtual format.
                            I mostly worked on frontend development in React Native JS, rendering screens such as the one below and redesigning the navigation system across the app.
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