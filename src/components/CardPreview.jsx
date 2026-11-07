import React, { useState } from 'react';
import { playDiyaBell } from '../utils/audio';

export default function CardPreview({
  senderName,
  recipientName,
  blessingP1,
  blessingP2,
  soundEnabled,
  onDiyaClick
}) {
  const [diyaLit, setDiyaLit] = useState(true);

  const handleDiyaToggle = () => {
    setDiyaLit(!diyaLit);
    playDiyaBell(soundEnabled);
    if (onDiyaClick) onDiyaClick();
  };

  const displayName = recipientName.trim() || 'Rahul';
  const displaySender = senderName.trim() || 'Pratik Zajam';

  return (
    <div className="creator-preview-card-wrap">
      <div className="preview-sticky">
        <div className="preview-badge-header">
          <span className="live-pulse"></span>
          <span>LIVE GREETING PREVIEW (Dynamically Updates)</span>
        </div>

        {/* THE FESTIVE GREETING CARD */}
        <div className="diwali-greeting-card">
          {/* Card Decorative Corners */}
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

            {/* Dynamic Blessing Body Text */}
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

            {/* Interactive Diya on the Card */}
            <div
              className="card-diya-center"
              onClick={handleDiyaToggle}
              title="Click to toggle flame!"
            >
              <div className="flame-halo"></div>
              <div className={`diya-flame ${diyaLit ? 'lit' : ''}`}></div>
              <div className="diya-base">🪔</div>
              <span className="diya-tip">Tap Diya to toggle flame</span>
            </div>
          </div>
        </div>

        {/* Card Bottom Hint */}
        <div className="preview-footer-note">
          <span>
            ✨ From <strong>{displaySender}</strong> to <strong>{displayName}</strong>. Updates dynamically in real-time!
          </span>
        </div>
      </div>
    </div>
  );
}

