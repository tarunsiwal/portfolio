import React from "react";
import Brandname from "../assets/images/brandname.png";
import Classroom from "../assets/images/classroom.png";

function workdemo() {
  const style = {
    span: {
      position: "absolute",
      zIndex: "0",
      fontSize: "9.4rem",
      fontFamily: "Oswald, sans-serif",
      lineHeight: "1",
      fontWeight: "bold",
      top: "-6px",
    },
    Macbook: {
      zIndex: "1",
    },
  };
  return (
    <section className="container xxl workdemo" id="workdemo">
      <div className="row">
        <div className="">
          <span className="sectionHeading">
          Dive into My Work<br />
            <span className="darktext">Explore What I've Created</span>
          </span>
        </div>
        <div className="row">
          <div className="card">
            <a
              href="https://www.canva.com/design/DAFVrs7IBBY/H39mFXEzeKMiu95r2gFeLA/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="card-img-top"
                src={Brandname}
                alt="Card image cap"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">RAGOPS</h5>
              <p className="card-text">
              Leverage AI in Various Ways. Work with Speach, Text, Documents with AI.
              </p>
              <a
                href="https://www.canva.com/design/DAFVrs7IBBY/H39mFXEzeKMiu95r2gFeLA/view"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                See in detail
              </a>
            </div>
          </div>
          <div className="card">
            <a
              href="https://www.canva.com/design/DAGEnzstn8Q/a4LX4L9WFSx3t75EMY1z9Q/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="card-img-top"
                src={Classroom}
                alt="Card image cap"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">CLASSROOM</h5>
              <p className="card-text">
              Enhance connectivity, classroom environment for student and teachers
              </p>
              <a
                href="https://www.canva.com/design/DAGEnzstn8Q/a4LX4L9WFSx3t75EMY1z9Q/view"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                See in detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default workdemo;
