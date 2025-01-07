import { NavLink, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="/"></NavLink>
        <NavLink to="/movies-page"></NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navigation;
