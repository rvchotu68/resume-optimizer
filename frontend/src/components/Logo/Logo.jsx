import React from "react";

function Logo({ width, height }) {
  return (
    <svg
      viewBox="-60 -60 120 120"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="primaryGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4facfe" />
          <stop offset="100%" stopColor="#00f2fe" />
        </linearGradient>
        <linearGradient
          id="secondaryGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff9a9e" />
          <stop offset="100%" stopColor="#fecfef" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="1"
            dy="1"
            stdDeviation="1.5"
            floodColor="#000000"
            floodOpacity="0.1"
          />
        </filter>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer circle */}
      <circle
        r="40"
        fill="white"
        stroke="#e2e8f0"
        strokeWidth="2"
        filter="url(#shadow)"
      />

      {/* Briefcase */}
      <rect
        x="-15"
        y="-10"
        width="30"
        height="20"
        rx="2"
        fill="url(#primaryGradient)"
        stroke="#2d3748"
        strokeWidth="1.5"
      />
      <path
        d="M -6 -10 Q -6 -16 0 -16 Q 6 -16 6 -10"
        fill="none"
        stroke="#2d3748"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="-3" y="-3" width="6" height="8" rx="1.2" fill="#2d3748" />

      {/* Resume icon */}
      <rect
        x="-12"
        y="-6"
        width="10"
        height="12"
        rx="1"
        fill="white"
        opacity="0.9"
      />
      <line
        x1="-10"
        y1="-3"
        x2="-3"
        y2="-3"
        stroke="#4facfe"
        strokeWidth="0.8"
      />
      <line
        x1="-10"
        y1="-1"
        x2="-3"
        y2="-1"
        stroke="#4facfe"
        strokeWidth="0.8"
      />
      <line x1="-10" y1="1" x2="-6" y2="1" stroke="#4facfe" strokeWidth="0.8" />

      {/* Graph icon */}
      <rect
        x="2"
        y="-6"
        width="10"
        height="12"
        rx="1"
        fill="white"
        opacity="0.9"
      />
      <path
        d="M 3 5 L 5 2 L 7 3 L 10 0"
        fill="none"
        stroke="#00f2fe"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Orbit rings */}
      <circle
        r="25"
        fill="none"
        stroke="url(#accentGradient)"
        strokeWidth="1.2"
        opacity="0.4"
        strokeDasharray="2,2"
      />
      <circle
        r="18"
        fill="none"
        stroke="url(#secondaryGradient)"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="2,2"
      />

      {/* Orbit nodes */}
      <circle cx="18" cy="-15" r="2.5" fill="#ff9a9e" filter="url(#glow)" />
      <circle cx="-20" cy="12" r="2.2" fill="#4facfe" filter="url(#glow)" />
      <circle cx="15" cy="17" r="2" fill="#00f2fe" filter="url(#glow)" />
      <circle cx="-14" cy="-22" r="2.2" fill="#fecfef" filter="url(#glow)" />
      <circle cx="22" cy="8" r="2" fill="#667eea" filter="url(#glow)" />

      {/* Connections */}
      <path
        d="M 18 -15 Q 0 -7 -14 -22"
        fill="none"
        stroke="#764ba2"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M -20 12 Q 0 12 15 17"
        fill="none"
        stroke="#4facfe"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}

export default Logo;
