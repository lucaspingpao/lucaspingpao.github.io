import React, { useEffect } from 'react';
import '../../styles/Project.css';

import TechStack from '../../components/TechStack';
import Summary from '../../components/Summary';
import SelfplanrLogo from "../../assets/Selfplanr.jpg";

function Selfplanr() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-container">
            <h2>Selfplanr</h2>
            <div className="row">
                <div>
                    <TechStack tech="Next.js, TypeScript, CSS (Tailwind), MongoDB, Google Gemini, LangChain" />
                    <Summary
                        subtitle="Agentic AI College Counseling Platform"
                        summary="
                            This project features a task management system powered by an agentic AI chatbot to help students plan and prepare their academic/extracurricular schedule for college admissions.
                            I worked on translating AI responses into organized page layouts on the frontend as well as configuring the agentic workflow in LangChain and writing API routes on the backend.
                        "
                    />
                </div>
                <div>
                    <img src={SelfplanrLogo} alt="Selfplanr logo"></img>
                </div>
            </div>
        </div>
    );
}

export default Selfplanr;