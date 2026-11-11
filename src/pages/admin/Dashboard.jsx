import {
    Package,
    ShoppingBag,
    Users,
    FileText,
    ArrowUpRight,
} from "lucide-react";
import "./Dashboard.css";



const Dashboard = () => {
    return (
        <div>

            <div className="admin-page-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>
                        Welcome back. Here's what's happening
                        with your store.
                    </p>
                </div>
            </div>


            {/* STAT CARDS */}
            <div className="dashboard-stats">

                <div className="stat-card">
                    <div className="stat-icon">
                        <Package size={22} />
                    </div>

                    <div>
                        <span>Total Products</span>
                        <h2>0</h2>
                    </div>
                </div>


                <div className="stat-card">
                    <div className="stat-icon">
                        <ShoppingBag size={22} />
                    </div>

                    <div>
                        <span>Total Orders</span>
                        <h2>0</h2>
                    </div>
                </div>


                <div className="stat-card">
                    <div className="stat-icon">
                        <Users size={22} />
                    </div>

                    <div>
                        <span>Customers</span>
                        <h2>0</h2>
                    </div>
                </div>


                <div className="stat-card">
                    <div className="stat-icon">
                        <FileText size={22} />
                    </div>

                    <div>
                        <span>Blog Posts</span>
                        <h2>0</h2>
                    </div>
                </div>

            </div>


            {/* QUICK ACTIONS */}
            <div className="admin-section">

                <div className="admin-section-header">
                    <div>
                        <h2>Quick Actions</h2>
                        <p>Manage your store quickly.</p>
                    </div>
                </div>


                <div className="quick-actions">

                    <a href="/admin/products/add">
                        <Package size={20} />
                        <span>Add Product</span>
                        <ArrowUpRight size={16} />
                    </a>

                    <a href="/admin/blog/create">
                        <FileText size={20} />
                        <span>Create Blog Post</span>
                        <ArrowUpRight size={16} />
                    </a>

                    <a href="/admin/orders">
                        <ShoppingBag size={20} />
                        <span>View Orders</span>
                        <ArrowUpRight size={16} />
                    </a>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;