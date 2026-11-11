import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import api from "../../services/api";

const categories = [
  "POS Terminals",
  "Receipt Printers",
  "Barcode Scanners",
  "Cash Drawers",
  "Label Printers",
  "Accessories",
];

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setMessage("");
    setMessageType("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage("");
    setMessageType("");
    setErrors({});

    try {
      const payload = {
        name: form.name.trim(),
        description: form.description.trim() || null,
        price: Number(form.price),
        stock: Number(form.stock),
        category: form.category,
        image: form.image.trim() || null,
      };

      const response = await api.post("/hardware-products", payload);

      if (response.data?.success) {
        setMessageType("success");
        setMessage("Product added successfully!");

        // Return to the products page after a successful upload.
        navigate("/admin/products", {
          state: {
            successMessage: "Product added successfully!",
          },
        });
      } else {
        setMessageType("error");
        setMessage(
          response.data?.message || "The product could not be added."
        );
      }
    } catch (error) {
      console.error(
        "Failed to add hardware product:",
        error.response?.data || error.message
      );

      if (error.response?.status === 422) {
        setErrors(error.response.data.errors || {});
        setMessage(
          error.response.data.message ||
            "Please check the product details."
        );
      } else {
        setMessage(
          error.response?.data?.message ||
            "Failed to add product. Please try again."
        );
      }

      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <Link to="/admin/products" className="back-link">
            <ArrowLeft size={16} />
            Products
          </Link>

          <h1>Add Hardware Product</h1>

          <p>Add a new product to your hardware store.</p>
        </div>
      </div>

      <div className="admin-form-card">
        {message && (
          <div
            className={
              messageType === "success"
                ? "admin-success"
                : "admin-error"
            }
            role="alert"
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* PRODUCT NAME */}
          <div className="form-group">
            <label htmlFor="name">Product Name</label>

            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Bloommonie POS Terminal"
              required
              maxLength={255}
            />

            {errors.name && (
              <p className="field-error">{errors.name[0]}</p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div className="form-group">
            <label htmlFor="description">Description</label>

            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the product..."
              rows={5}
            />

            {errors.description && (
              <p className="field-error">{errors.description[0]}</p>
            )}
          </div>

          {/* CATEGORY */}
          <div className="form-group">
            <label htmlFor="category">Product Category</label>

            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {errors.category && (
              <p className="field-error">{errors.category[0]}</p>
            )}
          </div>

          {/* PRICE AND STOCK */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">Price (₦)</label>

              <input
                id="price"
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.01"
                required
              />

              {errors.price && (
                <p className="field-error">{errors.price[0]}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="stock">Stock Quantity</label>

              <input
                id="stock"
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="1"
                required
              />

              {errors.stock && (
                <p className="field-error">{errors.stock[0]}</p>
              )}
            </div>
          </div>

          {/* IMAGE URL */}
          <div className="form-group">
            <label htmlFor="image">Product Image URL</label>

            <input
              id="image"
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://example.com/product.jpg"
            />

            <small>Enter a publicly accessible image URL.</small>

            {errors.image && (
              <p className="field-error">{errors.image[0]}</p>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="admin-primary-btn"
            disabled={loading}
          >
            {loading ? "Adding Product..." : "Add Hardware Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;