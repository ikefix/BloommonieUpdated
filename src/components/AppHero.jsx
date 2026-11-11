import "./AppHero.css";
import phonesMockup from "../assets/images/Appdownload.png"; // Replace with your actual image path


/* ---------- store icons (inline, no dependencies) ---------- */
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

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4l2.500 2" />
  </svg>
);

const CurvedArrow = () => (
  <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M44 4c4 14-2 28-26 40" />
    <path d="M8 36l10 8-12 4" />
  </svg>
);

export default function AppHero({
  googlePlayUrl = "#",
  appStoreUrl = "#",
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
            <a
              className="ah__store"
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <span className="ah__store-icon">
                <GooglePlayIcon />
              </span>
              <span className="ah__store-text">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </a>

            <a
              className="ah__store"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
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
