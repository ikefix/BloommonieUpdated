import "./AppDownloadSteps.css";

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
    <path d="M16.6 12.6c0-2.4 2-3.5 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.700.9-.8 0-1.900-.9-3.200-.8-1.600 0-3.100 1-4 2.400-1.700 3-.4 7.400 1.200 9.800.8 1.200 1.800 2.500 3 2.400 1.200 0 1.700-.8 3.100-.8 1.500 0 1.900.8 3.200.8 1.300 0 2.200-1.200 3-2.400.9-1.400 1.300-2.700 1.300-2.800-.1 0-2.500-1-2.500-4zM14.200 5.400c.7-.8 1.100-1.900 1-3-1 0-2.100.7-2.800 1.500-.6.700-1.200 1.800-1 2.900 1.100.1 2.200-.6 2.800-1.400z" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const CurvedArrow = () => (
  <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 56c-4-14 2-28 26-40" />
    <path d="M46 24l-10-8 12-4" />
  </svg>
);

const steps = [
  {
    title: "Visit your app store",
    text: "Open Google Play Store or Apple App Store on your phone.",
  },
  {
    title: "Search for Bloommonie",
    text: "Type “Bloommonie” and tap on the app.",
  },
  {
    title: "Install and start",
    text: "Open the app, log in, and manage your business right away.",
  },
];

export default function AppDownloadSteps({
  googlePlayUrl = "#",
  appStoreUrl = "#",
}) {
  return (
    <section className="hd" aria-labelledby="hd-title">
      <div className="hd__inner">
        {/* Left: steps */}
        <div className="hd__copy">
          <span className="hd__badge">HOW TO DOWNLOAD</span>
          <h2 id="hd-title" className="hd__title">
            Get the Bloommonie app
            <br />
            in 3 simple steps.
          </h2>

          <ol className="hd__steps">
            {steps.map((s, i) => (
              <li className="hd__step" key={s.title}>
                <span className="hd__num">{i + 1}</span>
                <div>
                  <h3 className="hd__step-title">{s.title}</h3>
                  <p className="hd__step-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Middle: phone */}
        <div className="hd__visual" aria-hidden="true">
          <div className="hd__blob" />
          <div className="hd__phone">
            <span className="hd__notch" />
            <div className="hd__screen">
              <span className="hd__logo">B</span>
              <strong className="hd__brand">Bloommonie</strong>
              <small className="hd__tag">
                Smart Business.
                <br />
                Better Tomorrow.
              </small>
            </div>
          </div>
        </div>

        {/* Right: store cards */}
        <div className="hd__stores">
          <a className="hd__store" href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
            <span className="hd__store-icon"><GooglePlayIcon /></span>
            <span className="hd__store-text">
              <small>Get it on</small>
              <strong>Google Play</strong>
            </span>
            <span className="hd__store-arrow"><ArrowRight /></span>
          </a>

          <a className="hd__store" href={appStoreUrl} target="_blank" rel="noopener noreferrer">
            <span className="hd__store-icon"><AppleIcon /></span>
            <span className="hd__store-text">
              <small>Download on the</small>
              <strong>App Store</strong>
            </span>
            <span className="hd__store-arrow"><ArrowRight /></span>
          </a>

          <p className="hd__note" aria-hidden="true">
            <span className="hd__note-arrow"><CurvedArrow /></span>
            Fast. Secure.
            <br />
            Easy to use.
          </p>
        </div>
      </div>
    </section>
  );
}