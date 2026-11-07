import React, { useEffect, useState } from 'react';

export default function SparklerEffect({ active }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [active]);

  if (!active) return null;

  return (
    <div
      className="sparkler-wand"
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      aria-hidden="true"
    >
      <div className="wand-stick"></div>
      <div className="wand-tip"></div>
    </div>
  );
}

