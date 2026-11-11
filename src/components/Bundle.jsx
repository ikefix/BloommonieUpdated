
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Check } from "lucide-react";
import "./Bundle.css";
import api from "../services/api";
import { useCart } from "../context/CartContext";

const categories = [
  { name: "POS Terminals", slug: "pos-terminals" },
  { name: "Receipt Printers", slug: "receipt-printers" },
  { name: "Barcode Scanners", slug: "barcode-scanners" },
  { name: "Cash Drawers", slug: "cash-drawers" },
  { name: "Label Printers", slug: "label-printers" },
  { name: "Accessories", slug: "accessories" },
];

const normalizeCategory = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ");

const Bundle = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { addToCart, cartItems } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [addedProduct, setAddedProduct] = useState(null);

  const selectedSlug = location.hash
    .replace(/^#/, "")
    .toLowerCase();

  const selectedCategory = categories.find(
    (category) => category.slug === selectedSlug
  );

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/hardware-products");

        const productList = Array.isArray(response.data)
          ? response.data
          : response.data?.products || [];

        if (isMounted) {
          setProducts(productList);
        }
      } catch (err) {
        console.error("Failed to fetch hardware products:", err);

        if (isMounted) {
          setError("Unable to load products. Please try again.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          normalizeCategory(product.category) ===
          normalizeCategory(selectedCategory.name)
      )
    : [];

  const formatPrice = (price) =>
    `₦${Number(price || 0).toLocaleString("en-NG", {
      maximumFractionDigits: 2,
    })}`;

  const handleCategoryChange = (slug = "") => {
    navigate({
      pathname: "/hardware",
      hash: slug ? `#${slug}` : "#all-products",
    });

    setTimeout(() => {
      document
        .getElementById("hardware-products")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 150);
  };

  // ADD PRODUCT TO CART
  const handleAddToCart = (product) => {
    if (Number(product.stock) <= 0) return;

    addToCart(product);

    setAddedProduct(product.id);

    setTimeout(() => {
      setAddedProduct((current) =>
        current === product.id ? null : current
      );
    }, 1500);
  };

  if (!selectedCategory && selectedSlug !== "all-products") {
    return null;
  }

  const showingAllProducts = selectedSlug === "all-products";

  const displayedProducts = showingAllProducts
    ? products
    : filteredProducts;

  return (
    <section className="Bundle" id="hardware-products">
      <div className="Bundle-container">

        <div className="Bundle-heading">
          <span className="Bundle-eyebrow">
            BLOOMMONIE HARDWARE
          </span>

          <h2>
            {showingAllProducts
              ? "All Hardware Products"
              : selectedCategory.name}
          </h2>

          <p>
            {showingAllProducts
              ? "Explore our complete collection of business hardware."
              : `Explore our available ${selectedCategory.name.toLowerCase()}.`}
          </p>
        </div>

        <nav
          className="Bundle-categories"
          aria-label="Filter hardware products"
        >
          <a
            href="/hardware#all-products"
            className={showingAllProducts ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              handleCategoryChange("all-products");
            }}
          >
            All Products
          </a>

          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/hardware#${category.slug}`}
              className={
                selectedCategory?.slug === category.slug
                  ? "active"
                  : ""
              }
              onClick={(event) => {
                event.preventDefault();
                handleCategoryChange(category.slug);
              }}
            >
              {category.name}
            </a>
          ))}
        </nav>

        {loading && (
          <p className="Bundle-message">
            Loading products...
          </p>
        )}

        {!loading && error && (
          <p className="Bundle-message">{error}</p>
        )}

        {!loading &&
          !error &&
          displayedProducts.length === 0 && (
            <p className="Bundle-message">
              No products found
              {!showingAllProducts && selectedCategory
                ? ` in ${selectedCategory.name}.`
                : "."}
            </p>
          )}

        {!loading &&
          !error &&
          displayedProducts.length > 0 && (
            <div className="Bundle-grid">

              {displayedProducts.map((product) => {

                const cartProduct = cartItems.find(
                  (item) => item.id === product.id
                );

                const isAdded = addedProduct === product.id;

                return (
                  <article
                    className="Bundle-card"
                    key={product.id}
                  >

                    <div className="Bundle-image">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="Bundle-no-image">
                          No image available
                        </div>
                      )}
                    </div>

                    <div className="Bundle-info">

                      <span className="Bundle-product-category">
                        {product.category}
                      </span>

                      <h3>{product.name}</h3>

                      <p>
                        {product.description || "Hardware product"}
                      </p>

                      <div className="Bundle-price">
                        <span className="Bundle-current-price">
                          {formatPrice(product.price)}
                        </span>
                      </div>

                      <div className="Bundle-cart">

                        <button
                          type="button"
                          className={`Bundle-add-cart ${
                            isAdded ? "added" : ""
                          }`}
                          disabled={Number(product.stock) <= 0}
                          onClick={() => handleAddToCart(product)}
                        >

                          {isAdded ? (
                            <Check size={16} />
                          ) : (
                            <ShoppingCart size={16} />
                          )}

                          <span>
                            {Number(product.stock) <= 0
                              ? "Out of Stock"
                              : isAdded
                              ? "Added to Cart"
                              : cartProduct
                              ? `Add More (${cartProduct.quantity})`
                              : "Add to Cart"}
                          </span>

                        </button>

                      </div>

                    </div>
                  </article>
                );
              })}

            </div>
          )}

      </div>
    </section>
  );
};

export default Bundle;
