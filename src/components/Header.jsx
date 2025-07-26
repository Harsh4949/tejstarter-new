import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Rocket, Menu, X, Sparkles, Zap, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'launchpad', label: 'Launchpad', path: '/launchpad' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'collaboration', label: ' Collaboration', path: '/collaboration' },
    { id: 'stories', label: 'Stories', path: '/stories' }
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setShowUserMenu(false);
  };

  const handleLogout = async () => {
    await logout();
    setShowUserMenu(false);
    setIsMenuOpen(false);
    navigate('/', { replace: true });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-blue-100/50' 
        : 'bg-white/95 backdrop-blur-sm shadow-lg shadow-blue-500/5'
    }`}>
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white/20 to-blue-50/30 opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="group flex items-center space-x-3 cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-300 blur-lg"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-2xl group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300 transform group-hover:scale-110 shadow-xl">
                <Rocket className="h-6 w-6 text-white" />
                <div className="absolute top-1 right-1">
                  <Sparkles className="h-3 w-3 text-blue-100 animate-pulse" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent tracking-tight leading-none">
                TEJSTARTER
              </span>
              <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                Innovation Hub
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative group px-4 py-2 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30 transform scale-105'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:scale-105'
                }`}
              >
                {!isActive(item.path) && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <span className="relative z-10">{item.label}</span>
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons - Show different options based on user status */}
          <div className="flex items-center space-x-3">
            {user ? (
              // User is logged in - show profile menu
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="group relative flex items-center space-x-2 px-6 py-2.5 font-bold text-sm text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-blue-50 hover:scale-105"
                >
                  <User className="h-4 w-4" />
                  <span className="relative z-10">{user.name}</span>
                </button>
                
                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 rounded-2xl border border-blue-100 overflow-hidden">
                    <Link 
                      to="/dashboard" 
                      onClick={handleNavClick}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Dashboard</span>
                      </div>
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // User is not logged in - show sign in and get started buttons
              <>
                <Link 
                  to="/login" 
                  className="group relative px-6 py-2.5 font-bold text-sm text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-blue-50 hover:scale-105"
                >
                  <span className="relative z-10">Sign in</span>
                </Link>
                <Link 
                  to="/signup" 
                  className="group relative overflow-hidden px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Started</span>
                    <Zap className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex lg:hidden justify-between items-center h-16 sm:h-18">
          {/* Mobile Logo */}
          <Link to="/" className="group flex items-center space-x-2 cursor-pointer" onClick={handleNavClick}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-15 group-hover:opacity-25 transition-opacity duration-300 blur-md"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 p-2.5 rounded-xl group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                <Rocket className="h-5 w-5 text-white" />
                <div className="absolute top-0.5 right-0.5">
                  <Sparkles className="h-2.5 w-2.5 text-blue-100 animate-pulse" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent tracking-tight leading-none">
                TEJSTARTER
              </span>
              <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase hidden sm:block">
                Innovation Hub
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="relative group p-2 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-110"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 group-hover:text-blue-600 relative z-10 transition-colors duration-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 group-hover:text-blue-600 relative z-10 transition-colors duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-blue-100 shadow-2xl shadow-blue-500/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`group relative px-4 py-3 rounded-xl font-semibold text-base tracking-wide transition-all duration-300 transform hover:scale-105 ${
                      isActive(item.path)
                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {!isActive(item.path) && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                ))}
                
                {/* Mobile CTA Buttons - Different based on user status */}
                <div className="flex flex-col space-y-3 pt-6 border-t border-blue-100 mt-4">
                  {user ? (
                    // User is logged in - show dashboard and logout
                    <>
                      <Link 
                        to="/dashboard" 
                        onClick={handleNavClick} 
                        className="group relative px-6 py-3 font-bold text-base text-center text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-blue-50 transform hover:scale-105"
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>Dashboard</span>
                        </span>
                      </Link>
                      <button 
                        onClick={handleLogout} 
                        className="group relative px-6 py-3 font-bold text-base text-center text-red-600 hover:text-red-700 transition-all duration-300 rounded-xl hover:bg-red-50 transform hover:scale-105"
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <LogOut className="h-4 w-4" />
                          <span>Logout</span>
                        </span>
                      </button>
                    </>
                  ) : (
                    // User is not logged in - show sign in and get started
                    <>
                      <Link 
                        to="/login" 
                        onClick={handleNavClick} 
                        className="group relative px-6 py-3 font-bold text-base text-center text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-blue-50 transform hover:scale-105"
                      >
                        <span className="relative z-10">Sign in</span>
                      </Link>
                      <Link 
                        to="/signup" 
                        onClick={handleNavClick} 
                        className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base text-center rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <span>Get Started</span>
                          <Zap className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
