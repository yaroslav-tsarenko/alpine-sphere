import Main from "../components/Main";
import Account from "../components/Account";
import Footer from "../components/Footer";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <Main />
      <Account />
      <Footer paymentIcons="/payment-icons1@2x.png" />
    </div>
  );
};

export default AccountPage;
