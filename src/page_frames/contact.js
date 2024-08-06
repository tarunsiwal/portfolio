import React from "react";
import Sendemail from "../components/Sendemail";

const contact = () => {
  return (
    <section id='contact' className='contact-container'>
      <div className='child1 col'></div>
      <div className='child2'>
        <div className="container" >
          <Sendemail />
        </div>
      </div>
    </section>
  );
};

export default contact;
