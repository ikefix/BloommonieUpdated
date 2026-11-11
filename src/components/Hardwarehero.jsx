import "./Hardwarehero.css";
import Navbar from "./Navbar";

const Hardwarehero = () => {
  return (
    <section className="Hardwarehero">
      <Navbar />

      <div className="hardware-hero-container">

        {/* LEFT CONTENT */}
        <div className="hardware-hero-content">

          <div className="hardware-hero-badge">
            RELIABLE. MODERN. BUILT FOR BUSINESS
          </div>

          <h1>
            Hardware built for
            <br />
            modern businesses
          </h1>

          <p className="hardware-hero-description">
            Sleek point-of-sale devices, high-precision scanners, and reliable
            accessories designed to work perfectly with your software.
          </p>

          <div className="hardware-hero-actions">
            <a href="#products" className="hardware-primary-btn">
              Shop All Hardware
              <span>→</span>
            </a>

            <a href="#bundles" className="hardware-secondary-btn">
              View Bundles
            </a>
          </div>

          <div className="hardware-hero-benefits">

            <div className="hardware-benefit">
              <div className="benefit-icon">✓</div>
              <div>
                <strong>12-Month Warranty</strong>
                <span>All products covered</span>
              </div>
            </div>

            <div className="hardware-benefit">
              <div className="benefit-icon">🚚</div>
              <div>
                <strong>Fast Shipping</strong>
                <span>Delivery in 1–3 days</span>
              </div>
            </div>

            <div className="hardware-benefit">
              <div className="benefit-icon">↻</div>
              <div>
                <strong>30-Day Returns</strong>
                <span>Hassle-free returns</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT PRODUCT AREA */}
        <div className="hardware-hero-visual">

          <div className="hardware-trust-badge">
            <div className="trust-icon">✓</div>
            <div>
              <strong>Trusted by</strong>
              <span>10,000+ businesses</span>
            </div>
          </div>

          <div className="hardware-product-glow"></div>

          <div className="hardware-product-image">
            <img
              src="/images/pos-hardware-hero.png"
              alt="Ledgr POS hardware"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hardwarehero;