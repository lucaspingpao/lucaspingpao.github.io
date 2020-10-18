import React from 'react';
import {Link} from 'react-router-dom';
import './Coding.css';

class Coding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                
                <h1>🧩 Coding 🧩</h1>
                <hr/><br/><br/>
                <p>
                    I am currently a sophomore at Harvard studying Mathematics and Computer Science.
                    I was first inspired to start studying Computer Science after taking CS50, Harvard's Introduction to Computer Science class.
                    Here is one of my first coding projects that I developed with two of my friends as the final project for this class.
                </p>
                <br/>
                

                <u><h2>CSCS: Computer Science Course Selector</h2></u>
                <p style={{paddingLeft: "15%", paddingRight: "15%"}}>
                    We developed algorithms and webpages to help users navigate through the Harvard CS course catalog.
                    </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/F4xodbOdgjE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <div><br/><br/><br/></div><hr/><br/>

                <u><h2>Math Visualization Apps in RShiny</h2></u>
                <p>
                    As a prospective Mathematics concentrator, I spent my first year taking foundational courses in Linear Algebra and Real Analysis.
                    While I found these classes fascinating and rewarding, transitioning into abstract thinking was quite a challenge.
                    I saw many of peers around me with similar struggles as we worked through difficult proofs.
                    As a hands-on visual learner, I was inspired to create educational visualization apps to help me and my peers grasp abstract mathematical concepts better.
                    This summer, my former math professor Paul Bamberg helped mentor me in creating these visualization apps in RShiny. Here are some featured apps that you should check out:
                </p>
                <p style={{textAlign: "left"}}>
                    <ol>
                    <li><a href="https://lucaspingpao.shinyapps.io/Math23a-Week1-MarkovModels/">Markov Models</a>: Calculates the number of paths between vertices on a finite directed graph with transition matrices.</li>
                    <li><a href="https://lucaspingpao.shinyapps.io/Math23a-Week3-RowReduction/">Row Reduction</a>: Provides step-by-step instructions of the row reduction process and finds orthonormal basis of column vectors using the Gram-Schmidt method.</li>
                    <li><a href="https://lucaspingpao.shinyapps.io/Math23a-Week4-Eigenvectors/">Eigenvectors</a>: Provides step-by-step instructions for finding eigenvalues and eigenvectors using Axler's method.</li>
                    <li><a href="https://lucaspingpao.shinyapps.io/Math23-Week5-Sequences/">Sequence Convergence</a>: Illustrates the formal epsilon definition of sequence convergence with animated graphs.</li>
                    <li><a href="https://lucaspingpao.shinyapps.io/Math23-Week9-FiniteTopology/">Finite Topology</a>: Illustrates basic definitions of finite topology applied to directed graphs (interior, closure, boundary)</li>
                    </ol>
                </p>
                <br/>
                <iframe width="800" height="500" src="https://lucaspingpao.shinyapps.io/Math23-Week5-Sequences/" frameborder="0"></iframe>
                
                <div><br/><br/><br/></div><hr/><br/>

                <u><h2>Wave Learning Festival Seminar: Data Analysis and Web Apps in RShiny</h2></u>
                <p>
                    I had so much fun exploring the graphical capabilities and data analysis tools in R/RShiny that I volunteered to take on several teaching roles to share my skills in R with other students.
                    I became a coding assistant for S-152: Discrete Mathematics and volunteered for Wave Learning Festival,
                    in which I co-taught a 5-day seminar called "Data Analysis and Web Apps in RShiny", covering programming, statistics, data analysis/visualization tools in R, and web application development in RShiny for 30+ high-school students!
                    Here below are some lecture reocrdings of my class, shared through my other YouTube channel,
                    <a href="https://www.youtube.com/channel/UCMta0o0GMm6zw6IFPf_Epgw"> PaoCodingTutorials</a>.
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLjT_SXeguj8BnrPFmkfAJnDY_9h9xCpWO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <div><br/><br/><br/></div><hr/><br/>

                <u><h2>VotrCrowd: IvyHacks Hackathon</h2></u>
                <p>
                    Through my journey into the tech world, I have been constantly inspired by the ways in which we can utiilize technology to improve all aspects of our society,
                    especially through emerging crossovers between technology and education, civics, social good, and more.
                    I hope to pursue more EdTech projects similar to my RShiny visualization apps.
                    But one CivicTech project I pursued was at the first annual virtual hackathon between the consortium of Ivy League schools called IvyHacks.
                </p>
                <p>
                    In this hackathon, I helped design a project called
                    <a href="https://devpost.com/software/votrcrwd-edb5v0"> VotrCrwd</a>, an all in one voting information system that provides polling station locations and capacities using real-time user location data in order to help voters track whether their polling location is unusually crowded and decide how safe it is to vote.
                    VotrCrwd also provides users with voter registration and absentee ballot request information.

                </p>
                <br/>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5WL0OOjLrmU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                
            <div><br/><hr/><br/><br/><br/><hr/><br/></div>

            </div>
            
        );
    }
}

export default Coding;