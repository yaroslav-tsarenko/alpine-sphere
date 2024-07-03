import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({
  className = "",
  image,
  image1,
  image2,
  image3,
  image4,
  paymentIcons,
  paymentIcons2,
  paymentIcons3,
  paymentIcons5,
  paymentIcons7,
  paymentIcons8,
  paymentIcons9,
}) => {
  return (
    <section className={`footer ${className}`}>
      <div className="footer-content">
        <div className="logo-social">
          <img className="image-icon18" loading="lazy" alt="" src={image} />
          <div className="social-media-icons">
            <img className="image-icon19" alt="" src={image1} />
            <img className="image-icon20" alt="" src={image2} />
            <img className="image-icon21" alt="" src={image3} />
            <img className="image-icon22" alt="" src={image4} />
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-shop">
            <div className="shop-plans1">Shop Plans</div>
            <div className="local1">Local</div>
            <div className="regional1">Regional</div>
            <div className="global">Global</div>
          </div>
          <div className="link-categories">
            <div className="resources1">Resources</div>
            <div className="link-blog">Blog</div>
            <div className="link-help">Help Center</div>
          </div>
          <div className="link-categories1">
            <div className="company">Company</div>
            <div className="link-about">About Us</div>
            <div className="link-contact">Contact Us</div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="brand-name-team-brand-name-g-parent">
          <div className="brand-name-team">
            Brand Name Team | Brand Name Go | Brand Name eSIM
          </div>
          <div className="brand-name-inc">
            © 2024 Brand Name, Inc. All rights reserved | Legal Terms
          </div>
        </div>
        <div className="payment">
          <img
            className="payment-icons"
            loading="lazy"
            alt=""
            src={paymentIcons}
          />
          <img
            className="payment-icons1"
            loading="lazy"
            alt=""
            src="/payment-icons-1.svg"
          />
          <img
            className="payment-icons2"
            loading="lazy"
            alt=""
            src={paymentIcons2}
          />
          <img
            className="payment-icons3"
            loading="lazy"
            alt=""
            src={paymentIcons3}
          />
          <img
            className="payment-icons4"
            loading="lazy"
            alt=""
            src="/payment-icons-4.svg"
          />
          <img className="payment-icons5" alt="" src={paymentIcons5} />
          <img className="payment-icons6" alt="" src="/payment-icons-6.svg" />
          <img className="payment-icons7" alt="" src={paymentIcons7} />
          <img className="payment-icons8" alt="" src={paymentIcons8} />
          <img className="payment-icons9" alt="" src={paymentIcons9} />
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  paymentIcons: PropTypes.string,
  paymentIcons2: PropTypes.string,
  paymentIcons3: PropTypes.string,
  paymentIcons5: PropTypes.string,
  paymentIcons7: PropTypes.string,
  paymentIcons8: PropTypes.string,
  paymentIcons9: PropTypes.string,
};

export default Footer;
