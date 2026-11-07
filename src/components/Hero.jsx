import React from 'react';

export default function Hero({ senderName }) {
  return (
    <div className="hero-section">
      <div className="shimmer-pill">
        <span className="sparkle-dot"></span>
        <span>Auspicious Deepavali Celebrations</span>
        <span className="sparkle-dot"></span>
      </div>

      <h1 className="hero-title">
        A Diwali surprise from <span>{senderName || 'Pratik Zajam'}</span>
      </h1>

      <p className="hero-subtitle">
        Send a personalized festive Diwali capsule to your loved ones. Enter your name, the recipient’s name, select custom blessings, and generate an instant surprise link.
      </p>
    </div>
  );
}

