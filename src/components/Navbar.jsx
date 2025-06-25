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

  return (
    <>
      <header className="bg-blue-800 text-white px-6 py-4 shadow-md">
        <nav className="flex justify-between items-center max-w-10xl mx-auto">
          <h1 className="text-2xl font-bold">My App</h1>

          {/* Globe Icon for Language Toggle */}
          <FaGlobe
            onClick={toggleLanguage}
            size={32}
            className="cursor-pointer"
            title={`Switch to ${
              currentLanguage === "ar" ? "English" : "Arabic"
            }`}
          />

          <ul className="flex space-x-6 gap-x-5 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Registration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ToDo"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                ToDo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Login"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Products"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Movies"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
