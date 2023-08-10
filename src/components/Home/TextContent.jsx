import React from "react";
import { Link } from "react-router-dom";

const TextContent = () => {
  return (
    <div className="text-content">
      <p>
        I'm a lifelong learner, always seeking opportunities to expand my
        knowledge and skills in the fast-paced tech industry. I aspire to contribute to cutting-edge projects that drive innovation
        and push the boundaries of technology.
      </p>

      <Link to="/about" className="aboutMe-link">
        Know More About Me
      </Link>
    </div>
  );
};

export default TextContent;
