import React from "react";

import profile from '../../assets/profile.png'

const Introduction = () => {
  return (
    <div className="intro">
      <p>
        Hello! I'm <span className="span-title">Steven Ochieng</span>, a
        passionate Computer Science undergraduate. I thrive on{" "}
        <span className="span-title">innovation </span> and{" "}
        <span className="span-title">problem-solving </span>
        in the tech world.
      </p>
          
      <img src={profile} alt="profile-pic" className="profile-pic" />  

    </div>
  );
};

export default Introduction;
