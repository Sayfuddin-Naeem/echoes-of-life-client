import { LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router";

const AuthButtons = ({ isMobile, onLinkClick }) => {
  if (isMobile) {
    return (
      <div className="flex flex-col gap-2 px-4 py-3">
        <Link
          to="/signin"
          className="btn btn-ghost justify-start"
          onClick={onLinkClick}
        >
          <LogIn className="w-5 h-5" />
          Login
        </Link>
        <Link
          to="/signup"
          className="btn btn-primary justify-start"
          onClick={onLinkClick}
        >
          <UserPlus className="w-5 h-5" />
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link to="/signin" className="btn btn-ghost">
        Login
      </Link>
      <Link to="/signup" className="btn btn-primary">
        Sign Up
      </Link>
    </div>
  );
};

export default AuthButtons;