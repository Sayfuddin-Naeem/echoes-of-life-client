import { BookOpen, Crown, Globe, Home, Plus } from "lucide-react";
import { NavLink } from "react-router";

// Navigation Links Component
const NavLinks = ({ isLoggedIn, isMobile, onLinkClick }) => {
  const publicLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Public Lessons', path: '/public-lessons', icon: Globe },
  ];

  const privateLinks = [
    { name: 'Add Lesson', path: '/dashboard/add-lesson', icon: Plus },
    { name: 'My Lessons', path: '/dashboard/my-lessons', icon: BookOpen },
    { name: 'Upgrade', path: '/pricing', icon: Crown },
  ];

  const linkClass = isMobile
    ? "flex items-center gap-3 px-4 py-3 hover:bg-base-200 rounded-lg transition-colors"
    : "btn btn-ghost";

  return (
    <>
      {publicLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={linkClass}
          onClick={onLinkClick}
        >
          {isMobile && <link.icon className="w-5 h-5" />}
          {link.name}
        </NavLink>
      ))}
      
      {isLoggedIn && privateLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={linkClass}
          onClick={onLinkClick}
        >
          {isMobile && <link.icon className="w-5 h-5" />}
          {link.name}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;