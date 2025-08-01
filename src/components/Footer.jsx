import React from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#e0f7fa] to-[#f0f9ff] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/90 rounded-2xl shadow-2xl p-10 backdrop-blur-lg transition-all duration-300 hover:shadow-blue-200">

          {/* Grid Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            
            {/* Logo & Description */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-xl shadow-md">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold tracking-wide text-gray-800">TEJSTARTER</h1>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 hover:text-gray-800 transition-all duration-200">
                Empowering students, entrepreneurs, and professionals to launch ideas, connect, and grow with confidence and creativity.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation with Collaboration */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Navigation</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/launchpad"
                    className="hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
                  >
                    Launchpad
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collaboration"
                    className="hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
                  >
                    Collaboration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/stories"
                    className="hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4"
                  >
                    Stories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Programs</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  'Student Entrepreneurship',
                  'Mentorship',
                  'Startup Incubation',
                  'Career Development',
                ].map((item) => (
                  <li key={item}>
                    <span className="hover:text-blue-600 transition-all duration-200 cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 mt-1 text-blue-600" />
                  <span className="group-hover:text-blue-700 transition-colors">Innovation Hub, Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="group-hover:text-blue-700 transition-colors">info@tejstarter.in</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="group-hover:text-blue-700 transition-colors">+91 9876 543 210</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section Inside Card */}
          <div className="mt-10 text-center border-t border-gray-300 pt-6">
            <p className="text-gray-600 text-sm mb-3">
              Developed by{' '}
              <span className="text-blue-700 font-semibold hover:underline cursor-pointer">Sakib Attar</span>,{' '}
              <span className="text-blue-700 font-semibold hover:underline cursor-pointer">Harshwardhan Patil</span>,{' '}
              <span className="text-blue-700 font-semibold hover:underline cursor-pointer">Parth Jadhav</span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-2">
              <Link to="/privacy" className="hover:text-blue-600 hover:underline underline-offset-4">Privacy</Link>
              <Link to="/terms" className="hover:text-blue-600 hover:underline underline-offset-4">Terms</Link>
              <Link to="/cookies" className="hover:text-blue-600 hover:underline underline-offset-4">Cookies</Link>
            </div>

            <p className="text-xs text-gray-400 mt-2">© 2025 TEJSTARTER. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
