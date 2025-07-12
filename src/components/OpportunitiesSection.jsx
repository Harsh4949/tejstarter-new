import React from 'react';
import { Building, GraduationCap, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion'; // removed useInView (not used here)

const OpportunitiesSection = () => {
  const opportunities = [
    {
      icon: Building,
      title: "Industry Partners",
      description: "Connect with leading companies for real-world projects and placement opportunities.",
      benefits: [
        "Access to industry expertise",
        "Live project experience", 
        "Placement opportunities",
        "Professional network building"
      ],
      color: "blue"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Partner with colleges and universities to enhance student learning and career prospects.",
      benefits: [
        "Practical skill development",
        "Industry exposure",
        "Entrepreneurship guidance",
        "Research collaboration"
      ],
      color: "teal"
    },
    {
      icon: Users,
      title: "Startup Ecosystem",
      description: "Join a vibrant community of innovators, mentors, and entrepreneurs.",
      benefits: [
        "Mentorship programs",
        "Resource sharing",
        "Networking events",
        "Funding opportunities"
      ],
      color: "orange"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <style>{`
        .opportunity-card h3,
        .opportunity-card p,
        .opportunity-card span {
          color: #000000;
          transition: color 0.3s ease;
        }
        .opportunity-card:hover h3,
        .opportunity-card:hover p,
        .opportunity-card:hover span {
          color: #1d4ed8;
        }
      `}</style>

      {/* Blurred Circles */}
      <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-blue-200 rounded-full opacity-30 blur-3xl z-0"></div>
      <div className="absolute bottom-[-60px] left-[-60px] w-[250px] h-[250px] bg-blue-100 rounded-full opacity-30 blur-3xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-8 shadow-md">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            Collaboration Opportunities
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Join our growing ecosystem of partners and be part of the innovation journey. We offer 
            multiple collaboration pathways tailored to different organizational needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600",
              teal: "bg-teal-100 text-teal-600", 
              orange: "bg-orange-100 text-orange-600"
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="opportunity-card bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className={`${colorClasses[opportunity.color]} p-4 rounded-lg w-fit mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">
                  {opportunity.title}
                </h3>
                
                <p className="mb-6 leading-relaxed text-gray-700">
                  {opportunity.description}
                </p>
                
                <div className="space-y-3">
                  {opportunity.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
