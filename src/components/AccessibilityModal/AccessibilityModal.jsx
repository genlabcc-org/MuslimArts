import React from 'react';
import './AccessibilityModal.css';

export const AccessibilityModal = ({
  isOpen,
  onClose,
  isHighContrast,
  onToggleHighContrast,
  isLargeText,
  onToggleLargeText
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`accessmodal-backdrop ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="accessmodal-card" onClick={(e) => e.stopPropagation()}>
        <button className="accessmodal-close-btn" onClick={onClose} aria-label="Close accessibility modal">
          &times;
        </button>

        <h3 className="accessmodal-title">Accessibility Preferences</h3>
        <p className="accessmodal-subtitle">
          Customize display settings for optimal readability across the Muslim Arts College site.
        </p>

        <div className="accessmodal-toggles">
          <div className="accessmodal-item">
            <div>
              <div className="accessmodal-item-label">High Contrast</div>
              <div className="accessmodal-item-desc">Enhance contrast and underline headings</div>
            </div>
            <label className="accessmodal-switch">
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={onToggleHighContrast}
              />
              <span className="accessmodal-slider"></span>
            </label>
          </div>

          <div className="accessmodal-item">
            <div>
              <div className="accessmodal-item-label">Enlarged Text</div>
              <div className="accessmodal-item-desc">Scale typography for improved reading comfort</div>
            </div>
            <label className="accessmodal-switch">
              <input
                type="checkbox"
                checked={isLargeText}
                onChange={onToggleLargeText}
              />
              <span className="accessmodal-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

