import React, { useEffect } from 'react';
import '../../styles/Project.css';

function CSsquared() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projectContainer">
            <h2>CSCS: Computer Science Course Selector</h2>
            <div className="row">
                <div>
                    <div>
                        <h3>Tech Stack:</h3>
                        <p className="techSkills">Python, Flask, HTML, CSS (Bootstrap), SQL (SQLite)</p>
                    </div>
                    <div>
                        <h3>Harvard Course Recommendation System</h3>
                        <p>
                            In this project, we developed webpages and algorithms to recommend a custom course selection plan for prospective CS concentrators to help them navigate through the Harvard CS course catalog more easily.
                            This project was developed using HTML, CSS (Bootstrap), Python (Flask), and SQL databases.
                            Here is a video explaining the project in more detail!
                        </p>
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://www.youtube.com/embed/F4xodbOdgjE?si=R70XXXeAqN-UR7nA&amp;start=23"
                        title="YouTube video player for CSCS demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
}

export default CSsquared;