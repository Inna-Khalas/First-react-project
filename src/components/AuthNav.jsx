import classNames from "classnames";
import { NavLink } from "react-router-dom";

function AuthNav() {
  const getNavLinkClass = ({ isActive }) =>
    classNames("text-lg text-neutral hover:text-primary", {
      "text-primary": isActive,
    });
  return (
    <div className="menu menu-horizontal space-x-4 px-1">
      <NavLink to="/register" className={getNavLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={getNavLinkClass}>
        Login
      </NavLink>
    </div>
  );
}

export default AuthNav;
