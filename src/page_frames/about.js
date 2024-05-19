import React from "react";
import bgStars from "../assets/images/bgstars2.png";
import astronaut from "../assets/images/as1.png";

const about = () => {
  const style = {
    backgroundImage: `url(${bgStars})`,
  };

  return (
    <section className="container-xxl about" style={style}>
      <div className="row">
        <div className="col d-flex p-5 mt-5 mb-5">
          <p>
            Hi!🖐 I am Tarun, An India based Software Developer dedicated to
            bringing creative visions to life through digital design. With a
            passion for Technology and Internet, I specialize in Website
            development and designing.
          </p>
        </div>
        <div className="col aboutTXT">
          <img src={astronaut} className="avatar" />  
        </div>
      </div>
    </section>
  );
};

export default about;
