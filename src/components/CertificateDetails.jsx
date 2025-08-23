// CertificateDetails.jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Certificate.css';

function CertificateDetails({ metadata, isValid = true }) {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  return (
    <div className="certificate-container">
      <div className="certificate-header">
        <div className="valid-badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
          {isValid ? 'Certificate Valid' : 'Certificate Invalid'}
        </div>
        <h1>Certificate of Completion</h1>
        <p>
          This certifies that the individual named below has successfully completed the program
        </p>
      </div>

      <div className="certificate-body">
        <div className="recipient-name">{metadata.name}</div>

        <div className="certificate-details">
          <div className="detail-item">
            <span className="detail-label">Role</span>
            <span className="detail-value">{metadata.role}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Duration</span>
            <span className="detail-value">{metadata.duration}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Intern ID</span>
            <span className="detail-value">{metadata.intern_id}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Status</span>
            <span className={`detail-value ${isValid ? 'status-valid' : 'status-invalid'}`}>
              {isValid ? 'Valid' : 'Invalid'}
            </span>
          </div>
        </div>
      </div>

      <div className="certificate-footer">
        <div className="certificate-seal">
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
        </div>
        <p>
          This certificate confirms the successful completion of the internship requirements.
        </p>
        <div className="certificate-id">
          Certificate Code: {metadata.intern_id || code || 'N/A'}
        </div>
      </div>
    </div>
  );
}

export default CertificateDetails;
