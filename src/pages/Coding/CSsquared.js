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
                    In this project, we developed webpages and algorithms to recommend a custom course selection plan for prospective CS concentrators to help them navigate through the Harvard CS course catalog more easily.
                    This project was developed using HTML, CSS (Bootstrap), Python (Flask), and SQL databases.
                    Here below is a video explaining the project in more detail!
                </p>

                <br/><br/>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/F4xodbOdgjE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="CSsquared"></iframe>
            </div>
        );
    }
}

export default CSsquared;