import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='flex justify-between items-center p-6 '>
      {/* Left Side */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Company Logo" className="h-8 w-8" />
        <span className="text-xl font-bold hidden sm:block">
          Safe Solution International
        </span>
        <span className="text-xl font-bold sm:hidden">SS International</span>
      </Link>

      {/* Right Side */}
      <div className="relative">
        <button onClick={toggleMenu} className="sm:hidden focus:outline-none">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Items */}
        <div
          className={`absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 space-y-4 sm:static sm:flex sm:space-y-0 sm:space-x-6 sm:bg-transparent sm:shadow-none sm:rounded-none sm:p-0 ${
            menuOpen ? "flex flex-col" : "hidden"
          }`}
        >
          <Link
            to="/about"
            onClick={closeMenu}
            className="relative hover:text-blue-500 sm:after:content-[''] sm:after:absolute sm:after:h-1 sm:after:bg-blue-500 sm:after:w-0 sm:after:bottom-0 sm:after:left-0 sm:hover:after:w-full sm:after:transition-all sm:after:duration-300"
          >
            About
          </Link>
          <Link
            to="/product"
            onClick={closeMenu}
            className="relative hover:text-blue-500 sm:after:content-[''] sm:after:absolute sm:after:h-1 sm:after:bg-blue-500 sm:after:w-0 sm:after:bottom-0 sm:after:left-0 sm:hover:after:w-full sm:after:transition-all sm:after:duration-300"
          >
            Product
          </Link>
          <Link
            to="/services"
            onClick={closeMenu}
            className="relative hover:text-blue-500 sm:after:content-[''] sm:after:absolute sm:after:h-1 sm:after:bg-blue-500 sm:after:w-0 sm:after:bottom-0 sm:after:left-0 sm:hover:after:w-full sm:after:transition-all sm:after:duration-300"
          >
            Services
          </Link>
          <Link
            to="/blogs"
            onClick={closeMenu}
            className="relative hover:text-blue-500 sm:after:content-[''] sm:after:absolute sm:after:h-1 sm:after:bg-blue-500 sm:after:w-0 sm:after:bottom-0 sm:after:left-0 sm:hover:after:w-full sm:after:transition-all sm:after:duration-300"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="relative hover:text-blue-500 sm:after:content-[''] sm:after:absolute sm:after:h-1 sm:after:bg-blue-500 sm:after:w-0 sm:after:bottom-0 sm:after:left-0 sm:hover:after:w-full sm:after:transition-all sm:after:duration-300"
          >
            Contact
          </Link>
          <button onClick={toggleTheme} className="focus:outline-none">
            {darkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-gray-500" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
