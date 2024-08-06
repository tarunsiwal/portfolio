import React, { useState, useEffect } from "react";
import healthcare from "../assets/images/mobilemockup.01.png";
import desktopmockup from "../assets/images/desktopmockup.02.png";

function WorkDemo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="container xxl workdemo" id="workdemo">
      <div className="row">
        <div className={`col-12 ${isMobile ? "" : "sticky-heading"}`}>
          <span className="sectionHeading">
            Dive into My Work
            <br />
            <span className="darktext">Explore What I've Created</span>
          </span>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card">
              <a
                href="https://www.canva.com/design/DAFVrs7IBBY/H39mFXEzeKMiu95r2gFeLA/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="card-img-top"
                  src="/portfolio/static/media/brandname.ff62730ac2ab8bc98e4a.png"
                  alt="Ragops banner"
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">RAGOPS</h5>
                <p class="card-text">
                  Leverage AI in Various Ways. Work with Speech, Text, Documents
                  with AI on a single plateform.
                </p>
                <a
                  href="https://www.canva.com/design/DAFVrs7IBBY/H39mFXEzeKMiu95r2gFeLA/view"
                  class="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See in detail
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card">
              <a
                href="https://www.canva.com/design/DAGEnzstn8Q/a4LX4L9WFSx3t75EMY1z9Q/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="card-img-top"
                  src="/portfolio/static/media/classroom.a70dd30545cfaa2ef50d.png"
                  alt="Classroom banner"
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">CLASSROOM</h5>
                <p class="card-text">
                  Enhance connectivity, classroom environment for students and
                  teachers
                </p>
                <a
                  href="https://www.canva.com/design/DAGEnzstn8Q/a4LX4L9WFSx3t75EMY1z9Q/view"
                  class="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See in detail
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card">
              <a
                href="https://www.figma.com/proto/R5jgsaFo09SkEi8nS53fKP/Healthcare-Mobile-Mockup?page-id=0%3A1&node-id=27-407&starting-point-node-id=27%3A407&t=4s2lDmB0EHsofoN9-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="card-img-top" src={healthcare} alt="healthcare" />
              </a>
              <div class="card-body">
                <h5 class="card-title">Healthcare</h5>
                <p class="card-text">
                  Explore the mobile view design in Figma for a health care
                  mobile app markup.
                </p>
                <a
                  href="https://www.figma.com/proto/R5jgsaFo09SkEi8nS53fKP/Healthcare-Mobile-Mockup?page-id=0%3A1&node-id=27-407&starting-point-node-id=27%3A407&t=4s2lDmB0EHsofoN9-1"
                  class="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View design
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card">
              <a
                href="https://www.figma.com/proto/arxKmK48VMPUJWzeAE7ARj/Skin-clinic?page-id=0%3A1&node-id=1-6&t=zLXXN5NY7taeuuAf-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="card-img-top"
                  src={desktopmockup}
                  alt="Skin clinic"
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">Skin clinic</h5>
                <p class="card-text">
                  See the Desktop view design in Figma for a Skin Clinik website
                  markup.
                </p>
                <a
                  href="https://www.figma.com/proto/arxKmK48VMPUJWzeAE7ARj/Skin-clinic?page-id=0%3A1&node-id=1-6&t=zLXXN5NY7taeuuAf-1"
                  class="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View design
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkDemo;
