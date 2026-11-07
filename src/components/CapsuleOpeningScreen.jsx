import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { playFestiveChimeChord, playSparkleCrackle } from '../utils/audio';

export default function CapsuleOpeningScreen({
  senderName,
  recipientName,
  onRecipientNameChange,
  onCapsuleOpened,
  soundEnabled
}) {
  const [isOpening, setIsOpening] = useState(false);

  const displaySender = senderName.trim() || 'Pratik Zajam';
  const displayRecipient = recipientName.trim() || 'Friend';

  const triggerOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    playFestiveChimeChord(soundEnabled);
    playSparkleCrackle(soundEnabled);

    // Initial festive burst
    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#fbbf24', '#fde68a', '#ea580c', '#dc2626', '#10b981']
    });

    setTimeout(() => {
      // Grand celebratory explosion
      confetti({
        particleCount: 160,
        spread: 110,
        origin: { y: 0.5 },
        colors: ['#ffd700', '#ff6b6b', '#48dbfb', '#1dd1a1', '#f368e0']
      });

      onCapsuleOpened();
    }, 950);
  };

  return (
    <section className="view-section active-view">
      <div className="capsule-container">
        
        {/* Pratik Zajam Festive Hero Headings */}
        <div className="capsule-headline-box">
          <div className="shimmer-pill gold-pill">
            <span className="sparkle-dot"></span>
            <span>Official Festive Delivery • {displaySender}</span>
            <span className="sparkle-dot"></span>
          </div>

          <h1 className="hero-title">
            A Diwali surprise from <span>{displaySender}</span>
          </h1>

          <p className="capsule-main-subtitle">
            <strong>{displaySender}</strong> has sent you a little Diwali surprise
          </p>

          <p className="capsule-instruction">
            A handcrafted festive time capsule packed with light, blessings, and warm wishes.
          </p>
        </div>

        {/* Recipient Interactive Personalization Bar */}
        <div className="visitor-name-card glass-panel">
          <div className="visitor-name-header">
            <span className="v-icon">👤</span>
            <label htmlFor="visitor-name-input" className="v-label">
              Who is opening this surprise?
            </label>
          </div>
          <div className="visitor-input-wrapper">
            <input
              type="text"
              id="visitor-name-input"
              className="visitor-text-input"
              placeholder="Enter your name (e.g., Rahul)"
              value={recipientName}
              onChange={(e) => onRecipientNameChange(e.target.value)}
              maxLength={40}
              autoComplete="given-name"
            />
            {recipientName && (
              <span className="name-personalized-badge">
                ✓ Personalizing surprise for {displayRecipient}
              </span>
            )}
          </div>
        </div>

        {/* 3D Festive Diwali Capsule Box Presentation */}
        <div className="capsule-stage">
          <div className="aura-glow"></div>

          <div
            className={`capsule-box-wrapper ${isOpening ? 'opening' : ''}`}
            onClick={triggerOpen}
            title="Click to open your capsule!"
          >
            {/* Floating Sparkle Particles around Capsule */}
            <div className="capsule-particles">
              <span className="c-sparkle s1">✦</span>
              <span className="c-sparkle s2">✧</span>
              <span className="c-sparkle s3">✦</span>
              <span className="c-sparkle s4">✨</span>
            </div>

            {/* Glowing Diya on Top of the Capsule */}
            <div className="capsule-top-diya">
              <div className="diya-flame lit pulse-flame"></div>
              <div className="capsule-diya-icon">🪔</div>
            </div>

            {/* The Capsule Chest Body with PZ Crest */}
            <div className="capsule-chest">
              <div className="chest-lid">
                <div className="lid-ribbon"></div>
                <div className="lid-handle">⚜</div>
              </div>
              <div className="chest-base">
                <div className="chest-front-pattern">
                  <div className="royal-emblem">⚜ PZ ⚜</div>
                  <div className="chest-label">DIWALI SURPRISE CAPSULE</div>
                  <div className="chest-for">
                    For: <span>{displayRecipient}</span>
                  </div>
                  <div className="chest-from">
                    From: <strong>{displaySender}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pulsing Open Action Button */}
          <div className="capsule-action-wrap">
            <button
              type="button"
              className="btn-open-capsule"
              onClick={triggerOpen}
              disabled={isOpening}
            >
              <span className="flame-btn-icon">🪔</span>
              <span className="open-btn-text">
                {isOpening ? 'Opening Surprise...' : `Tap to Open ${displayRecipient}'s Capsule ✨`}
              </span>
              <span className="open-btn-shimmer"></span>
            </button>
            <p className="tap-hint">Tap the button or box to unwrap your personalized blessings</p>
          </div>
        </div>

      </div>
    </section>
  );
}
