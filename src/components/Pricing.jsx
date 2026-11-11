import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    description: "Best for sole proprietors and early-stage freelancers.",
    price: "$99",
    features: [
      "Link up to 2 banks",
      "Auto AI Categorization",
      "Basic Cashflow Reports",
      "Email Support",
    ],
    button: "Choose Plan",
    featured: false,
  },
  {
    name: "Professional",
    description: "Complete automated ledger with live dedicated support.",
    price: "$249",
    features: [
      "Unlimited bank accounts",
      "Intelligent Receipt matching",
      "Advanced Monthly Reports",
      "Priority Live Chat & Email",
      "Assigned CPA Review",
    ],
    button: "Choose Plan",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Custom features tailored for high-volume scaleups.",
    price: "$599",
    features: [
      "Multi-entity management",
      "Custom API Integrations",
      "Custom reporting metrics",
      "24/7 dedicated telephone support",
      "End-to-end audit representation",
    ],
    button: "Choose Plan",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section className="pricing">

      <div className="pricing-header">
        <span className="pricing-badge">
          FAIR PLANS
        </span>

        <h2>Simple, predictable pricing</h2>

        <p>
          Pick the plan that matches your current growth stage. Upgrade anytime.
        </p>
      </div>


      <div className="pricing-grid">

        {plans.map((plan) => (
          <div
            className={`pricing-card ${
              plan.featured ? "pricing-card-featured" : ""
            }`}
            key={plan.name}
          >

            <div className="pricing-card-top">

              <div className="pricing-title-row">
                <h3>{plan.name}</h3>

                {plan.featured && (
                  <span className="recommended">
                    RECOMMENDED
                  </span>
                )}
              </div>

              <p className="pricing-description">
                {plan.description}
              </p>

            </div>


            <div className="price">
              <span className="price-amount">
                {plan.price}
              </span>

              <span className="price-period">
                / month
              </span>
            </div>


            <div className="pricing-divider"></div>


            <ul className="pricing-features">

              {plan.features.map((feature, index) => (
                <li key={index}>
                  <span className="check">
                    ✓
                  </span>

                  <span>
                    {feature}
                  </span>
                </li>
              ))}

            </ul>


            {/* <button className="pricing-button">
              {plan.button}

              <span className="arrow">
                →
              </span>
            </button> */}

            <a className="pricing-button" href="https://bloommonie.store/register" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button className="pricing-button">
                {plan.button}

                <span className="arrow">
                  →
                </span>
              </button>
            </a>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Pricing;