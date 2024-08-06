import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AstronautSelfie from "../assets/images/astronaut-selfie.png";
import Downloadresume from "./Downloadresume";
import SocialMedia from "../components/UI/SocialMedia";

export const EmailForm = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState(null); // Initialize to null

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "mrtarunpanchal369",
        "template_18u0zba",
        form.current,
        "Gr2gJGCx6Zb1GwFoq"
      )
      .then(
        () => {
          setAlertMessage("success");
          console.log("SUCCESS!");
        },
        (error) => {
          setAlertMessage("error");
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    let timer;
    if (alertMessage) {
      timer = setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [alertMessage]);

  return (
    <div className="contact-form-container">
      <div className="row">
        <div className="col dark">
          <span className="sectionHeading mb-4">
            Let's Get in Touch
            <br />
            <span>Reach Out to Me</span>
          </span>
          <img src={AstronautSelfie} alt="Astronaut Selfie" />
        </div>
        <div className="col">
          {alertMessage === "success" && (
            <p class="alert alert-success" role="alert">
              Email sent successfully!
            </p>
          )}
          {alertMessage === "error" && (
            <p class="alert alert-danger" role="alert">
              Failed to send email. Please try again later.
            </p>
          )}

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="formfieldContainer">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="user_name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="formfieldContainer">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="user_email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="formfieldContainer">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                name="from_name"
                placeholder="Enter your Subject"
                required
              />
            </div>
            <div className="formfieldContainer">
              <label className="form-label">Message</label>
              <br />
              <textarea
                name="message"
                className="form-control"
                placeholder="Enter your message"
                required
              />
              <br />
            </div>
            <div className="d-flex button-container">
              <input
                className="btn btn-primary"
                type="submit"
                value="Send Email"
              />
              <Downloadresume />
            </div>
            <SocialMedia />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
// Add this text as a form line

// Cd love if you reached out to me. Even if it's just to
// say Dont hesitate! Drop me a line and ill got
// back to you ASAP!
