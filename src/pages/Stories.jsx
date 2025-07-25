import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag,
  ArrowRight,
  Heart,
  MessageCircle,
  Share2,
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import SEO from '../components/SEO';

const Stories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  // Mock data for stories
  const categories = [
    { id: 'all', label: 'All Stories', count: 12 },
    { id: 'success', label: 'Success Stories', count: 5 },
    { id: 'startup', label: 'Startup Journey', count: 4 },
    { id: 'collaboration', label: 'Collaborations', count: 3 }
  ];

  const featuredStories = [
    {
      id: 1,
      title: "From College Dorm to ₹50L Revenue: How TejStarter Connected Me with My Co-founder",
      excerpt: "Meet Priya and Arjun, two engineering students who met through TejStarter's collaboration platform and built a successful fintech startup.",
      image: "/api/placeholder/600/400",
      author: "Priya Sharma",
      authorImage: "/api/placeholder/60/60",
      date: "2024-12-15",
      readTime: "8 min",
      category: "success",
      likes: 234,
      comments: 45,
      tags: ["Fintech", "Collaboration", "Success"]
    },
    {
      id: 2,
      title: "Building India's First Student-led Sustainable Fashion Platform",
      excerpt: "How five college students from different cities came together on TejStarter to create an eco-friendly fashion marketplace.",
      image: "/api/placeholder/600/400",
      author: "Rahul Mehta",
      authorImage: "/api/placeholder/60/60",
      date: "2024-12-10",
      readTime: "6 min",
      category: "startup",
      likes: 189,
      comments: 32,
      tags: ["Sustainability", "Fashion", "Innovation"]
    },
    {
      id: 3,
      title: "Cross-Border Collaboration: Indian and African Students Create EdTech Solution",
      excerpt: "Discover how TejStarter's global network enabled students from India and Ghana to build an educational platform serving 10,000+ students.",
      image: "/api/placeholder/600/400",
      author: "Kwame Asante",
      authorImage: "/api/placeholder/60/60",
      date: "2024-12-05",
      readTime: "7 min",
      category: "collaboration",
      likes: 156,
      comments: 28,
      tags: ["EdTech", "Global", "Partnership"]
    }
  ];

  const allStories = [
    ...featuredStories,
    {
      id: 4,
      title: "How I Found My Technical Co-founder Through TejStarter's Skill Matching",
      excerpt: "A business student's journey to find the perfect technical partner for her healthcare startup idea.",
      image: "/api/placeholder/400/250",
      author: "Sneha Patel",
      authorImage: "/api/placeholder/60/60",
      date: "2024-11-28",
      readTime: "5 min",
      category: "collaboration",
      likes: 98,
      comments: 15,
      tags: ["Healthcare", "Partnership", "Skills"]
    },
    {
      id: 5,
      title: "From Zero to 100K Users: The TejStarter Success Story",
      excerpt: "Behind the scenes of building one of India's largest student collaboration platforms.",
      image: "/api/placeholder/400/250",
      author: "TejStarter Team",
      authorImage: "/api/placeholder/60/60",
      date: "2024-11-20",
      readTime: "10 min",
      category: "success",
      likes: 445,
      comments: 67,
      tags: ["Platform", "Growth", "Community"]
    },
    {
      id: 6,
      title: "Mentorship That Changed Everything: A Student's Transformation",
      excerpt: "How connecting with industry mentors through TejStarter helped a first-year student land a dream internship.",
      image: "/api/placeholder/400/250",
      author: "Aditya Kumar",
      authorImage: "/api/placeholder/60/60",
      date: "2024-11-15",
      readTime: "4 min",
      category: "success",
      likes: 167,
      comments: 23,
      tags: ["Mentorship", "Internship", "Career"]
    }
  ];

  const stats = [
    { label: "Success Stories", value: "1000+", icon: Star },
    { label: "Active Collaborations", value: "5000+", icon: Users },
    { label: "Students Impacted", value: "50K+", icon: TrendingUp }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? allStories 
    : allStories.filter(story => story.category === selectedCategory);

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % featuredStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const storiesPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Success Stories - TejStarter",
    "description": "Read inspiring success stories from students who found collaboration partners, mentors, and built successful startups through TejStarter platform",
    "url": "https://tejstarter.com/stories"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Success Stories - TejStarter | Student Collaboration Success Cases"
        description="Read inspiring success stories from students who found collaboration partners, mentors, and built successful startups through TejStarter. Get motivated by real student achievements."
        keywords="tejstarter success stories, student startup success, collaboration stories, student entrepreneur stories, startup journey, mentorship success"
        url="/stories"
        type="website"
        schemaData={storiesPageSchema}
      />

      {/* Hero Section */}
      <motion.section 
        className="relative bg-blue-600 text-white py-20 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-blue-700/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeInUp}
          >
            Success Stories
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-50"
            variants={fadeInUp}
          >
            Discover how students across India are building the future together through collaboration, innovation, and determination.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Stories Carousel */}
      <motion.section 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Spotlight on the most inspiring journeys of students who transformed their ideas into reality
            </p>
          </div>

          <div className="relative">
            <motion.div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              key={currentStoryIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:grid md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <div className="absolute inset-0 bg-blue-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-10 h-10" />
                      </div>
                      <p className="text-lg font-semibold">Featured Story</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={featuredStories[currentStoryIndex].authorImage} 
                      alt={featuredStories[currentStoryIndex].author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{featuredStories[currentStoryIndex].author}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredStories[currentStoryIndex].date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredStories[currentStoryIndex].readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredStories[currentStoryIndex].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredStories[currentStoryIndex].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {featuredStories[currentStoryIndex].likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {featuredStories[currentStoryIndex].comments}
                      </span>
                    </div>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <button 
              onClick={prevStory}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={nextStory}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStoryIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStoryIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* All Stories Section */}
      <motion.section 
        className="py-16 bg-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Stories</h2>
            <p className="text-lg text-gray-600">Browse through our collection of inspiring student journeys</p>
          </div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={fadeInUp}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Stories Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {filteredStories.map((story) => (
              <motion.article
                key={story.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 bg-blue-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <User className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm text-blue-100">{story.category}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-400 text-white text-xs px-2 py-1 rounded-full">
                      {story.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={story.authorImage} 
                      alt={story.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{story.author}</h4>
                      <p className="text-xs text-gray-500">
                        {new Date(story.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-gray-500">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {story.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {story.comments}
                      </span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                      Read <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {story.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-blue-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who are building the future together. Your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Join TejStarter
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Share Your Story
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Stories;
