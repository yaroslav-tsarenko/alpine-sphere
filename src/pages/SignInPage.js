import Header1 from "../components/Header1";
import Content from "../components/Content";
import Footer from "../components/Footer";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <Header1 />
      <Content />
      <Footer paymentIcons="/payment-icons1@2x.png" />
    </div>
  );
};

export default SignInPage;
