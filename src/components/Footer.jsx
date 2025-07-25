import React from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  MapPin,
  Mail,
  Phone,
  Globe,
  ArrowUpRight,
  Sparkles,
  Users,
  Zap,
  Heart,
  Shield,
  Award,
  BookOpen,
  Briefcase,
  TrendingUp,
  Target,
  Star,
  Crown,
  Lightbulb,
  Handshake,
  Building,
  GraduationCap,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Launchpad', href: '/launchpad', icon: Rocket, emoji: '🚀' },
      { name: 'Collaboration', href: '/collaboration', icon: Users, emoji: '🤝' },
      { name: 'Success Stories', href: '/stories', icon: Award, emoji: '🏆' },
      { name: 'About Us', href: '/about', icon: Heart, emoji: '💝' },
    ],
    programs: [
      { name: 'Student Hub', href: '#', icon: GraduationCap, emoji: '🎓' },
      { name: 'Startup Incubation', href: '#', icon: Building, emoji: '🏢' },
      { name: 'Mentorship', href: '#', icon: Target, emoji: '🎯' },
      { name: 'Career Growth', href: '#', icon: TrendingUp, emoji: '📈' },
    ],
    resources: [
      { name: 'Documentation', href: '#', icon: BookOpen, emoji: '📚' },
      { name: 'Community', href: '#', icon: Users, emoji: '👥' },
      { name: 'Support', href: '#', icon: Shield, emoji: '🛡️' },
      { name: 'Blog', href: '#', icon: Lightbulb, emoji: '💡' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy', emoji: '🔒' },
      { name: 'Privacy Policy', href: '/privacy', emoji: '🔒' },
      { name: 'Terms of Service', href: '/terms', emoji: '📜' },
      { name: 'Cookie Policy', href: '/cookies', emoji: '🍪' },
      { name: 'Security', href: '/security', emoji: '🔐' },
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-900', emoji: '⚡' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-500', emoji: '🐦' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600', emoji: '💼' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500', emoji: '📸' },
  ];

  const stats = [
    { label: 'Students', value: '50K+', emoji: '🎓', color: 'text-blue-600' },
    { label: 'Startups', value: '1000+', emoji: '🚀', color: 'text-green-600' },
    { label: 'Mentors', value: '500+', emoji: '👨‍💼', color: 'text-purple-600' },
    { label: 'Success Stories', value: '2000+', emoji: '🏆', color: 'text-orange-600' },
  ];
  return (
    <footer className="bg-gradient-to-br from-[#e0f7fa] to-[#f0f9ff] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/90 rounded-2xl shadow-2xl p-8 backdrop-blur-lg">

          {/* Grid Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Logo & Description */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-xl shadow-md">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">TEJSTARTER</h1>
                <span className="text-xl">🇮🇳</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                🌟 Empowering students & entrepreneurs across India 💪
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      className="text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-110"
                      title={social.name}
                    >
                      <span className="text-lg mr-1">{social.emoji}</span>
                      <IconComponent className="h-4 w-4 inline" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <Star className="h-4 w-4 mr-2 text-blue-600" />
                Quick Links ⚡
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {footerLinks.quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.href}
                      className="hover:text-blue-600 transition-all duration-200 hover:underline underline-offset-4 flex items-center space-x-2"
                    >
                      <span>{link.emoji}</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <Crown className="h-4 w-4 mr-2 text-green-600" />
                Programs 🚀
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {footerLinks.programs.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.href}
                      className="hover:text-green-600 transition-all duration-200 hover:underline underline-offset-4 flex items-center space-x-2"
                    >
                      <span>{link.emoji}</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <Shield className="h-4 w-4 mr-2 text-orange-600" />
                Contact �
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-blue-600" />
                  <span>📍 Mumbai, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>📧 hello@tejstarter.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>📞 +91 XXXX XXXXXX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 text-center border-t border-gray-300 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>© {currentYear} TejStarter</span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                  <span>in India 🇮🇳</span>
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                {footerLinks.legal.map((link, idx) => (
                  <Link key={idx} to={link.href} className="hover:text-blue-600 hover:underline underline-offset-4">
                    {link.emoji} {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
