import "./Howitworks.css";

const Howitworks = () => {
  const steps = [
    {
      number: "01",
      title: "Signup and Use the 14 Days Free Trial",
      description:
        "Get started by Signing Up and Using the 14 Days free trial ",
    },
    {
      number: "02",
      title: "Setup Your Store and Add your product faster with Our AI product Add",
      description:
        "Adding of products is easy and fast by just using Voice Command to add product.",
    },
    {
      number: "03",
      title: "Continuous Reconciliation",
      description:
        "Live reports update immediately. No waiting until the end of the month to see your balance sheet.",
    },
  ];

  return (
    <section className="Howitworks">
      <div className="howitworks-container">

        {/* Section Header */}
        <div className="howitworks-header">

          <div className="howitworks-badge">
            SIMPLE WORKFLOW
          </div>

          <h2>
            Bookkeeping that flows seamlessly
          </h2>

          <p>
            Step back from spreadsheet chaos. Here is how your books stay
            automated.
          </p>

        </div>

        {/* Steps */}
        <div className="howitworks-steps">

          {steps.map((step) => (
            <div className="howitworks-card" key={step.number}>

              {/* Top */}
              <div className="card-top">

                <span className="step-number">
                  {step.number}
                </span>

                <div className="check-icon">
                  ✓
                </div>

              </div>

              {/* Content */}
              <div className="card-content">

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Howitworks;