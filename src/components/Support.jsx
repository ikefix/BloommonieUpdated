import { useState } from "react";
import "./Support.css";

const Support = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: "What are your shipping and delivery times?",
      answer:
        "Orders are processed quickly and delivered within the estimated delivery period shown at checkout. Delivery times may vary depending on your location.",
    },
    {
      question: "What is your return and exchange policy?",
      answer:
        "We accept eligible returns and exchanges within our stated return period. Products must be unused and in their original condition.",
    },
    {
      question: "What coverage is included under the hardware warranty?",
      answer:
        "Our hardware warranty covers eligible manufacturing defects and hardware failures under normal use. Physical damage caused by misuse may not be covered.",
    },
    {
      question: "Do you provide setup support for new registrants?",
      answer:
        "Yes. Our support team can guide you through setting up your hardware and connecting it with your Bloommonie software.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="Support">
      <div className="Support-container">

        {/* Left Side */}
        <div className="Support-left">

          <div className="Support-person">
            <img
              src="/images/support-person.png"
              alt="Bloommonie support representative"
            />
          </div>

          <div className="Support-card">
            <h3>Need more help?</h3>

            <p>
              Our team is here to help you find the right hardware for your
              business.
            </p>

            <button type="button">
              Contact Support
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div className="Support-right">

          <div className="Support-heading">
            <span className="Support-eyebrow">
              SUPPORT
            </span>

            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="FAQ-list">
            {faqs.map((faq, index) => (
              <div
                className={`FAQ-item ${
                  activeQuestion === index ? "FAQ-active" : ""
                }`}
                key={index}
              >
                <button
                  className="FAQ-question"
                  onClick={() => toggleQuestion(index)}
                  type="button"
                >
                  <span>{faq.question}</span>

                  <span
                    className={`FAQ-arrow ${
                      activeQuestion === index ? "FAQ-arrow-active" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`FAQ-answer ${
                    activeQuestion === index ? "FAQ-answer-open" : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Support;