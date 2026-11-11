
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShieldCheck
} from "lucide-react";

import { useCart } from "../context/CartContext";
import "./Cart.css";

const formatPrice = (price) =>
  `₦${Number(price).toLocaleString("en-NG")}`;

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    cartCount,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();

  return (
    <div className="cart-page">

      <div className="cart-container">

        <div className="cart-heading">
          <span>YOUR SHOPPING BAG</span>
          <h1>Shopping Cart</h1>
          <p>
            Review your hardware selections before checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (

          <div className="empty-cart">
            <div className="empty-cart-icon">
              <ShoppingBag size={42} />
            </div>

            <h2>Your cart is empty</h2>

            <p>
              You haven't added any hardware products yet.
              Explore our collection and find what your business needs.
            </p>

            <Link to="/hardware" className="continue-shopping">
              Explore Hardware
            </Link>
          </div>

        ) : (

          <div className="cart-layout">

            <div className="cart-products">

              <div className="cart-products-header">
                <h2>Your Items ({cartCount})</h2>
                <Link to="/hardware">
                  Continue Shopping
                </Link>
              </div>

              {cartItems.map((item) => (

                <div className="cart-item" key={item.id}>

                  <div className="cart-item-image">
                    {item.image ? (
                      <img src={item.image} alt={item.name} />
                    ) : (
                      <ShoppingBag size={30} />
                    )}
                  </div>

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>

                    <p>{item.description}</p>

                    <strong>
                      {formatPrice(item.price)}
                    </strong>

                    <div className="quantity-control">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        disabled={item.quantity >= item.stock}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>

                    </div>
                  </div>

                  <div className="cart-item-actions">

                    <strong>
                      {formatPrice(item.price * item.quantity)}
                    </strong>

                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <aside className="cart-summary">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal ({cartCount} items)</span>
                <strong>{formatPrice(cartTotal)}</strong>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="summary-divider" />

              <div className="summary-total">
                <span>Total</span>
                <strong>{formatPrice(cartTotal)}</strong>
              </div>

              <p className="delivery-note">
                Delivery charges will be calculated
                based on your delivery location.
              </p>

              <button
                className="checkout-button"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

              <div className="secure-checkout">
                <ShieldCheck size={17} />
                Secure checkout with Paystack
              </div>

              <Link to="/hardware" className="back-to-shop">
                <ArrowLeft size={15} />
                Continue Shopping
              </Link>

            </aside>

          </div>

        )}

      </div>

    </div>
  );
};

export default Cart;
