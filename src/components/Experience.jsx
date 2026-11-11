import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2L3 14H11L10 22L21 9H13L13 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Plug & Play Setup",
      text: "Works seamlessly with Ledger software. No complex setup or configuration.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Built to Last",
      text: "Premium components and rigorous testing for long-term reliability.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6H14V17H3V6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 9H18L21 12V17H14V9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Free Shipping",
      text: "Get your order fast with free shipping on orders over $250.",
    },
  ];

  return (
    <section className="Experience">
      <div className="Experience-container">

        <div className="Experience-heading">
          <span className="Experience-eyebrow">
            THE BLOOMMONIE EXPERIENCE
          </span>

          <h2>Commercial-grade merchant equipment</h2>
        </div>

        <div className="Experience-grid">
          {experiences.map((item, index) => (
            <div className="Experience-card" key={index}>
              <div className="Experience-icon">
                {item.icon}
              </div>

              <div className="Experience-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;