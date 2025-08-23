import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VerifyForm.css';

export default function VerifyForm() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (code.trim()) {
      // Navigate to verify route with the code as parameter
      navigate(`/verify?code=${encodeURIComponent(code.trim())}`);
    }
  };

  return (
    <div className="verify-container">
      <div className="verify-card">
        <div className="card-header">
          <div className="certificate-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
          </div>
          <h1>Verify Certificate</h1>
          <div className="security-badge">
            <i>✓</i> Secure Verification
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                className="form-control"
                value={code} 
                onChange={(e) => setCode(e.target.value)} 
                placeholder="Enter certificate code" 
                required 
                autoFocus
              />
            </div>
            <button type="submit" className="verify-btn">Verify</button>
          </form>
        </div>
      </div>
    </div>
  );
}