import React from 'react';

// Small hand-drawn line icons, rendered as plain inline SVG (react-native-web
// mounts into real DOM, so ordinary SVG JSX works fine alongside RN Web
// primitives). Every icon takes size + color so it follows the active theme.

const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
});

export function SunIcon({ size = 18, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <circle cx="12" cy="12" r="4.2" stroke={color} strokeWidth="1.6" />
      <g stroke={color} strokeWidth="1.6" strokeLinecap="round">
        <line x1="12" y1="1.8" x2="12" y2="4.4" />
        <line x1="12" y1="19.6" x2="12" y2="22.2" />
        <line x1="1.8" y1="12" x2="4.4" y2="12" />
        <line x1="19.6" y1="12" x2="22.2" y2="12" />
        <line x1="4.7" y1="4.7" x2="6.5" y2="6.5" />
        <line x1="17.5" y1="17.5" x2="19.3" y2="19.3" />
        <line x1="4.7" y1="19.3" x2="6.5" y2="17.5" />
        <line x1="17.5" y1="6.5" x2="19.3" y2="4.7" />
      </g>
    </svg>
  );
}

export function MoonIcon({ size = 18, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <path
        d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CodeIcon({ size = 22, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <g stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8.5,7 3.5,12 8.5,17" />
        <polyline points="15.5,7 20.5,12 15.5,17" />
        <line x1="13.2" y1="5.5" x2="10.8" y2="18.5" />
      </g>
    </svg>
  );
}

export function LayersIcon({ size = 22, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <g stroke={color} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
        <polygon points="12,3.5 21,8.5 12,13.5 3,8.5" />
        <polyline points="3,13 12,18 21,13" />
        <polyline points="3,17.5 12,22.5 21,17.5" />
      </g>
    </svg>
  );
}

export function ServerIcon({ size = 22, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <g stroke={color} strokeWidth="1.6" strokeLinejoin="round">
        <rect x="3.5" y="4" width="17" height="6.2" rx="1.4" />
        <rect x="3.5" y="13.8" width="17" height="6.2" rx="1.4" />
      </g>
      <g fill={color}>
        <circle cx="7" cy="7.1" r="1" />
        <circle cx="7" cy="16.9" r="1" />
      </g>
    </svg>
  );
}

export function SparkIcon({ size = 22, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <path
        d="M12 2.5 14 9.8 21 12 14 14.2 12 21.5 10 14.2 3 12 10 9.8Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloudIcon({ size = 22, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <path
        d="M7 18.5a4.3 4.3 0 0 1-.8-8.53 5.3 5.3 0 0 1 10.2-1.8 4.2 4.2 0 0 1 1.1 8.28"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <line x1="6.5" y1="18.5" x2="17" y2="18.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function DatabaseIcon({ size = 22, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <g stroke={color} strokeWidth="1.6">
        <ellipse cx="12" cy="6" rx="7.5" ry="2.8" />
        <path d="M4.5 6v6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8V6" strokeLinecap="round" />
        <path d="M4.5 12v6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function TerminalIcon({ size = 22, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" stroke={color} strokeWidth="1.6" />
      <polyline
        points="6.5,9 10,12.2 6.5,15.4"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="12" y1="15.4" x2="17" y2="15.4" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function NetworkIcon({ size = 24, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <g stroke={color} strokeWidth="1.5">
        <line x1="12" y1="6" x2="5.5" y2="17" />
        <line x1="12" y1="6" x2="18.5" y2="17" />
        <line x1="5.5" y1="17" x2="18.5" y2="17" />
      </g>
      <g fill={color}>
        <circle cx="12" cy="5" r="2.1" />
        <circle cx="5" cy="18" r="2.1" />
        <circle cx="19" cy="18" r="2.1" />
      </g>
    </svg>
  );
}

export function EyeIcon({ size = 24, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <path
        d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.8" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export function CompareIcon({ size = 24, color = '#000' }) {
  return (
    <svg {...base(size)}>
      <path
        d="M9.5 3.5h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1.2v3l3.4-3H9.5a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 8.5h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1.2v3l-3.4-3h-.4a2 2 0 0 1-2-2v-2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlobShape({ size = 420, color = '#000', opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 420 420" fill="none">
      <path
        d="M300 60c48 34 76 92 68 150-8 58-52 108-108 128-56 20-124 8-158-36-34-44-34-116 4-166 38-50 118-102 194-76Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
}
