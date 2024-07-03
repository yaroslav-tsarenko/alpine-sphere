import Content from "../components/Content";
import Destinations from "../components/Destinations";
import PartnersReviews from "../components/PartnersReviews";
import IntroESim from "../components/IntroESim";
import ESimMedia from "../components/ESimMedia";
import ReviewItems from "../components/ReviewItems";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="header">
        <header className="lowest-price-ever-forever-dat-parent">
          <div className="lowest-price-ever-container">
            <span>
              {`Lowest Price Ever Forever! Data Plans in 130+ Destinations Starting froum Just %1.59. `}
              <span className="buy-now">Buy Now</span>
              {` `}
            </span>
          </div>
          <img className="frame-child" alt="" src="/arrow-1.svg" />
        </header>
        <div className="plans-shop-download-explore">
          <div className="shop-plans-download">
            <div className="alpine">
              <img
                className="mask-group-icon"
                loading="lazy"
                alt=""
                src="/mask-group@2x.png"
              />
              <h3 className="alpinesphere">AlpineSphere</h3>
            </div>
            <div className="shop-download-explore">
              <div className="shop-plans">Shop Plans</div>
              <div className="shop-resources">
                <div className="resources">Resources</div>
                <img className="arrow-down-icon" alt="" src="/arrowdown.svg" />
              </div>
              <div className="download">Download</div>
              <div className="shop-resources1">
                <div className="explore">Explore</div>
                <img className="arrow-down-icon1" alt="" src="/arrowdown.svg" />
              </div>
            </div>
          </div>
          <div className="sign-up-login">
            <div className="sign-up">Sign up</div>
            <button className="button">
              <div className="login">Login</div>
            </button>
            <div className="global-dropdown">
              <img className="global-icon" alt="" src="/global.svg" />
              <div className="en">EN</div>
              <img className="arrow-down-icon2" alt="" src="/arrowdown.svg" />
            </div>
          </div>
        </div>
      </section>
      <Content />
      <Destinations />
      <PartnersReviews />
      <IntroESim />
      <ESimMedia />
      <section className="reviews-1920x">
        <h1 className="customer-reviews-hear">
          Customer Reviews: Hear What Our Customers Have to Say
        </h1>
        <div className="review-cards">
          <ReviewItems
            ellipse213="/ellipse-213@2x.png"
            millieB="Millie B."
            texasUSA="Texas, USA"
            exceptionalValueWithVeriz="Exceptional value! With Verizon TopUp, I can customize my data package to fit my usage needs perfectly. No more wasted data or overage charges."
          />
          <ReviewItems
            ellipse213="/ellipse-213-1@2x.png"
            millieB="Sarah T."
            texasUSA="California, USA"
            exceptionalValueWithVeriz="Outstanding service! Verizon TopUp saved the day when I ran out of data mid-streaming. Highly recommend!"
          />
          <ReviewItems
            ellipse213="/ellipse-213-2@2x.png"
            millieB="Michael L."
            texasUSA="New York, USA"
            exceptionalValueWithVeriz="Reliable and convenient. Verizon TopUp's quick and easy data replenishment process is a lifesaver for busy professionals like me."
          />
          <ReviewItems
            ellipse213="/ellipse-213-3@2x.png"
            millieB="Emily H."
            texasUSA="Texas, USA"
            exceptionalValueWithVeriz="Exceptional value! With Verizon TopUp, I can customize my data package to fit my usage needs perfectly. No more wasted data or overage charges."
          />
        </div>
      </section>
      <Footer
        image="/image-20@2x.png"
        image1="/image-21@2x.png"
        image2="/image-22@2x.png"
        image3="/image-23@2x.png"
        image4="/image-24@2x.png"
        paymentIcons="/payment-icons@2x.png"
        paymentIcons2="/payment-icons-2@2x.png"
        paymentIcons3="/payment-icons-3@2x.png"
        paymentIcons5="/payment-icons-5@2x.png"
        paymentIcons7="/payment-icons-7@2x.png"
        paymentIcons8="/payment-icons-8@2x.png"
        paymentIcons9="/payment-icons-9@2x.png"
      />
    </div>
  );
};

export default HomePage;
