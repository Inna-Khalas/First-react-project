import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className="menu menu-horizontal px-1 space-x-4">
      <NavLink
        to="/"
        className="text-lg text-neutral hover:text-primary"
        activeClassName="text-primary"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className="text-lg text-neutral hover:text-primary"
          activeClassName="text-primary"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
