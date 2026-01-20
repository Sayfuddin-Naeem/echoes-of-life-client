import { Link } from "react-router";
import NavbarLogo from "../Logos/NavbarLogo";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-xl font-bold">
      <NavbarLogo />
      <span className="hidden sm:inline font-serif-4">Echoes of Life</span>
      <span className="sm:hidden font-serif-4">EOL</span>
    </Link>
  );
};

export default Logo;
