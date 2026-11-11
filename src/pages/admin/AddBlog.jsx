import { useState } from "react";
import api from "../../services/api";

const AddBlog = () => {
    const [form, setForm] = useState({
        title: "",
        content: "",
        author: "",
        image: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {
            const response = await api.post("/products", {
                name: form.name,
                description: form.description,
                price: Number(form.price),
                stock: Number(form.stock),
                image: form.image || null,
            });

            setMessage(response.data.message);

            setForm({
                name: "",
                description: "",
                price: "",
                stock: "",
                image: "",
            });
        } catch (error) {
            console.error(error);

            if (error.response?.data?.errors) {
                setMessage("Please check the information you entered.");
            } else {
                setMessage("Failed to add product.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "40px auto" }}>
            <h1>Add Product</h1>

            {message && (
                <p style={{ padding: "10px", background: "#eee" }}>
                    {message}
                </p>
            )}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Enter product description"
                    />
                </div>

                <br />

                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        min="0"
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange}
                        placeholder="Enter stock quantity"
                        min="0"
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        placeholder="Enter image URL"
                    />
                </div>

                <br />

                <button type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add Product"}
                </button>
            </form>
        </div>
    );
};

export default AddBlog;