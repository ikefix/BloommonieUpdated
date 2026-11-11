import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
    return (
        <div>

            <div className="admin-page-header">

                <div>
                    <h1>Settings</h1>

                    <p>
                        Manage your store settings.
                    </p>
                </div>

            </div>


            <div className="admin-table-card">

                <div className="admin-empty">

                    <SettingsIcon size={40} />

                    <h3>Store Settings</h3>

                    <p>
                        Settings will be added here.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Settings;