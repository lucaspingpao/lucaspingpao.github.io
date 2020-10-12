import React from 'react';
import {Link} from 'react-router-dom';

class Coding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                
                <h1>Coding</h1>
                <hr/>
                <p style={{paddingLeft: "20%", paddingRight: "20%"}}>
                    I am currently a sophomore at Harvard studying Mathematics and Computer Science.
                    I was first inspired to start studying Computer Science after taking CS50, Harvard's Introduction to Computer Science class, during my first semester.
                    Here is one of my first coding projects that I developed with two of my friends as the final project for this class:
                </p>
                <u><h2>CSCS: Computer Science Course Selector</h2></u>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/F4xodbOdgjE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p style={{paddingLeft: "20%", paddingRight: "20%"}}>
                    As a prospective Mathematics concentrator, I spent my first year taking foundational courses in Linear Algebra and Real Analysis.
                    While these classes were quite rewarding, I found transitioning into abstract thinking quite difficult and saw many peers around me with similar struggles.
                    Personally, I am quite a hands-on visual learner, so I was inspired to create educational visualization apps to help students grasp abstract mathematical concepts better.
                    This summer, my former math professor helped mentor me along my project to create visualization apps in RShiny. Here are some of my apps that you should check out:
                </p>
                <u><h2>Math Visualization Apps in RShiny</h2></u>
                <p style={{paddingLeft: "15%", paddingRight: "15%", textAlign: "left"}}>
                    <br/>1. <a href="https://lucaspingpao.shinyapps.io/Math23a-Week1-MarkovModels/">Markov Models</a>: Calculates the number of paths between vertices on a finite graph using transition matrices.
                    <br/>2. <a href="https://lucaspingpao.shinyapps.io/Math23a-Week3-RowReduction/">Row Reduction</a>: Provides step-by-step instructions for how to row reduce an inputted matrix and finds orthonormal basis of column vectors using the Gram-Schmidt method.
                    <br/>3. <a href="https://lucaspingpao.shinyapps.io/Math23a-Week4-Eigenvectors/">Eigenvectors</a>: Provides step-by-step instructions for how to find eigenvalues and eigenvectors of an inputted matrix using Axler's method.
                    <br/>4. <a href="https://lucaspingpao.shinyapps.io/Math23-Week5-Sequences/">Sequence Convergence</a>: Illustrates the formal epsilon definition of sequence convergence with animated graphs.
                    <br/>5. <a href="https://lucaspingpao.shinyapps.io/Math23-Week9-FiniteTopology/">Finite Topology</a>: Illustrates basic definitions of finite topology applied to directed graphs such as interior, closure, boundary, etc.
                </p>
                <p style={{paddingLeft: "15%", paddingRight: "15%"}}>
                    I had so much fun exploring the graphical capabilities and data analysis tools in R/RShiny that I volunteered to take on several teaching roles to share my skills in R with other students.
                    I became a coding assistant for S-152: Discrete Mathematics, as well as volunteering for Wave Learning Festival.
                    In my 5-day seminar called "Data Analysis and Web Apps in RShiny", I co-taught fundamental concepts in RShiny to 30+ high school students.
                    You can find my lecture recordings here:
                </p>
                <u><h2>Wave Learning Festival Seminar: Data Analysis and Web Apps in RShiny</h2></u>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLjT_SXeguj8BnrPFmkfAJnDY_9h9xCpWO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p style={{paddingLeft: "15%", paddingRight: "15%"}}>
                    Through my journey into the tech world, I have been constantly inspired by the ways in which we can utiilize technology to improve all aspects of our society, especially through emerging fields in EdTech, CivicTech, and general SocialGood Tech.
                    The projects above are examples of ways I have dabbled into EdTech. One CivicTech project I pursued was at the first annual virtual hackathon called IvyHacks.
                </p>
                <u><h2>VotrCrowd: IvyHacks Hackathon</h2></u>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5WL0OOjLrmU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
            </div>
            
        );
    }
}

export default Coding;