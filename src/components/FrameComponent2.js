import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  flagBA,
  bosniaAndHerzegovina,
  propRowGap,
  propGap,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      rowGap: propRowGap,
      gap: propGap,
    };
  }, [propRowGap, propGap]);

  return (
    <div className={`frame-container ${className}`} style={frameDivStyle}>
      <div className="flagba-parent">
        <img className="flagba-icon" alt="" src={flagBA} />
        <div className="bosnia-and-herzegovina">{bosniaAndHerzegovina}</div>
      </div>
      <img className="arrow-down-icon10" alt="" src="/arrowdown1.svg" />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  flagBA: PropTypes.string,
  bosniaAndHerzegovina: PropTypes.string,

  /** Style props */
  propRowGap: PropTypes.any,
  propGap: PropTypes.any,
};

export default FrameComponent2;
