import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <div className={`header6 ${className}`}>
      <div className="price-banner">
        <div className="lowest-price-ever-container2">
          <span>
            {`Lowest Price Ever Forever! Data Plans in 130+ Destinations Starting froum Just %1.59. `}
            <span className="buy-now2">Buy Now</span>
            {` `}
          </span>
        </div>
        <img className="price-banner-child" alt="" src="/arrow-1.svg" />
      </div>
      <div className="navigation">
        <div className="plan-navigation">
          <div className="alpine-logo1">
            <img className="mask-group-icon2" alt="" src="/mask-group@2x.png" />
            <div className="alpinesphere2">AlpineSphere</div>
          </div>
          <div className="plan-links">
            <div className="shop-plans3">Shop Plans</div>
            <div className="plan-names">
              <div className="resources3">Resources</div>
              <img className="arrow-down-icon6" alt="" src="/arrowdown.svg" />
            </div>
            <div className="download2">Download</div>
            <div className="plan-names1">
              <div className="explore3">Explore</div>
              <img className="arrow-down-icon7" alt="" src="/arrowdown.svg" />
            </div>
          </div>
        </div>
        <div className="auth">
          <div className="sign-up2">Sign up</div>
          <div className="button12">
            <div className="login6">Login</div>
          </div>
          <div className="language1">
            <img className="global-icon2" alt="" src="/global.svg" />
            <div className="en2">EN</div>
            <img className="arrow-down-icon8" alt="" src="/arrowdown.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
