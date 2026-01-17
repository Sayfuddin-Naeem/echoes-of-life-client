import FooterLogo from "../Logos/FooterLogo";

const Logo = () => {
  return (
    <div className="flex flex-col gap-3">
      <a href="/" className="flex items-center gap-3">
        <FooterLogo />
        <div className="flex flex-col">
          <span className="text-2xl font-bold font-serif">Echoes of Life</span>
          <span className="text-sm text-base-content/60">
            Wisdom worth remembering
          </span>
        </div>
      </a>
      <p className="text-base-content/70 max-w-sm leading-relaxed">
        Preserve your personal wisdom, reflect mindfully, and grow by exploring
        lessons from a community of thoughtful individuals.
      </p>
    </div>
  );
};

export default Logo;
