import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="p-6 bg-gray-100 min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
