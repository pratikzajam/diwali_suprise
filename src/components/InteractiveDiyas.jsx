import React from 'react';
import confetti from 'canvas-confetti';
import { FIVE_DIYAS } from '../data/templates';
import { playDiyaBell } from '../utils/audio';

export default function InteractiveDiyas({
  litDiyas,
  onToggleDiya,
  onLightAllDiyas,
  soundEnabled
}) {
  const litCount = litDiyas.length;

  const handleBurstFireworks = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#fbbf24', '#ff7675', '#74b9ff', '#55efc4']
    });
  };

  return (
    <div className="festive-rituals-panel glass-panel">
      <div className="rituals-header">
        <h3 className="rituals-title">🪔 Light the 5 Sacred Diyas of Prosperity</h3>
        <p className="rituals-counter">
          {litCount === 5
            ? '✨ All 5 Diyas are glowing! May your life be filled with boundless light! 🪔'
            : `Click on the diyas to light them! (${litCount} / 5 Lit)`}
        </p>
      </div>

      <div className="five-diyas-row">
        {FIVE_DIYAS.map((diya) => {
          const isLit = litDiyas.includes(diya.id);
          return (
            <button
              key={diya.id}
              type="button"
              className={`interactive-diya-unit ${isLit ? 'lit' : ''}`}
              onClick={() => {
                onToggleDiya(diya.id);
                playDiyaBell(soundEnabled);
              }}
              title={diya.title}
            >
              <div className="flame-particle"></div>
              <div className="flame-graphic"></div>
              <div className="diya-icon-text">🪔</div>
              <span className="diya-label">{diya.label}</span>
            </button>
          );
        })}
      </div>

      <div className="rituals-actions">
        <button
          type="button"
          className="btn btn-outline-gold btn-sm"
          onClick={onLightAllDiyas}
        >
          ✨ Light All Diyas at Once
        </button>
        <button
          type="button"
          className="btn btn-outline-gold btn-sm"
          onClick={handleBurstFireworks}
        >
          🎆 Burst Diwali Fireworks
        </button>
      </div>
    </div>
  );
}

