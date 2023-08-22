import React from "react";

import Recommendation from '../../../assets/Recommendation Letter.pdf'

import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <p>
        Recommendation Letter from Kenyaweb.com Limited (Available in PDF
        format).
      </p>
      <div className="work-links">
        <a 
          href={Recommendation}
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Recommendation
        </a>
      </div>
    </div>
  );
};

export default Testimonials;