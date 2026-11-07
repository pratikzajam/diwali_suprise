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
  const displaySender = senderName || 'Pratik Zajam';

  return (
    <header className="app-header">
      <div className="nav-container">
        {/* Pratik Zajam Signature Brand Emblem */}
        <div
          className="brand"
          onClick={onLogoClick}
          title="Return to Surprise Capsule"
        >
          <div className="pz-brand-monogram">PZ</div>
          <div className="brand-text">
            <span className="brand-title">{displaySender}</span>
            <span className="brand-sub">Diwali Deepotsav 🪔</span>
          </div>
        </div>

        <div className="header-actions">
          {/* GitHub Profile Link */}
          <a
            href="https://github.com/pratikzajam"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-pill-btn github-pill"
            title="Pratik Zajam on GitHub"
          >
            <span>🐙</span>
            <span className="btn-text">GitHub</span>
          </a>

          {/* Audio Music Toggle */}
          <button
            type="button"
            className={`icon-pill-btn ${soundEnabled ? 'active' : ''}`}
            onClick={onToggleSound}
            title="Toggle Festive Sound"
          >
            <span>{soundEnabled ? '🔊' : '🔇'}</span>
            <span className="btn-text">Music</span>
          </button>

          {/* Phooljhadi Wand Cursor */}
          <button
            type="button"
            className={`icon-pill-btn ${sparklerActive ? 'active' : ''}`}
            onClick={onToggleSparkler}
            title="Toggle Sparkler Wand Cursor"
          >
            <span>✨</span>
            <span className="btn-text">Phooljhadi</span>
          </button>

          {/* Release Sky Lantern */}
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
