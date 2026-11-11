import "./Features.css";
import {
  FaWhatsapp,
  FaWifi,
  FaChartBar,
  FaDesktop,
  FaBarcode,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      className: "whatsapp-feature",
      icon: <FaWhatsapp />,
      title: "Sell Directly from WhatsApp",
      description:
        "Record and carry out sales directly from your WhatsApp. Your cashier can serve customers without leaving WhatsApp.",
      tags: ["Quick Sales", "Customer Chat", "Order Tracking", "Easy"],
    },

    {
      className: "offline-feature",
      icon: <FaWifi />,
      title: "Works Offline",
      description:
        "Keep selling even when your internet connection goes down. Your transactions sync when you're back online.",
      tags: ["Offline Sales", "Data Safety", "Auto Sync", "No Interruptions"],
    },

    {
      className: "reports-feature",
      icon: <FaChartBar />,
      title: "Clear Business Reports",
      description:
        "See your sales, profit, expenses, inventory and business performance with simple, easy-to-understand reports.",
      tags: ["Sales Reports", "Profit & Loss", "Inventory", "Performance"],
    },

    {
      className: "devices-feature",
      icon: <FaDesktop />,
      title: "Works on Every Device",
      description:
        "Use Bloommonie on phones, laptops, desktops and POS devices. Your business, wherever you are.",
      tags: ["Phones", "Laptops", "Desktops", "POS Devices"],
    },

    {
      className: "barcode-feature",
      icon: <FaBarcode />,
      title: "Barcode Scanning",
      description:
        "Scan products quickly, add them to sales, and automatically update your inventory in real-time.",
      tags: ["Fast Scanning", "Accurate", "Auto Update", "Easy Checkout"],
    },
  ];

  return (
    <section className="Features">
      <div className="features-container">

        {/* Header */}
        <div className="features-header">

          <div className="features-badge">
            POWERFUL AUTOMATION
          </div>

          <h2>
            Everything you need to run your business
          </h2>

          <p>
            Sell faster, track your inventory, and understand your business
            — from anywhere.
          </p>

        </div>

        {/* Features */}
        <div className="features-grid">

          {features.map((feature, index) => (
            <div
              className={`feature-card ${feature.className}`}
              key={index}
            >

              {/* Icon */}
              <div className="feature-icon">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="feature-content">

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

              </div>

              {/* Tags */}
              <div className="feature-tags">

                {feature.tags.map((tag, tagIndex) => (
                  <span className="feature-tag" key={tagIndex}>
                    <span className="tag-dot"></span>
                    {tag}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;