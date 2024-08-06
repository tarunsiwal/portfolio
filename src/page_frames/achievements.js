import React from "react";
import img from "../assets/images/artificial-intelligence-fundamentals.png";
import AchievementCard from "../components/UI/AchievementCard";
const Achievements = () => {
    const carddata={
    heading:'Certified AI Practitioner - AI Concepts, IBM Watson Studio, and Ethical AI',
    para:`This credential earner demonstrates comprehensive knowledge
    of artificial intelligence (AI) concepts, including natural
    language processing, computer vision, machine learning, deep
    learning, chatbots, and neural networks. They have an
    in-depth understanding of ethical AI and its applications.
    Additionally, the individual is proficient in running AI
    models using IBM Watson Studio. The earner is well-versed in
    the job outlook for AI-related fields and is familiar with
    the skills required for success in various roles within the
    domain.`,
    img:img,}
  return (
    <section className="achievements white-bg" id="achievements">
      <div className="container">
        <div className="row">
          <span className="sectionHeading w-50">
            Path to Excellence
            <br />
            <span>Highlighted Achievements</span>
          </span>
        </div>
          <AchievementCard 
          img={carddata.img}
          heading={carddata.heading}
          para={carddata.para}
          />
      </div>
    </section>
  );
};

export default Achievements;
