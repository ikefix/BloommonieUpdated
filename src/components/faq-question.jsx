import { useState } from "react";
import "./faq-question.css";

const faqData = [
  {
    question: "Is Bloommonie compliant and secure?",
    answer:
      "Yes, Bloommonie uses secure encryption and industry-standard security practices to help protect your business information and transaction data.",
  },
  {
    question: "Do I still need a bookkeeper?",
    answer:
      "Bloommonie helps automate your daily bookkeeping, sales tracking, inventory management, and financial reports. You can still work with your accountant or bookkeeper whenever you need professional advice.",
  },
  {
    question: "How fast is synchronization?",
    answer:
      "Your business data is synchronized automatically whenever you are connected to the internet. Transactions made while offline are synced when your device comes back online.",
  },
  {
    question: "Can I cancel or change plans anytime?",
    answer:
      "Absolutely. You can upgrade or change your Bloommonie plan as your business grows. There are no long-term contracts or complicated lock-ins.",
  },
];

const FaqQuestion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-question">

      <div className="faq-container">

        {/* HEADER */}
        <div className="faq-header">

          <span className="faq-badge">
            COMMON QUESTIONS
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Have more questions about our business management software?
          </p>

        </div>


        {/* FAQ LIST */}
        <div className="faq-list">

          {faqData.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "faq-open" : ""}`}
                key={index}
              >

                <button
                  className="faq-question-button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >

                  <span>
                    {faq.question}
                  </span>

                  <span
                    className={`faq-arrow ${
                      isOpen ? "arrow-open" : ""
                    }`}
                  >
                   ⌄
                  </span>

                </button>


                <div className="faq-answer-wrapper">

                  <div className="faq-answer">
                    {faq.answer}
                  </div>

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default FaqQuestion;