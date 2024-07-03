import ESimSteps1 from "./ESimSteps1";
import ESimSteps from "./ESimSteps";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`brand-intro-parent ${className}`}>
      <div className="brand-intro1">
        <div className="brand-name-intro1">Brand Name Intro</div>
        <div className="login-buttons1">
          <button className="button10">
            <div className="login4">eSIM</div>
          </button>
          <button className="button11">
            <div className="login5">SIM Card</div>
          </button>
        </div>
        <div className="device-steps">
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
      <img
        className="right-bottom-icon"
        loading="lazy"
        alt=""
        src="/frame-1000006921@2x.png"
      />
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
