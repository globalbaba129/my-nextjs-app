"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#302b63] via-[#0f0c29] to-[#24243e] text-white py-10 w-full mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo & Branding */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-2xl font-bold">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7h20L12 2z" />
                  <path d="M2 7v7c0 5 10 9 10 9s10-4 10-9V7" />
                </svg>
                <span>MyLogo</span>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                Crafting digital experiences with care.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-0">
              <div className="text-center md:text-left">
                <h4 className="font-semibold mb-2">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a href="/home" className="hover:text-gray-100">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-gray-100">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="hover:text-gray-100">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="hover:text-gray-100">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-gray-100">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="text-2xl text-gray-300 hover:text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="text-2xl text-gray-300 hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="text-2xl text-gray-300 hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="text-2xl text-gray-300 hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center mt-10 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} MyLogo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
