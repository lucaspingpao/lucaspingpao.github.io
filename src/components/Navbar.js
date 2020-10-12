import React from 'react';
import {AppBar, Button, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <AppBar color="white" position="static">
              <Toolbar>
                <Button color="secondary" href="/">Home</Button>
                <Button color="secondary" href="/about">About</Button>
                <Button color="secondary" href="/coding">Coding</Button>
                <Button color="secondary" href="/music">Music</Button>
                <Button color="secondary" href="/other">Other</Button>
              </Toolbar>
            </AppBar>
          );
    }
}

export default Navbar;