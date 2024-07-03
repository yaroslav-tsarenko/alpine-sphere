import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "", flagAF, afghanistan }) => {
  return (
    <div className={`country-elements-parent ${className}`}>
      <div className="country-elements">
        <img className="flagaf-icon" alt="" src={flagAF} />
        <div className="afghanistan">{afghanistan}</div>
      </div>
      <img className="arrow-down-icon9" alt="" src="/arrowdown1.svg" />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  flagAF: PropTypes.string,
  afghanistan: PropTypes.string,
};

export default FrameComponent3;
