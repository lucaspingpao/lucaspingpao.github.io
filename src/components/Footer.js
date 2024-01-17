import React from 'react';
import '../styles/Footer.css';
import GithubPic from "../assets/GitHubPic.png";
import GithubLogo from "../assets/GitHubLogo.png";
import YouTube from "../assets/youtube.png";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div>
                <div className="footer">
                    <div className="text">Designed by Lucas Pao.<br/>Check out some more projects here!</div>
                    <a className="github"href="https://github.com/lucaspingpao" target="_blank" rel="noopener noreferrer">
                        <img className="github-logo-pic" alt="GitHub logo" src={GithubPic}></img>
                        <img className="github-pic-pic" alt="GitHub" src={GithubLogo}></img>
                    </a>
                    <a className="youtube" href="https://www.youtube.com/@paocodingtutorials2143/videos" target="_blank" rel="noopener noreferrer">
                        <img className="youtube-pic" alt="YouTube logo" src={YouTube}></img>
                    </a>
                </div>
          </div>
        );
    }
}

export default Footer;