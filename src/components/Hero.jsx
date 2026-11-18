
import "./Hero.css";
import { useEffect } from "react";
import api from "../services/api";
import shopifyDashboard from "../assets/images/getstarted-mock.png"; // Replace with your actual image path
import { useNavigate } from "react-router-dom";
const Hero = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await api.get("/hero");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }

    
    };

    fetchHeroData();
  }, []);

  return (
    <section className="hero">
      {/* Background stars */}
      <div className="hero-stars"></div>

      <div className="hero-content">

        {/* Heading */}
        <h1 className="hero-title">
          <span className="hero-title-line">
            Keep Your Sales and Stock in Check
          </span>

          <span className="hero-title-line hero-title-highlight">
            Grow Your Business with Ease.
          </span>
        </h1>

        {/* Description */}
        <p className="hero-description">
          Stop losing track of sales, missing stock, and wondering
          where your money goes. Bloommonie helps you manage sales,
          monitor inventory, track expenses, and understand your
          business — all in one smart platform.
        </p>

        {/* Buttons */}

        <div className="hero-buttons">
          <a href="https://bloommonie.store/register" className="primary-btn">
            Get Started Free
            <span>→</span>
          </a>

          <a href="https://bloommonie.store" className="secondary-btn">
            See How it Works
          </a>
        </div>

        {/* Software Dashboard Preview */}
        <div className="hero-software-preview">
          <img
            src={shopifyDashboard}
            alt="Bloommonie business management dashboard showing sales, inventory and business reports"
            className="hero-dashboard-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
