import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Introduction from "../components/About/Introduction";
import Passion from "../components/About/Passion";
import Skill from "../components/About/Skill";
import Education from "../components/About/Education";
import Conclusion from "../components/About/Conclusion";

const About = () => {
  return (
    <div>
      <div className="navbar-margin">
        <Navbar />
      </div>
      <div className="about">
        <div className="highlight-hover">
          <Introduction />
          <hr className="line" />
          <Passion />
          <hr className="line" />
          <Skill />
          <hr className="line" />
          <Education />
          <hr className="line" />
          <Conclusion />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
