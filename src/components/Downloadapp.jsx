import "./Downloadapp.css";
import downloadImage from "../assets/images/bloommonie-download.png";

const Downloadapp = () => {
  return (
    <section className="Downloadapp">
      <div className="download-container">

        <div className="download-content">

          <span className="download-badge">
            MOBILE & DESKTOP
          </span>

          <h2>Take Bloommonie everywhere</h2>

          <p>
            Access your business from anywhere — on your morning commute
            or at your desk.
          </p>

        </div>

        <div className="download-image">
          <img
            src={downloadImage}
            alt="Bloommonie mobile app and point of sale"
          />
        </div>

      </div>
    </section>
  );
};

export default Downloadapp;