import React, { useEffect } from 'react';
import '../../styles/Project.css';

import TechStack from '../../components/TechStack';
// import Summary from '../../components/Summary';

function RShinyApps() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-container">
            <h2>Math Visualization Apps</h2>

            <div className="row">
                <div>
                    <TechStack tech="R, RShiny, HTML, CSS"/>
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
        </div>
        
    );
}

export default RShinyApps;