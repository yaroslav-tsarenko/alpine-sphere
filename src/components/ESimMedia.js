import PropTypes from "prop-types";
import "./ESimMedia.css";

const ESimMedia = ({ className = "" }) => {
  return (
    <section className={`e-sim-media ${className}`}>
      <div className="media-container">
        <div className="esim-media">eSIM Media</div>
        <h1 className="media-spotlight-on">
          Media Spotlight on Brand Name eSIM
        </h1>
        <div className="media-links">
          <img
            className="link-neteasepng"
            loading="lazy"
            alt=""
            src="/link--neteasepng@2x.png"
          />
          <img
            className="link-muopng"
            loading="lazy"
            alt=""
            src="/link--muopng@2x.png"
          />
          <img
            className="link-androidpolicepng"
            loading="lazy"
            alt=""
            src="/link--androidpolicepng@2x.png"
          />
          <img
            className="link-pocketlintpng"
            loading="lazy"
            alt=""
            src="/link--pocketlintpng@2x.png"
          />
          <img
            className="link-iopng"
            loading="lazy"
            alt=""
            src="/link--iopng@2x.png"
          />
          <img
            className="link-baidupng"
            loading="lazy"
            alt=""
            src="/link--baidupng@2x.png"
          />
          <img
            className="link-zhonghuapng"
            loading="lazy"
            alt=""
            src="/link--zhonghuapng@2x.png"
          />
          <img
            className="link-sohupng"
            loading="lazy"
            alt=""
            src="/link--sohupng@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

ESimMedia.propTypes = {
  className: PropTypes.string,
};

export default ESimMedia;
