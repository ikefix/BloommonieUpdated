import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Hardware from "../pages/Hardware";
import Features from "../pages/Features";
import Price from "../pages/Price";
import Appdownload from "../pages/Appdownload";
import AdminLayout from "../pages/admin/AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Product";
import AddProduct from "../pages/admin/Addproduct";
import EditProduct from "../pages/admin/EditProduct";

import Blog from "../pages/admin/Blog";
import AddBlog from "../pages/admin/AddBlog";
import EditBlog from "../pages/admin/EditBlog";

import Orders from "../pages/admin/Orders";
import Customers from "../pages/admin/Customers";
import Settings from "../pages/admin/Settings";
import DesktopDownload from "../pages/DesktopDownload";

import { CartProvider } from "../context/CartContext";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";
import CartFloatingButton from "../components/CartFloatingButton";

// const AppRoutes = () => {
//     return (
//         <BrowserRouter>
//             <Routes>

//                 {/* PUBLIC */}
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/hardware" element={<Hardware />} />
//                 <Route path="/features" element={<Features />} />
//                 <Route path="/price" element={<Price />} />
//                 <Route path="/mobile" element={<Appdownload />} />
//                 <Route path="/desktop" element={<DesktopDownload />} />

//                 {/* ADMIN */}
//                 <Route path="/admin" element={<AdminLayout />}>

//                     <Route
//                         index
//                         element={<Dashboard />}
//                     />

//                     <Route
//                         path="products"
//                         element={<Products />}
//                     />

//                     <Route
//                         path="products/add"
//                         element={<AddProduct />}
//                     />

//                     <Route
//                         path="products/edit/:id"
//                         element={<EditProduct />}
//                     />

//                     <Route
//                         path="blog"
//                         element={<Blog />}
//                     />

//                     <Route
//                         path="blog/create"
//                         element={<AddBlog />}
//                     />

//                     <Route
//                         path="blog/edit/:id"
//                         element={<EditBlog />}
//                     />

//                     <Route
//                         path="orders"
//                         element={<Orders />}
//                     />

//                     <Route
//                         path="customers"
//                         element={<Customers />}
//                     />

//                     <Route
//                         path="settings"
//                         element={<Settings />}
//                     />

//                 </Route>

//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default AppRoutes;


const AppRoutes = () => {
    return (
        <CartProvider>
            <BrowserRouter>

                <CartFloatingButton />

                <Routes>

                    {/* PUBLIC */}
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/hardware" element={<Hardware />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/price" element={<Price />} />
                    <Route path="/mobile" element={<Appdownload />} />
                    <Route path="/desktop" element={<DesktopDownload />} />

                    {/* SHOPPING */}
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess />} />

                    {/* ADMIN */}
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="products" element={<Products />} />
                        <Route path="products/add" element={<AddProduct />} />
                        <Route path="products/edit/:id" element={<EditProduct />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="blog/create" element={<AddBlog />} />
                        <Route path="blog/edit/:id" element={<EditBlog />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="customers" element={<Customers />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
};

export default AppRoutes;
