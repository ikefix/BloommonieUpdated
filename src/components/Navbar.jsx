
import "./Navbar.css";
import { Link } from "react-router-dom";
import bloommonieLogo from "../assets/images/bloommonie-logo.png";

const Navbar = () => {
  return (
    <nav className="hero-navbar">

      <Link to="/" className="navbar-logo">
        <img
          src={bloommonieLogo}
          alt="Bloommonie Logo"
          className="navbar-logo-img"
        />
        <span className="logo-text">Bloommonie</span>
      </Link>

      <div className="navbar-links">
        <Link to="/features">Features</Link>
        <Link to="/price">Pricing</Link>

        <div className="nav-dropdown">
          <button className="nav-dropdown-btn">
            Resources
            <span className="dropdown-arrow">⌄</span>
          </button>
          <div className="dropdown-menu">
            <Link to="/blog">Blog</Link>
            <Link to="/guides">Guides</Link>
            {/* <Link to="/faq">FAQ</Link> */}
          </div>
        </div>

        <div className="nav-dropdown">
          <button className="nav-dropdown-btn">
            Platforms
            <span className="dropdown-arrow">⌄</span>
          </button>
          <div className="dropdown-menu">
            {/* <Link to="/web">Web App</Link> */}
            <Link to="/desktop">Desktop App</Link>
            <Link to="/mobile">Mobile App</Link>
          </div>
        </div>

        <Link to="/hardware">Hardware</Link>
      </div>

      <div className="navbar-actions">
        {/* <Link to="/login" className="login-btn">
          Log in
        </Link>

        <Link to="/get-started" className="nav-cta">
          Get Started <span>→</span>
        </Link> */}
        <a href="https://bloommonie.store/login" className="login-btn" target="_blank" rel="noopener noreferrer">
          Log in
        </a>

        <a href="https://bloommonie.store/register" className="nav-cta" target="_blank" rel="noopener noreferrer">
          Get Started <span>→</span>
        </a>
      </div>

      <button className="mobile-menu" aria-label="Open navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
};

export default Navbar;
