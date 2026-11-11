
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  ShieldCheck,
  CreditCard,
  Truck,
  MapPin,
  User,
  Mail,
  Phone,
  ArrowLeft,
  Lock,
  Package
} from "lucide-react";

import { useCart } from "../context/CartContext";
import api from "../services/api";
import "./Checkout.css";

const formatPrice = (price) =>
  `₦${Number(price || 0).toLocaleString("en-NG")}`;

const Checkout = () => {
  const { cartItems, cartCount, cartTotal } = useCart();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    alternate_phone: "",
    company_name: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postal_code: "",
    country: "Nigeria",
    delivery_instructions: "",
    order_note: ""
  });

  const [paymentMethod, setPaymentMethod] = useState("paystack");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // HANDLE FORM INPUTS
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // INITIALIZE CHECKOUT AND PAYSTACK PAYMENT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      setMessage("Your shopping cart is empty.");
      return;
    }

    if (loading) return;

    try {
      setLoading(true);
      setMessage("");

      const payload = {
        ...formData,

        items: cartItems.map((item) => ({
          product_id: item.id,
          quantity: item.quantity
        }))
      };

      const response = await api.post(
        "/hardware-orders/initialize",
        payload
      );

      if (
        response.data.success &&
        response.data.payment?.authorization_url
      ) {
        // Redirect customer to Paystack
        window.location.href =
          response.data.payment.authorization_url;

        return;
      }

      setMessage(
        response.data.message ||
        "Unable to initialize payment. Please try again."
      );

    } catch (error) {
      console.error(
        "Checkout error:",
        error.response?.data || error.message
      );

      const errors = error.response?.data?.errors;

      if (errors) {
        setMessage(
          Object.values(errors).flat().join(" ")
        );
      } else {
        setMessage(
          error.response?.data?.message ||
          "Something went wrong. Please try again."
        );
      }

    } finally {
      setLoading(false);
    }
  };

  // EMPTY CART
  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">

        <div className="checkout-empty-icon">
          <ShoppingBag size={40} />
        </div>

        <h2>Your cart is empty</h2>

        <p>
          Add some hardware products before proceeding to checkout.
        </p>

        <Link
          to="/hardware"
          className="checkout-shop-btn"
        >
          Explore Hardware
        </Link>

      </div>
    );
  }

  return (
    <div className="checkout-page">

      <div className="checkout-container">

        {/* HEADER */}
        <div className="checkout-header">

          <Link
            to="/hardware"
            className="checkout-back"
          >
            <ArrowLeft size={17} />
            Continue Shopping
          </Link>

          <div className="checkout-title">

            <span>SECURE CHECKOUT</span>

            <h1>Complete Your Order</h1>

            <p>
              You're just a few steps away from getting
              your business hardware.
            </p>

          </div>

          <div className="checkout-progress">

            <div className="progress-step active">
              <span>1</span>
              <small>Information</small>
            </div>

            <div className="progress-line"></div>

            <div className="progress-step active">
              <span>2</span>
              <small>Payment</small>
            </div>

          </div>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="checkout-layout">

            {/* LEFT: CUSTOMER DETAILS */}
            <div className="checkout-left">

              {/* CUSTOMER INFORMATION */}
              <section className="checkout-card">

                <div className="checkout-section-heading">

                  <div className="checkout-heading-icon">
                    <User size={19} />
                  </div>

                  <div>
                    <h2>Customer Information</h2>
                    <p>
                      Tell us who is placing this order.
                    </p>
                  </div>

                </div>

                <div className="checkout-form-grid">

                  <div className="checkout-field full-width">

                    <label>Full Name *</label>

                    <input
                      type="text"
                      name="full_name"
                      placeholder="Enter your full name"
                      value={formData.full_name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />

                  </div>


                  <div className="checkout-field">

                    <label>Email Address *</label>

                    <div className="checkout-input-icon">

                      <Mail size={17} />

                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />

                    </div>

                  </div>


                  <div className="checkout-field">

                    <label>Phone Number *</label>

                    <div className="checkout-input-icon">

                      <Phone size={17} />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="08012345678"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        required
                      />

                    </div>

                  </div>


                  <div className="checkout-field">

                    <label>Alternative Phone Number</label>

                    <input
                      type="tel"
                      name="alternate_phone"
                      placeholder="Optional alternative number"
                      value={formData.alternate_phone}
                      onChange={handleChange}
                    />

                  </div>


                  <div className="checkout-field">

                    <label>Business / Company Name</label>

                    <input
                      type="text"
                      name="company_name"
                      placeholder="Your business name (optional)"
                      value={formData.company_name}
                      onChange={handleChange}
                    />

                  </div>

                </div>

              </section>


              {/* DELIVERY INFORMATION */}
              <section className="checkout-card">

                <div className="checkout-section-heading">

                  <div className="checkout-heading-icon">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <h2>Delivery Information</h2>
                    <p>
                      Where should we deliver your order?
                    </p>
                  </div>

                </div>


                <div className="checkout-form-grid">

                  <div className="checkout-field full-width">

                    <label>Street Address *</label>

                    <input
                      type="text"
                      name="address"
                      placeholder="House number, street name, area"
                      value={formData.address}
                      onChange={handleChange}
                      autoComplete="street-address"
                      required
                    />

                  </div>


                  <div className="checkout-field full-width">

                    <label>Apartment, Suite or Landmark</label>

                    <input
                      type="text"
                      name="apartment"
                      placeholder="Apartment, office, floor or nearby landmark"
                      value={formData.apartment}
                      onChange={handleChange}
                    />

                  </div>


                  <div className="checkout-field">

                    <label>City / Town *</label>

                    <input
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      autoComplete="address-level2"
                      required
                    />

                  </div>


                  <div className="checkout-field">

                    <label>State *</label>

                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      autoComplete="address-level1"
                      required
                    >

                      <option value="">
                        Select your state
                      </option>

                      {[
                        "Abia",
                        "Adamawa",
                        "Akwa Ibom",
                        "Anambra",
                        "Bauchi",
                        "Bayelsa",
                        "Benue",
                        "Borno",
                        "Cross River",
                        "Delta",
                        "Ebonyi",
                        "Edo",
                        "Ekiti",
                        "Enugu",
                        "FCT Abuja",
                        "Gombe",
                        "Imo",
                        "Jigawa",
                        "Kaduna",
                        "Kano",
                        "Katsina",
                        "Kebbi",
                        "Kogi",
                        "Kwara",
                        "Lagos",
                        "Nasarawa",
                        "Niger",
                        "Ogun",
                        "Ondo",
                        "Osun",
                        "Oyo",
                        "Plateau",
                        "Rivers",
                        "Sokoto",
                        "Taraba",
                        "Yobe",
                        "Zamfara"
                      ].map((state) => (
                        <option
                          key={state}
                          value={state}
                        >
                          {state}
                        </option>
                      ))}

                    </select>

                  </div>


                  <div className="checkout-field">

                    <label>Postal Code</label>

                    <input
                      type="text"
                      name="postal_code"
                      placeholder="Postal code (optional)"
                      value={formData.postal_code}
                      onChange={handleChange}
                      autoComplete="postal-code"
                    />

                  </div>


                  <div className="checkout-field">

                    <label>Country</label>

                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      readOnly
                    />

                  </div>


                  <div className="checkout-field full-width">

                    <label>Delivery Instructions</label>

                    <textarea
                      name="delivery_instructions"
                      placeholder="Help our delivery team find you. Add directions or useful landmarks..."
                      value={formData.delivery_instructions}
                      onChange={handleChange}
                      rows="3"
                    />

                  </div>

                </div>

              </section>


              {/* ADDITIONAL INFORMATION */}
              <section className="checkout-card">

                <div className="checkout-section-heading">

                  <div className="checkout-heading-icon">
                    <Package size={19} />
                  </div>

                  <div>
                    <h2>Additional Information</h2>
                    <p>
                      Anything else we should know about your order?
                    </p>
                  </div>

                </div>


                <div className="checkout-field">

                  <label>Order Notes (Optional)</label>

                  <textarea
                    name="order_note"
                    placeholder="Special requests, preferred delivery time, product questions, etc."
                    value={formData.order_note}
                    onChange={handleChange}
                    rows="4"
                  />

                </div>

              </section>

            </div>


            {/* RIGHT: ORDER AND PAYMENT */}
            <aside className="checkout-right">

              {/* ORDER SUMMARY */}
              <section className="checkout-card order-summary-card">

                <div className="order-summary-heading">

                  <h2>Your Order</h2>

                  <span>{cartCount} Items</span>

                </div>


                <div className="checkout-order-products">

                  {cartItems.map((item) => (

                    <div
                      className="checkout-order-item"
                      key={item.id}
                    >

                      <div className="checkout-order-image">

                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                          />
                        ) : (
                          <ShoppingBag size={23} />
                        )}

                        <span>{item.quantity}</span>

                      </div>


                      <div className="checkout-order-info">

                        <h3>{item.name}</h3>

                        <p>
                          Quantity: {item.quantity}
                        </p>

                        <strong>
                          {formatPrice(
                            item.price * item.quantity
                          )}
                        </strong>

                      </div>

                    </div>

                  ))}

                </div>


                <div className="checkout-price-details">

                  <div>
                    <span>Subtotal</span>
                    <strong>{formatPrice(cartTotal)}</strong>
                  </div>

                  <div>
                    <span>Delivery Fee</span>
                    <strong className="delivery-pending">
                      Calculated later
                    </strong>
                  </div>

                  <div>
                    <span>Discount</span>
                    <strong>₦0</strong>
                  </div>

                </div>


                <div className="checkout-grand-total">

                  <div>
                    <span>Total to Pay</span>

                    <small>
                      Delivery fee not yet included
                    </small>
                  </div>

                  <strong>
                    {formatPrice(cartTotal)}
                  </strong>

                </div>

              </section>


              {/* PAYMENT */}
              <section className="checkout-card payment-card">

                <div className="checkout-section-heading">

                  <div className="checkout-heading-icon">
                    <CreditCard size={19} />
                  </div>

                  <div>
                    <h2>Payment Method</h2>
                    <p>Choose how you want to pay.</p>
                  </div>

                </div>


                <label
                  className={`payment-option ${
                    paymentMethod === "paystack"
                      ? "selected"
                      : ""
                  }`}
                >

                  <input
                    type="radio"
                    name="payment"
                    value="paystack"
                    checked={paymentMethod === "paystack"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />


                  <div className="payment-option-content">

                    <div className="payment-option-title">

                      <strong>Pay with Paystack</strong>

                      <span className="recommended-tag">
                        Recommended
                      </span>

                    </div>

                    <p>
                      Securely pay with your debit card,
                      bank transfer or other available
                      Paystack options.
                    </p>

                    <div className="payment-method-icons">
                      <span>Card</span>
                      <span>Bank Transfer</span>
                      <span>USSD</span>
                    </div>

                  </div>


                  <div className="paystack-logo">
                    Paystack
                  </div>

                </label>


                <div className="payment-security">

                  <ShieldCheck size={20} />

                  <div>

                    <strong>Secure Payment</strong>

                    <p>
                      Payment will be processed securely
                      through Paystack. Your card details
                      will not be stored by Bloommonie.
                    </p>

                  </div>

                </div>


                {/* ERROR / SUCCESS MESSAGE */}
                {message && (
                  <div
                    className="checkout-message"
                    role="alert"
                  >
                    {message}
                  </div>
                )}


                {/* PAYMENT BUTTON */}
                <button
                  type="submit"
                  className="place-order-button"
                  disabled={loading}
                >

                  <Lock size={16} />

                  {loading
                    ? "Initializing Payment..."
                    : `Continue to Payment · ${formatPrice(cartTotal)}`}

                </button>


                <p className="payment-terms">
                  By continuing, you agree to Bloommonie's
                  terms and conditions and privacy policy.
                </p>

              </section>


              {/* DELIVERY PROMISE */}
              <div className="checkout-delivery-promise">

                <Truck size={21} />

                <div>

                  <strong>
                    Delivery to your doorstep
                  </strong>

                  <p>
                    Our team will arrange delivery after
                    your order and payment have been confirmed.
                  </p>

                </div>

              </div>

            </aside>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Checkout;
