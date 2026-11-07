import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import CapsuleOpeningScreen from './components/CapsuleOpeningScreen';
import RevealedCelebration from './components/RevealedCelebration';
import SkyLanterns from './components/SkyLanterns';
import SparklerEffect from './components/SparklerEffect';

import {
  DEFAULT_SENDER,
  DEFAULT_RECIPIENT,
  TEMPLATES
} from './data/templates';
import { playFestiveChimeChord, playDiyaBell } from './utils/audio';
import { downloadGreetingCardPNG } from './utils/cardImage';

export default function App() {
  const [senderName] = useState(DEFAULT_SENDER);
  const [recipientName, setRecipientName] = useState(DEFAULT_RECIPIENT);
  
  // Only the festive experience views: 'capsule' | 'revealed'
  const [currentView, setCurrentView] = useState('capsule');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [sparklerActive, setSparklerActive] = useState(false);
  const [litDiyas, setLitDiyas] = useState([]);
  const [lanterns, setLanterns] = useState([]);

  // Parse URL search parameters on mount (in case URL specifies recipient name)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to') || params.get('recipient') || params.get('name');

    if (toParam && toParam.trim()) {
      setRecipientName(toParam.trim());
    }

    // Launch initial gentle lantern
    launchLantern();
  }, []);

  // Standard festive greeting text from Pratik Zajam
  const { p1, p2 } = useMemo(() => {
    return {
      p1: TEMPLATES.classic.p1,
      p2: TEMPLATES.classic.p2
    };
  }, []);

  const launchLantern = () => {
    const newLantern = {
      id: Date.now() + Math.random(),
      left: Math.random() * 85 + 5,
      duration: Math.random() * 5 + 11
    };
    setLanterns((prev) => [...prev, newLantern]);
    playFestiveChimeChord(soundEnabled);

    setTimeout(() => {
      setLanterns((prev) => prev.filter((l) => l.id !== newLantern.id));
    }, newLantern.duration * 1000);
  };

  const handleToggleDiya = (id) => {
    setLitDiyas((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleLightAllDiyas = () => {
    setLitDiyas([1, 2, 3, 4, 5]);
    playFestiveChimeChord(soundEnabled);
  };

  const handleDownloadPNG = () => {
    downloadGreetingCardPNG({
      recipient: recipientName.trim() || DEFAULT_RECIPIENT,
      sender: senderName || DEFAULT_SENDER,
      p1,
      p2
    });
    playFestiveChimeChord(soundEnabled);
  };

  return (
    <>
      {/* Background Floating Sky Lanterns */}
      <SkyLanterns lanterns={lanterns} />

      {/* Decorative Toran & Hanging Lanterns */}
      <div className="toran-decoration" aria-hidden="true">
        <div className="toran-garland"></div>
        <div className="hanging-lantern left-lantern">🏮</div>
        <div className="hanging-lantern right-lantern">🏮</div>
      </div>

      {/* Header Navigation */}
      <Header
        senderName={senderName}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        sparklerActive={sparklerActive}
        onToggleSparkler={() => setSparklerActive(!sparklerActive)}
        onLaunchLantern={launchLantern}
        onLogoClick={() => {
          setCurrentView('capsule');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="main-content">
        
        {/* VIEW 1: CAPSULE OPENING SCREEN (USER EXPERIENCE) */}
        {currentView === 'capsule' && (
          <CapsuleOpeningScreen
            senderName={senderName}
            recipientName={recipientName}
            onRecipientNameChange={setRecipientName}
            onCapsuleOpened={() => {
              setCurrentView('revealed');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            soundEnabled={soundEnabled}
          />
        )}

        {/* VIEW 2: REVEALED CELEBRATION (UNWRAPPED GREETING) */}
        {currentView === 'revealed' && (
          <RevealedCelebration
            senderName={senderName}
            recipientName={recipientName}
            blessingP1={p1}
            blessingP2={p2}
            litDiyas={litDiyas}
            onToggleDiya={handleToggleDiya}
            onLightAllDiyas={handleLightAllDiyas}
            onReplayCapsule={() => {
              setCurrentView('capsule');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onDownloadPNG={handleDownloadPNG}
            soundEnabled={soundEnabled}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p className="footer-greeting">
            Wishing you and your family a luminous, healthy, and prosperous Diwali! 🪔
          </p>
          <p className="footer-credit">
            Diwali Deepotsav • A Surprise from <strong>{senderName || DEFAULT_SENDER}</strong>
          </p>
        </div>
      </footer>

      {/* Sparkler Cursor Effect */}
      <SparklerEffect active={sparklerActive} />
    </>
  );
}
