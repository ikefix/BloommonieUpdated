
import "./AppHero.css";
import phonesMockup from "../assets/images/Appdownload.png";

// Store icons
const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#00d2ff" d="M3.6 2.2c-.3.3-.5.8.5 1.4v17c0 .6.2 1.1.5 1.4l.1.1 9.5-9.5v-.2L3.7 2.1l-.1.1z" />
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

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4l2.5 2" />
  </svg>
);

const CurvedArrow = () => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M44 4c4 14-2 28-26 40" />
    <path d="M8 36l10 8-12 4" />
  </svg>
);

export default function AppHero({
  googlePlayUrl = "https://play.google.com/store/apps/details?id=bloommonie.app",
  appStoreUrl = "#"
}) {
  return (
    <section className="ah" aria-labelledby="ah-title">
      <div className="ah__inner">

        {/* Left: copy */}
        <div className="ah__copy">
          <span className="ah__badge">Mobile app</span>

          <h1 id="ah-title" className="ah__title">
            Take Bloommonie
            <br />
            with you, anywhere.
          </h1>

          <p className="ah__text">
            Manage your business on the go. Download the Bloommonie mobile app
            and get full access to your sales, inventory, expenses and reports —
            right from your phone.
          </p>

          <div className="ah__stores">

            {/* Google Play */}
            <a
              className="ah__store"
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Bloommonie on Google Play"
            >
              <span className="ah__store-icon">
                <GooglePlayIcon />
              </span>

              <span className="ah__store-text">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </a>

            {/* Apple App Store */}
            <a
              className="ah__store"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Bloommonie on the App Store"
              onClick={(e) => {
                if (appStoreUrl === "#") {
                  e.preventDefault();
                }
              }}
            >
              <span className="ah__store-icon">
                <AppleIcon />
              </span>

              <span className="ah__store-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>

          </div>

          <p className="ah__avail">
            <span className="ah__avail-icon">
              <PhoneIcon />
            </span>
            Available for Android and iOS
          </p>
        </div>

        {/* Right: phones */}
        <div className="ah__visual">
          <div className="ah__blob" />

          <img
            className="ah__phones"
            src={phonesMockup}
            alt="Bloommonie mobile app showing sales and recent transactions"
            width="560"
            height="520"
          />

          <p className="ah__note" aria-hidden="true">
            Your business,
            <br />
            in your pocket.

            <span className="ah__note-arrow">
              <CurvedArrow />
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

