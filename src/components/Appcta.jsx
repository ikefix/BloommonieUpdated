
import "./AppCta.css";
import shopkeeper from "../assets/images/banner-shopkeeper.png";

/* ---------- icons (inline, no dependencies) ---------- */
const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#00d2ff" d="M3.6 2.2c-.3.3-.5.8-.5 1.4v17c0 .6.2 1.1.5 1.4l.1.1 9.5-9.5v-.2L3.7 2.1l-.1.1z" />
    <path fill="#00f076" d="M16.4 15.4l-3.2-3.2v-.2l3.2-3.2.1.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2l-3.8 2.1h-.1z" />
    <path fill="#ff3a44" d="M16.5 15.3L13.2 12 3.6 21.6c.4.4 1 .4 1.6.1l11.3-6.4" />
    <path fill="#ffd400" d="M16.5 8.7L5.2 2.3c-.6-.3-1.2-.3-1.6.1L13.2 12l3.3-3.3z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.6 12.6c0-2.4 2-3.5 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-4zM14.2 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.8-1.4z" />
  </svg>
);

const GrowthIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 17l5-5 4 4 7-8" />
    <path d="M15 8h5v5" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function AppCta({
  googlePlayUrl = "https://play.google.com/store/apps/details?id=bloommonie.app",

}) {
  return (
    <section className="ac" aria-labelledby="ac-title">
      <div className="ac__inner">

        {/* Left: copy + store buttons */}
        <div className="ac__copy">
          <span className="ac__badge">
            Ready to get started?
          </span>

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

            {/* Google Play */}
            <a
              className="ac__btn ac__btn--light"
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Bloommonie on Google Play"
            >
              <span className="ac__btn-icon">
                <GooglePlayIcon />
              </span>
              Get it on Google Play
            </a>

            {/* Apple App Store */}
            <a
              className="ac__btn ac__btn--ghost"
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Bloommonie on the App Store"
              onClick={(e) => {
                if (appStoreUrl === "googlePlayUrl") {
                  e.preventDefault();
                }
              }}
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

          <img
            className="ac__photo"
            src={shopkeeper}
            alt=""
          />

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
