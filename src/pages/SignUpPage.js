import Header1 from "../components/Header1";
import PageContent from "../components/PageContent";
import Footer from "../components/Footer";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <Header1 />
      <PageContent />
      <Footer paymentIcons="/payment-icons1@2x.png" />
    </div>
  );
};

export default SignUpPage;
