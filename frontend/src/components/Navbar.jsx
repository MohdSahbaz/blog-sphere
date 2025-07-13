import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFeatherAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/20 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaFeatherAlt className="text-2xl text-[#00ffae]" />
          <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-[#00ffae] to-[#00d4ff] text-transparent bg-clip-text">
            Bloggr
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-[#00ffc8] transition">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-[#00ffc8] transition">
            Blogs
          </Link>
          <Link to="/about" className="hover:text-[#00ffc8] transition">
            About
          </Link>
          <Link to="/login" className="hover:text-[#00ffc8] transition">
            Login
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu (absolute, right-aligned dropdown) */}
        {isOpen && (
          <div className="absolute right-0 top-13 mt-3 bg-[#1a2c27] backdrop-blur-md rounded-bl-md shadow-lg py-4 px-6 space-y-4 text-right w-fit md:hidden z-50">
            <Link
              to="/"
              onClick={closeMenu}
              className="block text-white hover:text-[#00ffc8] transition"
            >
              Home
            </Link>
            <Link
              to="/blogs"
              onClick={closeMenu}
              className="block text-white hover:text-[#00ffc8] transition"
            >
              Blogs
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block text-white hover:text-[#00ffc8] transition"
            >
              About
            </Link>
            <Link
              to="/login"
              onClick={closeMenu}
              className="block text-white hover:text-[#00ffc8] transition"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
