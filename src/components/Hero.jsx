import "./Hero.css";
import { useEffect } from "react";
import api from "../services/api";

const Hero = () => {
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await api.get("/hero");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <section className="hero">

      {/* Background stars */}
      <div className="hero-stars"></div>

      <div className="hero-content">

        {/* Badge */}
        <div className="hero-badge">
          <span className="badge-dot"></span>
          AI-POWERED BOOKKEEPING
        </div>

        {/* Heading */}
      <h1 className="hero-title">
        <span className="hero-title-line">
          Simple Book-keeping for
        </span>

        <span className="hero-title-line hero-title-highlight">
          SMEs, Big and Growing Business In Africa
        </span>
      </h1>

        {/* Description */}
        <p className="hero-description">
          Ledgr automates your categorization, syncing, and financial
          reporting in real-time. Keep your focus on growing your business
          while we handle the ledger.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started Free
            <span>→</span>
          </button>

          <button className="secondary-btn">
            See How it Works
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="dashboard-preview">

          {/* Sidebar */}
          <aside className="dashboard-sidebar">

            <div className="company-info">
              <div className="company-logo">
                <span></span>
              </div>

              <div>
                <h4>Acme Corp</h4>
                <small>Ledgr Verified</small>
              </div>
            </div>

            <nav className="dashboard-nav">

              <div className="nav-item active">
                <span className="nav-icon"></span>
                <span>Overview</span>
              </div>

              <div className="nav-item">
                <span className="nav-icon"></span>
                <span>Transactions</span>
              </div>

              <div className="nav-item">
                <span className="nav-icon"></span>
                <span>Invoices</span>
              </div>

              <div className="nav-item">
                <span className="nav-icon"></span>
                <span>Tax Center</span>
              </div>

              <div className="nav-item">
                <span className="nav-icon"></span>
                <span>Settings</span>
              </div>

            </nav>
          </aside>

          {/* Main Dashboard */}
          <main className="dashboard-main">

            <div className="stats-grid">

              <div className="stat-card">
                <span className="stat-label">
                  Cash Flow (Monthly)
                </span>

                <strong>$48,259.00</strong>

                <span className="stat-status">
                  ✓ Fully Synced
                </span>
              </div>

              <div className="stat-card">
                <span className="stat-label">
                  Uncategorized
                </span>

                <strong>0 Transactions</strong>

                <span className="stat-status ai-status">
                  ⚡ AI Auto-Reconciled
                </span>
              </div>

              <div className="stat-card">
                <span className="stat-label">
                  Tax Write-Offs
                </span>

                <strong>$4,812.50</strong>

                <span className="stat-status">
                  ✓ Fully Synced
                </span>
              </div>

            </div>

            <div className="growth-card">

              <div className="growth-header">
                <h3>Real-time Growth Curve</h3>

                <span>+24% vs Prev. Month</span>
              </div>

              <div className="chart-container">

                <svg
                  className="growth-chart"
                  viewBox="0 0 800 260"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="
                      20,190
                      80,180
                      140,195
                      210,155
                      275,135
                      340,140
                      405,95
                      470,78
                      535,52
                      600,58
                      665,40
                    "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />

                  <circle cx="20" cy="190" r="4" />
                  <circle cx="80" cy="180" r="4" />
                  <circle cx="140" cy="195" r="4" />
                  <circle cx="210" cy="155" r="4" />
                  <circle cx="275" cy="135" r="4" />
                  <circle cx="340" cy="140" r="4" />
                  <circle cx="405" cy="95" r="4" />
                  <circle cx="470" cy="78" r="4" />
                  <circle cx="535" cy="52" r="4" />
                  <circle cx="600" cy="58" r="4" />
                  <circle cx="665" cy="40" r="4" />
                </svg>

              </div>

            </div>

          </main>
        </div>
      </div>
    </section>
  );
};

export default Hero;