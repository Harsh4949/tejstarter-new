import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const CollaborationCTA = () => {
  const targetValues = [100, 50, 1000, 25];
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const statsRef = useRef(null);
  const inView = useInView(statsRef); // ← removed { once: true }

  const handleCount = (index) => {
    let current = 0;
    const increment = Math.ceil(targetValues[index] / 40);

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetValues[index]) {
        current = targetValues[index];
        clearInterval(interval);
      }

      setCounts((prev) =>
        prev.map((val, idx) => (idx === index ? current : val))
      );
    }, 20);
  };

  // Trigger and reset counts on every scroll into view
  useEffect(() => {
    if (inView) {
      setCounts([0, 0, 0, 0]); // reset
      targetValues.forEach((_, i) => handleCount(i)); // trigger
    }
  }, [inView]);

  const stats = [
    { number: counts[0], label: "Partner Institutions" },
    { number: counts[1], label: "Industry Partners" },
    { number: counts[2], label: "Students Impacted" },
    { number: counts[3], label: "Startup Projects" },
  ];

  return (
    <section className="py-20 bg-gradient-to-tr from-blue-50 via-white to-blue-100 relative overflow-hidden">
      <style>{`
        .stat-card {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 1.25rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.4s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(12px);
        }
        .stat-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
        }
        .stat-card:hover .count {
          color: #1d4ed8;
        }
        .stat-card:hover .label {
          color: #2563eb;
        }
      `}</style>

      <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-[-60px] left-[-60px] w-[250px] h-[250px] bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/80 border border-gray-200 shadow-2xl rounded-3xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
                Ready to Collaborate?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Be part of a forward-thinking ecosystem that connects academia and industry. Accelerate innovation with live projects, mentorship, and immersive startup experience.
              </p>

              <div className="space-y-4">
                {[
                  'Live startup projects',
                  'Real-time entrepreneurship experience',
                  'Career mentorship',
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center bg-green-50 px-5 py-3 rounded-xl shadow-sm">
                    <CheckCircle className="text-green-600 w-5 h-5 mr-3" />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Section - Stats Cards */}
            <div
              ref={statsRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="stat-card cursor-pointer"
                >
                  <div className="count text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}+
                  </div>
                  <div className="label text-gray-600 text-lg font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationCTA;
