import React, { useEffect } from 'react';
import '../../styles/Project.css';

import TechStack from '../../components/TechStack';
import Summary from '../../components/Summary';
import TapJamsLogo from "../../assets/TapJams.png";

function TapJams() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-container">
            <h2>TapJams</h2>
            <div className="row">
                <div>
                    <TechStack tech="React, JavaScript, TypeScript, HTML, CSS (Material UI), Node.js, Express.js, SQL (PostgreSQL)" />
                    <Summary
                        subtitle="Music Creation x Social Media"
                        summary="This product was initially incubated through Harvard's Innovation Labs through the Spring 2022 Venture Program.
                                TapJams is a social music-making app for amateur musicians and general people interested in making their own songs in a fun, social, casual/non-professional setting.
                                The app features an easily accessible user interface including unique virtual musical instruments and an in-app social media platform for allowing users to make their own beats and share them with their friends just a few taps away!"
                    />
                </div>
                <div>
                    <img src={TapJamsLogo} alt="TapJams app page showing drum instruments and a drum machine interface to program one's own rhythm."></img>
                </div>
            </div>
        </div>
        
    );
}

export default TapJams;
