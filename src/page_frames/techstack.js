import React from "react";
import SliderSection from "../components/UI/SliderSection"

const TechStack = () => {
  return (
    <section className="techstack white-bg">
      <div className="container ">
        <div className="row">
          <span className="sectionHeading w-50">
          My Digital Toolkit<br/>
          <span>Discover My Skills</span>
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
