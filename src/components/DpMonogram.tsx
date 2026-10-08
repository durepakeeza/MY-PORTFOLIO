import React from 'react';

interface DpMonogramProps {
  className?: string;
  size?: number;
  withWordmark?: boolean;
}

/**
 * Custom luxury DP Monogram for DUR E PAKEEZA.
 * Geometric construction inspired by haute horlogerie and editorial maison identities.
 * Features interconnected D and P stems with refined hairline vectors and a soft lavender jewel accent.
 */
export const DpMonogram: React.FC<DpMonogramProps> = ({
  className = '',
  size = 36,
  withWordmark = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-500 hover:scale-105"
        aria-label="Dur E Pakeeza DP Monogram"
      >
        {/* Subtle geometric outer guide ring with ultra-fine luxury stroke */}
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="12"
          stroke="rgba(216, 216, 224, 0.14)"
          strokeWidth="1"
        />

        {/* Stem of D and P */}
        <line
          x1="15"
          y1="11"
          x2="15"
          y2="37"
          stroke="#F3F1ED"
          strokeWidth="1.75"
          strokeLinecap="round"
        />

        {/* Serif cap top */}
        <line
          x1="12"
          y1="11"
          x2="18"
          y2="11"
          stroke="#D8D8E0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Serif base foot */}
        <line
          x1="12"
          y1="37"
          x2="18"
          y2="37"
          stroke="#D8D8E0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* D curve: Architectural sweep across full height */}
        <path
          d="M15 12.5H23C29.5 12.5 33.5 17 33.5 24C33.5 31 29.5 35.5 23 35.5H15"
          stroke="#F3F1ED"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* P upper loop: Nesting seamlessly with subtle lavender signature accent */}
        <path
          d="M15 12.5H24.5C28.8 12.5 31.5 15.2 31.5 19.5C31.5 23.8 28.8 26.5 24.5 26.5H15"
          stroke="#C9C7FF"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Fine lavender architectural jewel node at intersection */}
        <circle cx="24.5" cy="26.5" r="1.5" fill="#C9C7FF" />
      </svg>

      {withWordmark && (
        <div className="flex flex-col">
          <span className="font-serif tracking-[0.2em] text-sm md:text-base font-semibold text-[#F3F1ED] uppercase">
            Dur E Pakeeza
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#A8A8B0] uppercase font-light">
            Studio
          </span>
        </div>
      )}
    </div>
  );
};
