import "./AppCta.css";
import shopkeeper from "../assets/images/banner-shopkeeper.png";

/* ---------- icons (inline, no dependencies) ---------- */
const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#00d2ff" d="M3.6 2.2c-.3.3-.5.8-.5 1.400v17c0 .6.2 1.100.5 1.400l.1.1 9.500-9.500v-.2L3.700 2.100l-.1.1z" />
    <path fill="#00f076" d="M16.400 15.400l-3.200-3.200v-.2l3.200-3.200.1.1 3.800 2.200c1.100.6 1.100 1.600 0 2.200l-3.800 2.100h-.1z" />
    <path fill="#ff3a44" d="M16.500 15.300L13.200 12 3.600 21.600c.4.400 1 .4 1.600.1l11.300-6.400" />
    <path fill="#ffd400" d="M16.500 8.700L5.200 2.300c-.6-.3-1.200-.3-1.600.1L13.200 12l3.300-3.300z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.600 12.600c0-2.400 2-3.500 2.100-3.600-1.100-1.700-2.900-1.900-3.500-1.900-1.500-.2-2.900.9-3.700.9-.8 0-1.900-.9-3.200-.8-1.600 0-3.100 1-4 2.400-1.700 3-.4 7.400 1.200 9.800.8 1.200 1.800 2.500 3 2.400 1.200 0 1.700-.8 3.100-.8 1.500 0 1.900.8 3.200.8 1.300 0 2.200-1.200 3-2.400.9-1.400 1.300-2.700 1.300-2.800-.1 0-2.500-1-2.500-4zM14.200 5.400c.7-.8 1.100-1.900 1-3-1 0-2.100.7-2.800 1.500-.6.700-1.200 1.800-1 2.900 1.100.1 2.200-.6 2.800-1.400z" />
  </svg>
);

const GrowthIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 17l5-5 4 4 7-8" />
    <path d="M15 8h5v5" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function AppCta({
  googlePlayUrl = "#",
  appStoreUrl = "#",
}) {
  return (
    <section className="ac" aria-labelledby="ac-title">
      <div className="ac__inner">
        {/* Left: copy + store buttons */}
        <div className="ac__copy">
          <span className="ac__badge">Ready to get started?</span>

          <h2 id="ac-title" className="ac__title">
            Download Bloommonie today{" "}
            <br />
            and take control of your business.
          </h2>

          <p className="ac__text">
            Join thousands of Nigerian SMEs and MSMEs already growing with
            Bloommonie.
          </p>

          <div className="ac__buttons">
            <a
              className="ac__btn ac__btn--light"
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ac__btn-icon">
                <GooglePlayIcon />
              </span>
              Get it on Google Play
            </a>

            <a
              className="ac__btn ac__btn--ghost"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ac__btn-icon">
                <AppleIcon />
              </span>
              Download on the App Store
            </a>
          </div>
        </div>

        {/* Right: photo + floating card */}
        <div className="ac__visual" aria-hidden="true">
          <div className="ac__blob" />
          <img className="ac__photo" src={shopkeeper} alt="" />

          <div className="ac__card">
            <span className="ac__card-icon">
              <GrowthIcon />
            </span>
            <p className="ac__card-text">
              Manage, grow,
              <br />
              get funded.
            </p>
            <span className="ac__card-arrow">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}