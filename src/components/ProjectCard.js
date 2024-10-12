import React from 'react';
import '../styles/ProjectCard.css';

function HomeCard(props) {
    return (
        <div className="card">
            <img src={require(`../assets/${props.logoLink}`)} alt={props.alt}></img>
            <br/>
            <div>{props.title}</div>
        </div>
    );
}

export default HomeCard;