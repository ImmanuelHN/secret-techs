import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../assets/products';
import Footer from '../components/Footer';
import './Products.css';

function ProductTile({ product, index }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`product-tile ${hovered ? 'hovered' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => navigate(`/products/${product.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="tile-glow" style={{ background: `radial-gradient(circle, ${product.heroColor}30 0%, transparent 70%)` }} />
      <div className="tile-logo-wrap">
        <img
          src={product.logo}
          alt={product.name}
          className="tile-logo"
          onError={e => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback when logo missing */}
        <div className="tile-logo-fallback" style={{ background: `linear-gradient(135deg, ${product.heroColor}66, ${product.heroColor}22)` }}>
          <span>{product.name.split(' ').map(w => w[0]).join('')}</span>
        </div>
      </div>
      <h3 className="tile-name">{product.name}</h3>
      <p className="tile-tagline">{product.tagline}</p>
      <span className="tile-arrow">→</span>
    </div>
  );
}

export default function Products() {
  const navigate = useNavigate();
  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="products-hero-bg" />
        <div className="products-hero-content">
          {/* ← HOME BUTTON: same pill style as the old product detail back button */}
          <button className="products-home-btn" onClick={() => navigate('/')}>
            ← Home
          </button>
          <p className="section-eyebrow">What We Build</p>
          <h1 className="products-title">Our Products</h1>
          <p className="products-sub">
            {/* ↓ Change this subtitle text here ↓ */}
            Each tool is crafted with intention — built to solve a real problem, designed to feel like magic.
          </p>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="products-inner">
          <div className="products-grid">
            {products.map((p, i) => (
              <ProductTile key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
