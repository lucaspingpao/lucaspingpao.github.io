import React, { useEffect } from 'react';
import '../../styles/Project.css';

function RShinyApps() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projectContainer">
            <h2>Math Visualization Apps</h2>

            <div className="row">
                <div>
                    <div>
                        <h3>Tech Stack:</h3>
                        <p class="techSkills">R, RShiny, HTML, CSS</p>
                    </div>
                    <div>
                        <h3>Harvard Math Department</h3>
                        <p>
                            After taking foundational math courses covering theoretical topics in linear algebra and real analysis,
                            many of my peers and I struggled with visualizing the abstract nature of these concepts for the first time.
                            As a hands-on visual learner, I was inspired to create educational visualization apps to help me and my peers grasp these abstract mathematical concepts better.
                            Here are some of my featured apps:
                        </p>
                        <ol>
                            <li><a href="https://lucaspingpao.shinyapps.io/Math23a-Week1-MarkovModels/" target="_blank" rel="noopener noreferrer">Markov Models</a>: Calculates the number of paths between vertices on a finite directed graph with transition matrices.</li>
                            <li><a href="https://lucaspingpao.shinyapps.io/Math23a-Week3-RowReduction/" target="_blank" rel="noopener noreferrer">Row Reduction</a>: Demonstrates row reduction finds orthonormal basis of column vectors using Gram-Schmidt.</li>
                            <li><a href="https://lucaspingpao.shinyapps.io/Math23a-Week4-Eigenvectors/" target="_blank" rel="noopener noreferrer">Eigenvectors</a>: Provides step-by-step instructions for finding eigenvalues and eigenvectors using Axler's method.</li>
                            <li><a href="https://lucaspingpao.shinyapps.io/Math23-Week5-Sequences/" target="_blank" rel="noopener noreferrer">Sequence Convergence</a>: Illustrates the formal epsilon definition of sequence convergence with animated graphs.</li>
                            <li><a href="https://lucaspingpao.shinyapps.io/Math23-Week9-FiniteTopology/" target="_blank" rel="noopener noreferrer">Finite Topology</a>: Illustrates basic definitions of finite topology applied to directed graphs (interior, closure, boundary)</li>
                        </ol>
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://lucaspingpao.shinyapps.io/Math23a-Week1-MarkovModels/"
                        frameBorder="0"
                        title="Sequences RShiny App"
                        style={{ height: "50vw" }}
                    />
                </div>
            </div>

            <div className="row">
                <div>
                    <h3>Wave Learning Festival</h3>
                    <p>
                        I had so much fun exploring the graphical capabilities and data analysis tools in R/RShiny that I volunteered to take on several teaching roles to share my skills in R with other students.
                        I became a teaching assistant for S-152: Discrete Mathematics and volunteered as a teacher for Wave Learning Festival,
                        in which I co-taught a 5-day seminar called "Data Analysis and Web Apps in RShiny", covering programming, statistics, data analysis/visualization tools in R, and web application development in RShiny for 30+ high-school students!
                        Here below are some lecture reocrdings of my class, shared through my YouTube channel,&nbsp;
                        <a href="https://www.youtube.com/channel/UCMta0o0GMm6zw6IFPf_Epgw">PaoCodingTutorials</a>.
                    </p>
                </div>
                <div>
                    <iframe
                        src="https://www.youtube.com/embed/videoseries?list=PLjT_SXeguj8BnrPFmkfAJnDY_9h9xCpWO"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScree
                        title="RShiny tutorial"
                    />
                </div>
            </div>
        </div>
        
    );
}

export default RShinyApps;