import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
import Resume from "./Resume";
import Courses from "./Courses";

function App() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/About" element={<About />} /> */}
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Router>
    );
  }


// function App() {
//     const [mainScreen, setMainScreen] = useState(true)
//     const [menuScreen, setMenuScreen] = useState(false);
//     const [aboutScreen, setAboutScreen] = useState(false);
//     const [projectScreen, setProjectScreen] = useState(false);

//     const mainOn = () => {
//         setMainScreen(true);
//     }

//     const mainOff = () => {
//         setMainScreen(false);
//     }

//     const menuOn = () => {
//         setMenuScreen(true);
//     }

//     const menuOff = () => {
//         setMenuScreen(false);
//     }

//     const aboutOn = () => {
//         setAboutScreen(true);
//     }

//     const aboutOff = () => {
//         setAboutScreen(false);
//     }

//     const projectOn = () => {
//         setProjectScreen(true);
//     }

//     const projectOff = () => {
//         setProjectScreen(false);
//     }

//     function redirectToLinkedIn() {
//         window.open("https://www.linkedin.com/in/dominico-mendes-42a8bb234/", "_blank");
//     }

//     function redirectToGitHub() {
//         window.open("https://github.com/dominico25", "_blank");
//     }
    
//     function redirectToResume() {
//         // Replace 'google_drive_pdf_link' with the actual public link of your PDF on Google Drive
//         const pdfUrl = 'https://drive.google.com/file/d/1CVVvSpksue8UhBitFFEo0-3dEMqTr2pY/view?usp=sharing';
        
//         const link = document.createElement("a");
//         link.href = pdfUrl;
//         link.target = "_blank";
//         link.download = "resume.pdf"; // Set the downloaded file name
//         link.click();
//     }
    

            
    
    
//     return (
//         <div id="container">
//             {!menuScreen && (
//                 <div>
//                     <header>
//                         <div id="main-header">
//                             <h1>Dominico Mendes</h1>
//                         </div>
//                         <aside>
//                             <button id = "about-button" onClick={() => { mainOff(); aboutOn(); projectOff(); }}>About</button>
//                             <button id = "project-button" onClick={() => { mainOff(); aboutOff(); projectOn(); }}>Projects</button>
//                         </aside>
//                         <aside>
//                             <button id = "linkedin-button" onClick = {redirectToLinkedIn}>LinkedIn</button>
//                             <button id = "github-button" onClick = {redirectToGitHub}>GitHub</button>
//                         </aside>
//                         <aside>
//                         <button id = "resume-button" onClick = {redirectToResume} >Resume</button>
//                         </aside>
//                         <aside>
//                             <button id = "menu-button" onClick = {menuOn}>&#9776;</button>
//                         </aside>
//                     </header>
//                     {/* {menuScreen && (
//                     <div id = "overlay"/>
//                     )} */}
                    
//                 </div>
//             )}
//             {mainScreen && (
//                 <div id = "main-content">
//                     <MainScreen/>
//                 </div>
//             )}
//             {menuScreen && (
//                 <div id="menu-content">
//                     <MenuScreen menuScreen = {menuScreen} menuOff={menuOff}/>
//                 </div>
//             )}
//             {aboutScreen && (
//                 <div id="about-content">
//                     <AboutScreen/>
//                 </div> 
//             )}
//             {projectScreen && (
//                 <div id="project-content">
//                     <ProjectScreen/>
//                 </div>
//             )}
//         </div>
//       );
//   }
  
  export default App;