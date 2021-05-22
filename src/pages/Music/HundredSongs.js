import React from 'react';
import '../../styles/App.css';

class HundredSongs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>🧩 Music 🧩</h1>
                <hr/><br/>
                
                <u><h2>100 Day Song Challenge</h2></u>
                <p>
                    This summer I recorded 100 songs (almost!) every day for 3 months straight.
                    Here below is the entire playlist of songs I recorded, featuring first a video of the final song I did, for which I made a special video production!
                </p>

                <br/>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLKgcPfLvshU7mDs6wxM20UauM7nCUb5gT" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
            </div>
        );
    }
}

export default HundredSongs;