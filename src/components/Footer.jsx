import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left: App Name or Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </p>

        {/* Right: Navigation or Socials */}
        <ul className="flex gap-5 text-sm mt-4 md:mt-0">
          <li>
            <a href="/privacy" className="hover:text-white transition">
              Privacy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-white transition">
              Terms
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
