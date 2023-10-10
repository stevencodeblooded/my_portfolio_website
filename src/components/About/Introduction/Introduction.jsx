import React from "react";

import './Introduction.css'

const Introduction = () => {
  return (
    <div className="intro-about">
      <div className="about-header">
        <h1 className="intro-h1" data-aos='zoom-in' data-aos-duration='1000'>About Me</h1>
        <p data-aos='fade-up' data-aos-duration='3000'>
          Hello there! I'm Steven Ochieng, a Computer Science undergraduate at
          Pwani University, Kilifi. My journey into the world of technology has
          been nothing short of exhilarating, and it all started with my
          unyielding passion for innovation and problem-solving.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
