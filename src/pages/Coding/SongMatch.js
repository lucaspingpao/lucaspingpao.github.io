import React, { useEffect } from 'react';
import '../../styles/Project.css';

import TechStack from '../../components/TechStack';
// import Summary from '../../components/Summary';
import SongMatchGraph from "../../assets/SongMatchGraph.jpg";

function SongMatch() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-container">
            <h2>SongMatch</h2>
            <div className="row">
                <div>
                    <TechStack tech="Next.js, TypeScript, HTML, CSS (Tailwind), D3.js, Python, FastAPI, Vercel"/>
                    <div className="tech-skills">
                        <h3>Karaoke Song Recommender</h3>
                        <p>
                            SongMatch is an all-in-one AI platform that predicts optimal songs for music-lovers, singers, and karaoke-goers to sing their heart out to.
                            We leverage API models from Meta and Spotify to separate and process audio data to compare against user-inputted voice data collected through interfaces utilizing the web MediaRecorder API.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={SongMatchGraph} alt="Pao's Puzzles Screen showing completed WordHole game"></img>
                </div>
            </div>
        </div>
        
    );
}

export default SongMatch;
