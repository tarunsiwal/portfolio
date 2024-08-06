import "./App.css";
import React, { useState, useEffect } from "react";
import Firstfold from "./page_frames/firstfold";
import Header from "./page_frames/header";
import Footer from "./page_frames/footer";
import About from "./page_frames/about";
import Workdemo from "./page_frames/workdemo";
import Techstack from "./page_frames/techstack"; // Adjusted import
import bg from "./assets/images/dot.png";
import Contact from "./page_frames/contact";
import Achievements from "./page_frames/achievements";
import Spinner from "./components/helper/spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { url: "/", text: "Home" },
    { url: "/about", text: "About" },
    { url: "/contact", text: "Contact" },
  ];

  const style = {
    width: "100%",
    height: "0",
    paddingBottom: "0",
    position: "relative",
    backgound: {
      backgroundImage: `url(${bg})`,
    },
  };
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="App">
          <Header title="tarun panchal" links={navLinks} />
          <Firstfold />
          <About />
          <Techstack />
          <Achievements />
          <Workdemo />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
