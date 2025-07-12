
import React from 'react';
import {
  Rocket,
  Users,
  Sparkles,
  Handshake,
  GraduationCap,
  Globe,
  Play,
  CheckCircle,
  Star,
  ArrowRight,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  { icon: <Handshake size={48} />, title: "Flexible Contributions", desc: "Choose between payments or equity shares to participate in innovative projects." },
  { icon: <Sparkles size={48} />, title: "Collaborative Projects", desc: "Start your own venture or join others' ideas to build something amazing together." },
  { icon: <GraduationCap size={48} />, title: "Student Programs", desc: "Learn, build, and grow while studying with real-world project experience." },
  { icon: <Users size={48} />, title: "Expert Mentorship", desc: "Get guidance from industry professionals and successful startup founders." },
  { icon: <Globe size={48} />, title: "Global Reach", desc: "Collaborate with innovators across India and Africa to create global impact." },
  { icon: <Clock size={48} />, title: "Flexible Timeline", desc: "Work on projects at your own pace while balancing studies and other commitments." }
];

const stats = [
  { number: "100+", label: "Partner Institutions", icon: <GraduationCap size={24} /> },
  { number: "50+", label: "Industry Partners", icon: <Handshake size={24} /> },
  { number: "1000+", label: "Students Impacted", icon: <Users size={24} /> },
  { number: "25+", label: "Startup Projects", icon: <Rocket size={24} /> }
];

const testimonials = [
  {
    text: "I joined TEJSTARTER during college. Today, I lead a startup with 10+ employees! The mentorship and collaboration opportunities were game-changing.",
    author: "Rutuja Sharma",
    role: "Student Entrepreneur",
    rating: 5
  },
  {
    text: "Our students gained industry exposure and real startup insights. TEJSTARTER's model is truly impactful for bridging academia and entrepreneurship.",
    author: "Prof. Kulkarni",
    role: "Academic Partner",
    rating: 5
  },
  {
    text: "The flexible contribution model allowed me to participate in projects without financial barriers. I learned more here than in any classroom.",
    author: "Arjun Patel",
    role: "Engineering Student",
    rating: 5
  }
];

function App() {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
       {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.4 }}
              className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Rocket className="w-4 h-4 mr-2" />
              #1 Student Startup Platform
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Launch <span className="text-indigo-600">Your Ideas</span><br />
              <span className="text-blue-600">Build</span> the<br />
              <span className="text-purple-600">Future</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg"
            >
              TEJSTARTER is a launchpad where students, professionals, and entrepreneurs collaborate to innovate and succeed through mentorship, resources, and real collaboration.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/signup">
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Join TEJSTARTER
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-3xl shadow-2xl p-8 relative z-10"
              >
                <img 
                  src="https://media.nesta.org.uk/images/rawpixel-558596-unsplash.max-1200x600.jpg" 
                  alt="Startup Collaboration" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Innovation</h3>
                  <p className="text-gray-600">Connect with like-minded entrepreneurs and build the future together</p>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-4 rounded-2xl shadow-lg"
              >
                <Rocket className="w-8 h-8" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl shadow-lg"
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-indigo-200 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Students Collaborating" 
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-indigo-600">TEJSTARTER</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded by passionate entrepreneurs, TEJSTARTER turns ideas into ventures through mentorship, resources, and real collaboration. We believe every student has the potential to create something extraordinary.
            </p>
            
            <div className="space-y-4">
              {[
                "Flexible contribution models for all backgrounds",
                "Expert mentorship from industry professionals",
                "Real-world project experience while studying",
                "Global collaboration opportunities across continents"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
              <p className="text-indigo-700 italic text-lg font-medium">
                "Start small, dream big — TEJSTARTER takes you from idea to execution."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

     {/* Features Section */}
<section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        What Makes TEJSTARTER <span className="text-indigo-600">Unique?</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our comprehensive platform provides all the tools and resources you need 
        to transform your ideas into successful ventures.
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, i) => {
        const bgGradients = [
          "from-indigo-100 to-blue-100",
          "from-pink-100 to-red-100",
          "from-yellow-100 to-orange-100",
          "from-green-100 to-teal-100",
          "from-purple-100 to-pink-100",
          "from-blue-100 to-cyan-100"
        ];

        return (
          <motion.div
            key={i}
            className={`relative p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group border border-gray-100 bg-gradient-to-br ${bgGradients[i % bgGradients.length]}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="text-indigo-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>

            {/* Only for first card - Add floating image */}


            <h4 className="font-bold text-xl text-gray-900 mb-4">{feature.title}</h4>
            <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              🔥 The Spark Behind <span className="text-indigo-600">TEJSTARTER</span>
            </h2>
            <p className="text-xl text-gray-600">The inspiring journey that started it all</p>
          </motion.div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Every struggle carries a spark. For TEJSTARTER, that spark was the journey of Tejas Pawar."
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Raised in rural Maharashtra, Tejas faced shifting goals and setbacks. During COVID, working jobs and learning life lessons, he realized:
              </p>
              <div className="bg-indigo-50 p-6 rounded-2xl mb-8 border border-indigo-100">
                <p className="text-indigo-700 italic text-xl font-medium">
                  "Just like we order a starter before a meal, why not create a starter for life and startups?"
                </p>
              </div>
              <p className="text-indigo-600 font-semibold text-lg">
                "TEJSTARTER is for all of us who want to begin, but don't know how." — Tejas Pawar
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How <span className="text-indigo-600">TEJSTARTER</span> Works
            </h2>
            <p className="text-xl text-gray-600">Simple steps to launch your entrepreneurial journey</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Join the Platform",
                desc: "Create your profile and explore collaborative opportunities with like-minded innovators",
                image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                step: "02",
                title: "Start or Join Projects",
                desc: "Launch your own venture or contribute to existing projects through flexible participation models",
                image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                step: "03",
                title: "Build & Scale",
                desc: "Get mentorship, resources, and support to turn your ideas into successful ventures",
                image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* College Collaboration Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-indigo-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">College & Institutional Collaboration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Partnered with 100+ colleges across India, TEJSTARTER brings startup exposure, mentorship, and real-world projects to campuses, empowering students to gain experience and convert ideas into real impact.
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Helping Students Launch Careers</h3>
              <p className="text-gray-700">
                TEJSTARTER empowers students to gain experience, start ventures, and convert ideas into real impact — learning innovation by doing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success <span className="text-indigo-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">Real stories from real entrepreneurs</p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="text-center">
                  <p className="text-indigo-700 font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Rocket className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
            <h2 className="text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Join thousands of innovative students and entrepreneurs who are building the future with TEJSTARTER. 
              Your entrepreneurial journey starts with a single step.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              
              <Link to="/signup">
              <motion.button
                className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register & Create Profile
              </motion.button>
              
              </Link>
              
              <Link to="/signup">
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-10 py-4 rounded-full font-bold transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.button>
              
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-indigo-50 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Success is Our Mission</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            At TEJSTARTER, we're committed to empowering the next generation of entrepreneurs 
            to turn their ideas into reality. Join our community of innovators and change-makers today.
          </p>
        </motion.div>
      </section>

    </div>
  );
}

export default App; 