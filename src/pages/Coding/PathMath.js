import React, { useEffect } from 'react';
import '../../styles/Project.css';

import TechStack from '../../components/TechStack';
// import Summary from '../../components/Summary';

import PathMathLogo from "../../assets/PathMathScreen.png";

function PathMath() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-container">
            <h2>PathMath</h2>
            <div className="row">
                <div>
                    <TechStack tech="Next.js, TypeScript, Python, MySQL, AWS (Amplify, Lambda, API Gateway, RDS, Cognito, S3, IAM, Q)" />
                    <div>
                        <h3>AWS: Game Builder Challenge Hackathon</h3>
                        <p>
                            PathMath is a dynamic mental math maze searching game designed to help students improve arithmetic fluency, built for the&nbsp;
                            <a href="https://devpost.com/software/pathmath" target="_blank" rel="noopener noreferrer">AWS Game Builder Challenge</a>.
                            Play the game&nbsp;
                            <a href="https://main.dyv0fcmay3cuo.amplifyapp.com/" target="_blank" rel="noopener noreferrer">here</a>.
                        </p>
                        <p>
                            This was my first time configuring my own AWS project, directly incorporating services such as Amplify, Lambda, API Gateway, RDS, Cognito, and S3
                            and indirectly making use of additional tools (primarily for configuration) such as AmplifyUI, EC2, IAM, CloudWatch, and Q!
                        </p>
                    </div>
                </div>
                <div>
                    <img src={PathMathLogo} alt="PathMath game play showing a board with selected squares forming a math equation."></img>
                </div>
            </div>
        </div>
    );
}

export default PathMath;