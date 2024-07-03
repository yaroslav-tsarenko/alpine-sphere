import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PlanOptions.css";

const PlanOptions = ({
  className = "",
  gB,
  days,
  uSD,
  gB1,
  propLeft,
  propTop,
}) => {
  const planOptionsStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`plan-options ${className}`} style={planOptionsStyle}>
      <div className="plan-details">
        <div className="data-g-b" />
        <b className="gb">{gB}</b>
      </div>
      <div className="days-u-s-d">
        <div className="days">{days}</div>
      </div>
      <div className="u-s-d-parent">
        <div className="u-s-d-values-parent">
          <b className="usd">{uSD}</b>
          <div className="g-b-parent">
            <div className="gb1">{gB1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlanOptions.propTypes = {
  className: PropTypes.string,
  gB: PropTypes.string,
  days: PropTypes.string,
  uSD: PropTypes.string,
  gB1: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default PlanOptions;
