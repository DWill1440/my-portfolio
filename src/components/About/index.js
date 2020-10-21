import React from "react";
import {headshot} from "../../assets/images/headshot.png";
import './About.css';
function About() {
  return (
    <section className="About" id="about-me">
      <div className="About-header">
        <div className="About-title">
        <image src={headshot} alt="headshot" className="About-headshot" style={{ width: "100%" }} />
          <h2>About Me</h2>
        </div>        
      </div>
      <div className="About-content">
        <p>
          Military Service Member pivoting into the world of web development.
          <br />
          Determined to build dynamic websites and applications.
        </p>
      </div>
    </section>
  );
}

export default About;
