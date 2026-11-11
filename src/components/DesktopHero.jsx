import "./DesktopHero.css";
import mockupImage from "../assets/images/getstarted-mock.png";

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 5.5l7.5-1v7H3zM11.5 4.4L21 3v8.5h-9.5zM3 12.5h7.5v7L3 18.500zM11.5 12.5H21V21l-9.5-1.400z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.6 12.6c0-2.4 2-3.5 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.300-2.700 1.300-2.800-.1 0-2.500-1-2.500-4zM14.200 5.400c.7-.8 1.100-1.900 1-3-1 0-2.100.7-2.800 1.500-.6.700-1.200 1.800-1 2.900 1.100.1 2.200-.6 2.800-1.400z" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ShieldCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.500l8 3v6c0 5-3.400 8.500-8 10-4.600-1.500-8-5-8-10v-6z" />
    <path d="M8.500 12l2.500 2.500 4.500-5" />
  </svg>
);

const CurvedArrow = () => (
  <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M44 4c4 14-2 28-26 40" />
    <path d="M8 36l10 8-12 4" />
  </svg>
);

export default function DesktopHero({
  windowsUrl = "#",
  macUrl = "#",
  // Put your image in the /public folder so this path can never crash the page
  mockupSrc = mockupImage,
}) {
  return (
    <section className="dh" aria-labelledby="dh-title">
      <div className="dh__inner">
        {/* Left: copy */}
        <div className="dh__copy">
          <span className="dh__badge">DESKTOP APP</span>

          <h1 id="dh-title" className="dh__title">
            Download Bloommonie
            <br />
            for Desktop
          </h1>

          <p className="dh__text">
            Get the full power of Bloommonie on your computer. Manage your
            sales, inventory, expenses and reports with a bigger screen, more
            control and greater productivity.
          </p>

          <div className="dh__buttons">
            <a
              className="dh__btn dh__btn--primary"
              href={windowsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dh__btn-icon"><WindowsIcon /></span>
              Download for Windows
              <span className="dh__btn-arrow"><ArrowRight /></span>
            </a>

            <a
              className="dh__btn dh__btn--outline"
              href={macUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dh__btn-icon"><AppleIcon /></span>
              Download for macOS
              <span className="dh__btn-arrow"><ArrowRight /></span>
            </a>
          </div>

          <p className="dh__free">
            <span className="dh__free-icon"><ShieldCheck /></span>
            Free to download
            <span className="dh__dot" aria-hidden="true">·</span>
            No credit card required
          </p>
        </div>

        {/* Right: laptop */}
        <div className="dh__visual">
          <div className="dh__blob" />

          <img
            className="dh__laptop"
            src={mockupSrc}
            alt="Bloommonie dashboard on a laptop showing sales overview and quick actions"
            width="620"
            height="400"
          />

          <p className="dh__note" aria-hidden="true">
            Manage your
            <br />
            business, from
            <br />
            anywhere.
            <span className="dh__note-arrow"><CurvedArrow /></span>
          </p>
        </div>
      </div>
    </section>
  );
}