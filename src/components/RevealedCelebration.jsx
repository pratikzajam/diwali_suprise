import React from 'react';
import InteractiveDiyas from './InteractiveDiyas';

export default function RevealedCelebration({
  senderName,
  recipientName,
  blessingP1,
  blessingP2,
  litDiyas,
  onToggleDiya,
  onLightAllDiyas,
  onReplayCapsule,
  onDownloadPNG,
  soundEnabled
}) {
  const displayName = recipientName.trim() || 'Rahul';
  const displaySender = senderName.trim() || 'Pratik Zajam';

  const thankMessage = encodeURIComponent(
    `Thank you ${displaySender} for the wonderful Diwali surprise! 🪔✨ Wishing you and your family a very Happy and Prosperous Diwali! From ${displayName}`
  );
  const thankUrl = `https://api.whatsapp.com/send?text=${thankMessage}`;

  return (
    <section className="view-section active-view">
      <div className="revealed-container">
        
        {/* Celebration Header */}
        <div className="celebration-header">
          <div className="shimmer-pill green-gold-pill">
            <span>🎉 Diwali Blessings Unwrapped!</span>
          </div>
          <h2 className="celebration-title">Shubh Deepavali! 🪔</h2>
          <p className="celebration-subtitle">
            Warm wishes sent with love and light from <strong>{displaySender}</strong>
          </p>
        </div>

        {/* Revealed Greeting Card */}
        <div className="revealed-card-wrapper">
          <div className="diwali-greeting-card revealed-card">
            <div className="card-ornament ornament-tl">🪔</div>
            <div className="card-ornament ornament-tr">🪔</div>
            <div className="card-ornament ornament-bl">🌸</div>
            <div className="card-ornament ornament-br">🌸</div>

            <div className="card-inner-border">
              <div className="card-festive-motif">
                <div className="mandala-icon">☸</div>
                <span className="sub-greeting">Happy Deepavali</span>
                <div className="mandala-icon">☸</div>
              </div>

              {/* Dynamic Recipient Salutation */}
              <div className="salutation-area">
                <h3 className="salutation-text">
                  Dear <span className="dynamic-recipient-name">{displayName}</span>,
                </h3>
              </div>

              {/* Dynamic Blessings Paragraphs */}
              <div className="blessings-body-area">
                <p className="blessing-paragraph">{blessingP1}</p>
                <p className="blessing-paragraph">{blessingP2}</p>
              </div>

              {/* Signature & Brand Seal */}
              <div className="signoff-area">
                <p className="warm-wishes-text">With warm wishes & festive regards,</p>
                <div className="signature-flex-row">
                  <p className="dynamic-sender-signoff">
                    <span className="signoff-name">{displaySender}</span>
                    <span className="signoff-diya">🪔</span>
                  </p>
                  <div className="verified-creator-seal">
                    <span>✦ VERIFIED GREETING ✦</span>
                  </div>
                </div>
              </div>

              {/* Center Diya */}
              <div className="card-diya-center">
                <div className="flame-halo"></div>
                <div className="diya-flame lit pulse-flame"></div>
                <div className="diya-base">🪔</div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Sacred Diyas Interactive Rituals */}
        <InteractiveDiyas
          litDiyas={litDiyas}
          onToggleDiya={onToggleDiya}
          onLightAllDiyas={onLightAllDiyas}
          soundEnabled={soundEnabled}
        />

        {/* Pratik Zajam Creator & Branding Profile Showcase Card */}
        <div className="creator-branding-card glass-panel">
          <div className="creator-profile-header">
            <div className="creator-avatar-wrap">
              <div className="creator-avatar-glow"></div>
              <div className="creator-avatar-monogram">PZ</div>
            </div>
            <div className="creator-profile-info">
              <h3 className="creator-profile-name">{displaySender}</h3>
              <p className="creator-profile-tagline">
                Wishing you a luminous Diwali filled with warmth, prosperity, and success!
              </p>
            </div>
          </div>

          <div className="creator-actions-row">
            <a
              href={thankUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <span className="btn-icon">💬</span>
              <span>Say "Happy Diwali {displaySender.split(' ')[0]}!" on WhatsApp</span>
            </a>

            <a
              href="https://github.com/pratikzajam"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold"
            >
              <span className="btn-icon">🐙</span>
              <span>GitHub @pratikzajam</span>
            </a>

            <a
              href="mailto:zajampratik@gmail.com"
              className="btn btn-outline-subtle"
            >
              <span className="btn-icon">✉️</span>
              <span>Email Pratik</span>
            </a>
          </div>
        </div>

        {/* Download & Replay Options */}
        <div className="revealed-bottom-links">
          <button
            type="button"
            className="btn-text-link"
            onClick={onDownloadPNG}
          >
            📥 Save Greeting Card as Image (PNG)
          </button>
          <span className="divider-dot">•</span>
          <button
            type="button"
            className="btn-text-link"
            onClick={onReplayCapsule}
          >
            🔁 Replay Capsule Opening
          </button>
        </div>

      </div>
    </section>
  );
}
