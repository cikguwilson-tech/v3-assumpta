import React from 'react';

/**
 * 12-Stars Crown SVG (Marian symbol from Revelation 12:1)
 * "a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars"
 */
export const TwelveStarsCrown: React.FC<{ className?: string }> = ({ className = '' }) => {
  // 12 points along a graceful arc in a 44x20 viewBox
  const stars = [
    { cx: 3.5, cy: 15.5 },
    { cx: 6.5, cy: 11.8 },
    { cx: 10.2, cy: 8.6 },
    { cx: 14.5, cy: 6.2 },
    { cx: 19.2, cy: 4.8 },
    { cx: 24.2, cy: 4.4 },
    { cx: 29.2, cy: 4.8 },
    { cx: 33.9, cy: 6.2 },
    { cx: 38.2, cy: 8.6 },
    { cx: 41.9, cy: 11.8 },
    { cx: 44.9, cy: 15.5 },
    { cx: 24.2, cy: 10.5 }, // central radiant star slightly lower inside crown or let's place exactly 12 in the arch
  ];

  // Exactly 12 stars along arch:
  // t from 0 to 11
  const twelveArcStars = Array.from({ length: 12 }, (_, i) => {
    const t = i / 11; // 0 to 1
    const angle = Math.PI * 0.15 + t * Math.PI * 0.7; // arc from ~27 deg to ~153 deg
    const rx = 19;
    const ry = 9;
    const cx = 22 - rx * Math.cos(angle);
    const cy = 15 - ry * Math.sin(angle);
    return { cx: Number(cx.toFixed(2)), cy: Number(cy.toFixed(2)) };
  });

  return (
    <svg
      viewBox="0 0 44 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle transition-transform duration-300 ${className}`}
      style={{
        width: 'var(--stars-w, 64px)',
        height: 'var(--stars-h, 28px)',
        transform: 'translateY(-2px)'
      }}
      aria-label="Crown of Twelve Stars"
    >
      <title>Crown of Twelve Stars</title>
      {/* Subtle arc baseline guide */}
      <path
        d="M 3 15.5 Q 22 2.5 41 15.5"
        stroke="var(--marian-gold, #C9A227)"
        strokeWidth="0.5"
        strokeDasharray="1 2"
        opacity="0.5"
      />
      {twelveArcStars.map((star, idx) => (
        <g key={idx} transform={`translate(${star.cx}, ${star.cy})`}>
          {/* 5-pointed star path centered at (0,0) */}
          <path
            d="M 0 -2.3 L 0.7 -0.7 L 2.4 -0.6 L 1.1 0.6 L 1.5 2.3 L 0 1.3 L -1.5 2.3 L -1.1 0.6 L -2.4 -0.6 L -0.7 -0.7 Z"
            fill="var(--marian-gold, #C9A227)"
            stroke="var(--marian-gold, #C9A227)"
            strokeWidth="0.3"
          />
        </g>
      ))}
    </svg>
  );
};

/**
 * Radiant Monstrance / Marian Star Emblem SVG
 * ViewBox 0 0 64 64, stroke 1.2
 * Central circle with 8 evenly-spaced short rays and a small cross above
 */
export const MonstranceStarEmblem: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      style={{
        width: 'var(--emblem, 44px)',
        height: 'var(--emblem, 44px)',
      }}
      aria-label="Marian Radiant Star Emblem"
    >
      {/* Central Host / Sacred circle */}
      <circle cx="32" cy="33" r="7.5" stroke="var(--marian-navy, #0B2C6B)" strokeWidth="1.2" />
      <circle cx="32" cy="33" r="4" fill="var(--marian-gold, #C9A227)" fillOpacity="0.85" />
      
      {/* 8 radiant rays around center */}
      {/* Top (shorter to leave room for cross) */}
      <line x1="32" y1="23" x2="32" y2="18" stroke="var(--marian-navy, #0B2C6B)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bottom */}
      <line x1="32" y1="43" x2="32" y2="52" stroke="var(--marian-navy, #0B2C6B)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Left */}
      <line x1="22" y1="33" x2="13" y2="33" stroke="var(--marian-navy, #0B2C6B)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Right */}
      <line x1="42" y1="33" x2="51" y2="33" stroke="var(--marian-navy, #0B2C6B)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Top-Right */}
      <line x1="39" y1="26" x2="46" y2="19" stroke="var(--marian-navy, #0B2C6B)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Top-Left */}
      <line x1="25" y1="26" x2="18" y2="19" stroke="var(--marian-navy, #0B2C6B)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bottom-Right */}
      <line x1="39" y1="40" x2="46" y2="47" stroke="var(--marian-navy, #0B2C6B)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bottom-Left */}
      <line x1="25" y1="40" x2="18" y2="47" stroke="var(--marian-navy, #0B2C6B)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Small Holy Cross Above */}
      <line x1="32" y1="4" x2="32" y2="14" stroke="var(--marian-navy, #0B2C6B)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="28" y1="7.5" x2="36" y2="7.5" stroke="var(--marian-navy, #0B2C6B)" strokeWidth="1.4" strokeLinecap="round" />

      {/* Tiny gold dot accents at cardinal tips */}
      <circle cx="32" cy="17" r="1" fill="var(--marian-gold, #C9A227)" />
      <circle cx="32" cy="53" r="1" fill="var(--marian-gold, #C9A227)" />
      <circle cx="12" cy="33" r="1" fill="var(--marian-gold, #C9A227)" />
      <circle cx="52" cy="33" r="1" fill="var(--marian-gold, #C9A227)" />
    </svg>
  );
};

/**
 * 4-Corner Bracket SVGs (TL, TR, BL, BR)
 * Reusing exact bracket mechanics (M0 11.5V0.5H11.5, viewBox 0 0 12 12)
 */
export const CornerBracket: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = '' }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return '';
      case 'top-right':
        return 'scale(-1, 1) translate(-12, 0)';
      case 'bottom-left':
        return 'scale(1, -1) translate(0, -12)';
      case 'bottom-right':
        return 'scale(-1, -1) translate(-12, -12)';
    }
  };

  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={{
        width: 'var(--corner, 12px)',
        height: 'var(--corner, 12px)',
      }}
      aria-hidden="true"
    >
      <g transform={getTransform()}>
        <path
          d="M0.5 11.5V0.5H11.5"
          stroke="var(--ink-gray, #5B6B85)"
          strokeWidth="1.2"
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
};
