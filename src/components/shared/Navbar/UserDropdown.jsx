import { Crown } from "lucide-react";
import { Link } from "react-router";

const UserDropdown = ({ user }) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            src={
              user.photoURL ||
              "https://api.dicebear.com/7.x/avataaars/svg?seed=" + user?.name
            }
            alt={user?.name}
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-1 p-2 shadow-lg menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
      >
        <li className="menu-title px-4 py-2">
          <span className="text-base font-semibold">{user.name}</span>
          {user.isPremium && (
            <span className="badge badge-primary badge-sm gap-1">
              <Crown className="w-3 h-3" />
              Premium
            </span>
          )}
        </li>
        <li>
          <Link to="/profile" className="flex items-center gap-2">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="flex items-center gap-2">
            Dashboard
          </Link>
        </li>
        <li>
          <a href="/logout" className="flex items-center gap-2 text-error">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;