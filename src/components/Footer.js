import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt="Secret Techs" className="footer-logo" />
            <p className="footer-tagline">Crafting digital experiences with precision.</p>
          </div>
          <div className="footer-links">
            <span className="footer-link-label">Navigate</span>
            <a href="/#about">About</a>
            <a href="/products">Products</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Secret Techs. All rights reserved.</p>
          <div className="barcode-wrap">
            <span className="barcode-text">*SECRET TECHS @ 2026*</span>
          </div>
        </div>
      </div>

      {/* Decorative orbs */}
      <div className="footer-orb orb1" />
      <div className="footer-orb orb2" />
    </footer>
  );
}
