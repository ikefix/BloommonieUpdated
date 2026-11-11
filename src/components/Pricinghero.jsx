import { useState } from "react";
import "./Pricinghero.css";
import pricingHeroMockup from "../assets/images/pricing-hero-mockup.png";
const sideLinks = [
  { label: "Sales", icon: "S" },
  { label: "Inventory", icon: "I" },
  { label: "Expenses", icon: "E" },
  { label: "Reports", icon: "R" },
];

export default function PricingHero({ onBillingChange }) {
  const [billing, setBilling] = useState("monthly");

  const handleBilling = (value) => {
    setBilling(value);
    onBillingChange?.(value);
  };

  return (
    <section className="ph">
      <div className="ph__inner">
        {/* Left: copy */}
        <div>
          <span className="ph__badge">Simple &amp; transparent pricing</span>

          <h1 className="ph__title">
            Choose the plan
            <br />
            that fits your business.
          </h1>

          <p className="ph__text">
            Get started with Bloommonie and enjoy powerful tools for
            bookkeeping, inventory, sales and more. Pick a plan that fits your
            needs — upgrade anytime.
          </p>

          <div role="tablist" aria-label="Billing period" className="ph__toggle">
            <button
              role="tab"
              aria-selected={billing === "monthly"}
              onClick={() => handleBilling("monthly")}
              className={`ph__toggle-btn ${billing === "monthly" ? "is-active" : ""}`}
            >
              Monthly
            </button>
            <button
              role="tab"
              aria-selected={billing === "yearly"}
              onClick={() => handleBilling("yearly")}
              className={`ph__toggle-btn ${billing === "yearly" ? "is-active" : ""}`}
            >
              Yearly
              <span className="ph__save">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Right: visual */}
        <div className="ph__visual">
          <div className="ph__blob" />

          {/* <img
            src="/images/hero-shopkeeper.png"
            alt="Shop owner using Bloommonie on a tablet"
            className="ph__person"
          /> */}
         <img
                className="pricing-hero-mockup"
                src={pricingHeroMockup}
                alt="pricing hero mockup"
          />

          {/* Total sales card */}
          <div className="ph__card ph__sales">
            <p className="ph__sales-label">Total Sales</p>
            <p className="ph__sales-value">₦320,000</p>
            <p className="ph__sales-delta">▲ 12%</p>
            <svg viewBox="0 0 120 40" className="ph__sales-chart" fill="none">
              <path
                d="M2 34 C 15 30, 22 20, 35 26 S 55 12, 68 20 S 90 8, 118 4"
                stroke="#2563eb"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Stock alert card */}
          <div className="ph__card ph__alert">
            <span className="ph__alert-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a6 6 0 0 0-6 6v3.6L4.3 15A1 1 0 0 0 5.2 16.5h13.6a1 1 0 0 0 .9-1.5L18 11.6V8a6 6 0 0 0-6-6Zm-2 16a2 2 0 0 0 4 0h-4Z" />
              </svg>
            </span>
            <div>
              <p className="ph__alert-title">Stock Alert</p>
              <p className="ph__alert-text">
                Low stock on
                <br />
                Rice (10kg)
              </p>
            </div>
          </div>

          {/* Feature menu card */}
          <ul className="ph__card ph__menu">
            {sideLinks.map((item) => (
              <li key={item.label} className="ph__menu-item">
                <span className="ph__menu-icon">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}