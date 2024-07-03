import PlanOptions from "./PlanOptions";
import PropTypes from "prop-types";
import "./Content1.css";

const Content1 = ({ className = "" }) => {
  return (
    <section className={`content1 ${className}`}>
      <div className="top-content">
        <img
          className="left-content-icon"
          loading="lazy"
          alt=""
          src="/frame-1000007094@2x.png"
        />
        <div className="plan-selection">
          <div className="flagjp-wrapper">
            <img
              className="flagjp-icon"
              loading="lazy"
              alt=""
              src="/flagjp.svg"
            />
          </div>
          <div className="japan-e-s-i-m">
            <h1 className="japan-esim">Japan eSIM</h1>
            <div className="travel-esim-package">Travel eSim package</div>
          </div>
        </div>
        <div className="top-content-child" />
        <h1 className="choose-data-plan">Choose data plan</h1>
        <div className="data-plans">
          <PlanOptions gB="1 GB" days="7 Days" uSD="9 USD" gB1="$9 / GB" />
          <PlanOptions
            gB="2 GB"
            days="15 Days"
            uSD="16 USD"
            gB1="$8 / GB"
            propLeft="426px"
            propTop="24px"
          />
          <PlanOptions
            gB="3 GB"
            days="30 Days"
            uSD="25 USD"
            gB1="$8.4 / GB"
            propLeft="852px"
            propTop="24px"
          />
          <div className="plan-options1">
            <div className="plan-options-inner">
              <div className="ellipse-parent">
                <div className="frame-inner" />
                <div className="frame-wrapper">
                  <div className="gb-parent">
                    <b className="gb2">5 GB</b>
                    <div className="g-b-days">
                      <div className="days1">30 Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="usd-parent">
              <b className="usd1">45 USD</b>
              <div className="g-b-after-u-s-d">
                <div className="gb3">$9 / GB</div>
              </div>
            </div>
          </div>
          <PlanOptions
            gB="10 GB"
            days="30 Days"
            uSD="75 USD"
            gB1="$7.5 / GB"
            propLeft="0px"
            propTop="408px"
          />
          <PlanOptions
            gB="20 GB"
            days="30 Days"
            uSD="120 USD"
            gB1="$6 / GB"
            propLeft="426px"
            propTop="408px"
          />
        </div>
        <div className="select-plan-btn">
          <button className="select-plan-wrapper">
            <div className="select-plan">Select Plan</div>
          </button>
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
