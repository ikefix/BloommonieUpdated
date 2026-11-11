import "./Morethanbookkeeping.css";

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

const SalesIcon = () => (
  <svg {...iconProps}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    <path d="M14 7l3-3 3 3" />
  </svg>
);

const InventoryIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
  </svg>
);

const ExpensesIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M14.5 8.5c-.5-.8-1.4-1.2-2.5-1.2-1.5 0-2.5.8-2.5 2 0 3 5 1.5 5 4.200 0 1.200-1 2.200-2.500 2.200-1.200 0-2.200-.5-2.700-1.400M12 6v1.300M12 16.700V18" />
  </svg>
);

const ReportsIcon = () => (
  <svg {...iconProps}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 8h6M9 12h6M9 16h3" />
  </svg>
);

const FinancingIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3l8 3v5.500c0 4.500-3.200 8.200-8 9.500-4.800-1.300-8-5-8-9.500V6l8-3z" />
    <path d="M9 12l2.200 2.200L15.500 10" />
  </svg>
);

const ArrowIcon = () => (
  <svg {...iconProps} strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ---------- content ---------- */
const features = [
  {
    id: "sales",
    icon: <SalesIcon />,
    title: "Track Sales",
    text: "See your daily, weekly and monthly sales at a glance.",
  },
  {
    id: "inventory",
    icon: <InventoryIcon />,
    title: "Manage Inventory",
    text: "Know what's in stock, what's running low, what to reorder.",
  },
  {
    id: "expenses",
    icon: <ExpensesIcon />,
    title: "Control Expenses",
    text: "Keep your costs in check and improve profitability.",
  },
  {
    id: "reports",
    icon: <ReportsIcon />,
    title: "Business Reports",
    text: "Get clear insights to make better decisions.",
  },
  {
    id: "financing",
    icon: <FinancingIcon />,
    title: "Access Financing",
    text: "Use your business records to get loans with less hassle.",
  },
];

export default function MoreThanBookkeeping({ onGetStarted }) {
  return (
    <section className="mtb" aria-labelledby="mtb-title">
      <div className="mtb__inner">
        {/* Left: copy + CTA */}
        <div className="mtb__intro">
          <h2 id="mtb-title" className="mtb__title">
            More than just
            <br />
            bookkeeping.
          </h2>

          <p className="mtb__text">
            Bloommonie gives you the tools to run your business smarter, save
            money, and get ready for growth.
          </p>

          <button type="button" className="mtb__cta" onClick={onGetStarted}>
            Get Started Today
            <span className="mtb__cta-icon">
              <ArrowIcon />
            </span>
          </button>
        </div>

        {/* Right: five features */}
        <ul className="mtb__list">
          {features.map((feature) => (
            <li key={feature.id} className="mtb__item">
              <span className="mtb__icon">{feature.icon}</span>
              <h3 className="mtb__item-title">{feature.title}</h3>
              <p className="mtb__item-text">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}