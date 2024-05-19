import React, { useState } from "react"; // Import useState from React
import sign from "../assets/images/sign.svg";

const Header = () => {
  const [hover, setHover] = useState(false);
  const style = {
    sign: {
      height: "65px",
      transition: "transform 0.3s", // Add transition for smooth hover effect
    },
    signHover: {
      transform: "scale(1.1)", // Increase scale on hover
    },
  };

  const handleMouseEnter = () => {
    // Set state to add hover effect
    setHover(true);
  };

  const handleMouseLeave = () => {
    // Set state to remove hover effect
    setHover(false);
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg App-header">
        <div className="container">
          <a
            className="navbar-brand"
            href="#"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={sign}
              style={{
                ...style.sign,
                ...(hover && style.signHover), // Apply hover style if hover state is true
              }}
              alt="tarunpanchal"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#workdemo">
                  Explore Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Let's Connect ✌
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
