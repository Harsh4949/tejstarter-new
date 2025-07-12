import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'launchpad', label: 'Launchpad', path: '/launchpad' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'collaboration', label: 'College Collaboration', path: '/collaboration' },
    { id: 'stories', label: 'Stories', path: '/stories' }
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="hidden md:flex justify-between items-center h-20 w-full">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-xl">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-extrabold text-black tracking-tight">
              TEJSTARTER
            </span>
          </Link>

          <nav className="flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-black font-bold text-sm hover:text-blue-600 transition">
              Sign in
            </Link>
            <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded-full transition-colors">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer" onClick={handleNavClick}>
            <div className="bg-blue-600 p-2 rounded-xl">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-extrabold text-black tracking-tight">TEJSTARTER</span>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`text-left transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login" onClick={handleNavClick} className="text-black font-bold text-sm hover:text-blue-600 transition">
                  Sign in
                </Link>
                <Link to="/signup" onClick={handleNavClick} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded-full transition-colors">
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
