import React, { useState, useEffect } from 'react';
import { FiEye, FiDownload } from 'react-icons/fi';
import './CertificatesPage.css';
import { certificates } from '../../data/certificates';

const CertificatesPage = () => {
  const [hoveredCert, setHoveredCert] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openCertificate = (file) => {
    window.open(file, '_blank');
  };

  const downloadCertificate = (file, title) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="certificates-container">
      <h2>Certifications</h2>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="certificate-card"
            onMouseEnter={() => setHoveredCert(cert.id)}
            onMouseLeave={() => setHoveredCert(null)}
            style={{ '--card-color': cert.color }}
          >
            <div className="certificate-image-wrapper">
              <img 
                src={cert.preview} 
                alt={cert.title} 
                className="certificate-image" 
              />
              
              {hoveredCert === cert.id && (
                <div className="certificate-overlay">
                  <div className="certificate-actions">
                    <button 
                      onClick={() => openCertificate(cert.file)}
                      className="action-btn view"
                      title="View Certificate"
                    >
                      <FiEye />
                    </button>
                    {!isMobile && (
                      <button 
                        onClick={() => downloadCertificate(cert.file, cert.title)}
                        className="action-btn download"
                        title="Download Certificate"
                      >
                        <FiDownload />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;
