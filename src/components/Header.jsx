import React from 'react';

export default function Header({
  senderName,
  soundEnabled,
  onToggleSound,
  sparklerActive,
  onToggleSparkler,
  onLaunchLantern,
  onLogoClick
}) {
  return (
    <header className="app-header">
      <div className="nav-container">
        <div
          className="brand"
          onClick={onLogoClick}
          title="Return to Surprise Capsule"
        >
          <span className="brand-diya">🪔</span>
          <div className="brand-text">
            <span className="brand-title">Diwali Deepotsav</span>
            <span className="brand-sub">From: {senderName || 'Pratik Zajam'}</span>
          </div>
        </div>

        <div className="header-actions">
          <button
            type="button"
            className={`icon-pill-btn ${soundEnabled ? 'active' : ''}`}
            onClick={onToggleSound}
            title="Toggle Festive Sound"
          >
            <span>{soundEnabled ? '🔊' : '🔇'}</span>
            <span className="btn-text">Music</span>
          </button>

          <button
            type="button"
            className={`icon-pill-btn ${sparklerActive ? 'active' : ''}`}
            onClick={onToggleSparkler}
            title="Toggle Sparkler Wand Cursor"
          >
            <span>✨</span>
            <span className="btn-text">Phooljhadi</span>
          </button>

          <button
            type="button"
            className="icon-pill-btn special-pill"
            onClick={onLaunchLantern}
            title="Release a Sky Lantern"
          >
            <span>🏮</span>
            <span className="btn-text">Lantern</span>
          </button>
        </div>
      </div>
    </header>
  );
}
