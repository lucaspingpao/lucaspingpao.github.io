import React from 'react';
import './../Coding.css';

class RShinyApps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>🧩 Coding 🧩</h1>
                <hr/><br/>
                <u><h2>Math Visualization Apps in RShiny</h2></u>

                <div>
                    As a prospective Mathematics concentrator, I spent my first year taking foundational courses in Linear Algebra and Real Analysis.
                    While I found these classes fascinating and rewarding, transitioning into abstract thinking was quite a challenge.
                    I saw many of peers around me with similar struggles as we worked through difficult proofs.
                    As a hands-on visual learner, I was inspired to create educational visualization apps to help me and my peers grasp abstract mathematical concepts better.
                    During the summer of 2020, my former math professor Paul Bamberg helped mentor me in creating these visualization apps in RShiny. Here are some fof my featured apps that you should check out:
                </div>

                <br/>

                <div style={{textAlign: "left"}}>
                    <ol>
                    <li><a href="https://lucaspingpao.shinyapps.io/Math23a-Week1-MarkovModels/">Markov Models</a>: Calculates the number of paths between vertices on a finite directed graph with transition matrices.</li>
                    <li><a href="https://lucaspingpao.shinyapps.io/Math23a-Week3-RowReduction/">Row Reduction</a>: Provides step-by-step instructions of the row reduction process and finds orthonormal basis of column vectors using the Gram-Schmidt method.</li>
                    <li><a href="https://lucaspingpao.shinyapps.io/Math23a-Week4-Eigenvectors/">Eigenvectors</a>: Provides step-by-step instructions for finding eigenvalues and eigenvectors using Axler's method.</li>
                    <li><a href="https://lucaspingpao.shinyapps.io/Math23-Week5-Sequences/">Sequence Convergence</a>: Illustrates the formal epsilon definition of sequence convergence with animated graphs.</li>
                    <li><a href="https://lucaspingpao.shinyapps.io/Math23-Week9-FiniteTopology/">Finite Topology</a>: Illustrates basic definitions of finite topology applied to directed graphs (interior, closure, boundary)</li>
                    </ol>
                </div>

                <br/>

                <iframe width="800" height="500" src="https://lucaspingpao.shinyapps.io/Math23-Week5-Sequences/" frameBorder="0"></iframe>

            </div>
            
        );
    }
}

export default RShinyApps;