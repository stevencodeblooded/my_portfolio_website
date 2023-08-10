import React from "react";

import Certificate from '../../assets/MS_CertificateOfProficiency.pdf'

const Recognition = () => {
  return (
    <div className="awards">
      <h2>Awards and Recognition</h2>
      <p>Certification in Computer Proficiency from Augur Computer College.</p>
      <ul className="awards-list">
        <li>Performed hardware troubleshooting for various computer systems at Augur Computer College.</li>
        <li>Conducted software installation and upgrades to ensure optimal performance of the college's computer infrastructure.</li>
        <li>Provided training and guidance to newer students who joined the college after completing the certification.</li>
      </ul>
      <div className="work-links">
        <a
          href={Certificate}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default Recognition;
