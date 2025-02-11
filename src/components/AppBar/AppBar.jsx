import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className="navbar bg-base-100 border-b border-gray-300 shadow-md">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          CONTACTS<span>BOOK</span>
        </a>
      </div>
      <div className="flex-none">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}

export default AppBar;
