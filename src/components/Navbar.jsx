import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 left-0 border-b border-transparent bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary-600 text-blue-400">
            Pharma<span className="text-gray-700">System</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 ">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-400 focus:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/help"
            className=" text-gray-700 font-medium hover:text-blue-400 transition-colors"
          >
            Help
          </Link>
          <Link
            to="/signup"
            className="btn-secondary text-blue-400 font-medium border border-blue-400 py-1 px-2 rounded hover:text-blue-400 transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-400 hover:text-white"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="btn-secondary text-blue-400 font-medium border border-blue-400 py-1 px-3 rounded bg-blue- hover:text-blue-400 transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-400 hover:text-white"
          >
            Login
          </Link>
        </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* mobile dropdown */}
          {isOpen && (
            <div className="md:hidden bg-white px-4 pb-4 space-y-3 absolute top-[100%] left-0 w-full shadow-md">
              <Link to="#home" className="block text-gray-700 hover:text-blue-400">Home</Link>
              <Link to="#help" className="block text-gray-700 hover:text-blue-400">Help</Link>
              <Link to="#signup" className="block text-gray-700 hover:text-blue-400">Sign Up</Link>
              <Link to="/login" className="block bg-blue-400 text-white px-4 py-2 rounded-2xl text-center hover:bg-white border border-blue-400 hover:text-blue-400">Login</Link>
            </div>
          )}

      </div>
    </nav>
  );
};
