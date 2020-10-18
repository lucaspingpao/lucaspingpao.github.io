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
          <div class="navbar">
            <AppBar color="white" position="static">
              <Toolbar >
                <Button color="secondary"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></Button>
                <Button color="secondary"><Link to="/coding" style={{ textDecoration: 'none' }}>Coding</Link></Button>
                <Button color="secondary"><Link to="/music" style={{ textDecoration: 'none' }}>Music</Link></Button>
              </Toolbar>
            </AppBar>
          </div>
          );
    }
}

export default Navbar;