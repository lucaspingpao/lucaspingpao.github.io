import React from 'react';
import {AppBar, Button, Toolbar} from '@material-ui/core';
import './Footer.css';
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
                <br/><br/><hr/>
                <div className="footer">
                    <div className="text">Designed by Lucas Pao.<br/>Check out some more projects here!</div>
                    <a className="github"href="https://github.com/lucaspingpao" target="_blank">
                        <img style={{height: "20px", width: "auto"}} src={GithubPic}></img>
                        <img style={{height: "23px", width: "auto"}} src={GithubLogo}></img>
                    </a>
                    <a className="youtube" href="https://www.youtube.com/channel/UCm0a7WR5C2684z6fL5XNodw" target="_blank">
                        <img style={{height: "20px", width: "auto"}} src={YouTube}></img>
                    </a>
                </div>
                <hr/><br/>
          </div>
        );
    }
}

export default Footer;