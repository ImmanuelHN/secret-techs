import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Donate from './pages/Donate';

export default function App() {
  // Light mode is the DEFAULT. Dark is the optional toggle.
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('st-theme') || 'light';
  });

  useEffect(() => {
    // Light = default (:root), Dark = [data-theme="dark"] override
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('st-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </>
  );
}
