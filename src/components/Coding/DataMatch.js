import React from 'react';
import './../Coding.css';
import Schedule from "../../assets/schedule.png";

class DataMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>🧩 Coding 🧩</h1>
                <hr/><br/>
                
                <u><h2>Datamatch</h2></u>

                <p>
                    At the end of 2020, I joined Datamatch, an organization at Harvard that provides a matchmaking service around Valentine's Day for college students.
                    Last year, Datamatch connected over 40,000 students around the world.
                    As a web developer on the team, my specific task was to create a scheduling component that allows users to select their available time preferences in order to coordinate an optimal time to set up a potential date.
                    Here below is a picture of the frontend of the component built in React JS.
                </p>

                <br/>

                <img src={Schedule} style={{width: "50%"}}></img>
            </div>
            
        );
    }
}

export default DataMatch;