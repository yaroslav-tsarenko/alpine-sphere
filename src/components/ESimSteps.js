import PropTypes from "prop-types";
import "./ESimSteps.css";

const ESimSteps = ({
  className = "",
  image,
  buyADataPLan,
  selectADataPlanThatFitsYo,
}) => {
  return (
    <div className={`e-sim-steps1 ${className}`}>
      <div className="image-parent">
        <img className="image-icon17" alt="" src={image} />
        <div className="buy-a-data-plan-parent">
          <div className="buy-a-data">{buyADataPLan}</div>
          <div className="select-a-data">{selectADataPlanThatFitsYo}</div>
        </div>
      </div>
    </div>
  );
};

ESimSteps.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  buyADataPLan: PropTypes.string,
  selectADataPlanThatFitsYo: PropTypes.string,
};

export default ESimSteps;
