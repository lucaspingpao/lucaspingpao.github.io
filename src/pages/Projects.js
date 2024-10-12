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
        { link: "/cssquared", logoLink: 'computer.png', title: "CSCS: Computer Science Course Selector", alt: "Computer logo"},
        { link: "/rshinyapps", logoLink: 'math.jpg', title: "Interactive Abstract Math Visualization Apps", alt: "Math symbols"},
        { link: "/votrcrowd", logoLink: 'VotrCrowd.jpg', title: "VotrCrowd", alt: "Vote logo"},
        { link: "/polysymph", logoLink: 'synth.png', title: "PolySymph Synthesizer & TapJams", alt: "Mini keyboard"},
        { link: "/datamatch", logoLink: 'datamatch.png', title: "Harvard Datamatch", alt: "Heart-shaped Datamatch logo"},
        { link: "/playhouse", logoLink: 'PlayHouse.png', title: "PlayHouse", alt: "PlayHouse logo"},
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