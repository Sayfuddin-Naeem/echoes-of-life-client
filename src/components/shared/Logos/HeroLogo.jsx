// Hero Logo - Dramatic ripple effect on mount
const HeroLogo = ({ size = 120 }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        {/* Rippling waves */}
        {[45, 38, 31, 24].map((r, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="oklch(65% 0.14 190)"
            strokeWidth="2"
            opacity="0"
            className="origin-center"
            style={{
              animation: `ripple 2.5s ease-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
        
        {/* Static rings for depth */}
        {[45, 38, 31, 24].map((r, i) => (
          <circle
            key={`static-${i}`}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="oklch(65% 0.14 190)"
            strokeWidth="1.5"
            opacity={0.4 - i * 0.08}
          />
        ))}
        
        {/* Glowing center */}
        <circle
          cx="50"
          cy="50"
          r="14"
          fill="oklch(52% 0.18 255)"
          className="animate-pulse"
          style={{ filter: 'drop-shadow(0 0 8px oklch(52% 0.18 255))' }}
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="oklch(98% 0.01 240)"
        />
      </svg>
      
      <style>{`
        @keyframes ripple {
          0% {
            r: 15;
            opacity: 0.8;
          }
          100% {
            r: 50;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroLogo;