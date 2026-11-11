import "./Cta.css";
import "./Footer.css";

const productLinks = ["Features", "Integrations", "Pricing", "Security"];
const resourceLinks = ["Guides", "FAQ", "Glossary", "Contact Support"];
const companyLinks = ["About Us", "Careers", "Press Kit", "Privacy Policy"];

const Footer = () => {
  return (
    <div className="Footer-page">
      <section className="Footer">
        <div className="Footer-inner">
          <h2 className="Footer-heading">Ready to completely automate your books?</h2>
          <p className="Footer-subtext">
            Join thousands of small business owners who traded stressful
            spreadsheets for real-time financials.
          </p>
          <div className="Footer-actions">
            <button className="Cta-button Cta-button--primary">
              Get Started Free
              <svg
                className="Cta-arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="Cta-button Cta-button--secondary">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      <footer className="Footer">
        <div className="Footer-top">
          <div className="Footer-brand">
            <div className="Footer-logoRow">
              <span className="Footer-logoMark">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 17L9 11L13 15L21 7"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 7H21V13"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="Footer-logoText">Bloommonie</span>
            </div>
            <p className="Footer-tagline">
              AI-driven bookkeeping that keeps you secure, balanced, and
              prepared. Built for fast-growing small business owners.
            </p>
          </div>

          <div className="Footer-column">
            <h3 className="Footer-columnTitle">Product</h3>
            <ul className="Footer-linkList">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="Footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="Footer-column">
            <h3 className="Footer-columnTitle">Resources</h3>
            <ul className="Footer-linkList">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="Footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="Footer-column">
            <h3 className="Footer-columnTitle">Company</h3>
            <ul className="Footer-linkList">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="Footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="Footer-divider" />

        <div className="Footer-bottom">
          <p className="Footer-copyright">© 2026 Bloommonie Inc. All rights reserved.</p>
          <div className="Footer-socials">
            <a href="#" className="Footer-socialLink" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" className="Footer-socialLink" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.6 4.78 6v6.4h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.8H10V9z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" className="Footer-socialLink" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;