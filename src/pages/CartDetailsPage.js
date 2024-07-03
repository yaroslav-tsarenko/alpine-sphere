import Content2 from "../components/Content2";
import FrameComponent4 from "../components/FrameComponent4";
import Footer from "../components/Footer";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <Content2 yourCart="Your Cart" />
      <section className="cartdetailspage-inner">
        <FrameComponent4 />
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

export default CartDetailsPage;
