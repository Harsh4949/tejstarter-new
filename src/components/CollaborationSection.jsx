import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Briefcase, Users, Building } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Lottie from 'lottie-react';
import teamAnimation from '../lottie/team.json';

const CollaborationSection = () => {
  const [count, setCount] = useState(0);
  const countStartedRef = useRef(false);

  const cardLeftRef = useRef(null);
  const leftInView = useInView(cardLeftRef);

  useEffect(() => {
    if (!leftInView || countStartedRef.current) return;

    countStartedRef.current = true;

    let start = 0;
    const end = 100;
    const duration = 1000;
    const increment = Math.ceil(end / (duration / 20));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [leftInView]);

  const imageRef = useRef(null);
  const cardRightRef = useRef(null);
  const leftSectionRef = useRef(null);
  const collaborationHeaderRef = useRef(null);

  const imageInView = useInView(imageRef);
  const rightInView = useInView(cardRightRef);
  const leftSectionInView = useInView(leftSectionRef);
  const collaborationHeaderInView = useInView(collaborationHeaderRef);

  return (
    <div className="bg-white">
      <style>{`
        .card-animate {
          transition: transform 0.6s ease, box-shadow 0.6s ease;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .card-animate:hover {
          transform: scale(1.05) rotateX(5deg) rotateY(-5deg);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
        }
      `}</style>

     

      {/* Collaboration Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50 to-blue-50 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={collaborationHeaderRef}
            initial={{ opacity: 0, x: -50 }}
            animate={collaborationHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-8">
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 hover:text-blue-700 transition duration-300 cursor-pointer">
              College & Institutional Collaboration
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed hover:text-slate-800 transition duration-300 cursor-pointer">
              TEJSTARTER is actively working with educational institutions to bridge the gap between academia and industry, offering students real-world experience and future opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">
            {/* Left Card */}
            <motion.div
              ref={cardLeftRef}
              initial={{ opacity: 0, x: -50 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="card-animate bg-white/80 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 hover:text-blue-700 transition-all duration-300 cursor-pointer">
                Our Network
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2 cursor-pointer">
                    {count}+
                  </div>
                  <div className="text-slate-600 font-medium">Colleges across India</div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: 'MoUs', desc: 'With engineering, agriculture, and professional institutes' },
                    { title: 'Incubators', desc: 'Government and private startup incubators' },
                  ].map((item, index) => (
                    <div key={index} className="hover:text-blue-700 transition duration-300 cursor-pointer">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="hover:text-blue-700 transition duration-300 cursor-pointer">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">International Reach</h4>
                  <p className="text-slate-600">Collaborations in Ghana, Nigeria, Uganda and beyond</p>
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              ref={cardRightRef}
              initial={{ opacity: 0, x: -50 }}
              animate={rightInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="card-animate bg-white/80 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 hover:text-blue-700 transition duration-300 cursor-pointer">
                Partner Benefits
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed hover:text-slate-800 transition duration-300 cursor-pointer">
                Partner colleges gain access to a complete ecosystem that connects classroom learning to real-world challenges — giving students a competitive edge in careers and ventures.
              </p>
              <div className="space-y-4">
                {[
                  'Live startup projects',
                  'Real-time entrepreneurship experience',
                  'Career mentorship',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3 group cursor-pointer">
                    <div className="bg-green-100 p-2 rounded-full">
                      <div className="w-2 h-2 bg-green-600 rounded-full group-hover:bg-green-800 transition-colors"></div>
                    </div>
                    <span className="text-slate-800 font-medium group-hover:text-blue-700 transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollaborationSection;
