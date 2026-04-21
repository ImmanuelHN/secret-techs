import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import upiQR from '../assets/upi-ur.jpeg';
import './Donate.css';

const Donate = () => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyUPI = () => {
    navigator.clipboard.writeText('immanuel052002-1@okhdfcbank');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="donate-page">
      <div className="donate-viewport-wrapper">
        
        {/* Navigation Button */}
        <div className="donate-nav-row">
          <Link to="/" className="donate-back-btn">
            ← Back to Home
          </Link>
        </div>

        <section className="donate-container">
          
          {/* Header Section */}
          <div className="donate-header">
            <p className="section-eyebrow">SUPPORT MY WORK</p>
            <h1 className="donate-title">Enjoyed what I built?</h1>
            <h3 className="donate-subtitle">Drop a coin in the jar 🪙</h3>
            <p className="donate-description">
              Your support helps me keep the studio alive, buy more coffee, 
              and continue building creative tools for everyone.
            </p>
          </div>

          {/* Vizual moved below text as per request */}
          <div className="donate-visual-center">
            <div className="lottie-wrapper-compact">
              <DotLottieReact 
                src="/pink pig coin save.lottie" 
                loop 
                autoplay 
                style={{ width: 140, height: 140 }} 
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="donate-cards-wrap">
            <div className="payment-card-grid-modern">
              
              {/* Card 1: International */}
              <div className="payment-card premium-compact">
                <span className="card-tag-mini">WORLDWIDE</span>
                <h4>Support via Ko-fi</h4>
                <p className="card-desc-mini">Cards & PayPal accepted</p>
                
                <a 
                  href="https://ko-fi.com/secrettechs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary donate-btn-mini"
                >
                  Drop the coin ☕
                </a>
                <span className="card-footer-mini">Powered by Ko-fi</span>
              </div>

              {/* Card 2: India / UPI */}
              <div className="payment-card premium-compact">
                <span className="card-tag-mini">INDIA</span>
                <h4>Pay via UPI</h4>
                <p className="card-desc-mini">GPay, PhonePe & more</p>
                
                <div className="upi-lite-wrap">
                  <div className="upi-copy-pill-mini" onClick={copyUPI}>
                    <code>immanuel...</code>
                    <span className="copy-icon">{copied ? '✓' : '📋'}</span>
                    {copied && <span className="copy-tooltip-mini">Copied!</span>}
                  </div>
                </div>

                <button className="btn-primary donate-btn-mini qr-btn" onClick={() => setShowQR(true)}>
                  QR Code 📱
                </button>
                <span className="card-footer-mini">₹ · Instant transfer</span>
              </div>

            </div>

            <p className="security-note-mini">
              🔒 All transactions are secure and go directly to the creator.
            </p>
          </div>
        </section>
      </div>

      {/* QR MODAL */}
      {showQR && (
        <div className="qr-modal-overlay" onClick={() => setShowQR(false)}>
          <div className="qr-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowQR(false)}>×</button>
            <h4 className="modal-title">UPI QR Code</h4>
            <div className="modal-qr-wrap">
              <img src={upiQR} alt="UPI QR" />
            </div>
            <p className="modal-id">immanuel052002-1@okhdfcbank</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Donate;
