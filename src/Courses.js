import { useState } from "react";
import React from "react";
import Menu from "./Menu";
import Header from "./Header";

function Courses() {

    const [menuScreen, setMenuScreen] = useState(false);

    const menuOn = () => {
        setMenuScreen(true);
    }

    const menuOff = () => {
        setMenuScreen(false);
    }

    return (
        <div id="container">
            {!menuScreen &&
                <div>
                    <Header menuScreen = {menuScreen} menuOff={menuOff} menuOn={menuOn}/>
                    <div id="course-container">
                        <h1 id="course-title">Courses</h1>
                        <div id="software-container">
                            <h2>Software Courses</h2>
                            <ul>
                                <li>ENDG 233 - Programming with Data</li>
                                <li>ENSF 300 - Software Engineering Practices for Data Management</li>
                                <li>ENSF 337 - Programming Fundamentals for Software and Computer</li>
                                <li>ENSF 338 - Practical Data Structures and Algorithms</li>
                                <li>ENSF 380 - Object-Oriented Principles for Software Developement</li>
                                <li>ENSF 381 - Full Stack Web Development</li>
                                <li>ENCM 369 - Computer Organization</li>
                            </ul>
                        </div>
                        <div id="engineering-container">
                            <h2>General Engineering Courses</h2>
                            <ul>
                                <li>ENGG 225 - Fundamentals of Electrical Circuits and Machines</li>
                                <li>ENGG 200 - Engineering Design, Innovation and Entrepreneurship</li>
                                <li>ENGG 201 - Behaviour of Liquids Gases & Solid</li>
                                <li>ENGG 202 - Engineering Statics</li>
                                <li>ENDG 319 - Probability, Statistics and Machine Learning</li>
                                <li>ENEL 353 - Digital Circuits</li>
                                <li>ENGG 481 - Technology and Society</li>
                            </ul>
                        </div>
                        <div id="other-container">
                            <h2>Other General Courses</h2>
                            <ul>
                                <li>MATH 211 - Linear Methods I</li>
                                <li>MATH 275 - Calculus for Engineers and Scientists</li>
                                <li>MATH 277 - Multivaraible Calculus for Engineers and Scientists</li>
                                <li>MATH 375 - Differential Equations for Engineers and Scientists</li>
                                <li>MATH 271 - Discrete Mathematics</li>
                                <li>PHYS 259 - Electricity and Magnetism (for Students in Engineering)</li>
                                <li>CHEM 209 - General Chemistry for Engineers</li>
                                <li>COMS 363 - Professional and Technical Communication</li>
                            </ul>
                        </div>
                    </div>
                    
                    <footer>
                        <aside>
                            <h3 id = "main-footer">Dominico Mendes</h3>
                        </aside>
                        <aside>
                            <p>dominicomendes@gmail.com</p>
                        </aside>
                    </footer>
                </div>
                
            }
            {menuScreen && (
                <div id="menu-content">
                    <Menu menuScreen = {menuScreen} menuOff={menuOff}/>
                </div>
            )}
        </div>
    )
}

export default Courses;