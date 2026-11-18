import "./Trusted.css";

import clarastef from "../assets/images/clarasteflogo.png";

// Add more logos here as you get them.
//   keepColor: true  -> show the logo in its own colors (use for logos that
//                       are already light, like ClaraStef)
//   large: true      -> bigger logo, for logos that include text
const companies = [
  { name: "ClaraStef", logo: clarastef, keepColor: true, large: true },
];

// With fewer logos than this, a sliding marquee looks empty, so they are
// shown as a centered static row instead. At this number or more, the
// slider starts automatically.
const MIN_LOGOS_FOR_SLIDER = 5;

const Trusted = () => {
  const slides = companies.length >= MIN_LOGOS_FOR_SLIDER;

  // Slider: rendered twice so the loop is seamless
  const items = slides ? [...companies, ...companies] : companies;

  return (
    <section className="trusted">
      <div className="trusted-container">
        <p className="trusted-title">
          TRUSTED BY 5,000+ FAST-GROWING BUSINESSES IN AFRICA
        </p>

        <div
          className={slides ? "trusted-slider" : "trusted-slider trusted-slider-static"}
        >
          <div
            className={slides ? "trusted-track" : "trusted-track trusted-track-static"}
          >
            {items.map(({ name, logo, keepColor, large }, index) => {
              const isCopy = index >= companies.length;

              const logoClass = [
                "trusted-logo",
                keepColor ? "trusted-logo-color" : "",
                large ? "trusted-logo-large" : "",
              ]
                .join(" ")
                .trim();

              return (
                <div
                  className="trusted-company"
                  key={`${name}-${index}`}
                  aria-hidden={isCopy}
                >
                  <img
                    src={logo}
                    alt={isCopy ? "" : `${name} logo`}
                    className={logoClass}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;