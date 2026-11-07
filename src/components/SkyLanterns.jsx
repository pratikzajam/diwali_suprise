import React from 'react';

export default function SkyLanterns({ lanterns }) {
  return (
    <div id="sky-lanterns-container" aria-hidden="true">
      {lanterns.map((l) => (
        <div
          key={l.id}
          className="floating-lantern"
          style={{
            left: `${l.left}%`,
            animationDuration: `${l.duration}s`
          }}
        >
          🏮
        </div>
      ))}
    </div>
  );
}

