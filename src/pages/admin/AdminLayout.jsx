import { NavLink, Outlet } from "react-router-dom";
import {
    LayoutDashboard,
    Package,
    FileText,
    ShoppingBag,
    Users,
    Settings,
    LogOut,
    Store,
} from "lucide-react";
import "./AdminLayout.css";

const AdminLayout = () => {
    return (
        <div className="admin-layout">

            {/* SIDEBAR */}
            <aside className="admin-sidebar">

                {/* LOGO */}
                <div className="admin-logo">
                    <Store size={24} />
                    <span>Bloommonie</span>
                </div>


                {/* NAVIGATION */}
                <nav className="admin-nav">

                    <NavLink
                        to="/admin"
                        end
                        className={({ isActive }) =>
                            `admin-nav-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        <LayoutDashboard size={18} />
                        <span>Dashboard</span>
                    </NavLink>


                    <NavLink
                        to="/admin/products"
                        className={({ isActive }) =>
                            `admin-nav-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        <Package size={18} />
                        <span>Products</span>
                    </NavLink>


                    <NavLink
                        to="/admin/blog"
                        className={({ isActive }) =>
                            `admin-nav-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        <FileText size={18} />
                        <span>Blog</span>
                    </NavLink>


                    <NavLink
                        to="/admin/orders"
                        className={({ isActive }) =>
                            `admin-nav-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        <ShoppingBag size={18} />
                        <span>Orders</span>
                    </NavLink>


                    <NavLink
                        to="/admin/customers"
                        className={({ isActive }) =>
                            `admin-nav-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        <Users size={18} />
                        <span>Customers</span>
                    </NavLink>


                    <NavLink
                        to="/admin/settings"
                        className={({ isActive }) =>
                            `admin-nav-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        <Settings size={18} />
                        <span>Settings</span>
                    </NavLink>

                </nav>


                {/* LOGOUT */}
                <button className="admin-logout">
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>

            </aside>


            {/* MAIN */}
            <main className="admin-main">

                {/* TOP BAR */}
                <header className="admin-header">

                    <div>
                        <h2>Admin Panel</h2>
                    </div>

                    <div className="admin-user">
                        <div className="admin-avatar">
                            A
                        </div>

                        <div>
                            <strong>Administrator</strong>
                            <small>Admin</small>
                        </div>
                    </div>

                </header>


                {/* PAGE CONTENT */}
                <div className="admin-content">
                    <Outlet />
                </div>

            </main>

        </div>
    );
};

export default AdminLayout;