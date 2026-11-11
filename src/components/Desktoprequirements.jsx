import "./DesktopRequirements.css";

/* ---------- icons (inline, no dependencies) ---------- */
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const GearIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.400 15a1.700 1.700 0 0 0 .3 1.800l.1.1a2 2 0 1 1-2.800 2.800l-.1-.1a1.700 1.700 0 0 0-1.800-.3 1.700 1.700 0 0 0-1 1.500V21a2 2 0 1 1-4 0v-.1a1.700 1.700 0 0 0-1.100-1.500 1.700 1.700 0 0 0-1.800.3l-.1.1a2 2 0 1 1-2.800-2.800l.1-.1a1.700 1.700 0 0 0 .3-1.800 1.700 1.700 0 0 0-1.500-1H3a2 2 0 1 1 0-4h.1a1.700 1.700 0 0 0 1.500-1.100 1.700 1.700 0 0 0-.3-1.800l-.1-.1a2 2 0 1 1 2.800-2.800l.1.1a1.700 1.700 0 0 0 1.800.3h0a1.700 1.700 0 0 0 1-1.500V3a2 2 0 1 1 4 0v.1a1.700 1.700 0 0 0 1 1.500h0a1.700 1.700 0 0 0 1.800-.3l.1-.1a2 2 0 1 1 2.800 2.800l-.1.1a1.700 1.700 0 0 0-.3 1.800v0a1.700 1.700 0 0 0 1.500 1H21a2 2 0 1 1 0 4h-.1a1.700 1.700 0 0 0-1.500 1z" />
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 5.500l7.500-1v7H3v-6zM11.500 4.350L21 3v8.500h-9.500V4.350zM3 12.500h7.500v7L3 18.500v-6zM11.500 12.500H21V21l-9.500-1.350V12.500z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.600 12.600c0-2.400 2-3.500 2.100-3.600-1.100-1.700-2.900-1.900-3.500-1.900-1.500-.2-2.900.9-3.700.9-.8 0-1.900-.9-3.200-.8-1.600 0-3.100 1-4 2.400-1.700 3-.4 7.400 1.200 9.800.8 1.200 1.800 2.500 3 2.400 1.200 0 1.700-.8 3.100-.8 1.500 0 1.900.8 3.200.8 1.300 0 2.200-1.200 3-2.400.9-1.400 1.300-2.700 1.300-2.800-.1 0-2.500-1-2.500-4zM14.200 5.400c.7-.8 1.100-1.900 1-3-1 0-2.100.7-2.800 1.500-.6.700-1.200 1.800-1 2.900 1.100.1 2.200-.6 2.800-1.400z" />
  </svg>
);

const RamIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);

const StorageIcon = () => (
  <svg {...iconProps}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8M8 12h8" />
    <circle cx="9" cy="17" r="0.8" fill="currentColor" />
  </svg>
);

const LaptopIcon = () => (
  <svg {...iconProps}>
    <rect x="5" y="5" width="14" height="10" rx="1.500" />
    <path d="M2.500 19h19l-1.500-4H4l-1.500 4z" />
  </svg>
);

const ArrowIcon = () => (
  <svg {...iconProps} strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ---------- content ---------- */
const requirements = [
  { id: "win", icon: <WindowsIcon />, title: "Windows 10 or later", note: "(64-bit)" },
  { id: "mac", icon: <AppleIcon />, title: "macOS 11 or later", note: "(Intel or Apple Silicon)" },
  { id: "ram", icon: <RamIcon />, title: "4 GB RAM", note: "(minimum)" },
  { id: "disk", icon: <StorageIcon />, title: "500 MB", note: "free storage" },
];

export default function DesktopRequirements({
  windowsUrl = "#",
  macUrl = "#",
}) {
  return (
    <section className="dr" aria-label="System requirements and download">
      <div className="dr__panel">
        {/* Left: system requirements */}
        <div className="dr__req">
          <div className="dr__head">
            <span className="dr__gear">
              <GearIcon />
            </span>
            <div>
              <h2 className="dr__title">System Requirements</h2>
              <p className="dr__sub">
                Make sure your device meets the minimum requirements for a
                smooth experience.
              </p>
            </div>
          </div>

          <ul className="dr__list">
            {requirements.map((item) => (
              <li key={item.id} className="dr__item">
                <span className="dr__item-icon">{item.icon}</span>
                <span className="dr__item-text">
                  <strong>{item.title}</strong>
                  <small>{item.note}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: ready to get started */}
        <div className="dr__cta">
          <span className="dr__laptop">
            <LaptopIcon />
          </span>

          <div className="dr__cta-body">
            <h2 className="dr__title">Ready to get started?</h2>
            <p className="dr__sub">
              Download Bloommonie Desktop now and take control of your
              business.
            </p>

            <div className="dr__buttons">
              <a className="dr__btn dr__btn--primary" href={windowsUrl}>
                <span className="dr__btn-icon">
                  <WindowsIcon />
                </span>
                Download for Windows
                <span className="dr__btn-arrow">
                  <ArrowIcon />
                </span>
              </a>

              <a className="dr__btn dr__btn--outline" href={macUrl}>
                <span className="dr__btn-icon">
                  <AppleIcon />
                </span>
                Download for macOS
                <span className="dr__btn-arrow">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}