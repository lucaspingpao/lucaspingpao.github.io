import React from 'react';
import '../../styles/App.css';
import Schedule from "../../assets/schedule.png";

class DataMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="projectBody">
                <h2>Datamatch</h2>

                <p>
                    Throughout college, I worked on the development team of Datamatch, an organization at Harvard that provides an annual matchmaking service on Valentine's Day,
                    connecting 40,000+ students from 30+ colleges all over the U.S. and even around the world every year!
                    As a full-stack web developer on the team, my specific task one year was to create a scheduling component that allows users to select their available time preferences in order to coordinate an optimal time to set up a potential date.
                    Here below is a picture of the frontend of the component I built using React JS on the frontend and connecting the scheduling data from our database in Google Firebase on the backend.
                    Another year, I refactored much of the codebase file system on the backend and worked on creating emoji reactions in our chat function on the frontend.
                </p>

                <br/><br/>

                <img src={Schedule} style={{height: "50%", width: "50%"}} alt="Screenshot of a schedule component from the Datamatch app where a user can select when they are available for a date."></img>
            </div>
            
        );
    }
}

export default DataMatch;