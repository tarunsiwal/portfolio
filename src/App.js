import "./App.css";
// import "./assets/css/animations.css"
import { Component } from "react";
import Firstfold from "./page_frames/firstfold";
import Header from "./page_frames/header";
import Footer from "./page_frames/footer";
import About from "./page_frames/about";
import Workdemo from "./page_frames/workdemo"
import Techstack from "./page_frames/techstack"; // Adjusted import
import bg from "./assets/images/dot.png"
import BackgroundImage from "./components/UI/BackgroundImage";
import Contact from "./page_frames/contact"

function App() {
  const navLinks = [
    { url: "/", text: "Home" },
    { url: "/about", text: "About" },
    { url: "/contact", text: "Contact" },
  ];
  const style ={
    width:'100%',
    height:'0',
    paddingBottom:'0',
    position:'relative',
    backgound:{
      backgroundImage: `url(${bg})`,
    },
  }
  return (
    <div className="App" >
      <Header title="tarun panchal" links={navLinks} />
      <Firstfold/>
      <About />
      <Techstack/>
      <Workdemo/>
      <Contact/>
      <Footer />
      {/*  
      <div style={style}>
        <iframe 
        src="https://giphy.com/embed/2xDcf5tkCRKqqE15JM" 
        width="100%" 
        height="100%" 
        style={{ position: 'absolute' }}
        frameBorder="0" 
        className="giphy-embed" 
        allowFullScreen>
        </iframe>
      </div>
      */}
      {/* <a href="#top" className="gototop"><i class="fa-solid fa-chevron-up"></i></a> */}
      

    </div>
  );
}

export default App;
