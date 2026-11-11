
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px"
    }}>
      <CheckCircle size={65} color="#2F5DA8" />

      <h1>Order Successful!</h1>

      <p>Thank you for shopping with Bloommonie.</p>

      <Link to="/hardware">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
