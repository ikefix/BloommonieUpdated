import "./Cta.css";

const Cta = () => {
  return (
    <section className="Cta">
      <div className="Cta-inner">
        <h2 className="Cta-heading">Ready to completely automate your books?</h2>
        <p className="Cta-subtext">
          Join thousands of small business owners who traded stressful
          spreadsheets for real-time financials.
        </p>
        <div className="Cta-actions">
          <button className="Cta-button Cta-button--primary">
            Get Started Free
            <svg
              className="Cta-arrow"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="Cta-button Cta-button--secondary">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;