import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FeaturesList1.css";

const FeaturesList1 = ({
  className = "",
  featureIcons,
  noRoamingFees,
  connectedToVerizonAndATTL,
  hawaiiAndAlaskaToAll50Sta,
  surprisedByYourPhoneBills,
  propWidth,
}) => {
  const featuresListStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`features-list ${className}`} style={featuresListStyle}>
      <img className="feature-icons" loading="lazy" alt="" src={featureIcons} />
      <div className="no-roaming-fees">{noRoamingFees}</div>
      <div className="connected-to-verizon-container">
        <p className="connected-to-verizon">{connectedToVerizonAndATTL}</p>
        <p className="hawaii-and-alaska">{hawaiiAndAlaskaToAll50Sta}</p>
        <p className="surprised-by-your">{surprisedByYourPhoneBills}</p>
      </div>
    </div>
  );
};

FeaturesList1.propTypes = {
  className: PropTypes.string,
  featureIcons: PropTypes.string,
  noRoamingFees: PropTypes.string,
  connectedToVerizonAndATTL: PropTypes.string,
  hawaiiAndAlaskaToAll50Sta: PropTypes.string,
  surprisedByYourPhoneBills: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FeaturesList1;
