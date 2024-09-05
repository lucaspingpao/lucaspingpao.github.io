import React from 'react';

import LucasFace from "../assets/Lucas Pao Berklee.jpg";

import '../styles/Homepage.css';


function Homepage() {
    return (
        <div className="homeContainer">
            <div className="homeLeftText">
                <h1>Lucas Pao</h1>
                <h2>Software Engineer.</h2>
                <h2>Full-Stack Developer.</h2>
                <h2>Mobile App Developer.</h2>
            </div>
            <div className="homeRightImage">
                <img src={LucasFace} alt="Portrait of Lucas' face."></img>
            </div>
        </div>
    );
}

export default Homepage;