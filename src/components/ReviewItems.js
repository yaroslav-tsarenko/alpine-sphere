import PropTypes from "prop-types";
import "./ReviewItems.css";

const ReviewItems = ({
  className = "",
  ellipse213,
  millieB,
  texasUSA,
  exceptionalValueWithVeriz,
}) => {
  return (
    <div className={`review-items ${className}`}>
      <img
        className="review-items-child"
        loading="lazy"
        alt=""
        src={ellipse213}
      />
      <div className="reviewer-info">
        <h3 className="millie-b">{millieB}</h3>
        <div className="texas-usa">{texasUSA}</div>
      </div>
      <div className="review-content">
        <h1 className="h1">“</h1>
        <div className="exceptional-value-with">
          {exceptionalValueWithVeriz}
        </div>
      </div>
    </div>
  );
};

ReviewItems.propTypes = {
  className: PropTypes.string,
  ellipse213: PropTypes.string,
  millieB: PropTypes.string,
  texasUSA: PropTypes.string,
  exceptionalValueWithVeriz: PropTypes.string,
};

export default ReviewItems;
