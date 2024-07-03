import PropTypes from "prop-types";
import "./FAQ1920x.css";

const FAQ1920x = ({ className = "" }) => {
  return (
    <footer className={`faq-1920x ${className}`}>
      <div className="f-a-q-content">
        <div className="frequently-asked-questions">
          Frequently Asked Questions
        </div>
        <div className="cant-find-the">
          Cant find the answer you are looking for
        </div>
        <div className="explore2">
          <div className="explore-more">Explore More</div>
          <div className="arrow-right-wrapper">
            <img className="arrow-right-icon1" alt="" src="/arrowright1.svg" />
          </div>
        </div>
      </div>
      <div className="virtual-number-benefits">
        <div className="benefits-list">
          <div className="what-are-the">
            What are the benefits of using private virtual numbers?
          </div>
          <div className="virtual-number-f-a-q-icons">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="benefits-list1" />
        <div className="benefits-list2">
          <div className="how-do-i">
            How do I get and activate a Brandname cloud based number?
          </div>
          <div className="vector-wrapper">
            <img className="vector-icon1" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="benefits-list3" />
        <div className="benefits-list4">
          <div className="how-do-i1">
            How do I check messages for a virtual mobile number?
          </div>
          <div className="vector-container">
            <img className="vector-icon2" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="benefits-list5" />
        <div className="benefits-list6">
          <div className="how-do-i2">
            How do I disable my subscription for a virtual phone number?
          </div>
          <div className="vector-frame">
            <img className="vector-icon3" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="benefits-list7" />
        <div className="benefits-list8">
          <div className="are-virtual-mobile">
            Are virtual mobile numbers safe? How can they be identified?
          </div>
          <div className="frame-div">
            <img className="vector-icon4" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="benefits-list9" />
        <div className="benefits-list10">
          <div className="can-i-use">
            Can I use my virtual mobile number for registration and texting in
            messengers?
          </div>
          <div className="vector-wrapper1">
            <img className="vector-icon5" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="benefits-list11" />
        <div className="benefits-list12">
          <div className="can-globalesyncs-virtual">
            Can GlobaleSync's virtual cell phone number be used as my second
            phone number on the same device?
          </div>
          <div className="vector-wrapper2">
            <img className="vector-icon6" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="benefits-list13" />
        <div className="benefits-list14">
          <div className="can-virtual-cell">
            Can virtual cell phone numbers be used for SMS account verification?
          </div>
          <div className="vector-wrapper3">
            <img className="vector-icon7" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="benefits-list15" />
        <div className="benefits-list16">
          <div className="in-which-countries">
            In which countries can GlobaleSync's virtual 2nd line numbers be
            used?
          </div>
          <div className="vector-wrapper4">
            <img className="vector-icon8" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="benefits-list17" />
        <div className="benefits-list18">
          <div className="is-a-virtual">
            Is a virtual telephone number legal?
          </div>
          <div className="vector-wrapper5">
            <img className="vector-icon9" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="benefits-list19" />
      </div>
    </footer>
  );
};

FAQ1920x.propTypes = {
  className: PropTypes.string,
};

export default FAQ1920x;
