import ESimSteps1 from "./ESimSteps1";
import ESimSteps from "./ESimSteps";
import PropTypes from "prop-types";
import "./IntroESim.css";

const IntroESim = ({ className = "" }) => {
  return (
    <section className={`intro-e-sim ${className}`}>
      <div className="intro-container">
        <img
          className="intro-placeholder-icon"
          loading="lazy"
          alt=""
          src="/frame-1000006921@2x.png"
        />
        <div className="brand-intro">
          <div className="brand-name-intro">Brand Name Intro</div>
          <div className="login-buttons">
            <button className="button7">
              <div className="login1">eSIM</div>
            </button>
            <button className="button8">
              <div className="login2">SIM Card</div>
            </button>
          </div>
          <div className="device-check1">
            <ESimSteps1 />
            <ESimSteps
              image="/image-17@2x.png"
              buyADataPLan="Buy a Data PLan"
              selectADataPlanThatFitsYo="Select a data plan that fits your budget and needs."
            />
            <ESimSteps
              image="/image-18@2x.png"
              buyADataPLan="Install the eSIM"
              selectADataPlanThatFitsYo="Install eSIM through QR code or activation code."
            />
            <ESimSteps
              image="/image-19@2x.png"
              buyADataPLan="Activate Your Plan"
              selectADataPlanThatFitsYo="Arrive at your destination and connect to the local network."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

IntroESim.propTypes = {
  className: PropTypes.string,
};

export default IntroESim;
