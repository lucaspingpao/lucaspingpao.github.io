import React from 'react';
import {Link} from 'react-router-dom';
import './Music.css';

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                
                <h1>🎵 Music 🎵</h1>
                <hr/>

                <br/><br/>
                <p>
                    I am also enrolled in a special dual-degree program with the Berklee College of Music, where I intend to get a Masters in Music in Contemporary Performance and Produciton.
                    In high school I started recording videos of piano covers on my first YouTube Channel: <a href="https://www.youtube.com/channel/UCm0a7WR5C2684z6fL5XNodw">PaoPianoCovers</a>. 
                    Over the years, I have developed many videos, but here are some of my projects:
                </p>
                <br/>
                

                <u><h2>100 Day Song Challenge</h2></u>
                <p>
                    This summer I recorded 100 songs (almost!) every day for 3 months straight. <br/>
                    Here below is a video of the final song I did, for which I made a special video production!
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLKgcPfLvshU7mDs6wxM20UauM7nCUb5gT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <hr/>

                <u><h2>Composition</h2></u>

                <p>
                    I also love composing music, which I have been doing since I was 5 years old.
                    (hopefully I'll be able to dig up some of my old compositions to showcase on my website soon!)
                    I originally started composing classical orchestral masterpieces but eventually transitioned into producing EDM beats.
                    Here below is one of my featured productions I created this summer!
                </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/mpok-ZkketY?start=127" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <div><br/><hr/><br/><br/><br/><hr/><br/></div>

            </div>
            
        );
    }
}

export default Music;