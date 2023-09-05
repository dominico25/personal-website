import React from 'react';
import { useState } from "react";
import Menu from "./Menu";
import Header from "./Header";

function Projects() {

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


export default Projects;