import "./DesktopFeatures.css";

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

const MonitorIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);

const BoltIcon = () => (
  <svg {...iconProps}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);

const CloudIcon = () => (
  <svg {...iconProps}>
    <path d="M7 18a4 4 0 0 1-.5-7.970A5.500 5.500 0 0 1 17 8.500a4.500 4.500 0 0 1 .5 9.500H7z" />
  </svg>
);

const ShieldIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3l8 3v5.500c0 4.500-3.200 8.200-8 9.500-4.800-1.300-8-5-8-9.500V6l8-3z" />
  </svg>
);

const SyncIcon = () => (
  <svg {...iconProps}>
    <path d="M20 11a8 8 0 0 0-14.500-4M4 5v3.500h3.500" />
    <path d="M4 13a8 8 0 0 0 14.500 4M20 19v-3.500h-3.500" />
  </svg>
);

/* ---------- content ---------- */
const features = [
  {
    id: "screen",
    icon: <MonitorIcon />,
    title: "Bigger Screen",
    text: "Easier to manage your data and work faster.",
  },
  {
    id: "functionality",
    icon: <BoltIcon />,
    title: "Full Functionality",
    text: "Access all features — sales, inventory, expenses, reports and more.",
  },
  {
    id: "offline",
    icon: <CloudIcon />,
    title: "Works Offline",
    text: "Keep working even without internet connection.",
  },
  {
    id: "secure",
    icon: <ShieldIcon />,
    title: "Secure & Reliable",
    text: "Your data is always protected with bank-level security.",
  },
  {
    id: "sync",
    icon: <SyncIcon />,
    title: "Sync Across Devices",
    text: "Stay in sync with your mobile app and web version.",
  },
];

export default function DesktopFeatures() {
  return (
    <section className="df" aria-label="Desktop app features">
      <ul className="df__list">
        {features.map((feature) => (
          <li key={feature.id} className="df__item">
            <span className="df__icon">{feature.icon}</span>
            <h3 className="df__title">{feature.title}</h3>
            <p className="df__text">{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}