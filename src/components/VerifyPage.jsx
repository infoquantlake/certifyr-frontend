import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./VerifyPage.css";
import certifyrLogo from "../assets/certifyr.png";
// import { Link, useNavigate } from "react-router-dom"; // add Link here


export default function VerifyPage() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.trim()) {
      navigate(`/verify?code=${encodeURIComponent(code.trim())}`);
    }
  };

  return (
    <div className="verify-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-container" onClick={() => navigate("/")}>
        <img src={certifyrLogo} alt="Certifyr" className="logo-image" />
      </div>

        <nav>
          <a href="/">Home</a>
        </nav>
      </header>




      {/* Main Content */}
      <main className="main">
        <section id="verify-section" className="verify-section">
          {/* Background Shapes */}
          <div className="background-shapes">
            <span className="shape circle"></span>
            <span className="shape square"></span>
            <span className="shape circle"></span>
            <span className="shape square"></span>
            <span className="shape circle"></span>
          </div>

          {/* Content */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: 0 }}
          >
            Verify Your Certificate Instantly
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ opacity: 0 }}
          >
            Enter the certificate code below to confirm authenticity and details.
          </motion.p>

          <motion.form
            className="verify-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ opacity: 0 }}
          >
            <div className="form-group">
              <input 
                type="text"
                className="form-control"
                placeholder="Enter certificate code"
                value={code}
                onChange={(e)=>setCode(e.target.value)}
                required
                autoFocus
              />
            </div>
            <motion.button 
              type="submit" 
              className="cta-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              style={{ opacity: 0 }}
            >
              Verify Certificate
            </motion.button>
          </motion.form>

          <div className="verify-info">
            <h2>Secure & Instant Verification</h2>
            <ul>
              <li>Cryptographically verified certificates</li>
              <li>Immediate results in seconds</li>
              <li>100% tamper-proof & authentic</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Certifyr. Built for secure and scalable verification.</p>
      </footer>
    </div>
  );
}