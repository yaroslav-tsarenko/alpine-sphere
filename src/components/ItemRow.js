import PropTypes from "prop-types";
import "./ItemRow.css";

const ItemRow = ({ className = "" }) => {
  return (
    <div className={`item-row ${className}`}>
      <div className="row-separator" />
      <div className="property-1card-1-parent">
        <img
          className="property-1card-1"
          alt=""
          src="/property-1card-1@2x.png"
        />
        <div className="esim-parent">
          <b className="esim">eSIM</b>
          <b className="worth-usd-400">Worth USD $400</b>
        </div>
        <div className="frame-parent3">
          <div className="parent">
            <b className="b3">$120.00</b>
            <b className="credits">12 Credits</b>
          </div>
          <div className="frame-parent4">
            <div className="frame-parent5">
              <div className="icon-plus-wrapper">
                <img className="icon-plus" alt="" src="/iconplus.svg" />
              </div>
              <b className="b4">3</b>
              <input className="frame-input" type="checkbox" />
            </div>
            <div className="hourly-parent">
              <b className="hourly">Hourly</b>
              <div className="frame-wrapper1">
                <img
                  className="frame-icon"
                  alt=""
                  src="/hourly-placeholder.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <b className="b5">$120.00</b>
      </div>
    </div>
  );
};

ItemRow.propTypes = {
  className: PropTypes.string,
};

export default ItemRow;
