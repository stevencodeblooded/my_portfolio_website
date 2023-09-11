import React from "react";

import Introduction from "../components/About/Introduction/Introduction";
import Passion from "../components/About/Passion/Passion";
import Skill from "../components/About/Skills/Skills";
import Education from "../components/About/Education/Education";
import Conclusion from "../components/About/Conclusion/Conclusion";

const About = () => {
  return (
    <div>
      <div className="navbar-margin">
      </div>
      
      <div className="about">
        <div className="top-margin">
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
    </div>
  );
};

export default About;
