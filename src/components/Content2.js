import PropTypes from "prop-types";
import "./Content2.css";

const Content2 = ({ className = "", yourCart }) => {
  return (
    <section className={`content2 ${className}`}>
      <header className="header7">
        <div className="lowest-price-ever-forever-dat-container">
          <div className="lowest-price-ever-container3">
            <span>
              {`Lowest Price Ever Forever! Data Plans in 130+ Destinations Starting froum Just %1.59. `}
              <span className="buy-now3">Buy Now</span>
              {` `}
            </span>
          </div>
          <img
            className="arrow-icon"
            loading="lazy"
            alt=""
            src="/arrow-1.svg"
          />
        </div>
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="mask-group-parent">
              <img
                className="mask-group-icon3"
                loading="lazy"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="alpinesphere3">AlpineSphere</div>
            </div>
            <div className="shop-plans-parent">
              <div className="shop-plans4">Shop Plans</div>
              <div className="shop-plans-links">
                <div className="resources4">Resources</div>
                <img
                  className="arrow-down-icon11"
                  alt=""
                  src="/arrowdown.svg"
                />
              </div>
              <div className="download3">Download</div>
              <div className="shop-plans-links1">
                <div className="explore4">Explore</div>
                <img
                  className="arrow-down-icon12"
                  alt=""
                  src="/arrowdown.svg"
                />
              </div>
            </div>
          </div>
          <div className="sign-up-group">
            <div className="sign-up3">Sign up</div>
            <button className="button13">
              <div className="login7">Login</div>
            </button>
            <div className="global-parent">
              <img
                className="global-icon3"
                loading="lazy"
                alt=""
                src="/global.svg"
              />
              <div className="en3">EN</div>
              <img className="arrow-down-icon13" alt="" src="/arrowdown.svg" />
            </div>
          </div>
        </div>
      </header>
      <div className="content-inner">
        <div className="cart-title-container-parent">
          <div className="cart-title-container">
            <h1 className="your-cart">{yourCart}</h1>
          </div>
          <b className="view-or-edit">View or edit your cart before checkout</b>
        </div>
      </div>
    </section>
  );
};

Content2.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
};

export default Content2;
