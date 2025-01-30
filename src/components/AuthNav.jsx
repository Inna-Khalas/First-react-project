import { NavLink } from "react-router-dom";

function AuthNav() {
  return (
    <div className="bg-base-100 rounded-t-none p-2">
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default AuthNav;
