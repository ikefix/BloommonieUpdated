import "./Trusted.css";

const Trusted = () => {
  const companies = [
    "Stripe",
    "Plaid",
    "Shopify",
    "Mercury",
    "Wise",
    "Brex",
  ];

  return (
    <section className="trusted">
      <div className="trusted-container">

        {/* Title */}
        <p className="trusted-title">
          TRUSTED BY 5,000+ FAST-GROWING BUSINESSES IN AFRICA
        </p>

        {/* Moving company slider */}
        <div className="trusted-slider">
          <div className="trusted-track">

            {/* First set of companies */}
            {companies.map((company) => (
              <div
                className="trusted-company"
                key={`first-${company}`}
              >
                <div className="trusted-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="company-name">
                  {company}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless animation */}
            {companies.map((company) => (
              <div
                className="trusted-company"
                key={`second-${company}`}
              >
                <div className="trusted-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="company-name">
                  {company}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Trusted;