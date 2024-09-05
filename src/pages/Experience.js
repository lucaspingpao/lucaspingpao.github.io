import React from 'react';
import LucasFace from "../assets/Lucas_Pao.JPG";
import { Link } from 'react-router-dom';

import '../styles/Experience.css';

function Experience() {

    return (
        <div>
            <h1>Experience</h1>
            <div className="eduContainer">
                <div className="eduText">
                    <h2 style={{ fontSize: 32 }}>Education</h2>
                    <div>
                        <h3>HARVARD UNIVERSITY</h3>
                        <h5>B.A. in Computer Science (Honors), Minor in Mathematics</h5>
                        <h5>Sep 2019 - May 2023</h5>
                        <h5>Honors: Cum Laude</h5>
                        <br/>
                        <i>Relevant Coursework:</i>
                        <ul>
                            <li>
                                <a href="https://cs51.io/" target="_blank" rel="noopener noreferrer">
                                    COMPSCI 51: Abstraction and Design for Computation
                                </a> (OCaml)
                            </li>
                            <li>
                                <a href="https://cs61.seas.harvard.edu/site/" target="_blank" rel="noopener noreferrer">
                                    COMPSCI 61: Systems Programming and Machine Organization
                                </a> (C)
                            </li>
                            <li>
                                <a href="https://glassmanlab.seas.harvard.edu/cs179.html" target="_blank" rel="noopener noreferrer">
                                    COMPSCI 79: Design of Useful and Usable Interactive Systems
                                </a> (Figma)
                            </li>
                            <li>
                                <a href="https://groups.seas.harvard.edu/courses/cs124/cs124.html" target="_blank" rel="noopener noreferrer">
                                    COMPSCI 124: Data Structures and Algorithms
                                </a> (C++, Python)
                            </li>
                            <li>
                                <a href="https://harvard-ml-courses.github.io/cs181-web/" target="_blank" rel="noopener noreferrer">
                                    COMPSCI 181: Machine Learning
                                </a> (Python)
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <div>
                        <h3>BERKLEE COLLEGE OF MUSIC</h3>
                        <h5>M.A. Candidate in Creative Media and Technology</h5>
                        <h5>Sep 2023 - Jul 2024</h5>
                        <br/>
                        <i>Integrated 5-year dual degree program between Harvard and Berklee.</i>
                    </div>
                </div>
                <div>
                    <img src={LucasFace} alt="Portrait of Lucas standing in a field with a Harvard-logo T-shirt."/>
                </div>
            </div>

            <div>
                <h2 style={{ fontSize: 32 }}>Work Experience</h2>
                <p style={{ marginTop: -20, marginBottom: 30 }}>
                    <i>Please contact me on <a href="https://www.linkedin.com/in/lucaspingpao/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for a more detailed resume.</i>
                </p>
                <div className="workContainer">
                    <div id="employer">
                        <h4 class="company">Capital One</h4>
                        <h4 class="company">Harvard Innovation Labs</h4>
                        <h4 class="company">Photon Commerce</h4>
                        <h4 class="company">Datamatch</h4>
                        <h4 class="company">Harvard University</h4>
                    </div>
                    <div id="position">
                        <h4>Software Engineer Intern</h4>
                        <h4>Venture Program</h4>
                        <h4>Software Engineer Intern</h4>
                        <h4>Full-Stack Developer</h4>
                        <h4> Math Course Assistant Positions</h4>  
                    </div>
                    <div id="date">
                        <h4>Jun 2022 - Aug 2022</h4>
                        <h4>Jan 2022 - May 2022</h4>
                        <h4>Nov 2020 - Feb 2022</h4>
                        <h4>Jun 2021 - Aug 2021</h4>
                        <h4>May 2020 - May 2021</h4>
                    </div>
                </div>
            </div>
            
            <div>
                <h2 style={{ fontSize: 32 }}>Technical Skills</h2>
                <div className="skillsContainer">
                    <div id="category">
                        <h4 class="company">Programming:</h4>
                        <h4 class="company">Frontend / Design:</h4>
                        <h4 class="company">Backend / Database:</h4>
                    </div>
                    <div id="skill">
                        <h4>Python, JavaScript, Swift, C/C++, Java, OCaml, R</h4>
                        <h4>React, React Native, Redux, HTML/CSS (Bootstrap, Material UI), Figma, Canva</h4>
                        <h4>Node.js, Express, Flask, SQL (PostgreSQL, SQLite), NoSQL (Firebase)</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;