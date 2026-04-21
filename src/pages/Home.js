import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import upiQR from '../assets/upi-ur.jpeg';
import Footer from '../components/Footer';
import './Home.css';

/* ─────────────────────────────────────────────────────
   "Welcome to" — Apple-hello style character animation.
   Each letter flies up and rotates in one by one.
   HOW TO CHANGE: edit the string 'Welcome to' below.
   ───────────────────────────────────────────────────── */
function HelloText() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className={`hello-wrap ${visible ? 'visible' : ''}`}>
      {'Welcome to'.split('').map((ch, i) => (
        <span
          key={i}
          className="hello-char"
          style={{ animationDelay: `${i * 0.07}s` }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   "Secret Techs" — Pixel-stamp reveal animation.
   Matches the blocky Jacquarda Bastarda 9 font style.
   Each WORD stamps in — scales from large+blurry to
   crisp, with a slight horizontal slide per word.
   This feels like old-school rubber-stamp / pixel drop,
   which perfectly suits the pixel-art font.
   HOW TO CHANGE: edit the words array below.
   ───────────────────────────────────────────────────── */
function BrandName() {
  const words = ['Secret', 'Techs']; // ← change words here if needed
  return (
    <h1 className="brand-name" aria-label="Secret Techs">
      {words.map((word, i) => (
        <span
          key={word}
          className="brand-word"
          style={{ animationDelay: `${0.9 + i * 0.45}s` }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}

/* ─────────────────────────────────────────────────────
   Scroll-reveal hook — animates sections into view
   as the user scrolls down.
   ───────────────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────────────────
   ABOUT SECTION
   HOW TO CHANGE CONTENT:
   • Heading: edit the <h2> text below
   • Paragraphs: edit the <p className="section-body"> tags
   • Cards: edit card-icon (emoji) and card-label text
   • Button: edit the Link text "Explore Products"
   ───────────────────────────────────────────────────── */
function AboutSection() {
  const [ref, vis] = useReveal();
  return (
    <section id="about" className={`section about-section ${vis ? 'revealed' : ''}`} ref={ref}>
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text">
            {/* ↓ Change eyebrow label ↓ */}
            <p className="section-eyebrow">Who We Are</p>
            {/* ↓ Change section heading ↓ */}
            <h2 className="section-title">Crafting Tomorrow's<br />Digital Tools</h2>
            {/* ↓ Change paragraph 1 ↓ */}
            <p className="section-body">
              Secret Techs is an independent software studio focused on building elegant,
              privacy-respecting tools that make your digital life simpler, safer, and more delightful.
            </p>
            {/* ↓ Change paragraph 2 ↓ */}
            <p className="section-body">
              We obsess over details. Every pixel, every interaction, every millisecond of
              performance is intentional. Our tools are born from real problems we faced — and solved beautifully.
            </p>
            {/* ↓ Change button text ↓ */}
            <Link to="/products" className="btn-primary">Explore Products</Link>
          </div>

          <div className="about-visual">
            {/* ↓ Change card emoji and label for each card ↓ */}
            <div className="about-card card1">
              <span className="card-icon">🔒</span>
              <span className="card-label">Privacy First</span>
            </div>
            <div className="about-card card2">
              <span className="card-icon">⚡</span>
              <span className="card-label">Performance</span>
            </div>
            <div className="about-card card3">
              <span className="card-icon">✦</span>
              <span className="card-label">Elegant Design</span>
            </div>
            <div className="about-orb" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   CONTACT SECTION
   HOW TO CONNECT THE FORM:
   In handleSubmit, replace setSent(true) with your
   API call, e.g.:
     await fetch('https://formspree.io/f/YOUR_ID', {
       method: 'POST',
       body: JSON.stringify(form),
       headers: { 'Content-Type': 'application/json' }
     });
     setSent(true);
   ───────────────────────────────────────────────────── */
function ContactSection() {
  const [ref, vis] = useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {  // ✅ FIX: added async
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/xgorwgqe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending message');
    }
  };

  return (
    <section id="contact" className={`section contact-section ${vis ? 'revealed' : ''}`} ref={ref}>
      <div className="section-inner">
        {/* ↓ Change eyebrow and heading below ↓ */}
        <p className="section-eyebrow">Get In Touch</p>
        <h2 className="section-title">Let's Build Something</h2>

        {sent ? (
          <div className="contact-thanks">
            <span>✦</span>
            {/* ↓ Change success message ↓ */}
            <p>Message received. We'll be in touch soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text" required placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email" required placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                required rows={5} placeholder="Tell us about your project..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              />
            </div>
            {/* ↓ Change button text ↓ */}
            <button type="submit" className="btn-primary">Send Message ✦</button>
          </form>
        )}
      </div>
      <div className="contact-orb" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   TIP JAR SECTION
   "Drop a coin in the jar" — digital contribution section.
   Includes Ko-fi for international and UPI for India.
   ───────────────────────────────────────────────────── */
function TipJarSection() {
  const [ref, vis] = useReveal();
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const copyUPI = () => {
    navigator.clipboard.writeText('immanuel052002-1@okhdfcbank');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tipjar" className={`section tip-jar-section ${vis ? 'revealed' : ''}`} ref={ref}>
      <div className="section-inner tip-jar-content-wrapper">
        
        {/* Left Column: Wording & Animation (More compact) */}
        <div className="tip-jar-info">
          <p className="section-eyebrow">SUPPORT ME</p>
          <h2 className="section-title">Enjoyed what<br />I built?</h2>
          <h3 className="tip-jar-subtitle">Drop a coin in the jar 🪙</h3>
          <p className="tip-jar-compact-muted">
            Every contribution keeps the studio alive and building.
          </p>

          <div className="lottie-container-compact">
            <DotLottieReact 
              src="/pink pig coin save.lottie" 
              loop 
              autoplay 
              style={{ width: 220, height: 220 }} 
            />
          </div>
        </div>

        {/* Right Column: Payment Cards (Horizontal) */}
        <div className="tip-jar-actions">
          <div className="payment-cards-horizontal">
            {/* Card 1: International */}
            <div className="payment-card compact">
              <span className="card-tag">WORLDWIDE</span>
              <h4>Support via Ko-fi</h4>
              <p className="card-desc-compact">International cards & PayPal accepted</p>
              <a 
                href="https://ko-fi.com/secrettechs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Click to drop the coin ☕
              </a>
              <span className="card-footer-compact">Powered by Ko-fi</span>
            </div>

            {/* Card 2: India / UPI */}
            <div className="payment-card compact">
              <span className="card-tag">INDIA</span>
              <h4>Pay via UPI</h4>
              <p className="card-desc-compact">Scan with GPay, PhonePe or any UPI app</p>
              
              <div className="qr-button-container">
                <button className="btn-primary qr-trigger" onClick={() => setShowQR(true)}>
                  View QR 📱
                </button>
              </div>

              <div className="upi-copy-pill" onClick={copyUPI}>
                <code>immanuel052002-1@...</code>
                <span className="copy-icon">{copied ? '✓' : '📋'}</span>
                {copied && <span className="copy-tooltip">Copied! ✓</span>}
              </div>
              
              <span className="card-footer-compact">₹ · Instant transfer</span>
            </div>
          </div>

          <p className="tip-jar-footer-note-compact">
            🔒 All transactions are secure and go directly to the creator.
          </p>
        </div>

      </div>

      {/* QR MODAL POPUP */}
      {showQR && (
        <div className="qr-modal-overlay" onClick={() => setShowQR(false)}>
          <div className="qr-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowQR(false)}>×</button>
            <h4 className="modal-title">Scan to Support</h4>
            <div className="modal-qr-wrap">
              <img src={upiQR} alt="UPI QR Code" />
            </div>
            <p className="modal-footer">immanuel052002-1@okhdfcbank</p>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN HOME PAGE
   ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="home">

      {/* ── HERO SECTION ── */}
      <section className="hero">
        {/* Background decorative elements */}
        <div className="hero-bg">
          <div className="hero-orb orb-gold" />
          <div className="hero-orb orb-teal" />
          <div className="hero-orb orb-crimson" />
          <div className="hero-grid" />
        </div>

        {/* Main hero text */}
        <div className="hero-content">
          <HelloText />    {/* "Welcome to" animation */}
          <BrandName />    {/* "Secret Techs" pixel-stamp animation */}
          <div className="brand-name-glow" />
        </div>

        {/* Vertical scroll hint line at the bottom */}
        <div className="hero-scroll-hint">
          <span />
        </div>
      </section>

      <AboutSection />
      <ContactSection />
      <TipJarSection />
      <Footer />
    </main>
  );
}
