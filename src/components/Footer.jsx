import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-blue-800 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
