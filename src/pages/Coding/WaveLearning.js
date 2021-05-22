import React from 'react';
import '../../styles/App.css';

class WaveLearning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>🧩 Coding 🧩</h1>
                <hr/><br/>
                
                <u><h2>Wave Learning Festival Seminar: Data Analysis and Web Apps in RShiny</h2></u>
                
                <p>
                    During the summer of 2020, I had so much fun exploring the graphical capabilities and data analysis tools in R/RShiny through another project that I volunteered to take on several teaching roles to share my skills in R with other students.
                    I became a coding assistant for S-152: Discrete Mathematics and volunteered for Wave Learning Festival,
                    in which I co-taught a 5-day seminar called "Data Analysis and Web Apps in RShiny", covering programming, statistics, data analysis/visualization tools in R, and web application development in RShiny for 30+ high-school students!
                    Here below are some lecture reocrdings of my class, shared through my other YouTube channel,
                    <a href="https://www.youtube.com/channel/UCMta0o0GMm6zw6IFPf_Epgw"> PaoCodingTutorials</a>.
                </p>

                <br/>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLjT_SXeguj8BnrPFmkfAJnDY_9h9xCpWO" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            
        );
    }
}

export default WaveLearning;