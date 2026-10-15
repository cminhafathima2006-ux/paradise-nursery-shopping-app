import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2 className="about-us-heading">About Paradise Nursery</h2>
      <p className="about-us-description">
        Where Green Dreams Blossom into Vibrant Living Spaces
      </p>
      <div className="about-us-content">
        <p className="about-us-paragraph">
          Welcome to <strong>Paradise Nursery</strong>, your premier online botanical sanctuary dedicated to infusing life, vitality, and tranquility into homes and offices worldwide. We believe that caring for plants is more than just home styling—it is a deeply restorative practice that fosters mindfulness, cleanses indoor air, and reunites us with the serene beauty of the natural world.
        </p>
        <p className="about-us-paragraph">
          Our team of seasoned botanists and dedicated plant enthusiasts curates only the healthiest, most resilient indoor specimens. From air-purifying champions that naturally filter household impurities to aromatic botanicals that soothe your senses, and hardy succulents requiring minimal effort, every plant in our greenhouse is nurtured with certified organic practices and individual care before making its journey to your doorstep.
        </p>
        <p className="about-us-paragraph">
          Whether you are an experienced collector seeking rare foliage or a proud first-time plant parent looking for an effortless green companion, Paradise Nursery offers personalized guidance, sustainable packaging, and a vibrant community dedicated to helping your indoor garden flourish. Join us today and cultivate your very own slice of paradise!
        </p>
      </div>

      <div className="about-us-highlights">
        <div className="highlight-card">
          <span className="highlight-icon">🌿</span>
          <h3>100% Organic Care</h3>
          <p>Nurtured sustainably without harsh chemicals, arriving fresh and thriving.</p>
        </div>
        <div className="highlight-card">
          <span className="highlight-icon">💨</span>
          <h3>Air Purification</h3>
          <p>Scientifically proven to filter harmful VOCs and enrich oxygen levels.</p>
        </div>
        <div className="highlight-card">
          <span className="highlight-icon">📦</span>
          <h3>Eco-Friendly Delivery</h3>
          <p>Carefully cushioned in recyclable, temperature-protective packaging.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
