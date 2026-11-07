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

              {/* Dynamic Sign-off with Sender Name */}
              <div className="signoff-area">
                <p className="warm-wishes-text">With warm wishes,</p>
                <p className="dynamic-sender-signoff">
                  <span className="signoff-name">{displaySender}</span>
                  <span className="signoff-diya">🪔</span>
                </p>
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

        {/* Recipient Response Action */}
        <div className="revealed-single-action-card">
          <div className="reply-card glass-panel text-center">
            <h4>💬 Send Festive Thanks to {displaySender}</h4>
            <p>Send a warm thank you note back to {displaySender} on WhatsApp!</p>
            <a
              href={thankUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <span className="btn-icon">💬</span>
              <span>Say "Thank you {displaySender.split(' ')[0]}!" on WhatsApp</span>
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
