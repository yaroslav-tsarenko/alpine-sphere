import PropTypes from "prop-types";
import "./PartnersReviews.css";

const PartnersReviews = ({ className = "" }) => {
  return (
    <section className={`partners-reviews ${className}`}>
      <div className="brand-name-esim-partners-parent">
        <div className="brand-name-esim">Brand name eSIM Partners</div>
        <h1 className="trusted-major-mobile">Trusted Major Mobile Carriers</h1>
        <div className="partner-logos">
          <img
            className="image-icon"
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
          <img
            className="image-icon1"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <img
            className="image-icon2"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <img
            className="image-icon3"
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
          <img
            className="image-icon4"
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
          <img className="image-icon5" alt="" src="/image-5@2x.png" />
          <img className="image-icon6" alt="" src="/image-6@2x.png" />
          <img className="image-icon7" alt="" src="/image-7@2x.png" />
          <img
            className="image-icon8"
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
          <img
            className="image-icon9"
            loading="lazy"
            alt=""
            src="/image-9@2x.png"
          />
          <img
            className="image-icon10"
            loading="lazy"
            alt=""
            src="/image-10@2x.png"
          />
          <img
            className="image-icon11"
            loading="lazy"
            alt=""
            src="/image-11@2x.png"
          />
          <img className="image-icon12" alt="" src="/image-12@2x.png" />
          <img className="image-icon13" alt="" src="/image-13@2x.png" />
          <img className="image-icon14" alt="" src="/image-14@2x.png" />
          <img className="image-icon15" alt="" src="/image-15@2x.png" />
        </div>
      </div>
    </section>
  );
};

PartnersReviews.propTypes = {
  className: PropTypes.string,
};

export default PartnersReviews;
