import React from "react";

import Navbar from '../components/Navbar/Navbar'
import Footer from "../container/Footer";
import Project from "../components/Work/Project/Project";
import Experience from "../components/Work/Experience/Experience";
import Internship from "../components/Work/Internship/Internship";
import Recognition from "../components/Work/Recognition/Recognition";
import Testimonials from "../components/Work/Testimonials/Testimonials";
import Voluntary from "../components/Work/Voluntary/Voluntary";

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
