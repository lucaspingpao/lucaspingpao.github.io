import React from 'react';
import LucasFace from "../assets/Lucas_Pao.JPG";

import '../styles/Experience.css';

function Experience() {

    return (
        <div className="expContainer">
            <h1>Experience</h1>
            <div className="eduContainer">
                <div>
                    <h3>Education</h3>
                    <div>
                        <h4 className="school">Harvard University</h4>
                        <h5>B.A. in Computer Science (Honors), Minor in Mathematics</h5>
                        <h5>Sep 2019 - May 2023</h5>
                        <h5>Honors: Cum Laude</h5>
                        <br/>
                        <p style={{ marginTop: 0, marginBottom: -8 }}>
                            <i>Relevant Coursework:</i>
                        </p>
                        <ul>
                            <li>
                                <a href="https://cs51.io/" target="_blank" rel="noopener noreferrer">
                                    CS 51: Abstraction and Design for Computation
                                </a> (OCaml)
                            </li>
                            <li>
                                <a href="https://cs61.seas.harvard.edu/site/" target="_blank" rel="noopener noreferrer">
                                    CS 61: Systems Programming and Machine Organization
                                </a> (C)
                            </li>
                            <li>
                                <a href="https://glassmanlab.seas.harvard.edu/cs179.html" target="_blank" rel="noopener noreferrer">
                                    CS 79: Design of Useful and Usable Interactive Systems
                                </a> (Figma)
                            </li>
                            <li>
                                <a href="https://groups.seas.harvard.edu/courses/cs124/cs124.html" target="_blank" rel="noopener noreferrer">
                                    CS 124: Data Structures and Algorithms
                                </a> (C++, Python)
                            </li>
                            <li>
                                <a href="https://harvard-ml-courses.github.io/cs181-web/" target="_blank" rel="noopener noreferrer">
                                    CS 181: Machine Learning
                                </a> (Python)
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <div>
                        <h4 className="school">Berklee College of Music</h4>
                        <h5>M.A. Candidate in Creative Media and Technology</h5>
                        <h5>Sep 2023 - Jul 2024</h5>
                        <p><i>Integrated 5-year dual degree program between Harvard and Berklee.</i></p>
                    </div>
                </div>
                <div>
                    <img src={LucasFace} alt="Portrait of Lucas standing in a field with a Harvard-logo T-shirt."/>
                </div>
            </div>

            <div>
                <h3>Work Experience</h3>
                <p style={{ marginTop: -15, marginBottom: 30 }}>
                    <i>Please contact me on <a href="https://www.linkedin.com/in/lucaspingpao/" target="_blank" rel="noopener noreferrer">LinkedIn</a> for a more detailed resume.</i>
                </p>
                <div className="workContainer">
                    <div id="employer">
                        <h4><b>Capital One</b></h4>
                        <h4><b>Harvard Innovation Labs</b></h4>
                        <h4><b>Photon Commerce</b></h4>
                        <h4><b>Datamatch</b></h4>
                        <h4><b>Harvard University</b></h4>
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
                <h3>Technical Skills</h3>
                <div className="skillsContainer">
                    <div id="category">
                        <h4><b>Programming:</b></h4>
                        <h4><b>Frontend / Design:</b></h4>
                        <h4><b>Backend / Database:</b></h4>
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