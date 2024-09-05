import React, { useEffect } from 'react';
import '../../styles/Project.css';

import Schedule from "../../assets/schedule.png";

function DataMatch() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projectContainer">
            <h2>Datamatch</h2>
            <div className="row">
                <div>
                    <div>
                        <h3>Tech Stack:</h3>
                        <p class="techSkills">JavaScript, React, HTML, CSS, Redux, Firebase</p>
                    </div>
                    <div>
                        <h3>Valentine's Day Matchmaking Service</h3>
                        <p>
                            Throughout college, I worked on the development team of Datamatch, an organization at Harvard that provides an annual matchmaking service on Valentine's Day,
                            connecting 40,000+ students from 30+ colleges all over the U.S. and even around the world every year!
                            As a full-stack web developer on the team, my specific task one year was to create a scheduling component that allows users to select their available time preferences in order to coordinate an optimal time to set up a potential date.
                        </p>
                        <p>
                            Here is a picture of the frontend of the component I built using React JS on the frontend and connecting the scheduling data from our database in Google Firebase on the backend.
                            Another year, I refactored much of the codebase file system on the backend and worked on creating emoji reactions in our chat function on the frontend.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        src={Schedule}
                        alt="Screenshot of a schedule component from the Datamatch app where a user can select when they are available for a date."
                    />
                </div>
            </div>
        </div>
        
    );
}

export default DataMatch;