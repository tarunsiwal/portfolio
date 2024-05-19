import React from "react";
import SliderSection from "../components/UI/SliderSection"

const TechStack = () => {
  return (
    <section className="techstack">
      <div className="container ">
        <div className="row">
          <span className="sectionHeading">
          <span>Tech Stack</span><br/>
            See what's in it 
          </span>
        </div>
        <div className="row">
          <SliderSection />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
