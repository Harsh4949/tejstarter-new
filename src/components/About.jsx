import React from 'react';
import {
  Rocket,
  Lightbulb,
  Users,
  Sparkles,
  Zap,
  RefreshCw,
  Globe,
  Building,
  User,
  Mail,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInRTL = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const fadeInLTR = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const hoverText = "hover:text-indigo-600 hover:scale-105 transition duration-300 ease-in-out";

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeInRTL}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8 animate-bounce">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent ${hoverText}`}>
              TEJSTARTER
            </h1>
            <p className={`text-2xl md:text-3xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed ${hoverText}`}>
              Where Innovation Meets Collaboration
            </p>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Discover More
              <ChevronDown className="ml-2 w-5 h-5 animate-bounce inline" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeInLTR}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className={`text-5xl font-bold mb-6 text-gray-900 ${hoverText}`}>About TEJSTARTER</h2>
            <p className={`text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed ${hoverText}`}>
              TEJSTARTER is a dynamic platform founded by passionate entrepreneurs...
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureBox icon={<Users />} title="Collaborative Community" color="from-blue-400 to-blue-600" bg="from-blue-50 to-indigo-50" description="We believe that innovation knows no bounds..." />
            <FeatureBox icon={<Sparkles />} title="Entrepreneurial Spirit" color="from-green-400 to-emerald-600" bg="from-green-50 to-emerald-50" description="Our platform is designed to nurture the entrepreneurial spirit..." />
            <FeatureBox icon={<Zap />} title="Innovative Approach" color="from-orange-400 to-red-600" bg="from-orange-50 to-red-50" description="We take a unique approach to innovation..." />
          </div>
        </div>
      </motion.section>

      {/* Unique Section */}
      <motion.section
        id="unique"
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeInRTL}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className={`text-5xl font-bold mb-6 text-gray-900 ${hoverText}`}>What Makes Us Unique?</h2>
            <p className={`text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed ${hoverText}`}>
              TEJSTARTER stands apart through our innovative approach...
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureBox icon={<RefreshCw />} title="Flexible Contribution Model" color="from-cyan-400 to-blue-600" bg="from-cyan-50 to-blue-50" description="Choose between payments or equity shares..." />
            <FeatureBox icon={<Users />} title="Collaborative Project System" color="from-blue-400 to-indigo-600" bg="from-blue-50 to-indigo-50" description="Work on your own ideas or join others' projects." />
            <FeatureBox icon={<Sparkles />} title="Student-Focused Programs" color="from-orange-400 to-yellow-600" bg="from-orange-50 to-yellow-50" description="Build, learn, and grow while studying." />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureBox icon={<User />} title="Expert Mentorship" color="from-purple-400 to-pink-600" bg="from-purple-50 to-pink-50" description="Guidance from professionals and founders." />
            <FeatureBox icon={<Globe />} title="Global Vision" color="from-green-400 to-teal-600" bg="from-green-50 to-teal-50" description="Collaborations in India, Ghana, Nigeria..." />
            <FeatureBox icon={<Building />} title="Entrepreneurship" color="from-indigo-400 to-purple-600" bg="from-indigo-50 to-purple-50" description="Support to grow your own ventures." />
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeInLTR}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 1 }}
          className="max-w-md mx-auto bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl p-8 transition duration-300 hover:scale-[1.01]"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className={`text-4xl font-bold text-gray-900 ${hoverText}`}>Get in Touch</h2>
            <p className={`text-sm text-gray-500 mt-2 ${hoverText}`}>
              Have a question, project idea, or just want to say hello?
            </p>
          </div>
          <form className="space-y-6">
            <InputField icon={<User />} id="fullName" label="Full Name" placeholder="John Doe" type="text" />
            <InputField icon={<Mail />} id="email" label="Email Address" placeholder="you@example.com" type="email" />
            <TextField id="subject" label="Subject" placeholder="Project Collaboration Inquiry" />
            <TextAreaField id="message" label="Message" placeholder="Your message..." />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-12 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Send Message
              <Mail className="ml-2 w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </motion.section>
    </div>
  );
};

const FeatureBox = ({ icon, title, description, color, bg }) => (
  <div className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br ${bg} border-0 rounded-lg p-8 text-center`}>
    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {React.cloneElement(icon, { className: 'w-8 h-8 text-white' })}
    </div>
    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{description}</p>
  </div>
);

const InputField = ({ icon, id, label, placeholder, type }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="relative">
      {React.cloneElement(icon, { className: 'absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' })}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full pl-10 h-12 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:ring-1 outline-none transition-colors"
      />
    </div>
  </div>
);

const TextField = ({ id, label, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full h-12 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:ring-1 outline-none transition-colors px-3"
    />
  </div>
);

const TextAreaField = ({ id, label, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="relative">
      <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
      <textarea
        id={id}
        rows={6}
        placeholder={placeholder}
        className="w-full pl-10 pt-3 pb-3 pr-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:ring-1 outline-none transition-colors resize-none"
      />
    </div>
  </div>
);

export default About; 