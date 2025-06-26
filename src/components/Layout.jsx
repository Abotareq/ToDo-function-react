import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
export default function Layout() {
  const language = useSelector((state) => state.language.currentLanguage);
  console.log("Current Language:", language);
  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="p-6 bg-gray-500 min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
