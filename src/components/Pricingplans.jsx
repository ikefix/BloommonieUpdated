import "./PricingPlans.css";
import "./Pricingplans.css";

const YEARLY_DISCOUNT = 0.2; // matches the "Save 20%" badge in the hero

/* ---------- icons (inline, no dependencies) ---------- */
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const StoreIcon = () => (
  <svg {...iconProps}>
    <path d="M4 9l1.5-5h13L20 9" />
    <path d="M4 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
    <path d="M5 11.5V20h14v-8.5" />
    <path d="M10 20v-5h4v5" />
  </svg>
);

const ShopIcon = () => (
  <svg {...iconProps}>
    <path d="M3 9l1.5-5h15L21 9" />
    <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
    <path d="M4.5 12v8h15v-8" />
    <path d="M9 20v-4h6v4" />
  </svg>
);

const BuildingIcon = () => (
  <svg {...iconProps}>
    <rect x="5" y="3" width="10" height="18" rx="1" />
    <path d="M15 9h4v12h-4" />
    <path d="M8 7h4M8 11h4M8 15h4" />
  </svg>
);

const CrownIcon = () => (
  <svg {...iconProps}>
    <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

/* ---------- plan data ---------- */
const plans = [
  {
    id: "basic",
    name: "Basic",
    icon: <StoreIcon />,
    description: "Perfect for small shops and new businesses.",
    monthly: 5000,
    cta: "Get Started",
    features: [
      "1 Store",
      "50 Products",
      "Sales & POS",
      "Inventory Management",
      "Expense Tracking",
      "Basic Reports",
      "Email Support",
    ],
  },
  {
    id: "lite",
    name: "Lite",
    icon: <ShopIcon />,
    description: "Ideal for growing businesses and active traders.",
    monthly: 7000,
    popular: true,
    cta: "Get Started",
    features: [
      "2 Stores",
      "Unlimited Products",
      "Sales & POS",
      "Inventory Management",
      "Expense Tracking",
      "Advanced Reports",
      "Remote Access",
      "Priority Support",
    ],
  },
  {
    id: "business",
    name: "Business",
    icon: <BuildingIcon />,
    description: "For established businesses with multiple stores.",
    monthly: 10000,
    cta: "Get Started",
    features: [
      "Unlimited Stores",
      "Unlimited Products",
      "Sales & POS",
      "Inventory Management",
      "Expense Tracking",
      "Advanced Reports",
      "Business Records",
      "AI Insights",
      "Priority Support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: <CrownIcon />,
    description: "Custom solutions for large businesses and organizations.",
    custom: true,
    customNote: "Let's build what you need.",
    cta: "Contact Us",
    features: [
      "Everything in Business",
      "Multi-location Support",
      "Advanced Analytics",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Training & Onboarding",
      "24/7 Support",
    ],
  },
];

const naira = (n) => `₦${Math.round(n).toLocaleString("en-NG")}`;

export default function PricingPlans({ billing = "monthly", onSelectPlan }) {
  const isYearly = billing === "yearly";

  return (
    <section className="pp" aria-label="Pricing plans">
      <div className="pp__grid">
        {plans.map((plan) => {
          // yearly: discounted price shown per month, with the yearly total underneath
          const perMonth = isYearly
            ? plan.monthly * (1 - YEARLY_DISCOUNT)
            : plan.monthly;
          const yearlyTotal = plan.monthly ? perMonth * 12 : 0;

          return (
            <article
              key={plan.id}
              className={`pp__card ${plan.popular ? "pp__card--popular" : ""}`}
            >
              {plan.popular && <span className="pp__ribbon">Most Popular</span>}

              <span className="pp__icon">{plan.icon}</span>

              <h3 className="pp__name">{plan.name}</h3>
              <p className="pp__desc">{plan.description}</p>

              {plan.custom ? (
                <div className="pp__price pp__price--custom">
                  <p className="pp__custom-title">Custom Pricing</p>
                  <p className="pp__custom-note">{plan.customNote}</p>
                </div>
              ) : (
                <div className="pp__price">
                  <p className="pp__amount">
                    <span className="pp__figure">{naira(perMonth)}</span>
                    <span className="pp__per">/month</span>
                  </p>
                  {isYearly && (
                    <p className="pp__billed">
                      Billed {naira(yearlyTotal)} yearly
                    </p>
                  )}
                </div>
              )}

              <button
                type="button"
                className={`pp__btn ${plan.popular ? "pp__btn--primary" : "pp__btn--outline"}`}
                onClick={() => onSelectPlan?.(plan.id, billing)}
              >
                {plan.cta}
              </button>

              <ul className="pp__features">
                {plan.features.map((feature) => (
                  <li key={feature} className="pp__feature">
                    <span className="pp__check">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Usage — keep the billing state in the parent so the hero
   toggle and the cards stay in sync:

   import { useState } from "react";
   import PricingHero from "./PricingHero";
   import PricingPlans from "./PricingPlans";

   export default function PricingPage() {
     const [billing, setBilling] = useState("monthly");
     return (
       <>
         <PricingHero onBillingChange={setBilling} />
         <PricingPlans
           billing={billing}
           onSelectPlan={(id, period) => console.log(id, period)}
         />
       </>
     );
   }
------------------------------------------------------------ */