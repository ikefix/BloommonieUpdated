import "./AppFeatures.css";

const icon = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const features = [
  {
    title: "Track Sales",
    text: "See your daily, weekly and monthly sales at a glance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="3" y="12" width="4.5" height="9" rx="1" />
        <rect x="9.75" y="3" width="4.5" height="18" rx="1" />
        <rect x="16.5" y="8" width="4.5" height="13" rx="1" />
      </svg>
    ),
  },
  {
    title: "Manage Inventory",
    text: "Keep track of your stock levels, get low stock alerts and avoid missing goods.",
    icon: icon(
      <>
        <path d="M12 2.5l8 4.5v10l-8 4.5-8-4.5V7z" />
        <path d="M4 7l8 4.5L20 7M12 11.5v10" />
      </>
    ),
  },
  {
    title: "Record Expenses",
    text: "Log your business expenses and monitor your spending in real time.",
    icon: icon(
      <>
        <rect x="5" y="2.5" width="14" height="19" rx="2" />
        <path d="M9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
      </>
    ),
  },
  {
    title: "Get Reports",
    text: "Access clear and simple reports to make better decisions.",
    icon: icon(
      <>
        <path d="M6 2.5h12a1 1 0 011 1V21l-3-2-3 2-3-2-3 2V3.500a1 1 0 011-1z" />
        <path d="M9 8h6M9 12h6" />
      </>
    ),
  },
  {
    title: "Stay Secure",
    text: "Your data is safe with bank-level encryption and secure login.",
    icon: icon(
      <>
        <path d="M12 2.5l8 3v6c0 5-3.400 8.500-8 10-4.600-1.500-8-5-8-10v-6z" />
        <path d="M12 7v10" />
      </>
    ),
  },
  {
    title: "Work Offline",
    text: "Keep managing your business even without internet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7 19a4.500 4.500 0 01-.6-8.960A6 6 0 0118 9.500a4.750 4.750 0 01-.250 9.500z" />
      </svg>
    ),
  },
];

export default function AppFeatures() {
  return (
    <section className="af" aria-labelledby="af-title">
      <div className="af__inner">
        <span className="af__badge">APP FEATURES</span>
        <h2 id="af-title" className="af__title">
          Everything you need, on your phone.
        </h2>
        <p className="af__subtitle">
          The Bloommonie mobile app gives you the power to manage your business
          <br />
          from anywhere, at any time.
        </p>

        <div className="af__grid">
          {features.map((f) => (
            <article className="af__card" key={f.title}>
              <span className="af__icon">{f.icon}</span>
              <h3 className="af__card-title">{f.title}</h3>
              <p className="af__card-text">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}