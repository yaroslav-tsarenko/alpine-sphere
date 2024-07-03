import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundBorderShadow1.css";

const BackgroundBorderShadow1 = ({
  className = "",
  container,
  unitedStates,
  propLeft,
  propTop,
  propBoxShadow,
}) => {
  const backgroundBorderShadowStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
      boxShadow: propBoxShadow,
    };
  }, [propLeft, propTop, propBoxShadow]);

  return (
    <div
      className={`backgroundbordershadow ${className}`}
      style={backgroundBorderShadowStyle}
    >
      <div className="card-containers-parent">
        <div className="card-containers">
          <img className="container-icon" alt="" src={container} />
          <div className="destination-items">
            <div className="united-states">{unitedStates}</div>
          </div>
        </div>
        <div className="background1">
          <div className="free-data">FREE DATA</div>
        </div>
      </div>
      <div className="svg-wrapper">
        <img className="svg-icon" alt="" src="/svg.svg" />
      </div>
    </div>
  );
};

BackgroundBorderShadow1.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  unitedStates: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propBoxShadow: PropTypes.any,
};

export default BackgroundBorderShadow1;
