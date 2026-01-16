import { Crown, Menu, X } from "lucide-react";
import { useState } from "react";
import AuthButtons from "./AuthButtons";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import UserDropdown from "./UserDropdown";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Demo state - replace with actual auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    isPremium: true,
  });

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 lg:px-8">
      <div className="flex-1">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-none gap-2">
        <NavLinks isLoggedIn={isLoggedIn} isMobile={false} />
        <div className="divider divider-horizontal mx-0"></div>
        <ThemeToggle />
        {isLoggedIn ? (
          <UserDropdown user={user} />
        ) : (
          <AuthButtons isMobile={false} />
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden gap-2">
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className="btn btn-ghost btn-circle"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 shadow-lg lg:hidden">
          <div className="flex flex-col py-4 gap-1">
            <NavLinks
              isLoggedIn={isLoggedIn}
              isMobile={true}
              onLinkClick={closeMenu}
            />
            <div className="divider my-2"></div>
            {isLoggedIn ? (
              <div className="px-4 py-2 flex items-center gap-3">
                <img
                  src={user.photoURL}
                  alt={user.name}
                  className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                />
                <div className="flex-1">
                  <p className="font-semibold">{user.name}</p>
                  {user.isPremium && (
                    <span className="badge badge-primary badge-sm gap-1 mt-1">
                      <Crown className="w-3 h-3" />
                      Premium
                    </span>
                  )}
                </div>
              </div>
            ) : null}
            {isLoggedIn ? (
              <div className="flex flex-col gap-1 px-4">
                <Link
                  to="/profile"
                  className="btn btn-ghost justify-start"
                  onClick={closeMenu}
                >
                  Profile
                </Link>
                <Link
                  to="/dashboard"
                  className="btn btn-ghost justify-start"
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>
                <a
                  href="/logout"
                  className="btn btn-ghost justify-start text-error"
                  onClick={closeMenu}
                >
                  Logout
                </a>
              </div>
            ) : (
              <AuthButtons isMobile={true} onLinkClick={closeMenu} />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
