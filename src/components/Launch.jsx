import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import rocketAnimation from '../lottie/rocketLaunch.json';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function RocketScene() {
  const rocketRef = useRef();
  const [shouldPlay, setShouldPlay] = useState(false);

  // Animation for right side on scroll
  const rightPanelRef = useRef(null);
  const isInView = useInView(rightPanelRef); // ← changed here (removed once: true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldPlay(true);
      rocketRef.current?.play();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-blue-200 relative">
      {/* Background stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-0"></div>

      {/* Rocket Panel */}
      <div className="w-1/2 z-10 flex flex-col items-center justify-center overflow-hidden p-6">
        <Lottie
          lottieRef={rocketRef}
          animationData={rocketAnimation}
          loop={true}
          autoplay={false}
          style={{ height: 550, width: 550 }}
        />
      </div>

      {/* Info Panel */}
      <motion.div
        ref={rightPanelRef}
        className="w-1/2 z-10 p-10 overflow-y-auto"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            TEJSTARTER
          </h2>

          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            A Launchpad for Every New Beginning 🚀
          </h1>

          <p className="text-gray-700 text-lg mb-10 max-w-2xl leading-relaxed">
            We're not just a community — we're a launchpad for new ideas, startups, and bold dreams.
            From small concepts to large ventures, TEJSTARTER supports innovators through mentorship,
            resources, collaboration, and real-world opportunities.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {[
            { title: "Mentorship", desc: "Guidance from industry experts" },
            { title: "Resources", desc: "Access to tools and funding" },
            { title: "Collaboration", desc: "Network with innovators" },
            { title: "Opportunities", desc: "Connect with real projects" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              className="bg-white rounded-xl border border-blue-100 shadow-lg p-5 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-blue-700 font-semibold text-xl mb-1">{item.title}</div>
              <div className="text-gray-500 text-sm">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        
              <Link to="/signup">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition"
        >
          Start Your Journey →
        </motion.button>
        
              </Link>
      </motion.div>
    </div>
  );
}
