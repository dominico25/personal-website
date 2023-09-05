import React from 'react';
import { useState } from "react";
import Menu from "./Menu";

function About() {

    const [menuScreen, setMenuScreen] = useState(false);

    const menuOn = () => {
        setMenuScreen(true);
    }

    const menuOff = () => {
        setMenuScreen(false);
    }

    function redirectToLinkedIn() {
        window.open("https://www.linkedin.com/in/dominico-mendes-42a8bb234/", "_blank");
    }

    function redirectToGitHub() {
        window.open("https://github.com/dominico25", "_blank");
    }
    
    function redirectToResume() {
        const pdfUrl = 'https://drive.google.com/file/d/1CVVvSpksue8UhBitFFEo0-3dEMqTr2pY/view?usp=sharing';
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "resume_dominico_mendes.pdf";
        link.click();
    }

    return (
        <div id="container">
            {!menuScreen &&
                <div>
                    <header>
                        <div id="main-header">
                            <h1 onClick={() => window.location.href = '/'}>Dominico Mendes</h1>
                        </div>
                        <aside id = "empty-header"/>
                        <aside>
                            <button id = "about-button" onClick={() => window.location.href = '/About'}>About</button>
                            <button id = "project-button" onClick={() => window.location.href = '/Projects'}>Projects</button>
                        </aside>
                        <aside>
                            <button id = "linkedin-button" onClick = {redirectToLinkedIn}>LinkedIn</button>
                            <button id = "github-button" onClick = {redirectToGitHub}>GitHub</button>
                        </aside>
                        <aside>
                            <button id = "resume-button" onClick={() => window.location.href = '/Resume'} >Resume</button>
                            <button id = "resume-button" onClick = {redirectToResume} >Resume Download</button>
                        </aside>
                        <aside>
                            <button id = "menu-button" onClick = {menuOn}>&#9776;</button>
                        </aside>
                    </header>
                </div>
            }
            ABOUT
            {menuScreen && (
                <div id="menu-content">
                    <Menu menuScreen = {menuScreen} menuOff={menuOff}/>
                </div>
            )}
        </div>
    )
}

export default About;