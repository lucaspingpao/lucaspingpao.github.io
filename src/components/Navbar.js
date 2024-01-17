import React from 'react';
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
                <Link className="button" to="/projects">Projects</Link>
                <Link className="button" to="/experience">Experience</Link>
          </div>
          );
    }
}

export default Navbar;