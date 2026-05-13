import { useState } from "react";
import { Link, NavLink } from "react-router";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import useAuth from "../hook/useAuth";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  // const products = useSelector((state) => state.cart.cartItem);
  const products = useSelector(
  (state) => state.cart.cartItem || [] );
  return (
    <>
      <nav className="bg-white sticky top-0 z-10 w-full border-gray-200 dark:bg-gray-900">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/memo"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="vite.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              eCom
            </span>
          </Link>
          <div className="flex relative items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
                <Link to="/register" className="btn btn-success ml-1">
                  Register
                </Link>
              </>
            )}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm bg-transparent md:p-0 text-black dark:text-white ${isActive ? "text-blue-500!" : "hover:text-blue-500!"}`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm bg-transparent md:p-0 text-black dark:text-white ${isActive ? "text-blue-500!" : "hover:text-blue-500!"}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hvsdbjhvdbhvdbs"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm bg-transparent md:p-0 text-black dark:text-white ${isActive ? "text-blue-500!" : "hover:text-blue-500!"}`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm bg-transparent md:p-0 text-black dark:text-white ${isActive ? "text-blue-500!" : "hover:text-blue-500!"}`
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm bg-transparent md:p-0 text-black dark:text-white ${isActive ? "text-blue-500!" : "hover:text-blue-500!"}`
                  }
                >
                  {/* Cart ({products.length}) */}
                  Cart ({Array.isArray(products) ? products.length : 0})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const UserMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { logout, user } = useAuth();
  return (
    <>
      <motion.button
        whileTap={{ y: 1 }}
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          // src={user.image}
          src={user?.image || "https://i.pravatar.cc/40"}
          alt="user photo"
        />
      </motion.button>
      {/* Dropdown menu */}
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="z-50 absolute top-9 -right-1 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                {/* {user.name} */}
                {user?.name || "Guest"}
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                {/* {user.email} */}
                {user?.email || "No Email"}
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <NavLink
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={logout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
