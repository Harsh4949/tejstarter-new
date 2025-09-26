// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Rocket,
//   Github,
//   Twitter,
//   Linkedin,
//   Instagram,
//   Facebook,
//   MapPin,
//   Mail,
//   Phone,
//   Globe,
//   ArrowUpRight,
//   Sparkles,
//   Users,
//   Zap,
//   Heart,
//   Shield,
//   Award,
//   BookOpen,
//   Briefcase,
//   TrendingUp,
//   Target,
//   Star,
//   Crown,
//   Lightbulb,
//   Handshake,
//   Building,
//   GraduationCap,
//   ChevronRight
// } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     quickLinks: [
//       { name: 'Launchpad', href: '/launchpad', icon: Rocket, emoji: '🚀' },
//       { name: 'Collaboration', href: '/collaboration', icon: Users, emoji: '🤝' },
//       { name: 'Success Stories', href: '/stories', icon: Award, emoji: '🏆' },
//       { name: 'About Us', href: '/about', icon: Heart, emoji: '💝' },
//     ],
//     programs: [
//       { name: 'Student Hub', href: '#', icon: GraduationCap, emoji: '🎓' },
//       { name: 'Startup Incubation', href: '#', icon: Building, emoji: '🏢' },
//       { name: 'Mentorship', href: '#', icon: Target, emoji: '🎯' },
//       { name: 'Career Growth', href: '#', icon: TrendingUp, emoji: '📈' },
//     ],
//     resources: [
//       { name: 'Documentation', href: '#', icon: BookOpen, emoji: '📚' },
//       { name: 'Community', href: '#', icon: Users, emoji: '👥' },
//       { name: 'Support', href: '#', icon: Shield, emoji: '🛡️' },
//       { name: 'Blog', href: '#', icon: Lightbulb, emoji: '💡' },
//     ],
//     legal: [
//       { name: 'Privacy Policy', href: '/privacy', emoji: '🔒' },
//       { name: 'Privacy Policy', href: '/privacy', emoji: '🔒' },
//       { name: 'Terms of Service', href: '/terms', emoji: '📜' },
//       { name: 'Cookie Policy', href: '/cookies', emoji: '🍪' },
//       { name: 'Security', href: '/security', emoji: '🔐' },
//     ]
//   };

//   const socialLinks = [
//     { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-900', emoji: '⚡' },
//     { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-500', emoji: '🐦' },
//     { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600', emoji: '💼' },
//     { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500', emoji: '📸' },
//   ];

//   const stats = [
//     { label: 'Students', value: '50K+', emoji: '🎓', color: 'text-blue-600' },
//     { label: 'Startups', value: '1000+', emoji: '🚀', color: 'text-green-600' },
//     { label: 'Mentors', value: '500+', emoji: '👨‍💼', color: 'text-purple-600' },
//     { label: 'Success Stories', value: '2000+', emoji: '🏆', color: 'text-orange-600' },
//   ];
//   return (
//     <footer className="bg-gradient-to-br from-[#e0f7fa] to-[#f0f9ff] py-12">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="bg-white/90 rounded-2xl shadow-2xl p-8 backdrop-blur-lg">

//           {/* Grid Content */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
//             {/* Logo & Description */}
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <div className="bg-blue-600 p-2 rounded-xl shadow-md">
//                   <Rocket className="h-6 w-6 text-white" />
//                 </div>
//                 <h1 className="text-2xl font-bold text-gray-800">TEJSTARTER</h1>
//                 <span className="text-xl">🇮🇳</span>
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                 🌟 Empowering students & entrepreneurs across India 💪
//               </p>

//               {/* Social Icons */}
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, idx) => {
//                   const IconComponent = social.icon;
//                   return (
//                     <a
//                       key={idx}
//                       href={social.href}
//                       className="text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-110"
//                       title={social.name}
//                     >
//                       <span className="text-lg mr-1">{social.emoji}</span>
//                       <IconComponent className="h-4 w-4 inline" />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
//                 <Star className="h-4 w-4 mr-2 text-blue-600" />
//                 Quick Links ⚡
//               </h3>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 {footerLinks.quickLinks.map((link, idx) => (
//                   <li key={idx}>
//                     <Link
//                       to={link.href}
//                       className="hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4 flex items-center space-x-2"
//                     >
//                       <span>{link.emoji}</span>
//                       <span>{link.name}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Programs */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
//                 <Crown className="h-4 w-4 mr-2 text-green-600" />
//                 Programs 🚀
//               </h3>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 {footerLinks.programs.map((link, idx) => (
//                   <li key={idx}>
//                     <Link
//                       to={link.href}
//                       className="hover:text-green-600 transition-all duration-200 hover:underline underline-offset-4 flex items-center space-x-2"
//                     >
//                       <span>{link.emoji}</span>
//                       <span>{link.name}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
//                 <Shield className="h-4 w-4 mr-2 text-orange-600" />
//                 Contact �
//               </h3>
//               <div className="space-y-3 text-sm text-gray-600">
//                 <div className="flex items-start gap-2">
//                   <MapPin className="w-4 h-4 mt-1 text-blue-600" />
//                   <span>📍 Mumbai, India</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Mail className="w-4 h-4 text-blue-600" />
//                   <span>📧 hello@tejstarter.com</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Phone className="w-4 h-4 text-blue-600" />
//                   <span>📞 +91 XXXX XXXXXX</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="mt-8 text-center border-t border-gray-300 pt-6">
//             <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
//               <div className="flex items-center space-x-2 text-sm text-gray-600">
//                 <span>© {currentYear} TejStarter</span>
//                 <span>•</span>
//                 <span className="flex items-center space-x-1">
//                   <span>Made with</span>
//                   <Heart className="h-4 w-4 text-red-500 animate-pulse" />
//                   <span>in India 🇮🇳</span>
//                 </span>
//               </div>
              
//               <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
//                 {footerLinks.legal.map((link, idx) => (
//                   <Link key={idx} to={link.href} className="hover:text-blue-600 hover:underline underline-offset-4">
//                     {link.emoji} {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


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
                  <span className="group-hover:text-blue-700 transition-colors"> Tejvaibhav Group Shiradhon 416419 Maharashtra India</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="group-hover:text-blue-700 transition-colors"><a href="mailto:Tejstarter@gmail.com">Tejstarter@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="group-hover:text-blue-700 transition-colors"><a href="tel:+918600450851">+91 8600 450 851</a></span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section Inside Card */}
          <div className="mt-10 text-center border-t border-gray-300 pt-6">
            <p className="text-gray-600 text-sm mb-3">
              Developed by{' '}
              <span className="text-blue-700 font-semibold hover:underline cursor-pointer">TEJSTARTER & Team</span>
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

export default Footer;