# 🪔 Diwali Deepotsav - Personalized Surprise Greeting Capsule

A festive **React + Vite** web application for creating and sharing interactive Diwali greeting capsules with personalized blessings, animated 3D capsule opening, real-time dynamic preview, interactive diyas, and digital fireworks.

---

## ✨ Features

- **Dynamic Sender & Recipient Customization**:
  - Visitors can enter their own name as the sender (defaults to *Pratik Zajam*).
  - Enter the recipient's name (e.g. *Rahul*).
  - The entire application dynamically updates the hero section (*"A Diwali surprise from [Sender]"*), live card preview, 3D capsule chest, and final sign-off in real time as you type.

- **Interactive 3D Diwali Capsule Opening**:
  - The capsule opening screen prominently displays: **"[Sender] has sent you a little Diwali surprise"**.
  - A decorated festive capsule with traditional motifs, glowing diya, and floating sparkles.
  - Tapping the capsule triggers realistic fireworks confetti, a festive bell chime chord, unboxing animations, and unveils the personalized greeting card.

- **Dynamic Festive Templates & Blessings**:
  - **Classic & Heartfelt**:
    > "May this Diwali bless you with good health, a peaceful mind and endless energy.
    > May your dreams turn into reality, your hard work bring success, and your life always be filled with happiness and prosperity."
  - **Lakshmi Prosperity** (Wealth & continuous growth)
  - **Dreams & Success** (Milestones & triumph)
  - **Joy & Festivity** (Celebrations & sweet moments)
  - Multi-select custom blessing tags (Health, Energy, Dreams, Success, Prosperity, Harmony).

- **Shareable Link & WhatsApp Integration**:
  - Generates a shareable URL containing sender name, recipient name, selected template, and blessings (e.g., `?from=Pratik%20Zajam&to=Rahul&blessings=health,energy,dreams&template=classic`).
  - When the recipient opens the link, the app automatically greets them with the **Capsule Opening Screen**.
  - 1-click **Share via WhatsApp** with pre-composed festive text and link.
  - Return wish: 1-click **Say "Thank you [Sender]!" on WhatsApp**.

- **Interactive Festive Playground**:
  - **5 Sacred Diyas of Prosperity** (Health, Peace, Success, Prosperity, Joy): Click to light individual diyas with chime audio and flame flickers, or use *Light All Diyas*.
  - **Phooljhadi (Sparkler Wand) Cursor**: Toggle an animated sparkler wand that emits sparkles as you move your mouse.
  - **Floating Sky Lanterns**: Release sky lanterns drifting up into the starry sky.
  - **Save Greeting Card as PNG**: Generates a high-res 1200x800 festive greeting card image.
  - **Web Audio API Sound Engine**: Zero external audio dependencies; synthesizes classical Indian raga chime chords, temple bells, and sparkler crackles natively.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)

### Development Server

Run the development server with Hot Module Replacement:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized production build in `/dist`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
diwali/
├── index.html                     # Vite root HTML template
├── package.json                   # Dependencies & npm scripts
├── vite.config.js                 # Vite + React configuration
├── README.md                      # Documentation
└── src/
    ├── main.jsx                   # React 18 entry point
    ├── App.jsx                    # Core application state & views
    ├── index.css                  # Festive CSS animations & themes
    ├── data/
    │   └── templates.js           # Greeting templates & blessing definitions
    ├── utils/
    │   ├── audio.js               # Web Audio API sound synthesis
    │   └── cardImage.js           # Canvas PNG card exporter
    └── components/
        ├── Header.jsx             # Navigation & festive toggles
        ├── Hero.jsx               # Dynamic hero banner
        ├── CreatorForm.jsx        # Sender/recipient inputs & customizer
        ├── CardPreview.jsx        # Real-time dynamic greeting card preview
        ├── CapsuleOpeningScreen.jsx # 3D capsule surprise unboxing
        ├── RevealedCelebration.jsx # Card reveal & recipient actions
        ├── InteractiveDiyas.jsx   # 5 Sacred Diyas lighting ritual
        ├── SkyLanterns.jsx        # Floating lantern animations
        └── SparklerEffect.jsx     # Animated sparkler cursor wand
```

