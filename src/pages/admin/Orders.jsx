import { ShoppingBag } from "lucide-react";

const Orders = () => {
    return (
        <div>

            <div className="admin-page-header">

                <div>
                    <h1>Orders</h1>

                    <p>
                        Manage customer orders.
                    </p>
                </div>

            </div>


            <div className="admin-table-card">

                <div className="admin-empty">

                    <ShoppingBag size={40} />

                    <h3>No orders yet</h3>

                    <p>
                        Customer orders will appear here.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Orders;