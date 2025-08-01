import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import rocketAnimation from '../lottie/rocketLaunch.json';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Briefcase, Users } from 'lucide-react';

export default function RocketScene() {
  const rocketRef = useRef();
  const [shouldPlay, setShouldPlay] = useState(false);
  const rightPanelRef = useRef(null);
  const isInView = useInView(rightPanelRef);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldPlay(true);
      rocketRef.current?.play();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-indigo-200 via-white to-blue-300 relative">
      {/* Background Stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-0" />

      {/* LEFT: Rocket Animation */}
      <motion.div
        className="w-full lg:w-1/2 z-10 flex items-center justify-center p-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie
          lottieRef={rocketRef}
          animationData={rocketAnimation}
          loop
          autoplay={false}
          style={{ maxHeight: 550, width: '100%', maxWidth:550}}
        />
      </motion.div>

      {/* RIGHT: Content Panel */}
      <motion.div
        ref={rightPanelRef}
        className="w-full lg:w-1/2 z-10 p-6 lg:p-8 space-y-8 overflow-visible"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 mb-3">
            TEJSTARTER
          </h2>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
            A Launchpad for Every New Beginning 🚀
          </h1>
          <p className="text-gray-700 text-base leading-normal max-w-2xl">
            We're not just a community — we're a launchpad for new ideas, startups, and bold dreams.
            From small concepts to large ventures, TEJSTARTER supports innovators through mentorship,
            resources, collaboration, and real-world opportunities.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {[
            { title: 'Mentorship', desc: 'Guidance from industry experts' },
            { title: 'Resources', desc: 'Access to tools and funding' },
            { title: 'Collaboration', desc: 'Network with innovators' },
            { title: 'Opportunities', desc: 'Connect with real projects' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              className="bg-white rounded-xl border border-blue-100 shadow p-4 transition-all hover:shadow-lg"
            >
              <div className="text-blue-700 font-semibold text-lg mb-1">{item.title}</div>
              <div className="text-gray-500 text-sm">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow hover:from-blue-700 hover:to-purple-700 transition"
            >
              Start Your Journey →
            </motion.button>
          </Link>
        </motion.div>

        {/* Helping Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="bg-white/80 p-2 rounded-md w-fit shadow-sm">
            <BookOpen className="h-7 w-7 text-blue-700" />
          </div>

          <div className="space-y-3">
            <h1 className="text-xl lg:text-2xl font-bold text-blue-800">
              Helping Students with Placements &{' '}
              <span className="text-indigo-600">Entrepreneurship</span>
            </h1>
            <p className="text-base text-slate-700 leading-normal">
              TEJSTARTER works closely with colleges to provide practical, hands-on education,
              help students get placement opportunities, and guide them to start their own profitable ventures.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <BookOpen className="h-5 w-5 text-white" />,
                title: 'Practical Education',
                desc: 'Hands-on learning experience working on real projects',
              },
              {
                icon: <Briefcase className="h-5 w-5 text-white" />,
                title: 'Placement Opportunities',
                desc: 'Direct connections to industry partners and job opportunities',
              },
              {
                icon: <Users className="h-5 w-5 text-white" />,
                title: 'Entrepreneurship Guidance',
                desc: 'Support to start and grow your own profitable ventures',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 group hover:translate-x-2 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.2 }}
              >
                <div className="bg-blue-600 p-2 rounded-md shadow">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-blue-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm group-hover:text-slate-800 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="border-l-4 border-blue-500 pl-4 py-2 bg-white/80 rounded-md shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2 }}
          >
            <p className="text-lg italic text-blue-700">
              "We don't just teach innovation. We build it with students."
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
