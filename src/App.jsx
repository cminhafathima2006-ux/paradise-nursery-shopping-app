import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page background-image">
          <div className="landing-overlay"></div>
          
          <main className="landing-hero">
            <div className="brand-badge">
              <span>🌿</span> Pure Greenery, Pure Life
            </div>
            
            <h1 className="company-title landing-title">
              Paradise <span>Nursery</span>
            </h1>
            
            <p className="company-tagline">
              Where green dreams blossom into tranquil living sanctuaries.
            </p>

            <div className="divider"></div>

            {/* Paragraph about the company */}
            <p className="company-description" style={{
              maxWidth: '750px',
              fontSize: '1.15rem',
              lineHeight: '1.8',
              color: '#f1f5f9',
              marginBottom: '2.5rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
            }}>
              Welcome to <strong>Paradise Nursery</strong>, where passion for botanical beauty meets everyday wellness. 
              We offer a carefully curated collection of premium indoor houseplants tailored to elevate your living 
              space, naturally purify your indoor air, and bring enduring serenity to your everyday life.
            </p>

            <div className="landing-action">
              <button 
                id="get-started-btn"
                className="get-started-button get-started-btn" 
                onClick={handleGetStarted}
              >
                <span>Get Started</span>
                <span className="get-started-arrow">→</span>
              </button>
            </div>

            <section className="landing-about-section">
              <AboutUs />
            </section>
          </main>
        </div>
      ) : (
        <ProductList onHomeClick={handleHomeClick} />
      )}
    </div>
  );
}

export default App;
