import React from 'react';
import {Link} from 'react-router-dom';

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                
                <h1>Music</h1>
                <hr/>
                <p style={{paddingLeft: "20%", paddingRight: "20%"}}>
                    I am also enrolled in a special dual-degree program with the Berklee College of Music, where I intend to get a Masters in Music in Contemporary Performance and Produciton.
                    In high school I started recording vide s videos of piano covers on my first YouTube Channel: <a href="https://www.youtube.com/channel/UCm0a7WR5C2684z6fL5XNodw">PaoPianoCovers</a>
                    Over the years, i have developed many videos, but here are a few projects that I would love to share:
                </p>
                <u><h2>100 Day Song Challenge</h2></u>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLKgcPfLvshU7mDs6wxM20UauM7nCUb5gT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p style={{paddingLeft: "20%", paddingRight: "20%"}}>
                    I also love playing mashups bla bla bla
                </p>
                <p style={{paddingLeft: "15%", paddingRight: "15%"}}>
                Here are some Compositions:
                Serendipity
                Band Mashup
                Love The World
                Justice
                </p>
            </div>
            
        );
    }
}

export default Music;