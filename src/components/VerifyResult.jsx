// VerifyResult.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { verifyCertificate } from '../services/api';
import CertificateDetails from './CertificateDetails';

function VerifyResult() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!code) {
      setResult({ valid: false });
      setLoading(false);
      return;
    }
    verifyCertificate(code)
      .then(data => setResult(data))
      .catch(() => setResult({ valid: false }))
      .finally(() => setLoading(false));
  }, [code]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Verifying certificate...</p>
      </div>
    );
  }

  if (!result.valid) {
    return (
      <div className="certificate-wrapper">
        <div className="certificate-container invalid">
          <div className="certificate-header invalid-header">
            <div className="valid-badge invalid-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
              Certificate Invalid
            </div>
            <h1>Certificate Verification</h1>
            <p>The certificate could not be verified</p>
          </div>
          
          <div className="certificate-body">
            <p className="invalid-message">❌ Invalid or missing code.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="certificate-wrapper">
      <CertificateDetails 
        metadata={result.metadata} 
        issuedAt={result.issuedAt}
        isValid={result.valid}
      />
    </div>
  );
}

export default VerifyResult;