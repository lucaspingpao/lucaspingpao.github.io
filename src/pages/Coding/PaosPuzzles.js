import React, { useEffect } from 'react';
import '../../styles/Project.css';

import TechStack from '../../components/TechStack';
// import Summary from '../../components/Summary';
import PaosPuzzlesScreen from "../../assets/PaosPuzzlesScreen.png";

function PaosPuzzles() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-container">
            <h2>Pao's Puzzles</h2>
            <div className="row">
                <div>
                    <TechStack tech="React, TypeScript, HTML, CSS (Tailwind), Vite, Node.js, Express.js, SQL (PostgreSQL), Vercel, Vitest, Cypress"/>
                    <div className="tech-skills">
                        <h3>Classic Puzzle Games Reinvented</h3>
                        <p>
                            Introducing <a href="https://paos-puzzles.vercel.app" target="_blank" rel="noopener noreferrer">Pao's Puzzles</a>, a web-app collection of popular board game, word, and logic puzzles from various sources.
                            However, each game has a slight hidden twist compared to the original.
                            For example, the popular game "Wordle" has been renamed to "WordHole", where players can now choose to include an elusive "hole" character in order to form single or multiple words, adding an extra layer of challenge to the game.
                        </p>
                        <p>
                            This project involved a lot of standard full-stack product feature development, but it also presented some interesting algorithmic problems to solve.
                            For example, generating random game board states requires graph theory and BFS traversals for a complete initialization.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={PaosPuzzlesScreen} alt="Pao's Puzzles Screen showing completed WordHole game"></img>
                </div>
            </div>
        </div>
        
    );
}

export default PaosPuzzles;