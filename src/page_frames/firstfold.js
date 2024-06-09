import React from "react";
import AutoTypeText from "../components/AutoTypeText";
import BackgroundImage from "../components/UI/BackgroundImage";
import bg from "../assets/images/dot.png";
import Buttongrow from "../components/UI/Buttongrow";

const FirstFold = () => {

  return (
    <div>
      {/* <BackgroundVideo videoId="He1hb0ef550" /> */}
      <BackgroundImage imageURL={bg} alt={"stars"} />
      <section className="container firstfold">
        <div className="row d-flex">
          {/* Apply styles directly in the JSX */}
          <h1 className="multi-color-text">
            <AutoTypeText />
          </h1>
          <p>I'm Tarun Panchal</p>
          <div className="d-flex">
            <span>WEB DEVELOPER</span>
            <Buttongrow />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstFold;
