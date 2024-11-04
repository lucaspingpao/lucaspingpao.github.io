import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

import '../styles/Projects.css';

function Teaching() {
    const navigate = useNavigate();

    const handleClick = (newLink) => {
        navigate(`/teaching${newLink}`);
    }

    const cardInfos = [
        { link: "/wavelearning", logoLink: 'wavelearning.jpg', title: "Wave Learning Festival", alt: "Wave Learning Festival logo"},
        { link: "/polysymph", logoLink: 'synth.png', title: "PolySymph", alt: "Mini keyboard"},
    ];

    return (
        <div>
            <h1>Teaching</h1>
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

export default Teaching;