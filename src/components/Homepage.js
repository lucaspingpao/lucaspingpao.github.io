import React from 'react';
import {Link} from 'react-router-dom';
import './Homepage.css';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
            
            <h1>👋 Welcome! 👋</h1>
                <hr/><br/>
                <h2>My name is Lucas Pao, and I like to create.</h2>
                Check out some of my projects by clicking one of the emojis below!

                <br/><br/><br/><br/>
                <Link to="/coding" class="logo">💻</Link>
                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                <Link to="/music" class="logo">🎵</Link>
                <br/>
                <span class="caption">Coding</span>
                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                <span class="caption">Music</span>

            </div>
        );
    }
}

export default Homepage;