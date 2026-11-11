import {
  ShoppingCart,
  Package,
  Receipt,
  BarChart3,
  Sparkles,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-react";
import "./Corefeatures.css";

const features = [
  {
    id: "sales",
    icon: ShoppingCart,
    title: "Sales Tracking",
    description:
      "See your daily, weekly and monthly sales, know what's selling and how much you're earning.",
    points: ["Record sales quickly", "Track top products", "Monitor performance"],
    link: "#sales-tracking",
  },
  {
    id: "inventory",
    icon: Package,
    title: "Inventory Management",
    description:
      "Keep track of your stock levels, get low stock alerts and identify missing goods before it becomes a problem.",
    points: ["Real-time stock updates", "Low stock notifications", "Barcode support"],
    link: "#inventory-management",
  },
  {
    id: "expenses",
    icon: Receipt,
    title: "Expense Tracking",
    description:
      "Record your business expenses and see where your money goes, so you can cut waste and increase profits.",
    points: ["Log daily expenses", "Categorize automatically", "Control your spending"],
    link: "#expense-tracking",
  },
  {
    id: "reports",
    icon: BarChart3,
    title: "Business Reports",
    description:
      "Get clear, easy-to-read reports that show your financial health and help you make smarter decisions.",
    points: ["Profit & loss reports", "Sales & expense breakdown", "Export & share reports"],
    link: "#business-reports",
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "AI Business Assistant",
    description:
      "Let our AI assistant help you understand your business data, answer questions, and give smart recommendations.",
    points: ["Ask questions in plain language", "Get instant insights", "Save time and work smarter"],
    link: "#ai-assistant",
  },
  {
    id: "loan",
    icon: ShieldCheck,
    title: "Loan Readiness",
    description:
      "Build reliable business records that can support your loan applications and unlock new opportunities for growth.",
    points: ["Organized financial records", "Prove your business performance", "Access funding with confidence"],
    link: "#loan-readiness",
  },
];

const Corefeatures = () => {
  return (
    <section className="corefeatures">
      <div className="corefeatures__container">
        <header className="corefeatures__header">
          <span className="corefeatures__badge">CORE FEATURES</span>
          <h2 className="corefeatures__title">
            Powerful features for your business growth
          </h2>
          <p className="corefeatures__subtitle">
            Everything you need to manage your business, save time, and make
            better decisions — all in one place.
          </p>
        </header>

        <div className="corefeatures__grid">
          {features.map(({ id, icon: Icon, title, description, points, link }) => (
            <article className="corefeatures__card" key={id}>
              <div className="corefeatures__icon">
                <Icon size={26} strokeWidth={2} aria-hidden="true" />
              </div>

              <h3 className="corefeatures__card-title">{title}</h3>
              <p className="corefeatures__card-text">{description}</p>

              <ul className="corefeatures__list">
                {points.map((point) => (
                  <li className="corefeatures__list-item" key={point}>
                    <Check className="corefeatures__check" size={16} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <a className="corefeatures__link" href={link}>
                Learn more
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Corefeatures;