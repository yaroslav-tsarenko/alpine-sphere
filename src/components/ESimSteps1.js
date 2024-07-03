import PropTypes from "prop-types";
import "./ESimSteps1.css";

const ESimSteps1 = ({ className = "" }) => {
  return (
    <div className={`e-sim-steps ${className}`}>
      <div className="step-items">
        <img
          className="image-icon16"
          loading="lazy"
          alt=""
          src="/image-16@2x.png"
        />
        <div className="step-descriptions">
          <div className="device-check">Device Check</div>
          <div className="check-if-your">
            Check If your devices are eSIM compatible
          </div>
        </div>
      </div>
      <img
        className="arrow-circle-right-icon"
        loading="lazy"
        alt=""
        src="/arrowcircleright.svg"
      />
    </div>
  );
};

ESimSteps1.propTypes = {
  className: PropTypes.string,
};

export default ESimSteps1;
