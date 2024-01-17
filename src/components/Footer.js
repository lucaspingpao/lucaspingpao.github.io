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
                    <a className="github"href="https://github.com/lucaspingpao" target="_blank">
                        <img className="github-logo-pic" src={GithubPic}></img>
                        <img className="github-pic-pic" src={GithubLogo}></img>
                    </a>
                    <a className="youtube" href="https://www.youtube.com/@paocodingtutorials2143/videos" target="_blank">
                        <img className="youtube-pic" src={YouTube}></img>
                    </a>
                </div>
          </div>
        );
    }
}

export default Footer;