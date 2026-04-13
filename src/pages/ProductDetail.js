import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../assets/products';
import Footer from '../components/Footer';
import './ProductDetail.css';

/* ─────────────────────────────────────────────────────
   Scroll-reveal hook — animates screenshot rows into
   view as the user scrolls down the detail page.
   ───────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─────────────────────────────────────────────────────
   Screenshot + Description row.
   Even-numbered rows: image LEFT, description RIGHT.
   Odd-numbered rows:  image RIGHT, description LEFT.
   HOW TO CHANGE: edit the `screenshots` array in
   src/assets/products.js for the relevant product.
   ───────────────────────────────────────────────────── */
function ScreenshotSection({ item, index }) {
  const [ref, visible] = useReveal();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`screenshot-row ${isEven ? 'row-normal' : 'row-reverse'} ${visible ? 'revealed' : ''}`}
    >
      {/* Screenshot image */}
      <div className="screenshot-img-wrap">
        <div className="screenshot-frame">
          <img
            src={item.image}
            alt={item.title}
            className="screenshot-img"
            onError={e => {
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('no-img');
            }}
          />
          {/* Placeholder shown when image file is missing */}
          <div className="screenshot-placeholder">
            <span className="placeholder-icon">🖼️</span>
            <span className="placeholder-label">Screenshot: {item.title}</span>
          </div>
        </div>
        {/* Step number badge */}
        <div className="screenshot-number">0{index + 1}</div>
      </div>

      {/* Text description */}
      <div className="screenshot-desc">
        {/* ↓ title and description come from products.js screenshots array ↓ */}
        <h3 className="ss-title">{item.title}</h3>
        <p className="ss-body">{item.description}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN PRODUCT DETAIL PAGE
   ───────────────────────────────────────────────────── */
export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  // Scroll to top when navigating to a different product
  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  // Show fallback if product ID not found
  if (!product) {
    return (
      <main className="not-found">
        <h2>Product not found.</h2>
        {/* ↓ Same pill button style as Products page ↓ */}
        <button onClick={() => navigate('/products')} className="detail-nav-btn">
          ← All Products
        </button>
      </main>
    );
  }

  return (
    <main className="product-detail">

      {/* ── HERO SECTION ── */}
      <section
        className="detail-hero"
        style={{ '--product-color': product.heroColor }}
      >
        <div className="detail-hero-bg" />

        <div className="detail-hero-content">

          {/* ── NAVIGATION BUTTONS ── same pill style as Products page ← Home button */}
          <div className="detail-nav-row">
            {/* ↓ "← All Products" — navigates back to the products tile grid ↓ */}
            <button
              className="detail-nav-btn"
              onClick={() => navigate('/products')}
            >
              ← All Products
            </button>
          </div>

          {/* Product logo */}
          <div className="detail-logo-wrap">
            <img
              src={product.logo}
              alt={product.name}
              className="detail-logo"
              onError={e => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback shown when logo image is missing */}
            <div
              className="detail-logo-fallback"
              style={{ background: `linear-gradient(135deg, ${product.heroColor}88, ${product.heroColor}33)` }}
            >
              {/* Shows initials e.g. "SV" for "ST Vault" */}
              <span>{product.name.split(' ').map(w => w[0]).join('')}</span>
            </div>
          </div>

          {/* Product name — comes from products.js `name` field */}
          <h1 className="detail-name">{product.name}</h1>
          {/* Tagline — comes from products.js `tagline` field */}
          <p className="detail-tagline">{product.tagline}</p>
          {/* Description — comes from products.js `description` field */}
          <p className="detail-desc">{product.description}</p>
        </div>

        {/* Decorative orbs — use product's heroColor */}
        <div className="detail-orb o1" style={{ background: `radial-gradient(circle, ${product.heroColor}30 0%, transparent 70%)` }} />
        <div className="detail-orb o2" style={{ background: `radial-gradient(circle, ${product.heroColor}18 0%, transparent 70%)` }} />
      </section>

      {/* ── HOW TO USE / SCREENSHOTS SECTION ── */}
      <section className="how-to-use">
        <div className="how-inner">
          {/* ↓ Change these labels in the JSX below ↓ */}
          <p className="section-eyebrow">How It Works</p>
          <h2 className="how-title">Getting Started</h2>

          {/* Screenshot rows — generated from products.js screenshots array */}
          <div className="screenshots-list">
            {product.screenshots.map((item, i) => (
              <ScreenshotSection key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
