import React, { useEffect } from 'react';
import '../../styles/Project.css';

// import TechStack from '../../components/TechStack';
// import Summary from '../../components/Summary';

function WaveLearning() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-container">
            <h2>Wave Learning Festival</h2>
            <div className="row">
                <div>
                    <div>
                        <h3>Skills:</h3>
                        <p class="tech-skills">R, RShiny, Web Development, Data Analysis, Statistics</p>
                    </div>
                    <h3>Wave Learning Festival</h3>
                    <p>
                        One summer, I became a curriculum developer for several Harvard Summer School math courses and volunteered as a teacher for Wave Learning Festival,
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

export default WaveLearning;