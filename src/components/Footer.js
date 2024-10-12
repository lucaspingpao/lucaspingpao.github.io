import React from 'react';
import '../styles/Footer.css';

import GithubPic from "../assets/GitHubPic.png";
import GithubLogo from "../assets/GitHubLogo.png";
import YouTube from "../assets/youtube.png";

function Footer() {
    return (
        <footer>
            <div className="footer-text">
                <p>Designed by Lucas Pao.</p>
                <p id="disclaimer">(no external CSS/design libraries used!)</p>
                <p>Check out more projects below!</p>
            </div>
            <div className="footer-links">
                <a
                    className="github"
                    href="https://github.com/lucaspingpao"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img className="github-pic-pic" alt="GitHub" src={GithubPic}/>
                    <img className="github-logo-pic" alt="GitHub logo" src={GithubLogo}/>
                </a>
                <a
                    className="youtube"
                    href="https://www.youtube.com/@paocodingtutorials2143/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="youtube-pic" alt="YouTube logo" src={YouTube}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;