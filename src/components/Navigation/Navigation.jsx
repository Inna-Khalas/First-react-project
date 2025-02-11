import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getNavLinkClass = ({ isActive }) =>
    classNames("text-lg text-neutral hover:text-primary", {
      "text-primary": isActive,
    });

  return (
    <nav className="menu menu-horizontal px-1 space-x-4">
      {!isLoggedIn ? (
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
      ) : (
        <NavLink to="/contacts" className={getNavLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
