import React from 'react';
import '.././styles/Navbar.css';
import {Link, Redirect} from 'react-router-dom';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLink: "/skills"
        };
    }

    handleClick(page) {
        const link = this.state.redirectLink.concat(page);
        this.setState({redirectLink: link})
    }

    render() {
        if(this.state.redirectLink !== "/skills") {
            return <Redirect to={this.state.redirectLink}/>
        }
        return (
            <div>
                <h1>Skills</h1>
                <div className='expLayout'>
                    <div>
                        <h2>Python (Flask)</h2>
                        <ul>
                            <li><Link className='button' to="/projects/rshinyapps">Project: CSCS: Computer Science Course Selector</Link></li>
                            <li><Link className='button' to="/projects/rshinyapps">Project: PolySympth Synthesizer</Link></li>
                            <li><Link className='button' to="/projects/rshinyapps">Experience: Photon Commerce</Link></li>
                            <li><Link className='button' to="/projects/rshinyapps">Experience: TapJams</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>JavaScript (React, React Native)</h2>
                        <ul>
                            <li><Link className='button' to="/projects/rshinyapps">Project: VotrCrowd</Link></li>
                            <li><Link className='button' to="/projects/rshinyapps">Experience: Datamatch</Link></li>
                            <li><Link className='button' to="/projects/rshinyapps">Experience: PlayHouse</Link></li>
                            <li><Link className='button' to="/projects/rshinyapps">Experience: TapJams</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Swift</h2>
                        <ul>
                            <li>
                                <Link
                                    className='button'
                                    to="/projects/rshinyapps"
                                >
                                Experience: Capital One
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>R (Shiny)</h2>
                        <ul>
                            <li>
                                <Link
                                    className='button'
                                    to="/projects/rshinyapps"
                                >
                                    Project: Interactive Abstract Math Viz Apps
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;