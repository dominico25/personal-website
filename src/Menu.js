import { useState } from "react";

function Menu(props) {

    const handleMenuOff = () => {
        props.menuOff();
    }

    return (
        <div id = "container-pop-up">
            <header id = "menu-header">
                <aside></aside>
                <div id="menu-header-close"></div>
                <aside>
                    <button id = "menu-button" onClick = {handleMenuOff}>&#9776;</button>
                </aside>
            </header>
            <body class = "center2">
                <div class = "center">
                    
                </div>
            </body>
        </div>
        
    )
}

export default Menu;