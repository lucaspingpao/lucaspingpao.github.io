import React, { useEffect } from 'react';
import '../../styles/Project.css';

import TechStack from '../../components/TechStack';
// import Summary from '../../components/Summary';

function ChessChase() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-container">
            <h2>ChessChase</h2>
            <div className="row">
                <div>
                    <TechStack tech="React, TypeScript, CSS (Tailwind), Devvit, Vite, Redis" />
                    <div>
                        <h3>Reddit: Games and Puzzles Hackathon</h3>
                        <p>
                            ChessChase is a dynamic chess puzzle maze game requiring strategic piece maneuvering around obstacles to capture kings built for the&nbsp;
                            <a href="https://devpost.com/software/chesschase" target="_blank" rel="noopener noreferrer">Reddit Games and Puzzles Hackathon</a>.
                            Sign in to your Reddit account to play&nbsp;
                            <a href="https://reddit.com/r/chesschase" target="_blank" rel="noopener noreferrer">here</a>.
                        </p>
                        <p>
                            Some technical challenges I solved were coordinating stateful gameplay logic and automating a cron job to post a unique daily challenge to the ChessChase subreddit community!
                        </p>
                    </div>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/r2F55q5gHiI?si=KCpmTbH9vHizYw15" title="YouTube video player for ChessChase demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default ChessChase;