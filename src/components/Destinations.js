import BackgroundBorderShadow1 from "./BackgroundBorderShadow1";
import BackgroundBorderShadow from "./BackgroundBorderShadow";
import PropTypes from "prop-types";
import "./Destinations.css";

const Destinations = ({ className = "" }) => {
  return (
    <section className={`destinations ${className}`}>
      <div className="destinations-grid">
        <div className="destinations-container">
          <form className="background-containers">
            <button className="background3">
              <img className="container-icon2" alt="" src="/container@2x.png" />
              <div className="free-data-for">Free Data for Newbies</div>
            </button>
            <div className="background4">
              <img
                className="container-icon3"
                alt=""
                src="/container-1@2x.png"
              />
              <div className="popular-destinations">Popular Destinations</div>
            </div>
            <div className="background5">
              <img
                className="container-icon4"
                alt=""
                src="/container-2@2x.png"
              />
              <div className="all-130-destinations">All 130+ Destinations</div>
            </div>
          </form>
        </div>
        <div className="destination-cards">
          <BackgroundBorderShadow1
            container="/container-3@2x.png"
            unitedStates="United States"
          />
          <BackgroundBorderShadow1
            container="/container-4@2x.png"
            unitedStates="France"
            propLeft="417px"
            propTop="40px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-5@2x.png"
            unitedStates="Australia"
            propLeft="707px"
            propTop="40px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-6@2x.png"
            unitedStates="Switzerland"
            propLeft="997px"
            propTop="40px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-7@2x.png"
            unitedStates="Germany"
            propLeft="1287px"
            propTop="40px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-8@2x.png"
            unitedStates="Thailand"
            propLeft="127px"
            propTop="160px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-9@2x.png"
            unitedStates="China"
            propLeft="417px"
            propTop="160px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-10@2x.png"
            unitedStates="Japan"
            propLeft="707px"
            propTop="160px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-11@2x.png"
            unitedStates="Iceland"
            propLeft="997px"
            propTop="160px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-12@2x.png"
            unitedStates="Spain"
            propLeft="1287px"
            propTop="160px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-13@2x.png"
            unitedStates="Singapore"
            propLeft="127px"
            propTop="280px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-14@2x.png"
            unitedStates="Denmark"
            propLeft="417px"
            propTop="280px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-15@2x.png"
            unitedStates="Italy"
            propLeft="707px"
            propTop="280px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-16@2x.png"
            unitedStates="Portugal"
            propLeft="997px"
            propTop="280px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow
            container="/container-17@2x.png"
            unitedKingdom="United Kingdom"
          />
          <BackgroundBorderShadow1
            container="/container-18@2x.png"
            unitedStates="Poland"
            propLeft="127px"
            propTop="400px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow1
            container="/container-19@2x.png"
            unitedStates="Belgium"
            propLeft="417px"
            propTop="400px"
            propBoxShadow="unset"
          />
          <BackgroundBorderShadow
            container="/container-20@2x.png"
            unitedKingdom="South Korea"
            propTop="400px"
            propLeft="707px"
          />
          <BackgroundBorderShadow1
            container="/container-21@2x.png"
            unitedStates="Norway"
            propLeft="997px"
            propTop="400px"
            propBoxShadow="0px 0px 21px 8px rgba(235, 235, 235, 0.42)"
          />
          <BackgroundBorderShadow1
            container="/container-22@2x.png"
            unitedStates="Malaysia"
            propLeft="1287px"
            propTop="400px"
            propBoxShadow="0px 0px 21px 8px rgba(235, 235, 235, 0.42)"
          />
          <div className="show-all">
            <div className="show-all-button">
              <div className="show-all-130">Show All 130+ Desstinations</div>
            </div>
            <img className="arrow-right-icon" alt="" src="/arrowright.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

Destinations.propTypes = {
  className: PropTypes.string,
};

export default Destinations;
