import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Certificate.css';

function CertificateDetails({ metadata }) {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  return (
    <div className="certificate-container">
      <div className="certificate-header">
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
            <span className="detail-value status-valid">Valid</span>
          </div>
        </div>
      </div>

      <div className="certificate-footer">
        {/* Removed certificate-seal SVG completely */}
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
