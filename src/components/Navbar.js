import React from 'react';
import {AppBar, Button, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div className="navbar">
                <Link className="button" to="/">Home</Link>
                <Link className="button" to="/coding">Coding</Link>
                <a className="button" href="https://www.lucaspaomusic.com" target="_blank">Music</a>
          </div>
          );
    }
}

export default Navbar;