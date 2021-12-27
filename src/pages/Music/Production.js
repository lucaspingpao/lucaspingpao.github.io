import React from 'react';
import '../../styles/App.css';
import JustMoveRightAlong from '../../assets/JustMoveRightAlong.png';
import OneMoveAtATime from '../../assets/OneMoveAtATime.png';
import LeaveYouAlone from '../../assets/LeaveYouAlone.png';
import WhereDidYouGo from '../../assets/WhereDidYouGo.JPG';
import Spotify from '../../assets/Spotify.svg.png';
import iTunesStore from '../../assets/iTunesStore.svg.png';
import AmazonMusic from '../../assets/amazonMusic.png';

class Production extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="projectBody">
                <h2>Electronic Music Production</h2>
                <p>
                    I started writing, recording, and producing my first mini-EP in the summer of 2021!
                    Since then, I have also released a few other singles on my artist profile.
                    Follow my music on all platforms by clicking on the links below or listen to inidivdual tracks on SoundCloud by clicking on the different cover art!
                </p>

                <div className="coverArt">
                    <a href="https://soundcloud.com/user-154799790/just-move-right-along?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank"><img src={JustMoveRightAlong}/></a>
                    <a href="https://soundcloud.com/user-154799790/one-move-at-a-time?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank"><img src={OneMoveAtATime}/></a>
                    <a href="https://soundcloud.com/user-154799790/leave-you-alone?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank"><img src={LeaveYouAlone}/></a>
                    <a href="https://soundcloud.com/user-154799790/where-did-you-go?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank"><img src={WhereDidYouGo}/></a>
                </div>
                
                <div>
                    <a href="https://open.spotify.com/artist/7Ci5plryegJFRxUMaZTFmt?si=gFiZpt_uR4GEbJN4H6_Kqg" target="_blank"><img src={Spotify} className="musicLogo"/></a>
                    <a href="https://music.apple.com/ch/artist/lucas-pao/1582600822?l=en" target="_blank"><img src={iTunesStore} className="musicLogo"/></a>
                    <a href="https://music.amazon.com/artists/B09DG965BB/lucas-pao?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_LSylDiFDNYOYMsVrP43w2MxX7" target="_blank"><img src={AmazonMusic} className="musicLogo"/></a>
                </div>
            </div>
        );
    }
}

export default Production;