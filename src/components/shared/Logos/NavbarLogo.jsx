const NavbarLogo = ({ size = 40 }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-secondary"
      >
        {/* Rotating outer rings */}
        <g className="origin-center animate-[spin_20s_linear_infinite]">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
          />
        </g>
        
        {/* Counter-rotating middle rings */}
        <g className="origin-center animate-[spin_15s_linear_infinite_reverse]">
          <circle
            cx="50"
            cy="50"
            r="31"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <circle
            cx="50"
            cy="50"
            r="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.3"
          />
        </g>
        
        {/* Static glowing center */}
        <circle
          cx="50"
          cy="50"
          r="12"
          className="animate-pulse fill-primary"
        />
        <circle
          cx="50"
          cy="50"
          r="8"
          className="fill-primary"
        />
      </svg>
    </div>
  );
};

export default NavbarLogo;