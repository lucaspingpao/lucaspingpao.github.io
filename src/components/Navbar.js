import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav>
            <Link className="nav-button" to="/">Home</Link>
            <Link className="nav-button" to="/projects">Projects</Link>
            <Link className="nav-button" to="/teaching">Teaching</Link>
            <Link className="nav-button" to="/experience">Experience</Link>
        </nav>
    );
}

export default Navbar;