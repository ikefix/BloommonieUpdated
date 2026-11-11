import { useLocation, useNavigate } from "react-router-dom";
import "./Categories.css";
import {
  Monitor,
  Printer,
  ScanLine,
  WalletCards,
  Tags,
  Cable,
} from "lucide-react";

const categories = [
  { icon: Monitor, title: "POS Terminals", slug: "pos-terminals" },
  { icon: Printer, title: "Receipt Printers", slug: "receipt-printers" },
  { icon: ScanLine, title: "Barcode Scanners", slug: "barcode-scanners" },
  { icon: WalletCards, title: "Cash Drawers", slug: "cash-drawers" },
  { icon: Tags, title: "Label Printers", slug: "label-printers" },
  { icon: Cable, title: "Accessories", slug: "accessories" },
];

const Categories = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedSlug = location.hash
    .replace(/^#/, "")
    .toLowerCase();

  const handleCategoryClick = (event, slug) => {
    event.preventDefault();

    navigate({
      pathname: "/hardware",
      hash: `#${slug}`,
    });

    setTimeout(() => {
      document
        .getElementById("hardware-products")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 150);
  };

  return (
    <section className="Categories">
      <div className="categories-container">
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <a
              href={`/hardware#${category.slug}`}
              className={`category-item ${
                selectedSlug === category.slug ||
                (!selectedSlug && index === 0)
                  ? "active"
                  : ""
              }`}
              key={category.slug}
              onClick={(event) =>
                handleCategoryClick(event, category.slug)
              }
            >
              <Icon className="category-icon" />
              <span>{category.title}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;