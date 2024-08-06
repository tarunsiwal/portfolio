import React, { useState } from "react";
import "../../assets/css/slider.css"

import frontendIllustration from "../../assets/images/illustrations/frontend.png";
import backendIllustration from "../../assets/images/illustrations/backend.png";
import verContIllustration from "../../assets/images/illustrations/version cnt.png";
import uiuxIllustration from "../../assets/images/illustrations/uiux.png";

const SliderSection = () => {
  const [activeTab, setActiveTab] = useState("empathy");

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  
  const frontend = {
    html: require("../../assets/images/logos/html.svg").default,
    css: require("../../assets/images/logos/css.svg").default,
    js: require("../../assets/images/logos/js.svg").default,
    react: require("../../assets/images/logos/react.svg").default,
    bootstrap: require("../../assets/images/logos/bootstrap.svg").default,
    wordpress: require("../../assets/images/logos/wordpress.svg").default,
    hostinger: require("../../assets/images/logos/hostinger.svg").default,
  };
  const backend = {
    python: require("../../assets/images/logos/python.svg").default,
    django: require("../../assets/images/logos/django.svg").default,
    mysql: require("../../assets/images/logos/mysql.svg").default,
    mssql: require("../../assets/images/logos/mssql.svg").default,
    aws: require("../../assets/images/logos/aws.svg").default,
    postman: require("../../assets/images/logos/postman.svg").default,
  };
  const design = {
    figma: require("../../assets/images/logos/figma.svg").default,
    CanvasCaptureMediaStreamTrack:
      require("../../assets/images/logos/canva.svg").default,
  };
  const versionCTR = {
    github: require("../../assets/images/logos/github.svg").default,
    google: require("../../assets/images/logos/google.svg").default,
    msoffice: require("../../assets/images/logos/office.svg").default,
    gpt: require("../../assets/images/logos/gpt.svg").default,
    vscode: require("../../assets/images/logos/vscode.svg").default,

  };
  const runsvg = (image) => {
    return (
      <div className="row">
        <div className="col">
          <div className="logoImageContainer">
            {Object.entries(image).map(([key, value]) => (
              <img key={key} src={value} alt={key} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="toggle-container">
      <div className="tab">
        <button
          className={`tablinks ${activeTab === "empathy" ? "active" : ""}`}
          onClick={() => openCity("empathy")}
          id="defaultOpen"
        >
          <div className="col animateSlideUP illustrationCol">
          <img src={frontendIllustration} className="illustrationColIMG" />
        </div>
          <div className="text_1">
            <b>Frontend</b>
          </div>
        </button>
        <button
          className={`tablinks ${activeTab === "define" ? "active" : ""}`}
          onClick={() => openCity("define")}
        >
          <div className="col animateSlideUP illustrationCol">
          <img src={backendIllustration} className="illustrationColIMG" />
        </div>
          <div className="text_1">
            <b>Backend</b>
          </div>
        </button>
        <button
          className={`tablinks ${activeTab === "ideate" ? "active" : ""}`}
          onClick={() => openCity("ideate")}
        >
          <div className="col animateSlideUP illustrationCol">
          <img src={uiuxIllustration} className="illustrationColIMG" />
        </div>
          <div className="text_1">
            <b>Design</b>
          </div>
        </button>
        <button
          className={`tablinks ${activeTab === "prototype" ? "active" : ""}`}
          onClick={() => openCity("prototype")}
        >
          <div className="col animateSlideUP illustrationCol">
          <img src={verContIllustration} className="illustrationColIMG" />
        </div>
          <div className="text_1">
            <b>Other</b>
          </div>
        </button>
        
      </div>
      <div className="content-container">
        <div id="empathy" className={`tabcontent ${activeTab === "empathy" ? "active" : ""}`}>
          <div className="content">
          {runsvg(frontend)}
          </div>
        </div>
        <div id="define" className={`tabcontent ${activeTab === "define" ? "active" : ""}`}>
          <div className="content">
          {runsvg(backend)}
          </div>
        </div>
        <div id="ideate" className={`tabcontent ${activeTab === "ideate" ? "active" : ""}`}>
          <div className="content">
          {runsvg(design)}
          </div>
        </div>
        <div id="prototype" className={`tabcontent ${activeTab === "prototype" ? "active" : ""}`}>
          <div className="content">
          {runsvg(versionCTR)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
