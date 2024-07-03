import FeaturesList1 from "./FeaturesList1";
import FeaturesList from "./FeaturesList";
import PropTypes from "prop-types";
import "./BottomContent.css";

const BottomContent = ({ className = "" }) => {
  return (
    <section className={`bottom-content ${className}`}>
      <img
        className="left-bottom-icon"
        loading="lazy"
        alt=""
        src="/frame-1000006902@2x.png"
      />
      <div className="save-your-us-travel-budget-wit-parent">
        <h2 className="save-your-us">
          Save Your US Travel Budget with Brand Name eSIM
        </h2>
        <div className="savings-features">
          <FeaturesList1
            featureIcons="/frame-1000006905.svg"
            noRoamingFees="No Roaming Fees"
            connectedToVerizonAndATTL={`Connected to Verizon and AT&T local networks from`}
            hawaiiAndAlaskaToAll50Sta="Hawaii and Alaska to all 50 states! Never be"
            surprisedByYourPhoneBills="surprised by your phone bills."
          />
          <FeaturesList
            frame1000006908="/frame-1000006908.svg"
            balanceTracking="Balance Tracking"
            keepTrackOfYourCardBalanc="Keep track of your card balances and transactions effortlessly, ensuring you always know how much gifting power you have left."
          />
          <FeaturesList1
            featureIcons="/frame-1000006907.svg"
            noRoamingFees="Keep in Touch and Stay Safe"
            connectedToVerizonAndATTL="No matter if it is a family vacation or business trip,"
            hawaiiAndAlaskaToAll50Sta="you can stay connected with loved ones and never"
            surprisedByYourPhoneBills="miss important messages."
            propWidth="unset"
          />
          <FeaturesList
            frame1000006908="/frame-1000006906.svg"
            balanceTracking="Instant Delivery Options"
            keepTrackOfYourCardBalanc="Send eSIM cards instantly to your loved ones' email or mobile devices, making last-minute gifting a breeze and ensuring timely surprises."
          />
        </div>
      </div>
    </section>
  );
};

BottomContent.propTypes = {
  className: PropTypes.string,
};

export default BottomContent;
