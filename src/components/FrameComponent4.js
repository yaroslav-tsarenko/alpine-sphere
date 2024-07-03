import ItemRow from "./ItemRow";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`items-container-parent ${className}`}>
      <div className="items-container">
        <div className="item-row1">
          <div className="header8">
            <div className="header-child" />
            <div className="product-wrapper">
              <b className="product">Product</b>
            </div>
            <div className="price-quantity">
              <b className="price">Price</b>
              <b className="quantity">Quantity</b>
            </div>
            <b className="total">Total</b>
          </div>
          <div className="item-details">
            <img
              className="property-1card-11"
              loading="lazy"
              alt=""
              src="/property-1card-1@2x.png"
            />
            <div className="item-title">
              <b className="esim1">eSIM</b>
              <b className="discount-20-off">Discount: 20% OFF</b>
            </div>
            <div className="item-actions">
              <div className="quantity1">
                <b className="quantity-placeholder">$120.00</b>
                <b className="credits1">12 Credits</b>
              </div>
              <div className="increase-quantity">
                <div className="plus-button">
                  <div className="quantity-icons">
                    <img
                      className="icon-plus1"
                      loading="lazy"
                      alt=""
                      src="/iconplus.svg"
                    />
                  </div>
                  <b className="increase-placeholder">3</b>
                  <input className="quantity-icons1" type="checkbox" />
                </div>
                <div className="time-period">
                  <b className="hourly1">Hourly</b>
                  <div className="hourly-value">
                    <img
                      className="hourly-placeholder-icon"
                      alt=""
                      src="/hourly-placeholder.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <b className="item-separator">$120.00</b>
          </div>
        </div>
        <ItemRow />
        <ItemRow />
        <div className="action-buttons">
          <div className="action-buttons-child" />
          <div className="action-buttons1">
            <button className="button14">
              <img className="tag-icon6" alt="" src="/tag-icon.svg" />
              <b className="button15">Go Back</b>
              <img className="tag-icon7" alt="" src="/tag-icon.svg" />
            </button>
            <button className="button16">
              <img className="tag-icon8" alt="" src="/tag-icon.svg" />
              <b className="button17">Checkout</b>
              <img className="tag-icon9" alt="" src="/tag-icon.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className="checkout-details4">
        <div className="header-container">
          <div className="header9">
            <b className="checkout-details5">Checkout Details</b>
          </div>
        </div>
        <div className="summary-labels-wrapper">
          <div className="summary-labels">
            <b className="cart-subtotal1">Cart Subtotal</b>
            <b className="value-separator">$360.00</b>
          </div>
        </div>
        <div className="charge-details-wrapper">
          <div className="charge-details">
            <div className="charge-labels">
              <b className="shipping-handling1">{`Shipping & Handling`}</b>
              <b className="other-taxes1">Other Taxes</b>
            </div>
            <div className="charge-labels1">
              <b className="b6">$0.00</b>
              <b className="b7">$0.00</b>
            </div>
          </div>
        </div>
        <div className="details-separator">
          <div className="details-separator-child" />
        </div>
        <div className="checkout-details-inner">
          <div className="grand-total-group">
            <b className="grand-total1">Grand Total</b>
            <b className="b8">$360.00</b>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
