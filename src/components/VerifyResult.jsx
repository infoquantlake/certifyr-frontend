// VerifyResult.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { verifyCertificate } from "../services/api";
import CertificateDetails from "./CertificateDetails";
import "./VerifyResult.css";
import certifyrLogo from "../assets/certifyr.png";

function VerifyResult() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verifiedAt, setVerifiedAt] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Fetch certificate and page load time
  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    setVerifiedAt(formatted);

    if (!code) {
      setResult({ valid: false });
      setLoading(false);
      return;
    }

    verifyCertificate(code)
      .then((data) => setResult(data))
      .catch(() => setResult({ valid: false }))
      .finally(() => setLoading(false));
  }, [code]);

  // Navbar hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Verifying certificate...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Navbar */}
      {/* <header className={`verify-navbar ${showNavbar ? "visible" : "hidden"}`}>
        <div className="logo-container" onClick={() => navigate("/")}>
          <img src={logoImage} alt="Certifyr Logo" className="logo-image" />
        </div>
        <nav>
          <a onClick={() => navigate("/search-certificate")}>Verify</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>About Us</a>
        </nav>
      </header> */}
      {/* Navbar */}
            <header className="navbar">
              <div className="logo-container" onClick={() => navigate("/")}>
                <img src={certifyrLogo} alt="Certifyr" className="logo-image" />
              </div>
      
              <nav>
                <a onClick={() => navigate("/search-certificate")}>Verify</a>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>About Us</a>
              </nav>
            </header>

      {/* Certificate Section */}
      {result.valid ? (
        <div className="certificate-section">
          <div className="valid-layout">
            {/* Left Column: Certificate */}
            <div className="certificate-column">
              <CertificateDetails metadata={result.metadata} isValid={true} />
            </div>

            {/* Right Column */}
            <div className="verification-column">
              {/* Certificate Verified Card */}
              <div className="right-card certificate-verified-card">
                {/* Seal Icon */}
                <svg
                  className="seal-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>

                <h2>Certificate Verified</h2>
                <p className="role">{result.metadata.role}</p>
                <p className="recipient-text">This certificate is awarded to</p>
                <p className="recipient-name">{result.metadata.name}</p>
                <p className="certified-date">
                  Certified on{" "}
                  {new Date(result.createdAt).toLocaleString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* Verification Details Card */}
              <div className="right-card verification-details-card">
                <h2>Verification Details</h2>
                <div className="verification-item">
                  <span className="label">Certificate ID:</span>
                  <span className="value">
                    {result.metadata.intern_id || code || "N/A"}
                  </span>
                </div>
                <div className="verification-item">
                  <span className="label">Verified at:</span>
                  <span className="value">{verifiedAt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="certificate-wrapper">
          <div className="certificate-container invalid">
            <div className="certificate-header invalid-header">
              <h1>Certificate Verification</h1>
              <p>Unable to verify the provided certificate</p>
            </div>
            <div className="certificate-body">
              <p className="invalid-message">Certificate not found</p>

              {/* Help Section */}
              <div className="help-section">
                <h3>Need help?</h3>
                <p>
                  If you believe this is an error, please contact our support team at{" "}
                  <a href="mailto:info.quantlake@gmail.com">
                    info.quantlake@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Certifyr Section (dark theme) */}
      <section className="about-certifyr" id="about">
        <div className="about-content">
          <h2>About Certifyr</h2>
          <p>
            Certifyr is a collaborative product designed for scalable
            verification systems. It enables organizations to issue and validate
            digital certificates seamlessly, ensuring authenticity, security,
            and efficiency. From universities to corporates, our platform
            empowers users to manage credentials with confidence and speed.
          </p>
          <div className="contact-info">
            <p>
              <strong>Email:</strong> info.quantlake@gmail.com
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/company/quantlake-dot"
                target="_blank"
                rel="noopener noreferrer"
              >
                @quantlake
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Certifyr. Built for secure and scalable verification.</p>
      </footer>
    </div>
  );
}

export default VerifyResult;