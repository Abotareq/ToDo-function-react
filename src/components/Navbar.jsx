import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="bg-blue-800 text-white px-6 py-4 shadow-md">
        <nav className="flex justify-between items-center max-w-10xl mx-auto">
          <h1 className="text-2xl font-bold">My App</h1>
          <ul className="flex space-x-6 font-medium">
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
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
