import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header className={`header-wrapper ${className}`}>
      <div className="header5">
        <div className="lowest-price-ever-forever-dat-group">
          <div className="lowest-price-ever-container1">
            <span>
              {`Lowest Price Ever Forever! Data Plans in 130+ Destinations Starting froum Just %1.59. `}
              <span className="buy-now1">Buy Now</span>
              {` `}
            </span>
          </div>
          <img
            className="frame-item"
            loading="lazy"
            alt=""
            src="/arrow-1.svg"
          />
        </div>
        <div className="plans-header">
          <div className="alpine-header">
            <div className="alpine-logo">
              <img
                className="mask-group-icon1"
                loading="lazy"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="alpinesphere1">AlpineSphere</div>
            </div>
            <div className="shop-download">
              <div className="shop-plans2">Shop Plans</div>
              <div className="resources-parent">
                <div className="resources2">Resources</div>
                <img className="arrow-down-icon3" alt="" src="/arrowdown.svg" />
              </div>
              <div className="download1">Download</div>
              <div className="explore-parent">
                <div className="explore1">Explore</div>
                <img className="arrow-down-icon4" alt="" src="/arrowdown.svg" />
              </div>
            </div>
          </div>
          <div className="sign-up-parent">
            <div className="sign-up1">Sign up</div>
            <button className="button9">
              <div className="login3">Login</div>
            </button>
            <div className="language">
              <img
                className="global-icon1"
                loading="lazy"
                alt=""
                src="/global.svg"
              />
              <div className="en1">EN</div>
              <img
                className="arrow-down-icon5"
                loading="lazy"
                alt=""
                src="/arrowdown.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
