import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";

const navLinkClass = ({ isActive }) =>
  `block rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive
      ? "bg-indigo-50 text-indigo-700"
      : "text-gray-700 hover:bg-gray-100 hover:text-indigo-700"
  }`;

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isNavOpen, setNavOpen] = useState(false);
  const cartCount = useSelector((state) =>
    state.cart.cartItem.reduce(
      (total, item) => total + (Number(item.quantity) || 1),
      0,
    ),
  );

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="eCom home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 font-bold text-white">
            e
          </span>
          <span className="text-2xl font-bold text-gray-900">eCom</span>
        </Link>

        <div className="flex items-center gap-2 md:order-2">
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Register
              </Link>
            </>
          )}
          <button
            type="button"
            onClick={() => setNavOpen((isOpen) => !isOpen)}
            className="grid h-10 w-10 place-items-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
            aria-controls="main-navigation"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="text-xl">{isNavOpen ? "x" : "="}</span>
          </button>
        </div>

        <div
          id="main-navigation"
          className={`${isNavOpen ? "block" : "hidden"} w-full md:order-1 md:block md:w-auto`}
        >
          <ul
            onClick={() => setNavOpen(false)}
            className="mt-3 flex flex-col gap-1 rounded-xl border border-gray-100 bg-gray-50 p-3 md:mt-0 md:flex-row md:border-0 md:bg-transparent md:p-0"
          >
            <li>
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={navLinkClass}>
                Cart ({cartCount})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const UserMenu = () => {
  const { logout, user } = useAuth();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        className="flex rounded-full ring-2 ring-gray-200 hover:ring-indigo-300"
        aria-expanded={isMenuOpen}
        aria-label="Open user menu"
      >
        <img
          className="h-9 w-9 rounded-full object-cover"
          src={user?.image || "https://i.pravatar.cc/80"}
          alt={user?.name ? `${user.name}'s profile` : "User profile"}
        />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
          <div className="border-b border-gray-100 px-4 py-3">
            <p className="font-medium text-gray-900">{user?.name}</p>
            <p className="truncate text-sm text-gray-500">{user?.email}</p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
