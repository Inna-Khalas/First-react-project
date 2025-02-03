import { NavLink } from "react-router-dom";

function AuthNav() {
  return (
    <div className="menu menu-horizontal space-x-4 px-1">
      <NavLink
        to="/register"
        className="text-lg text-neutral hover:text-primary"
        activeClassName="text-primary"
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className="text-lg text-neutral hover:text-primary"
        activeClassName="text-primary"
      >
        Login
      </NavLink>
    </div>
  );
}

export default AuthNav;
