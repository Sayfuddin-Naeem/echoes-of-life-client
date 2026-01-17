const FooterLogo = ({ size = 50 }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="w-full h-full text-secondary">
        {[45, 38, 31, 24].map((r, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity={0.6 - i * 0.15}
            className="origin-center animate-[pulse_3s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        <circle cx="50" cy="50" r="12" className="fill-primary" opacity="0.8" />
        <circle cx="50" cy="50" r="8" className="fill-base-100" />
      </svg>
    </div>
  );
};

export default FooterLogo;
