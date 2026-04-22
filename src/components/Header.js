import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Donate', href: '/donate' },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate(href); // Navigate to Home with hash
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="logo-wrap">
          <img src="/logo.png" alt="Secret Techs Logo" className="logo-img" />
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navLinks.map(link =>
            link.href.startsWith('/#') || link.href === '/' ? (
              <button key={link.label} className={`nav-link ${location.pathname === link.href ? 'active' : ''}`} onClick={() => handleNavClick(link.href)}>
                {link.label}
              </button>
            ) : (
              <Link key={link.label} to={link.href} className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}>
                {link.label}
              </Link>
            )
          )}

          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="toggle-track">
              <span className="toggle-thumb">
                {theme === 'light' ? '☀️' : '🌙'}
              </span>
            </span>
          </button>
        </nav>

        {/* Mobile right group */}
        <div className="mobile-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="toggle-track">
              <span className="toggle-thumb">
                {theme === 'light' ? '☀️' : '🌙'}
              </span>
            </span>
          </button>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link =>
          link.href.startsWith('/#') || link.href === '/' ? (
            <button key={link.label} className="nav-link-mobile" onClick={() => handleNavClick(link.href)}>
              {link.label}
            </button>
          ) : (
            <Link key={link.label} to={link.href} className="nav-link-mobile" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}
