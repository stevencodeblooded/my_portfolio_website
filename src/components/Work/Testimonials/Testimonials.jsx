import Recommendation from '../../../assets/Recommendation Letter.pdf'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="container">
      <div className="testimonials" data-aos='fade-up' data-aos-duration='2000'>
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
    </div>
  );
};

export default Testimonials;
