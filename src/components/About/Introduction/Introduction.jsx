import React from "react";

import './Introduction.css'

const Introduction = () => {
  return (
    <div className="intro-about">
      <div className="about-header">
        <h1 className="intro-h1" data-aos='zoom-in' data-aos-duration='1000'>About Me</h1>
        <p data-aos='fade-up' data-aos-duration='1000'>
          Greetings! I'm <span className="my-name">Steven Ochieng</span>, a passionate web developer with a proven track record in crafting dynamic and visually appealing digital experiences. My journey in technology began with an insatiable curiosity for innovation and a knack for problem-solving.
        </p>
        <p data-aos='fade-up'  data-aos-duration='2000'>
          With a solid foundation in Computer Science and a commitment to continuous learning, I bring a wealth of expertise to the realm of web development. Proficient in a diverse range of technologies, I specialize in creating responsive and user-friendly websites that seamlessly marry form and function.
        </p>
        <p data-aos='fade-up' data-aos-duration='3000' >
          Whether it's building robust web applications, optimizing user experiences, or troubleshooting complex issues, I thrive on transforming challenges into opportunities. Let's collaborate to bring your digital vision to life!
        </p>
      </div>
    </div>
  );
};

export default Introduction;
