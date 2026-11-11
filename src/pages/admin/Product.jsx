import { useEffect, useState } from "react";
import api from "../../services/api";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await api.get("/hardware-products");

            setProducts(response.data.products || []);
        } catch (error) {
            console.error(
                "Failed to fetch hardware products:",
                error.response?.data || error.message
            );
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading hardware products...</p>;
    }

    return (
        <div style={{ padding: "40px" }}>
            <h1>Hardware Products</h1>

            {products.length === 0 ? (
                <p>No hardware products found.</p>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(220px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                                padding: "15px",
                            }}
                        >
                            {product.image && (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: "100%",
                                        height: "180px",
                                        objectFit: "cover",
                                    }}
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                            )}

                            <h3>{product.name}</h3>

                            <p>
                                Category: {product.category || "Uncategorized"}
                            </p>

                            <p>{product.description}</p>

                            <h4>
                                ₦{Number(product.price).toLocaleString("en-NG")}
                            </h4>

                            <p>Stock: {product.stock}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;