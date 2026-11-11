import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Loginsection.css";

const Loginsection = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [showSignupPass, setShowSignupPass] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [signupForm, setSignupForm] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;

    setLoginForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSignupForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // LOGIN
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await api.post("/login", {
        email: loginForm.email,
        password: loginForm.password,
      });

      const responseData = response.data;

      const token =
        responseData.token ||
        responseData.access_token ||
        responseData.data?.token ||
        responseData.data?.access_token;

      const user = responseData.user || responseData.data?.user;

      if (!token) {
        throw new Error(
          "Login succeeded, but the server did not return an authentication token."
        );
      }

      // Clear previous tokens
      localStorage.removeItem("auth_token");
      sessionStorage.removeItem("auth_token");

      // Save token based on Remember Me
      if (loginForm.remember) {
        localStorage.setItem("auth_token", token);
      } else {
        sessionStorage.setItem("auth_token", token);
      }

      if (user) {
        localStorage.setItem("auth_user", JSON.stringify(user));
      }

      setSuccess("Login successful. Redirecting...");

      // Change "/" if your dashboard uses another route
      // navigate("/");
    } catch (err) {
      const validationErrors = err.response?.data?.errors;

      const firstValidationError = validationErrors
        ? Object.values(validationErrors).flat()[0]
        : null;

      setError(
        firstValidationError ||
          err.response?.data?.message ||
          err.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  // REGISTER
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    if (!signupForm.agree) {
      setError("Please accept the Terms of Service and Privacy Policy.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post("/register", {
        name: signupForm.name,
        company: signupForm.company,
        email: signupForm.email,
        password: signupForm.password,
        password_confirmation: signupForm.password,
      });

      const responseData = response.data;

      const token =
        responseData.token ||
        responseData.access_token ||
        responseData.data?.token ||
        responseData.data?.access_token;

      const user = responseData.user || responseData.data?.user;

      if (token) {
        localStorage.setItem("auth_token", token);
        sessionStorage.removeItem("auth_token");
      }

      if (user) {
        localStorage.setItem("auth_user", JSON.stringify(user));
      }

      if (token) {
        setSuccess("Account created successfully. Redirecting...");
        navigate("/");
      } else {
        setSuccess("Account created successfully. Please log in.");
        setActiveTab("login");

        setLoginForm((prev) => ({
          ...prev,
          email: signupForm.email,
          password: "",
        }));
      }
    } catch (err) {
      const validationErrors = err.response?.data?.errors;

      const firstValidationError = validationErrors
        ? Object.values(validationErrors).flat()[0]
        : null;

      setError(
        firstValidationError ||
          err.response?.data?.message ||
          err.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="loginsection">
      <div className="ls-shell">
        {/* LEFT BRAND PANEL */}
        <div className="ls-brand-panel">
          <div className="ls-brand-top">
            <div className="ls-logo">
              <div className="ls-mark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4z"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4v13a3 3 0 0 0 3 3h13"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 9h8M8 13h5"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              Ledgr
            </div>

            <div className="ls-eyebrow">
              <span className="ls-dot"></span> AI-POWERED BOOKKEEPING
            </div>

            <div className="ls-brand-headline">
              Your books, always up to date.
            </div>

            <div className="ls-brand-sub">
              Sign in to review real-time cash flow, reconciled transactions,
              and tax-ready reports — all handled automatically.
            </div>

            <div className="ls-mini-dash">
              <div className="ls-mini-dash-head">
                <div className="ls-who">
                  <div className="ls-avatar"></div>
                  <div>
                    <div className="ls-who-name">Acme Corp</div>
                    <div className="ls-who-sub">Ledgr Verified</div>
                  </div>
                </div>
              </div>

              <div className="ls-stat-row">
                <div className="ls-stat">
                  <div className="ls-stat-label">Cash Flow</div>
                  <div className="ls-stat-value">$48,259</div>
                  <div className="ls-stat-flag">✓ Synced</div>
                </div>

                <div className="ls-stat">
                  <div className="ls-stat-label">Uncategorized</div>
                  <div className="ls-stat-value">0</div>
                  <div className="ls-stat-flag">⚡ Auto</div>
                </div>

                <div className="ls-stat">
                  <div className="ls-stat-label">Tax Write-Offs</div>
                  <div className="ls-stat-value">$4,812</div>
                  <div className="ls-stat-flag">✓ Synced</div>
                </div>
              </div>

              <div className="ls-curve-card">
                <div className="ls-curve-head">
                  <div className="ls-curve-title">
                    Real-time Growth Curve
                  </div>
                  <div className="ls-curve-delta">+24% vs Prev.</div>
                </div>

                <svg
                  width="100%"
                  height="46"
                  viewBox="0 0 300 46"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="0,36 40,30 80,34 120,20 160,24 200,10 240,14 300,4"
                    fill="none"
                    stroke="#5b9bff"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="ls-brand-bottom">
            <span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <rect
                  x="5"
                  y="11"
                  width="14"
                  height="9"
                  rx="2"
                  stroke="#5c6376"
                  strokeWidth="1.6"
                />
                <path
                  d="M8 11V8a4 4 0 0 1 8 0v3"
                  stroke="#5c6376"
                  strokeWidth="1.6"
                />
              </svg>
              Bank-level 256-bit encryption
            </span>

            <span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12l4 4L19 6"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              SOC 2 Type II
            </span>
          </div>
        </div>

        {/* RIGHT AUTH PANEL */}
        <div className="ls-auth-panel">
          <div className="ls-auth-card">
            {/* TABS */}
            <div className="ls-tabs">
              <div
                className={`ls-tab ${
                  activeTab === "login" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("login");
                  setError("");
                  setSuccess("");
                }}
              >
                Log in
              </div>

              <div
                className={`ls-tab ${
                  activeTab === "signup" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("signup");
                  setError("");
                  setSuccess("");
                }}
              >
                Sign up
              </div>
            </div>

            {/* LOGIN PANEL */}
            {activeTab === "login" && (
              <div className="ls-panel-form active">
                <div className="ls-auth-head">
                  <h1>Welcome back</h1>
                  <p>
                    Log in to your workspace to continue managing your books.
                  </p>
                </div>

                <div className="ls-oauth-row">
                  <button type="button" className="ls-oauth-btn">
                    <svg width="16" height="16" viewBox="0 0 48 48">
                      <path
                        fill="#FFC107"
                        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24 44c5.3 0 10.1-2 13.7-5.4l-6.3-5.3C29.4 35.1 26.9 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.3 5.3C39.9 36.6 44 30.9 44 24c0-1.2-.1-2.4-.4-3.5z"
                      />
                    </svg>
                    Google
                  </button>

                  <button type="button" className="ls-oauth-btn">
                    <svg width="16" height="16" viewBox="0 0 23 23">
                      <path fill="#f35325" d="M1 1h10v10H1z" />
                      <path fill="#81bc06" d="M12 1h10v10H12z" />
                      <path fill="#05a6f0" d="M1 12h10v10H1z" />
                      <path fill="#ffba08" d="M12 12h10v10H12z" />
                    </svg>
                    Microsoft
                  </button>
                </div>

                <div className="ls-divider">or continue with email</div>

                <form onSubmit={handleLoginSubmit}>
                  {error && <div className="ls-error">{error}</div>}
                  {success && (
                    <div className="ls-success">{success}</div>
                  )}

                  <div className="ls-field">
                    <label htmlFor="l-email">Work email</label>

                    <div className="ls-input-wrap">
                      <input
                        id="l-email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={loginForm.email}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="ls-field">
                    <label htmlFor="l-pass">Password</label>

                    <div className="ls-input-wrap">
                      <input
                        id="l-pass"
                        name="password"
                        type={showLoginPass ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        required
                      />

                      <button
                        type="button"
                        className="ls-toggle-pass"
                        onClick={() =>
                          setShowLoginPass((v) => !v)
                        }
                      >
                        {showLoginPass ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  <div className="ls-meta-row">
                    <label className="ls-remember">
                      <input
                        type="checkbox"
                        name="remember"
                        checked={loginForm.remember}
                        onChange={handleLoginChange}
                      />
                      Remember me
                    </label>

                    <a
                      href="#"
                      className="ls-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    className="ls-submit-btn"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Log in"}
                    {!loading && <span>→</span>}
                  </button>
                </form>

                <div className="ls-switch-line">
                  Don&apos;t have an account?{" "}
                  <a
                    href="#"
                    className="ls-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("signup");
                      setError("");
                      setSuccess("");
                    }}
                  >
                    Sign up free
                  </a>
                </div>
              </div>
            )}

            {/* SIGNUP PANEL */}
            {activeTab === "signup" && (
              <div className="ls-panel-form active">
                <div className="ls-auth-head">
                  <h1>Create your account</h1>
                  <p>
                    Start automating your bookkeeping in minutes — no card
                    required.
                  </p>
                </div>

                <div className="ls-oauth-row">
                  <button type="button" className="ls-oauth-btn">
                    <svg width="16" height="16" viewBox="0 0 48 48">
                      <path
                        fill="#FFC107"
                        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24 44c5.3 0 10.1-2 13.7-5.4l-6.3-5.3C29.4 35.1 26.9 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.3 5.3C39.9 36.6 44 30.9 44 24c0-1.2-.1-2.4-.4-3.5z"
                      />
                    </svg>
                    Google
                  </button>

                  <button type="button" className="ls-oauth-btn">
                    <svg width="16" height="16" viewBox="0 0 23 23">
                      <path fill="#f35325" d="M1 1h10v10H1z" />
                      <path fill="#81bc06" d="M12 1h10v10H12z" />
                      <path fill="#05a6f0" d="M1 12h10v10H1z" />
                      <path fill="#ffba08" d="M12 12h10v10H12z" />
                    </svg>
                    Microsoft
                  </button>
                </div>

                <div className="ls-divider">or sign up with email</div>

                <form onSubmit={handleSignupSubmit}>
                  {error && <div className="ls-error">{error}</div>}
                  {success && (
                    <div className="ls-success">{success}</div>
                  )}

                  <div className="ls-row-2">
                    <div className="ls-field">
                      <label htmlFor="s-name">Full name</label>

                      <input
                        id="s-name"
                        name="name"
                        type="text"
                        placeholder="Jordan Lee"
                        value={signupForm.name}
                        onChange={handleSignupChange}
                        required
                      />
                    </div>

                    <div className="ls-field">
                      <label htmlFor="s-company">Company</label>

                      <input
                        id="s-company"
                        name="company"
                        type="text"
                        placeholder="Acme Corp"
                        value={signupForm.company}
                        onChange={handleSignupChange}
                      />
                    </div>
                  </div>

                  <div className="ls-field">
                    <label htmlFor="s-email">Work email</label>

                    <input
                      id="s-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={signupForm.email}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>

                  <div className="ls-field">
                    <label htmlFor="s-pass">Password</label>

                    <div className="ls-input-wrap">
                      <input
                        id="s-pass"
                        name="password"
                        type={showSignupPass ? "text" : "password"}
                        placeholder="Create a password"
                        value={signupForm.password}
                        onChange={handleSignupChange}
                        minLength={8}
                        required
                      />

                      <button
                        type="button"
                        className="ls-toggle-pass"
                        onClick={() =>
                          setShowSignupPass((v) => !v)
                        }
                      >
                        {showSignupPass ? "Hide" : "Show"}
                      </button>
                    </div>

                    <div className="ls-hint">
                      Use 8+ characters with a number and a symbol.
                    </div>
                  </div>

                  <label className="ls-terms">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={signupForm.agree}
                      onChange={handleSignupChange}
                    />

                    I agree to Ledgr&apos;s{" "}
                    <a
                      href="#"
                      className="ls-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="ls-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>

                  <button
                    className="ls-submit-btn"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Creating account..." : "Create account"}
                    {!loading && <span>→</span>}
                  </button>
                </form>

                <div className="ls-switch-line">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="ls-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("login");
                      setError("");
                      setSuccess("");
                    }}
                  >
                    Log in
                  </a>
                </div>
              </div>
            )}

            <div className="ls-secure-note">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <rect
                  x="5"
                  y="11"
                  width="14"
                  height="9"
                  rx="2"
                  stroke="#5c6376"
                  strokeWidth="1.8"
                />
                <path
                  d="M8 11V8a4 4 0 0 1 8 0v3"
                  stroke="#5c6376"
                  strokeWidth="1.8"
                />
              </svg>
              ENCRYPTED · SOC 2 TYPE II CERTIFIED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loginsection;