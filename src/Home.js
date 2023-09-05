import { useState } from "react";
import React from "react";
import Menu from "./Menu";
import Header from "./Header";

function Home() {

    const [menuScreen, setMenuScreen] = useState(false);

    const menuOn = () => {
        setMenuScreen(true);
    }

    const menuOff = () => {
        setMenuScreen(false);
    }

    // function redirectToLinkedIn() {
    //     window.open("https://www.linkedin.com/in/dominico-mendes-42a8bb234/", "_blank");
    // }

    // function redirectToGitHub() {
    //     window.open("https://github.com/dominico25", "_blank");
    // }
    
    // function redirectToResume() {
    //     const pdfUrl = 'https://drive.google.com/file/d/1CVVvSpksue8UhBitFFEo0-3dEMqTr2pY/view?usp=sharing';
    //     const link = document.createElement("a");
    //     link.href = pdfUrl;
    //     link.target = "_blank";
    //     link.download = "resume_dominico_mendes.pdf";
    //     link.click();
    // }

   
    // const handleAboutButton = () => {
    //     mainOff();
    //     about
    // }
    // <button id = "about-button" onClick={() => { mainOff(); aboutOn(); projectOff(); }}>About</button>
    return (
        <div id="container">
            {!menuScreen &&
                <div>
                    <Header menuScreen = {menuScreen} menuOff={menuOff} menuOn={menuOn}/>
                    <div id = "intro-container">
                        <h2 id = "intro">Third-year student at the University of Calgary completing a Bachelor of Science in Software Engineering.</h2>
                        <img id = "profile-pic" src = "https://res.cloudinary.com/dnowxhqec/image/upload/v1692572531/61876269-5312-4F18-BB62-FD766756BFBF_1_201_a_kuloyr.jpg"></img>
                    </div>
                    <div id = "description-container">
                        <h3 id = "description-title">Introduction</h3>
                        <h3 id = "line">________________________________________________________________________</h3>
                        <p id = "description"> Hi! My name is Dominico Mendes and this is my website. I developed this website from the ground up as a side project. I am currently in my third year of Software Engineering at the University of Calgary. When I'm not coding I like to go bouldering and spend time with both family and friends. </p>
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

export default Home;