import { useMemo } from 'react';
import { INDONESIA_PATHS, MAP_HEIGHT } from '../../data/indonesiaMap';

const HUBS = [
  { x: 73.2, y: 45.6, gold: false, delay: '0s' },
  { x: 201.4, y: 199.0, gold: false, delay: '0.7s' },
  { x: 293.8, y: 215.5, gold: false, delay: '1.4s' },
  { x: 332.5, y: 237.4, gold: true, delay: '2.1s' },
  { x: 357.7, y: 121.8, gold: false, delay: '2.8s' },
  { x: 398.3, y: 182.6, gold: false, delay: '3.5s' },
  { x: 731.8, y: 141.5, gold: true, delay: '4.2s' },
];

const LINKS = [
  'M201.4 199.0 Q130 110 73.2 45.6',
  'M201.4 199.0 Q250 200 293.8 215.5',
  'M201.4 199.0 Q285 150 357.7 121.8',
  'M293.8 215.5 Q345 200 398.3 182.6',
  'M398.3 182.6 Q570 150 731.8 141.5',
  'M293.8 215.5 Q315 228 332.5 237.4',
];

export const IndonesiaMap = () => {
  const paths = useMemo(() => INDONESIA_PATHS, []);

  return (
    <div className="map-float relative" aria-hidden="true">
      <div className="absolute inset-x-8 top-1/2 -z-10 h-40 -translate-y-1/2 rounded-full bg-ice opacity-60 blur-3xl" />

      <svg
        viewBox={`-14 -14 788 ${MAP_HEIGHT + 30}`}
        className="h-auto w-full"
        fill="none"
        role="presentation"
      >
        <defs>
          <radialGradient id="isleSoft" cx="0.5" cy="0.45" r="0.75">
            <stop offset="0%" stopColor="#EEF2FF" />
            <stop offset="100%" stopColor="#E4E9FA" />
          </radialGradient>
        </defs>

        <g stroke="#E9EDF8" strokeWidth="1">
          <circle cx="420" cy="150" r="150" />
          <circle cx="420" cy="150" r="215" />
        </g>

        <g fill="#DCE2F4">
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={672 + col * 13} cy={row * 13} r="1.3" />
            ))
          )}
        </g>

        <g stroke="#6677E8" strokeWidth="1" opacity="0.65">
          {LINKS.map((d) => (
            <path key={d} d={d} className="map-link" strokeLinecap="round" />
          ))}
        </g>

        <g fill="url(#isleSoft)" stroke="#292A73" strokeOpacity="0.62" strokeWidth="1" strokeLinejoin="round">
          {paths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {HUBS.map((h) => (
          <g key={`${h.x}-${h.y}`}>
            <circle cx={h.x} cy={h.y} r="7" fill={h.gold ? '#C9AA62' : '#6677E8'} opacity="0.3" className="node-ring" style={{ animationDelay: h.delay }} />
            <circle cx={h.x} cy={h.y} r="3.2" fill={h.gold ? '#C9AA62' : '#292A73'} stroke="#FFFFFF" strokeWidth="1.3" />
          </g>
        ))}
      </svg>
    </div>
  );
};
