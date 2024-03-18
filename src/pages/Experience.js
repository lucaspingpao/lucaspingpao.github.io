import React from 'react';
import LucasFace from "../assets/Lucas_Pao.JPG";
import {Link, Redirect} from 'react-router-dom';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLink: "/experience"
        };
    }

    handleClick(page) {
        const link = this.state.redirectLink.concat(page);
        this.setState({redirectLink: link})
    }

    render() {
        if(this.state.redirectLink !== "/experience") {
            return <Redirect to={this.state.redirectLink}/>
        }
        return (
            <div>
                <h1>Experience</h1>
                <div className="expLayout">
                    <div>
                        <h2>Education</h2>
                        <div>
                            <h3 style={{margin: "0", padding: "0"}}>HARVARD UNIVERSITY</h3>
                            <h4>Sep 2019 - May 2023</h4>
                            <h5>B.A. in Computer Science (Honors), Minor in Mathematics</h5>
                            <h5>Honors: Cum Laude</h5>
                            <h5>Coursework: Machine Learning, Data Structures and Algorithms, Systems Programming, Product Design, Theoretical Computer Science, Probability, Abstract Algebra, Complex Analysis</h5>
                        </div>
                        <br/>
                        <div>
                            <h3>BERKLEE COLLEGE OF MUSIC</h3>
                            <h4>Sep 2023 - Jun 2024</h4>
                            <h5>M.A. Candidate in Creative Media and Technology</h5>
                            <h5>Harvard-Berklee Dual Degree Program</h5>
                        </div>
                    </div>
                    <div>
                        <img
                            src={LucasFace}
                            alt="Portrait of Lucas standing in a field with a Harvard-logo T-shirt."
                            style={{
                                marginLeft: "15%",
                                width: "75%",
                                height: "auto",
                                borderRadius: "50px"
                            }}
                        >
                        </img>
                    </div>
                </div>
                <h2>Work Experience</h2>
                <div className="expLayout">
                    <div className='expLeft'>
                        <br/><br/>
                        <div style={{color: "black"}}>
                            <h3>CAPITAL ONE</h3>
                            <h4>Software Engineer Intern</h4>
                            <h4>Jun 2022 - Aug 2022</h4>
                            <h5>
                                Engineered protocols in Swift that mock API calls to replace 200+ static testing files used to validate UI testing cases for the main EASE app that has millions of users.
                            </h5>
                        </div>

                        <div style={{color: "white"}}>
                            <h3>HARVARD INNOVATION LABS</h3>
                            <h4>Venture Program</h4>
                            <h4>Jan 2022 - May 2022</h4>
                            <h5>
                                Launched and coded MVP for TapJams (social music composition platform), rendering frontend interface of musical instruments in React JS, creating backend audio mixing algorithms in Python (Flask).
                            </h5>
                        </div>

                        <div style={{color: "black"}}>
                            <h3>PHOTON COMMERCE</h3>
                            <h4>Software Engineer Intern</h4>
                            <h4>Jun 2021 - Aug 2021</h4>
                            <h5>
                                Implemented new text analytics algorithms in Python improving accuracy from 38% to 71% of address data collection, conducted competitor analysis by coding scripts of accuracy reports on competing FinTech APIs.
                            </h5>
                        </div>

                        <div style={{color: "white"}}>
                            <h3>HARVARD DATAMATCH</h3>
                            <h4>Full-Stack Developer</h4>
                            <h4>Nov 2020 - Feb 2022</h4>
                            <h5>
                                Developed scheduling and message reacting features with React JS frontend and Google Firebase backend, connecting 40,000+ college students from 30+ colleges.
                            </h5>
                        </div>

                        <div style={{color: "black"}}>
                            <h3>HARVARD UNIVERSITY</h3>
                            <h4> Math Course Assistant Positions</h4>
                            <h4>May 2020 - May 2021</h4>
                            <br/>
                            <h5 style={{margin: "0", padding: "0"}}>AM 107: Graph Theory and Combinatorics</h5>
                            <h5 style={{margin: "0", padding: "0"}}>MATH S-152: Discrete Mathematics</h5>
                            <h5 style={{margin: "0", padding: "0"}}>MATH S-23a: Linear Algebra and Real Analysis I</h5>
                        </div>
                        <br/><br/>
                    </div>
                
                    <div className='expRight'>
                        <br/><br/>
                        <div style={{color: "white"}}>
                            <h3>CAPITAL ONE</h3>
                            <h4>Software Engineer Intern</h4>
                            <h4>Jun 2022 - Aug 2022</h4>
                            <h5>
                                Engineered protocols in Swift that mock API calls to replace 200+ static testing files used to validate UI testing cases for the main EASE app that has millions of users.
                            </h5>
                        </div>

                        <div style={{color: "black"}}>
                            <h3>HARVARD INNOVATION LABS</h3>
                            <h4>Venture Program</h4>
                            <h4>Jan 2022 - May 2022</h4>
                            <h5>
                                Launched and coded MVP for TapJams (social music composition platform), rendering frontend interface of musical instruments in React JS, creating backend audio mixing algorithms in Python (Flask).
                            </h5>
                        </div>

                        <div style={{color: "white"}}>
                            <h3>PHOTON COMMERCE</h3>
                            <h4>Software Engineer Intern</h4>
                            <h4>Jun 2021 - Aug 2021</h4>
                            <h5>
                                Implemented new text analytics algorithms in Python improving accuracy from 38% to 71% of address data collection, conducted competitor analysis by coding scripts of accuracy reports on competing FinTech APIs.
                            </h5>
                        </div>

                        <div style={{color: "black"}}>
                            <h3>HARVARD DATAMATCH</h3>
                            <h4>Full-Stack Developer</h4>
                            <h4>Nov 2020 - Feb 2022</h4>
                            <h5>
                                Developed scheduling and message reacting features with React JS frontend and Google Firebase backend, connecting 40,000+ college students from 30+ colleges.
                            </h5>
                        </div>

                        <div style={{color: "white"}}>
                            <h3>HARVARD UNIVERSITY</h3>
                            <h4> Math Course Assistant Positions</h4>
                            <h4>May 2020 - May 2021</h4>
                            <br/>
                            <h5 style={{margin: "0", padding: "0"}}>AM 107: Graph Theory and Combinatorics</h5>
                            <h5 style={{margin: "0", padding: "0"}}>MATH S-152: Discrete Mathematics</h5>
                            <h5 style={{margin: "0", padding: "0"}}>MATH S-23a: Linear Algebra and Real Analysis I</h5>
                        </div>
                        <br/><br/>
                    </div>
                </div>

                <div>
                    <h2>Skills</h2>
                    <div className='expLayout'>
                        <div>
                            <h3>Python (Flask)</h3>
                            <h4>3 years</h4>
                            <ul>
                                <li><Link className='button' to="/projects/cssquared">Project: CSCS: Computer Science Course Selector</Link></li>
                                <li><Link className='button' to="/projects/polysymph">Project: PolySympth Synthesizer</Link></li>
                                <li className='other'>Experience: Photon Commerce</li>
                                <li><Link className='button' to="/projects/polysymph">Project: TapJams</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>JavaScript (React, React Native)</h3>
                            <h4>2 years</h4>
                            <ul>
                                <li><Link className='button' to="/projects/votrcrowd">Project: VotrCrowd</Link></li>
                                <li><Link className='button' to="/projects/datamatch">Project: Datamatch</Link></li>
                                <li><Link className='button' to="/projects/playhouse">Project: PlayHouse</Link></li>
                                <li><Link className='button' to="/projects/polysymph">Project: TapJams</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Swift</h3>
                            <h4>1 year</h4>
                            <ul>
                                <li>Experience: Capital One</li>
                            </ul>
                        </div>
                        <div>
                            <h3>R (Shiny)</h3>
                            <h4>2 years</h4>
                            <ul>
                                <li>
                                    <Link
                                        className='button'
                                        to="/projects/rshinyapps"
                                    >
                                        Project: Interactive Abstract Math Visualization Apps
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;