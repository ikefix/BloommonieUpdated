import { Play, TrendingUp } from "lucide-react";
import "./Ctabanner.css";
import heroMockup from "../assets/images/cta-woman.png"; // Replace with your actual image path

const Ctabanner = () => {
  return (
    <section className="ctabanner">
      <div className="ctabanner__container">
        <div className="ctabanner__content">
          <span className="ctabanner__badge">READY TO GROW?</span>

          <h2 className="ctabanner__title">
            Start managing your business with Bloommonie today
          </h2>

          <p className="ctabanner__text">
            Join hundreds of Nigerian SMEs already using Bloommonie to track
            sales, manage inventory, and get clear business insights.
          </p>

          <div className="ctabanner__actions">
            <button type="button" className="ctabanner__btn ctabanner__btn--primary">
              Start Free Trial
            </button>

            <button type="button" className="ctabanner__btn ctabanner__btn--outline">
              <Play size={14} aria-hidden="true" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="ctabanner__visual">
          {/* Replace with your image of the woman holding a tablet */}
           <img
               className="featurehero__image"
               src={heroMockup}
               alt="Bloommonie cta"
             />

          <div className="ctabanner__card">
            <span className="ctabanner__card-icon">
              <TrendingUp size={20} aria-hidden="true" />
            </span>
            <p className="ctabanner__card-text">
              <span>More sales</span>
              <span>Better insights</span>
              <span>Bigger dreams</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ctabanner;