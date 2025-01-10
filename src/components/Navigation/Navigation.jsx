import { NavLink, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navigation;
