"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

export default function FirstPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/home", from: "red-400", to: "orange-500" },
    { name: "About Us", href: "/about", from: "red-400", to: "orange-500" },
    { name: "Services", href: "/services", from: "red-400", to: "orange-500" },
    { name: "Portfolio", href: "/portfolio", from: "red-400", to: "orange-500" },
    { name: "blog", href: "/blog", from: "red-400", to: "orange-500" },
    { name: "Contact", href: "/contact", from: "red-400", to: "orange-500" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-[0_8px_30px_rgba(0,0,0,0.4)] border-b border-gray-800 z-50 relative">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-white font-bold text-xl">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2L2 7h20L12 2z" />
            <path d="M2 7v7c0 5 10 9 10 9s10-4 10-9V7" />
          </svg>
          <span>MyLogo</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 md:gap-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`relative px-6 py-2 font-semibold text-white rounded-lg shadow-xl transition duration-400 transform hover:-translate-y-1 hover:scale-105 hover:rotate-x-6 hover:rotate-y-6 bg-gradient-to-r from-${link.from} to-${link.to} hover:from-${link.to} hover:to-${link.from} border border-white/10 backdrop-blur-md`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Profile + Mobile Menu Button */}
        <div className="flex items-center space-x-4 text-white text-2xl">
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <FaUserCircle />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 pb-6 md:hidden">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`w-11/12 text-center px-6 py-3 font-semibold text-white rounded-lg shadow-md transition duration-300 transform bg-gradient-to-r from-${link.from} to-${link.to} hover:from-${link.to} hover:to-${link.from} border border-white/10`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Neon Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse blur-sm opacity-80"></div>
    </nav>
  );
}
