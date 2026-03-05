"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = (label) => {
    setActiveLink(label);
    setIsMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const getLinkClass = (label, isMobile = false) => {
    const isActive = activeLink === label;
    const baseClass = "py-1 px-3 rounded transition-colors duration-200";

    if (isMobile) {
      // Mobile menu styling (slate text on light background)
      return `${baseClass} ${
        isActive
          ? "text-cyan-600 border-b-4 border-cyan-600 font-bold"
          : "text-slate-900 hover:bg-slate-100"
      }`;
    } else {
      // Desktop navbar styling (white text)
      return `${baseClass} ${
        isActive
          ? "text-white border-b-4 border-cyan-400 lg:text-xl font-bold"
          : "text-white hover:text-cyan-400"
      }`;
    }
  };

  return (
    <nav className="bg-slate-700 fixed w-full z-20 top-0 border-b border-orange-600">
      <div className="max-w-7xl mx-auto px-4 py-1.5">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/Logo.png"
              className="h-12 w-12 rounded"
              alt="Greenfield Logo"
              width={50}
              height={50}
            />
            <span className=" sm:inline text-[15px] sm:text-lg md:text-lg lg:text-xl text-white font-semibold whitespace-nowrap">
              Greenfield International School
            </span>
          </Link>

          {/* Desktop Navigation Links - ONLY VISIBLE ON MD AND ABOVE */}
          <div className="hidden lg:flex items-center space-x-8 text-lg">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.label)}
                className={getLinkClass(link.label, false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section: Get Started Button + Burger Menu */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="hidden lg:inline bg-cyan-500 hover:bg-cyan-600 text-white rounded px-4 py-2 font-semibold transition-colors duration-200"
            >
              Register Now
            </button>

            {/* Burger Menu Button - ONLY VISIBLE ON SMALL AND MD SCREENS */}
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              ref={burgerRef}
              className="lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-white hover:bg-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - ONLY VISIBLE ON SMALL AND MD SCREENS WHEN OPEN */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="lg:hidden fixed top-20 right-0 w-64 bg-slate-50 shadow-lg rounded-bl-lg z-40 border-l border-slate-200"
        >
          <ul className="flex flex-col p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => handleLinkClick(link.label)}
                  className={getLinkClass(link.label, true)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-slate-200">
            <button
              type="button"
              className="w-full bg-cyan-500 text-white hover:bg-cyan-600 rounded px-4 py-2 font-semibold transition-colors duration-200"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}