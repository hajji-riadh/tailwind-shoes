import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Nav() {
  const menuRef = useRef(null);
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useClickOutside(
    menuRef,
    () => {
      if (isMobileMenuShow) {
        setIsMobileMenuShow(false);
      }
    },
    window.innerWidth >= 1024
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm px-4 py-1">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <Link
          to="/"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        >
          <NikeLogo className="h-16 w-16 dark:filter dark:invert" />
          <span className="sr-only">Nike Home</span>
        </Link>

        <div className="flex items-center gap-4 lg:order-last">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full Click:bg-gray-100 dark:Click:bg-gray-800 focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-gray-800 dark:text-white" />
            ) : (
              <Moon className="h-5 w-5 text-gray-800 dark:text-white" />
            )}
          </button>

          <Link
            to="/cart"
            className="flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg h-12 w-12 Click:bg-gray-100 dark:Click:bg-gray-700 focus:ring-2 focus:ring-blue-500"
            aria-label="Shopping cart"
          >
            <TbShoppingBag size={20} className="dark:text-white" />
          </Link>

          <button
            onClick={() => setIsMobileMenuShow(!isMobileMenuShow)}
            className="lg:hidden p-2 rounded-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
          >
            <RxHamburgerMenu size={25} className="dark:text-white" />
          </button>
        </div>

        <div
          ref={menuRef}
          onMouseEnter={() =>
            window.innerWidth >= 1024 && setIsMobileMenuShow(true)
          }
          className={`${
            isMobileMenuShow ? "block" : "hidden"
          } w-full lg:w-auto lg:block transition-all duration-200 ease-in-out`}
        >
          <ul className="lg:space-x-8 flex flex-col lg:flex-row rounded-lg border border-gray-100 dark:border-gray-700 mt-4 lg:mt-0 p-4 bg-gray-50 dark:bg-gray-800 text-lg lg:bg-transparent lg:dark:bg-transparent lg:border-none lg:p-0">
            {ROUTES.map((route) => (
              <li key={route.name}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) => `
                    block px-4 py-2 rounded-md transition-colors duration-200
                    ${
                      isActive
                        ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500 dark:lg:text-blue-400"
                        : "Click:bg-gray-100 dark:Click:bg-gray-700 lg:Click:text-blue-500 dark:text-gray-200"
                    }
                  `}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
