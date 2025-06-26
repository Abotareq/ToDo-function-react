import React from "react";
import { NavLink } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../Redux/state.slice/langaugeSlice";

function Navbar() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

  const toggleLanguage = () => {
    const newLang = currentLanguage === "ar" ? "en" : "ar";
    dispatch(setLanguage(newLang));
  };

  const links = [
    { name: "Registration", to: "/" },
    { name: "ToDo", to: "/ToDo" },
    { name: "Login", to: "/Login" },
    { name: "Products", to: "/Products" },
    { name: "Movies", to: "/Movies" },
    { name: "Fav", to: "/favMovies" },
    { name: "TV", to: "/tv" },
  ];

  return (
    <header className="bg-gray-800 text-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide text-gray-100">
          🎬 My App
        </h1>

        <ul className="flex items-center gap-5 text-sm font-medium">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-all duration-200 hover:text-white ${
                    isActive ? "text-blue-400 font-semibold underline" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleLanguage}
          className="ml-4 text-gray-300 hover:text-white transition"
          title={`Switch to ${
            currentLanguage === "ar" ? "English" : "Arabic"
          }`}
        >
          <FaGlobe size={22} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
