import React, { useState } from 'react';
import { TEMPLATES, BLESSING_OPTIONS } from '../data/templates';
import { playDiyaBell } from '../utils/audio';

export default function CreatorForm({
  senderName,
  onSenderNameChange,
  recipientName,
  onRecipientNameChange,
  activeTemplate,
  onTemplateChange,
  selectedBlessings,
  onToggleBlessing,
  shareableUrl,
  onPreviewCapsule,
  onDownloadPNG,
  soundEnabled
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareableUrl).then(() => {
        setCopied(true);
        playDiyaBell(soundEnabled);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      // Fallback
      const input = document.getElementById('shareable-url-input');
      if (input) {
        input.select();
        document.execCommand('copy');
        setCopied(true);
        playDiyaBell(soundEnabled);
        setTimeout(() => setCopied(false), 2500);
      }
    }
  };

  const handleWhatsAppShare = () => {
    const sender = senderName || 'A friend';
    const msg = encodeURIComponent(
      `✨ ${sender} has sent you a little Diwali surprise! 🪔\nOpen your special festive capsule here:\n${shareableUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  return (
    <div className="glass-panel creator-form-card">
      <div className="card-header">
        <h2 className="card-title">
          <span className="title-diya">🪔</span> Craft Your Diwali Surprise
        </h2>
        <p className="card-desc">
          Enter your name and the recipient's name to personalize the greeting capsule.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* NAMES ROW: Sender Name & Recipient Name */}
        <div className="names-row-grid">
          {/* SENDER'S NAME INPUT */}
          <div className="form-group">
            <div className="group-header">
              <label htmlFor="sender-name-input" className="form-label">
                Your Name (Sender) <span className="required-star">*</span>
              </label>
              <span className="field-hint">You (Sender)</span>
            </div>
            <div className="input-wrapper">
              <span className="input-icon">✍️</span>
              <input
                type="text"
                id="sender-name-input"
                className="text-input"
                placeholder="Enter your name (e.g. Pratik Zajam)"
                value={senderName}
                onChange={(e) => onSenderNameChange(e.target.value)}
                maxLength={40}
                required
                autoComplete="name"
              />
              {senderName && (
                <button
                  type="button"
                  className="clear-btn"
                  onClick={() => onSenderNameChange('')}
                  title="Clear sender name"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* RECIPIENT'S NAME INPUT */}
          <div className="form-group">
            <div className="group-header">
              <label htmlFor="recipient-name-input" className="form-label">
                Recipient's Name <span className="required-star">*</span>
              </label>
              <span className="field-hint">Receiving Surprise</span>
            </div>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input
                type="text"
                id="recipient-name-input"
                className="text-input"
                placeholder="Enter recipient's name (e.g., Rahul)"
                value={recipientName}
                onChange={(e) => onRecipientNameChange(e.target.value)}
                maxLength={40}
                required
                autoComplete="off"
              />
              {recipientName && (
                <button
                  type="button"
                  className="clear-btn"
                  onClick={() => onRecipientNameChange('')}
                  title="Clear recipient name"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* GREETING TEMPLATES */}
        <div className="form-group">
          <div className="group-header">
            <label className="form-label">Greeting Theme / Template</label>
            <span className="field-hint">Select a festive style</span>
          </div>
          <div className="templates-grid">
            {Object.values(TEMPLATES).map((tpl) => (
              <button
                key={tpl.id}
                type="button"
                className={`template-chip ${activeTemplate === tpl.id ? 'active' : ''}`}
                onClick={() => onTemplateChange(tpl.id)}
              >
                <span className="chip-emoji">{tpl.emoji}</span>
                <span className="chip-name">{tpl.name}</span>
                <span className="chip-sub">{tpl.subtitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CUSTOM BLESSINGS CHECKBOXES */}
        <div className="form-group">
          <div className="group-header">
            <label className="form-label">Select Blessings to Include</label>
            <span className="field-hint">Included dynamically in card & link</span>
          </div>
          <div className="blessings-chips">
            {BLESSING_OPTIONS.map((blessing) => {
              const isSelected = selectedBlessings.includes(blessing.key);
              return (
                <label
                  key={blessing.key}
                  className={`blessing-chip ${isSelected ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onToggleBlessing(blessing.key);
                  }}
                >
                  <span className="check-icon">{isSelected ? '✓' : ''}</span>
                  <span>
                    {blessing.emoji} {blessing.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </form>

      {/* ACTION BUTTONS */}
      <div className="action-buttons-stack">
        <div className="primary-actions-row">
          <button
            type="button"
            className="btn btn-gold btn-glow"
            onClick={handleCopyLink}
          >
            <span className="btn-icon">🔗</span>
            <span>Copy Shareable URL</span>
          </button>

          <button
            type="button"
            className="btn btn-whatsapp"
            onClick={handleWhatsAppShare}
          >
            <span className="btn-icon">💬</span>
            <span>Share via WhatsApp</span>
          </button>
        </div>

        <div className="secondary-actions-row">
          <button
            type="button"
            className="btn btn-outline-gold"
            onClick={onPreviewCapsule}
          >
            <span className="btn-icon">🎁</span>
            <span>Preview Capsule Opening</span>
          </button>

          <button
            type="button"
            className="btn btn-outline-subtle"
            onClick={onDownloadPNG}
          >
            <span className="btn-icon">📥</span>
            <span>Download Card (PNG)</span>
          </button>
        </div>

        {/* LIVE SHAREABLE URL DISPLAY */}
        <div className="share-url-container">
          <div className="share-url-header">
            <span>Generated Shareable Link (Includes Sender, Recipient & Blessings):</span>
            {copied && <span className="copied-badge">✓ Link Copied!</span>}
          </div>
          <div className="share-url-box">
            <input
              type="text"
              id="shareable-url-input"
              readOnly
              value={shareableUrl}
              aria-label="Shareable link"
            />
            <button
              type="button"
              className="btn-mini"
              onClick={handleCopyLink}
              title="Copy to clipboard"
            >
              📋 Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

