import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className="navbar bg-primary text-primary-content">
      <a href="/" className="btn btn-ghost text-xl">
        CONTACTS<span>BOOK</span>
      </a>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
