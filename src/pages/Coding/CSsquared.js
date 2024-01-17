import { Button } from '@material-ui/core';
import React from 'react';
import '../../styles/App.css';

class CSsquared extends React.Component {
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
                <h2>CSCS: Computer Science Course Selector</h2>

                <p>
                    I was first inspired to start studying Computer Science after taking CS50, Harvard's Introduction to Computer Science class.
                    Here is one of my first coding projects that I developed with two of my friends as the final project for this class.
                    In this project, we developed algorithms and webpages to help users navigate through the Harvard CS course catalog.
                    Here below is a video explaining the project in more detail!
                </p>

                <br/><br/>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/F4xodbOdgjE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        );
    }
}

export default CSsquared;