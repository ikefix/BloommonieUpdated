import "./Featurehero.css";
import heroMockup from "../assets/images/getstarted-mock.png"; // Replace with your actual image path



const Featurehero = () => {
  return (
    <section className="featurehero">
      <div className="featurehero__container">
        <div className="featurehero__content">
          <span className="featurehero__badge">POWERFUL FEATURES</span>

          <h1 className="featurehero__title">
            Everything you need to run your business smarter.
          </h1>

          <p className="featurehero__text">
            Bloommonie gives you the tools to track sales, manage inventory,
            control expenses, and get clear insights — all in one simple
            platform built for Nigerian SMEs and MSMEs.
          </p>

          <div className="featurehero__actions">
            <button type="button" className="featurehero__btn featurehero__btn--primary">
              Start Free Trial
            </button>

            <button type="button" className="featurehero__btn featurehero__btn--outline">
              <svg
                className="featurehero__play"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 4l14 8-14 8V4z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="featurehero__visual">
          {/* Replace with your laptop + phone mockup image */}
          <img
            className="featurehero__image"
            src={heroMockup}
            alt="Bloommonie dashboard on laptop and mobile"
          />
        </div>
      </div>
    </section>
  );
};

export default Featurehero;