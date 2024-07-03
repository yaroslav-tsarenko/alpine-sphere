import FrameComponent1 from "../components/FrameComponent1";
import Content1 from "../components/Content1";
import BottomContent from "../components/BottomContent";
import FrameComponent from "../components/FrameComponent";
import ReviewItems from "../components/ReviewItems";
import FAQ1920x from "../components/FAQ1920x";
import Footer from "../components/Footer";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = () => {
  return (
    <div className="productdescriptionpage">
      <FrameComponent1 />
      <Content1 />
      <BottomContent />
      <FrameComponent />
      <section className="reviews-1920x1">
        <h2 className="customer-reviews-hear1">
          Customer Reviews: Hear What Our Customers Have to Say
        </h2>
        <div className="reviews-list">
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
      <FAQ1920x />
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

export default ProductDescriptionPage;
