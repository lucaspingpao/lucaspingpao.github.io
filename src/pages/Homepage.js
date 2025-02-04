import React from 'react';

import LucasFace from "../assets/Lucas Pao Berklee.jpg";

import '../styles/Homepage.css';


function Homepage() {
    return (
        <div className="home-container">
            <div className="home-left-text">
                <h1>Lucas Pao</h1>
                <h2>Software Engineer</h2>
                <h2 className="subtext">Full-Stack | Web | Mobile</h2>
            </div>
            <div className="home-right-image">
                <img src={LucasFace} alt="Portrait of Lucas' face."></img>
            </div>
        </div>
    );
}

export default Homepage;