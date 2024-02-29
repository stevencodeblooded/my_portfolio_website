import React from "react";

import Project from "../components/Work/Project/Project";
import Experience from "../components/Work/Experience/Experience";
import Internship from "../components/Work/Internship/Internship";
import Recognition from "../components/Work/Recognition/Recognition";
import Testimonials from "../components/Work/Testimonials/Testimonials";

const Work = () => {
  return (
    <div>
      <div className="navbar-margin">
      </div>

      <div className="work">
        <div className="top-margin">
          <h1 data-aos='zoom-in' data-aos-duration='1000'>Professional Endeavors</h1>
          <Project />
          <hr className="line" />
          <Internship />
          <hr className="line" />
          <Experience />
          <hr className="line" />
          <Testimonials />
          <hr className="line" />
          <Recognition />
        </div>
      </div>
    </div>
  );
};

export default Work;
