import React from 'react';
import {AppBar, Button, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div className="navbar">
                <Link className="button" to="/">HOME</Link>
                <Link className="button" to="/coding">CODING</Link>
                <Link className="button" to="/music">MUSIC</Link>
          </div>
          );
    }
}

export default Navbar;