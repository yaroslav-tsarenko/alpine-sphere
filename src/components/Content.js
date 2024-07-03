import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="background">
        <div className="dollar-store-for-travel-data-a-parent">
          <h1 className="dollar-store-for-container">
            <p className="dollar-store-for">Dollar Store for Travel Data</p>
            <p className="always-wholesale-prices">Always Wholesale Prices</p>
          </h1>
          <div className="double-the-options">
            Double the Options, Triple the Savings: Wholesale data plans for
            both eSims and Physical SIMs.
          </div>
          <div className="search-bar">
            <img
              className="search-normal-icon"
              alt=""
              src="/searchnormal.svg"
            />
            <input
              className="search-a-country"
              placeholder="Search a country or region"
              type="text"
            />
          </div>
          <div className="location-buttons">
            <button className="local-button">
              <div className="local">Local</div>
            </button>
            <div className="regional">Regional</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
