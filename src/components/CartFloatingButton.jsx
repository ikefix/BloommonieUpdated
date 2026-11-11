
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import "./CartFloatingButton.css";

const CartFloatingButton = () => {
  const { cartCount } = useCart();

  // Hide button when cart is empty
  if (cartCount === 0) {
    return null;
  }

  return (
    <Link
      to="/cart"
      className="floating-cart-button"
      aria-label={`View cart, ${cartCount} items`}
    >
      <ShoppingCart size={25} strokeWidth={2.2} />

      <span className="floating-cart-count">
        {cartCount > 99 ? "99+" : cartCount}
      </span>
    </Link>
  );
};

export default CartFloatingButton;
