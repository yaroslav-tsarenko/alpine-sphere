import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundBorderShadow.css";

const BackgroundBorderShadow = ({
  className = "",
  container,
  unitedKingdom,
  propTop,
  propLeft,
}) => {
  const backgroundBorderShadow1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={`backgroundbordershadow1 ${className}`}
      style={backgroundBorderShadow1Style}
    >
      <div className="container-parent">
        <img className="container-icon1" alt="" src={container} />
        <div className="united-kingdom-wrapper">
          <div className="united-kingdom">{unitedKingdom}</div>
        </div>
      </div>
      <div className="background-parent">
        <div className="background2">
          <div className="free-data1">FREE DATA</div>
        </div>
        <div className="offer-svgs">
          <img className="svg-icon1" alt="" src="/svg.svg" />
        </div>
      </div>
    </div>
  );
};

BackgroundBorderShadow.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  unitedKingdom: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default BackgroundBorderShadow;
