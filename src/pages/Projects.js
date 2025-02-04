import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

import '../styles/Projects.css';

function Projects() {
    const navigate = useNavigate();

    const handleClick = (newLink) => {
        navigate(`/projects${newLink}`);
    }

    const cardInfos = [
        { link: "/pathmath", logoLink: 'PathMath.png', title: "PathMath", alt: "Path Math"},
        { link: "/selfplanr", logoLink: 'Selfplanr.jpg', title: "Selfplanr", alt: "Selfplanr"},
        { link: "/chesschase", logoLink: 'ChessChase.png', title: "ChessChase", alt: "ChessChase"},
        { link: "/paospuzzles", logoLink: 'Puzzles.png', title: "Pao's Puzzles", alt: "Puzzles"},
        { link: "/songmatch", logoLink: 'SongMatchLogo.png', title: "SongMatch", alt: "SongMatch logo"},
        { link: "/tapjams", logoLink: 'synth.png', title: "TapJams", alt: "Mini keyboard"},
        { link: "/playhouse", logoLink: 'PlayHouse.png', title: "PlayHouse", alt: "PlayHouse logo"},
        { link: "/votrcrwd", logoLink: 'VotrCrwd.jpg', title: "VotrCrwd", alt: "Vote logo"},
        { link: "/rshinyapps", logoLink: 'math.jpg', title: "Abstract Math Visualization Apps", alt: "Math symbols"},
        { link: "/cssquared", logoLink: 'computer.png', title: "CSCS: Computer Science Course Selector", alt: "Computer logo"},
    ];

    return (
        <div>
            <h1>Projects</h1>
            <div className="cards">
                {cardInfos.map((card) =>
                    <div onClick={() => handleClick(card.link)} key={card.link}>
                        <ProjectCard logoLink={card.logoLink} title={card.title} alt={card.alt}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;