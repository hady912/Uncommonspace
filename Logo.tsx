import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  isScrolled?: boolean;
  lightMode?: boolean;
  showLocation?: boolean;
  locationText?: string;
  variant?: 'minimal' | 'card';
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-9",
  iconOnly = false,
  isScrolled = false,
  lightMode = false,
  showLocation = false,
  locationText = "QURTUBAH, RIYADH",
  variant = 'minimal',
}) => {
  const markColor = lightMode || isScrolled ? "#2D2926" : "#FFFFFF";
  const textColor = lightMode || isScrolled ? "text-[#2D2926]" : "text-white";
  const subtextColor = lightMode || isScrolled ? "text-[#8C927D]" : "text-stone-300";

  const markSvg = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-auto aspect-square shrink-0"
      aria-label="Uncommon Space Logo"
    >
      <path
        d="M 16 20 C 12 38 22 55 38 55 C 58 55 64 36 54 18 C 42 2 28 28 36 58 C 44 84 68 82 74 56 C 80 30 78 82 85 85"
        stroke={variant === 'card' ? '#2D2926' : markColor}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (variant === 'card') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <div className="h-full aspect-square rounded-xl bg-[#EBE7DF] border border-[#DCD7CC] p-1.5 flex items-center justify-center shadow-xs">
          {markSvg}
        </div>
        {!iconOnly && (
          <div className="flex flex-col text-start">
            <span className={`font-serif-heading text-lg font-bold tracking-tight leading-none ${textColor}`}>
              UNCOMMON<span className="font-light opacity-60 ml-0.5">SPACE</span>
            </span>
            {showLocation && (
              <span className={`text-[8.5px] tracking-widest uppercase transition-colors flex items-center gap-1 mt-1 font-medium ${subtextColor}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B07D62] inline-block" />
                {locationText}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {markSvg}
      {!iconOnly && (
        <div className="flex flex-col text-start">
          <span className={`font-serif-heading text-lg sm:text-xl font-bold tracking-tight leading-none ${textColor}`}>
            UNCOMMON<span className="font-light opacity-60 ml-0.5">SPACE</span>
          </span>
          {showLocation && (
            <span className={`text-[8.5px] tracking-widest uppercase transition-colors flex items-center gap-1 mt-1 font-medium ${subtextColor}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B07D62] inline-block" />
              {locationText}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
