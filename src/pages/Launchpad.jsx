import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Users, 
  TrendingUp, 
  Star, 
  Filter, 
  Search, 
  MapPin, 
  Calendar,
  Heart,
  Eye,
  MessageCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Zap,
  Award,
  Clock,
  User
} from 'lucide-react';
import SEO from '../components/SEO';

const Launchpad = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Tech Startups', 'Social Impact', 'E-commerce', 'Health & Wellness', 'Education', 'Fintech'];

  const projects = [
    {
      id: 1,
      title: "EcoGreen - Sustainable Living App",
      description: "A mobile app that helps users track their carbon footprint and suggests eco-friendly alternatives for daily activities.",
      category: "Social Impact",
      founder: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      funding: "₹5,00,000",
      stage: "MVP Ready",
      likes: 127,
      views: 2340,
      comments: 23,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
      tags: ["Sustainability", "Mobile App", "Green Tech"],
      progress: 75,
      deadline: "2025-03-15",
      teamSize: 4,
      lookingFor: ["Frontend Developer", "Marketing Specialist"]
    },
    {
      id: 2,
      title: "StudyBuddy - AI Learning Assistant",
      description: "An AI-powered platform that creates personalized study plans and provides real-time doubt resolution for students.",
      category: "Education",
      founder: "Arjun Patel",
      location: "Bangalore, Karnataka",
      funding: "₹8,50,000",
      stage: "Prototype",
      likes: 89,
      views: 1876,
      comments: 15,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      tags: ["AI/ML", "Education", "SaaS"],
      progress: 45,
      deadline: "2025-04-20",
      teamSize: 3,
      lookingFor: ["AI Engineer", "UI/UX Designer"]
    },
    {
      id: 3,
      title: "LocalConnect - Hyperlocal Marketplace",
      description: "A platform connecting local vendors with customers in their neighborhood for fresh produce and handmade goods.",
      category: "E-commerce",
      founder: "Sneha Reddy",
      location: "Hyderabad, Telangana",
      funding: "₹12,00,000",
      stage: "Beta Testing",
      likes: 156,
      views: 3210,
      comments: 31,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tags: ["Marketplace", "Local Business", "Mobile Commerce"],
      progress: 85,
      deadline: "2025-02-28",
      teamSize: 6,
      lookingFor: ["Backend Developer", "Business Analyst"]
    },
    {
      id: 4,
      title: "MediTrack - Health Monitoring System",
      description: "IoT-based health monitoring system for elderly patients with real-time alerts and family notifications.",
      category: "Health & Wellness",
      founder: "Dr. Rajesh Kumar",
      location: "Delhi, NCR",
      funding: "₹15,00,000",
      stage: "Market Ready",
      likes: 203,
      views: 4567,
      comments: 42,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      tags: ["Healthcare", "IoT", "Elderly Care"],
      progress: 95,
      deadline: "2025-01-30",
      teamSize: 5,
      lookingFor: ["Sales Manager", "Customer Support"]
    },
    {
      id: 5,
      title: "CryptoWallet Plus - Secure Digital Payments",
      description: "Next-generation cryptocurrency wallet with enhanced security features and seamless UPI integration.",
      category: "Fintech",
      founder: "Karan Singh",
      location: "Pune, Maharashtra",
      funding: "₹20,00,000",
      stage: "Alpha Testing",
      likes: 98,
      views: 2876,
      comments: 28,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      tags: ["Blockchain", "Security", "Digital Payments"],
      progress: 60,
      deadline: "2025-05-10",
      teamSize: 7,
      lookingFor: ["Blockchain Developer", "Security Expert"]
    },
    {
      id: 6,
      title: "FarmFresh - Smart Agriculture Platform",
      description: "AI-driven platform helping farmers optimize crop yield using weather data, soil analysis, and market predictions.",
      category: "Tech Startups",
      founder: "Ravi Verma",
      location: "Jaipur, Rajasthan",
      funding: "₹10,00,000",
      stage: "Pilot Program",
      likes: 134,
      views: 2145,
      comments: 19,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop",
      tags: ["AgriTech", "AI/ML", "IoT"],
      progress: 70,
      deadline: "2025-06-15",
      teamSize: 4,
      lookingFor: ["Data Scientist", "Agricultural Expert"]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { icon: Rocket, label: "Active Projects", value: "150+", color: "text-blue-600" },
    { icon: Users, label: "Entrepreneurs", value: "500+", color: "text-green-600" },
    { icon: TrendingUp, label: "Funding Raised", value: "₹2.5Cr+", color: "text-purple-600" },
    { icon: Award, label: "Success Rate", value: "78%", color: "text-orange-600" }
  ];

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Idea': return 'bg-gray-100 text-gray-700';
      case 'Prototype': return 'bg-blue-100 text-blue-700';
      case 'MVP Ready': return 'bg-yellow-100 text-yellow-700';
      case 'Beta Testing': return 'bg-purple-100 text-purple-700';
      case 'Alpha Testing': return 'bg-indigo-100 text-indigo-700';
      case 'Pilot Program': return 'bg-green-100 text-green-700';
      case 'Market Ready': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const launchpadPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "TejStarter Launchpad - Discover Student Startup Projects",
    "description": "Explore innovative startup projects by students and young entrepreneurs. Join, invest, or collaborate on the next big idea in India's startup ecosystem.",
    "url": "https://tejstarter.com/launchpad"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <SEO 
        title="Launchpad - Discover & Support Student Startups | TejStarter"
        description="Explore 150+ innovative startup projects by students across India. Find your next collaboration, investment opportunity, or join a promising startup team on TejStarter Launchpad."
        keywords="student startups, startup projects, entrepreneurship, collaboration, investment opportunities, indian startups, student entrepreneurs, startup launchpad"
        url="/launchpad"
        type="website"
        schemaData={launchpadPageSchema}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex justify-center items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-full">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Launchpad
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              🚀 Discover groundbreaking startup projects by India's brightest student entrepreneurs. 
              Join the next unicorn or launch your own innovative idea!
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="px-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search projects, technologies, or keywords..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStageColor(project.stage)}`}>
                      {project.stage}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Founder & Location */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{project.founder}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-500">{project.location}</span>
                    </div>
                  </div>

                  {/* Funding & Team */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Funding</span>
                      <div className="font-semibold text-green-600">{project.funding}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Team Size</span>
                      <div className="font-semibold text-gray-800">{project.teamSize} members</div>
                    </div>
                  </div>

                  {/* Looking For */}
                  <div className="mb-4">
                    <span className="text-xs text-gray-500 block mb-1">Looking for:</span>
                    <div className="flex flex-wrap gap-1">
                      {project.lookingFor.map((role, roleIndex) => (
                        <span
                          key={roleIndex}
                          className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats & Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{project.comments}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Startup? 🚀
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 500+ student entrepreneurs who have successfully launched their ideas through TejStarter Launchpad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Submit Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Become a Mentor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Launchpad;
