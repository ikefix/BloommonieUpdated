
import { useEffect, useState } from "react";
import { ShoppingCart, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Product.css";
import api from "../services/api";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedId, setAddedId] = useState(null);

  const { addToCart, cartCount } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/hardware-products");
      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedId(product.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  return (
    <section className="Product" id="products">
      <div className="product-container">

        <div className="product-header">
          <span className="product-eyebrow">
            BROWSE ALL HARDWARE PRODUCTS
          </span>

          <h2>Explore the hardware lineup</h2>

          <p>
            Choose single devices or build out your counter
            from scratch with zero compatibility worries.
          </p>
        </div>

        {loading && (
          <div className="product-loading">
            Loading products...
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="product-loading">
            No products available.
          </div>
        )}

        {!loading && products.length > 0 && (
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>

                <div className="product-image-wrapper">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  ) : (
                    <div className="product-no-image">
                      No Image
                    </div>
                  )}
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="product-bottom">
                    <strong className="product-price">
                      ₦{Number(product.price).toLocaleString("en-NG")}
                    </strong>

                    <button
                      className={`add-cart-btn ${
                        addedId === product.id ? "added" : ""
                      }`}
                      disabled={
                        Number(product.stock) <= 0 ||
                        addedId === product.id
                      }
                      onClick={() => handleAddToCart(product)}
                    >
                      {addedId === product.id ? (
                        <Check size={15} />
                      ) : (
                        <ShoppingCart size={15} />
                      )}

                      <span>
                        {Number(product.stock) <= 0
                          ? "Out of Stock"
                          : addedId === product.id
                          ? "Added!"
                          : "Add to Cart"}
                      </span>
                    </button>
                  </div>
                </div>

              </article>
            ))}
          </div>
        )}

        {/* <div className="product-view-all">
          <Link to="/cart">
            View Cart ({cartCount})
            <ArrowRight size={15} />
          </Link>
        </div> */}

      </div>
    </section>
  );
};

export default Product;
