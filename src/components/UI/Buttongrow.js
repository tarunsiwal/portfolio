import React from "react";
import arrow from "../../assets/images/arroww.png"

const buttongrow = () => {

  return (
    <div className="workTogether">
      <a href="#contact" className="workTogether-link">
        <span className="workTogether__text-short">
          <img className="w-100" src={arrow} />
        </span>
        <span className="workTogether__text-long">
          <p>Let's Work</p> 
          <strong>Toghether</strong>
        </span>
      </a>
      
    </div>
  );
};

export default buttongrow;
