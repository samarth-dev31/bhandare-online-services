// ======================================================
// BHANDARE ONLINE SERVICES - PREMIUM NAVBAR
// File: src/components/Navbar.jsx
// ======================================================

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="leading-tight">
            <h1 className="text-2xl font-extrabold tracking-wide text-blue-700">
              BHANDARE
            </h1>

            <p className="text-xs uppercase tracking-[3px] text-gray-500">
              Online Services
            </p>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 hover:text-blue-700 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop WhatsApp Button */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/91YOURNUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp size={22} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mb-4 p-5">
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-gray-700 hover:text-blue-700 transition"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://wa.me/918446318518"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition-all duration-300"
              >
                <FaWhatsapp size={22} />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}