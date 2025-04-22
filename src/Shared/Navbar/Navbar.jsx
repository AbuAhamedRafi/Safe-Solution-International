import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';



const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
            {/* Left Side */}
            <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="Company Logo" className="h-8 w-8" />
                <span className="text-xl font-bold">Safe Solution International</span>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
                <a href="#about" className="hover:text-blue-500">About</a>
                <a href="#product" className="hover:text-blue-500">Product</a>
                <a href="#services" className="hover:text-blue-500">Services</a>
                <a href="#blogs" className="hover:text-blue-500">Blogs</a>
                <a href="#contact" className="hover:text-blue-500">Contact</a>
                <button onClick={toggleTheme} className="focus:outline-none">
                    {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;