import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import { Menu, X } from "lucide-react";

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="navbar bg-base-100 border-b border-gray-300 shadow-md px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between py-2">
        <a href="/" className="text-xl font-bold">
          CONTACTS<span className="text-primary">BOOK</span>
        </a>

        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-200 transition"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        <div className="hidden sm:flex items-center gap-4">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-gray-100 text-gray-900 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 flex flex-col items-center justify-center`}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-300 transition"
          onClick={() => setMenuOpen(false)}
        >
          <X size={28} className="text-gray-900" />
        </button>

        <div className="flex flex-col items-center gap-6 w-full">
          <nav className="flex flex-col items-center gap-6 text-lg font-semibold">
            <Navigation />
          </nav>

          <div className="w-3/4 h-px bg-gray-400"></div>

          {isLoggedIn ? (
            <div className="flex flex-col items-center gap-4 w-full">
              <UserMenu />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 w-full">
              <AuthNav />
            </div>
          )}
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default AppBar;
