import { Users } from "lucide-react";

const Customers = () => {
    return (
        <div>

            <div className="admin-page-header">

                <div>
                    <h1>Customers</h1>

                    <p>
                        View and manage your customers.
                    </p>
                </div>

            </div>


            <div className="admin-table-card">

                <div className="admin-empty">

                    <Users size={40} />

                    <h3>No customers yet</h3>

                    <p>
                        Customer accounts will appear here.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Customers;