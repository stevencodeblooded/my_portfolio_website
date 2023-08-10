import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Work/Project";
import Experience from "../components/Work/Experience";
import Internship from "../components/Work/Internship";
import Recognition from "../components/Work/Recognition";
import Testimonials from "../components/Work/Testimonials";
import Voluntary from "../components/Work/Voluntary";

const Work = () => {
  return (
    <div>
      <div className="navbar-margin">
        <Navbar />
      </div>
      <div className="work">
        <h1>Professional Endeavors</h1>
        <Project />
        <hr className="line" />
        <Experience />
        <hr className="line" />
        <Testimonials />
        <hr className="line" />
        <Internship />
        <hr className="line" />
        <Recognition />
        <hr className="line" />
        <Voluntary />
      </div>
      <Footer />
    </div>
  );
};

export default Work;
