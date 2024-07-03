import PropTypes from "prop-types";
import "./FeaturesList.css";

const FeaturesList = ({
  className = "",
  frame1000006908,
  balanceTracking,
  keepTrackOfYourCardBalanc,
}) => {
  return (
    <div className={`features-list1 ${className}`}>
      <img
        className="features-list-child"
        loading="lazy"
        alt=""
        src={frame1000006908}
      />
      <div className="balance-tracking">{balanceTracking}</div>
      <div className="keep-track-of">{keepTrackOfYourCardBalanc}</div>
    </div>
  );
};

FeaturesList.propTypes = {
  className: PropTypes.string,
  frame1000006908: PropTypes.string,
  balanceTracking: PropTypes.string,
  keepTrackOfYourCardBalanc: PropTypes.string,
};

export default FeaturesList;
