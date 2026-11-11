import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import api from "../../services/api";

const EditProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);


    useEffect(() => {
        fetchProduct();
    }, [id]);


    const fetchProduct = async () => {

        try {

            const response =
                await api.get(`/products/${id}`);

            const product = response.data.product;

            setForm({
                name: product.name || "",
                description: product.description || "",
                price: product.price || "",
                stock: product.stock || "",
                image: product.image || "",
            });

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };


    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setSaving(true);

        try {

            await api.put(`/products/${id}`, {
                name: form.name,
                description: form.description,
                price: Number(form.price),
                stock: Number(form.stock),
                image: form.image || null,
            });

            navigate("/admin/products");

        } catch (error) {

            console.error(error);
            alert("Failed to update product.");

        } finally {

            setSaving(false);

        }

    };


    if (loading) {
        return <p>Loading product...</p>;
    }


    return (
        <div>

            <div className="admin-page-header">

                <div>

                    <Link
                        to="/admin/products"
                        className="back-link"
                    >
                        <ArrowLeft size={16} />
                        Products
                    </Link>

                    <h1>Edit Product</h1>

                </div>

            </div>


            <div className="admin-form-card">

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>
                            Product Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows="5"
                        />

                    </div>


                    <div className="form-row">

                        <div className="form-group">

                            <label>
                                Price
                            </label>

                            <input
                                type="number"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                min="0"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label>
                                Stock
                            </label>

                            <input
                                type="number"
                                name="stock"
                                value={form.stock}
                                onChange={handleChange}
                                min="0"
                                required
                            />

                        </div>

                    </div>


                    <div className="form-group">

                        <label>
                            Image URL
                        </label>

                        <input
                            type="text"
                            name="image"
                            value={form.image}
                            onChange={handleChange}
                        />

                    </div>


                    <button
                        type="submit"
                        className="admin-primary-btn"
                        disabled={saving}
                    >
                        {saving
                            ? "Saving..."
                            : "Save Changes"}
                    </button>

                </form>

            </div>

        </div>
    );
};

export default EditProduct;