import React, { useRef, useEffect, useState } from 'react';
// import Lottie from 'lottie-react';
// import rocketAnimation from '../lottie/rocketLaunch.json'; // File doesn't exist yet
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Briefcase, Users } from 'lucide-react';
import SEO from './SEO';

// Add floating animation styles
const floatingStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;

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

  const launchpadPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Launchpad - Start Your Journey | TejStarter",
    "description": "Launch your startup journey with TejStarter's comprehensive platform for student entrepreneurs",
    "url": "https://tejstarter.com/launchpad",
    "mainEntity": {
      "@type": "Service",
      "name": "Startup Launchpad",
      "provider": {
        "@type": "Organization",
        "name": "TejStarter"
      },
      "serviceType": "Entrepreneurship Launch Platform"
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-indigo-200 via-white to-blue-300 relative">
      {/* Add floating animation styles */}
      <style dangerouslySetInnerHTML={{ __html: floatingStyles }} />
      
      <SEO 
        title="Launchpad - Start Your Startup Journey | TejStarter"
        description="Launch your entrepreneurial journey with TejStarter's comprehensive platform. Access startup resources, mentorship programs, and collaboration opportunities designed for college students and young entrepreneurs."
        keywords="startup launchpad, student entrepreneurship, launch startup, entrepreneurship resources, startup mentorship, student innovation platform, business launch"
        url="/launchpad"
        type="website"
        schemaData={launchpadPageSchema}
      />
      {/* Background Stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-0" />

      {/* LEFT: Enhanced Rocket Animation */}
      <motion.div
        className="w-full lg:w-1/2 z-10 flex items-center justify-center p-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="h-[550px] w-full max-w-[550px] flex items-center justify-center relative">
          {/* Main Rocket Circle */}
          <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse shadow-2xl relative overflow-hidden">
            {/* Indian Flag Colors Ring */}
            <div className="absolute inset-4 rounded-full border-4 border-orange-200 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute inset-8 rounded-full border-2 border-white animate-ping"></div>
            <div className="absolute inset-12 rounded-full border-4 border-green-200 animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
            
            {/* Rocket Icon */}
            <div className="relative z-10 text-center">
              <svg className="h-32 w-32 text-white animate-bounce mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
              </svg>
              <div className="text-white font-bold text-lg">🇮🇳</div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 text-2xl animate-float">💡</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{animationDelay: '1s'}}>⚡</div>
            <div className="absolute top-1/3 right-8 text-xl animate-float" style={{animationDelay: '2s'}}>🚀</div>
            <div className="absolute bottom-1/3 left-8 text-xl animate-float" style={{animationDelay: '3s'}}>✨</div>
          </div>
          
          {/* Orbiting Success Stats */}
          <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-3 py-1 shadow-lg">
              <div className="text-xs font-bold text-blue-600">500+ Students</div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full px-3 py-1 shadow-lg">
              <div className="text-xs font-bold text-green-600">150+ Startups</div>
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-3 py-1 shadow-lg">
              <div className="text-xs font-bold text-purple-600">₹2Cr+ Funding</div>
            </div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-3 py-1 shadow-lg">
              <div className="text-xs font-bold text-orange-600">50+ Mentors</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT: Content Panel */}
      <motion.div
        ref={rightPanelRef}
        className="w-full lg:w-1/2 z-10 p-6 lg:p-8 space-y-8 overflow-visible"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
              TEJSTARTER
            </h2>
            <div className="text-3xl">🇮🇳</div>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
            🚀 India's Premier Student Entrepreneurship Launchpad 
          </h1>
          <p className="text-gray-700 text-base leading-relaxed max-w-2xl">
            🌟 From dorm room ideas to unicorn startups! We're India's most trusted platform supporting 
            student entrepreneurs with <span className="font-semibold text-blue-600">mentorship</span>, 
            <span className="font-semibold text-green-600"> funding opportunities</span>, and 
            <span className="font-semibold text-purple-600"> real-world experience</span>. 
            Join 500+ successful entrepreneurs who started their journey with us! 💪
          </p>
        </motion.div>

        {/* Enhanced Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {[
            { title: '🧠 Expert Mentorship', desc: 'Industry leaders & successful entrepreneurs guide you', icon: '👨‍💼', color: 'from-blue-400 to-blue-600' },
            { title: '💰 Funding Access', desc: 'Connect with investors & funding opportunities', icon: '💳', color: 'from-green-400 to-green-600' },
            { title: '🤝 Collaboration Hub', desc: 'Network with 500+ like-minded innovators', icon: '🌐', color: 'from-purple-400 to-purple-600' },
            { title: '🎯 Real Opportunities', desc: 'Live projects & internship placements', icon: '🏆', color: 'from-orange-400 to-orange-600' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              className={`bg-gradient-to-br ${item.color} rounded-xl border border-white/20 shadow-lg p-5 transition-all hover:shadow-xl text-white relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 text-6xl opacity-10">{item.icon}</div>
              
              <div className="relative z-10">
                <div className="text-white font-bold text-lg mb-2">{item.title}</div>
                <div className="text-white/90 text-sm leading-relaxed">{item.desc}</div>
              </div>
              
              {/* Indian Design Element */}
              <div className="absolute bottom-2 right-2 text-xs opacity-50">🇮🇳</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Link to="/signup" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold text-lg flex items-center justify-center space-x-2"
            >
              <span>🚀 Start Your Journey</span>
              <span>→</span>
            </motion.button>
          </Link>
          
          <Link to="/stories" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-blue-50"
            >
              <span>📖 Success Stories</span>
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
              🎓 Empowering Indian Students with{' '}
              <span className="text-indigo-600">Placements & Entrepreneurship</span>
            </h1>
            <p className="text-base text-slate-700 leading-relaxed">
              🌟 TEJSTARTER partners with 100+ colleges across India to provide hands-on startup experience, 
              direct industry connections, and mentorship from successful entrepreneurs. We've helped 
              <span className="font-semibold text-green-600"> 500+ students</span> get placements and 
              <span className="font-semibold text-blue-600"> 150+ entrepreneurs</span> launch successful ventures! 🏆
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <BookOpen className="h-5 w-5 text-white" />,
                title: '📚 Practical Education',
                desc: 'Real startup projects • Industry case studies • Hands-on learning experience',
                stats: '1000+ Projects Completed'
              },
              {
                icon: <Briefcase className="h-5 w-5 text-white" />,
                title: '💼 Guaranteed Placements',
                desc: 'Direct industry partnerships • Interview preparation • Career guidance',
                stats: '85% Placement Success Rate'
              },
              {
                icon: <Users className="h-5 w-5 text-white" />,
                title: '🚀 Startup Incubation',
                desc: 'End-to-end support • Funding connections • Mentor network access',
                stats: '₹2Cr+ Funding Raised'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 group hover:translate-x-2 transition-all bg-white/50 rounded-xl p-4 hover:bg-white/80 border border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.2 }}
              >
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold group-hover:text-blue-800 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm group-hover:text-slate-800 transition-colors mb-2 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full w-fit">
                    {item.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Quote with Stats */}
          <motion.div
            className="border-l-4 border-blue-500 pl-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2 }}
          >
            <p className="text-lg italic text-blue-700 mb-3 font-medium">
              "We don't just teach innovation. We build it with students." 🇮🇳
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center bg-white/80 rounded-lg p-2">
                <div className="font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
              <div className="text-center bg-white/80 rounded-lg p-2">
                <div className="font-bold text-green-600">₹2Cr+</div>
                <div className="text-gray-600">Funding Raised</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}


// import React, { useRef, useEffect, useState } from 'react';
// import Lottie from 'lottie-react';
// import rocketAnimation from '../lottie/rocketLaunch.json';
// import { motion, useInView } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { BookOpen, Briefcase, Users } from 'lucide-react';

// export default function RocketScene() {
//   const rocketRef = useRef();
//   const [shouldPlay, setShouldPlay] = useState(false);
//   const rightPanelRef = useRef(null);
//   const isInView = useInView(rightPanelRef);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShouldPlay(true);
//       rocketRef.current?.play();
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-indigo-200 via-white to-blue-300 relative">
//       {/* Background Stars */}
//       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-0" />

//       {/* LEFT: Rocket Animation */}
//       <motion.div
//         className="w-full lg:w-1/2 z-10 flex items-center justify-center p-6"
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <Lottie
//           lottieRef={rocketRef}
//           animationData={rocketAnimation}
//           loop
//           autoplay={false}
//           style={{ maxHeight: 550, width: '100%', maxWidth:550}}
//         />
//       </motion.div>

//       {/* RIGHT: Content Panel */}
//       <motion.div
//         ref={rightPanelRef}
//         className="w-full lg:w-1/2 z-10 p-6 lg:p-8 space-y-8 overflow-visible"
//         initial={{ opacity: 0, x: 100 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 1 }}
//       >
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.3 }}
//         >
//           <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 mb-3">
//             TEJSTARTER
//           </h2>
//           <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
//             A Launchpad for Every New Beginning 🚀
//           </h1>
//           <p className="text-gray-700 text-base leading-normal max-w-2xl">
//             We're not just a community — we're a launchpad for new ideas, startups, and bold dreams.
//             From small concepts to large ventures, TEJSTARTER supports innovators through mentorship,
//             resources, collaboration, and real-world opportunities.
//           </p>
//         </motion.div>

//         {/* Feature Cards */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.5 }}
//         >
//           {[
//             { title: 'Mentorship', desc: 'Guidance from industry experts' },
//             { title: 'Resources', desc: 'Access to tools and funding' },
//             { title: 'Collaboration', desc: 'Network with innovators' },
//             { title: 'Opportunities', desc: 'Connect with real projects' },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05, rotateZ: 1 }}
//               className="bg-white rounded-xl border border-blue-100 shadow p-4 transition-all hover:shadow-lg"
//             >
//               <div className="text-blue-700 font-semibold text-lg mb-1">{item.title}</div>
//               <div className="text-gray-500 text-sm">{item.desc}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8 }}
//         >
//           <Link to="/signup">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow hover:from-blue-700 hover:to-purple-700 transition"
//             >
//               Start Your Journey →
//             </motion.button>
//           </Link>
//         </motion.div>

//         {/* Helping Section */}
//         <motion.div
//           className="space-y-6"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 1 }}
//         >
//           <div className="bg-white/80 p-2 rounded-md w-fit shadow-sm">
//             <BookOpen className="h-7 w-7 text-blue-700" />
//           </div>

//           <div className="space-y-3">
//             <h1 className="text-xl lg:text-2xl font-bold text-blue-800">
//               Helping Students with Placements &{' '}
//               <span className="text-indigo-600">Entrepreneurship</span>
//             </h1>
//             <p className="text-base text-slate-700 leading-normal">
//               TEJSTARTER works closely with colleges to provide practical, hands-on education,
//               help students get placement opportunities, and guide them to start their own profitable ventures.
//             </p>
//           </div>

//           <div className="space-y-4">
//             {[
//               {
//                 icon: <BookOpen className="h-5 w-5 text-white" />,
//                 title: 'Practical Education',
//                 desc: 'Hands-on learning experience working on real projects',
//               },
//               {
//                 icon: <Briefcase className="h-5 w-5 text-white" />,
//                 title: 'Placement Opportunities',
//                 desc: 'Direct connections to industry partners and job opportunities',
//               },
//               {
//                 icon: <Users className="h-5 w-5 text-white" />,
//                 title: 'Entrepreneurship Guidance',
//                 desc: 'Support to start and grow your own profitable ventures',
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-start space-x-3 group hover:translate-x-2 transition-all"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 1.2 + index * 0.2 }}
//               >
//                 <div className="bg-blue-600 p-2 rounded-md shadow">{item.icon}</div>
//                 <div>
//                   <h3 className="text-lg font-semibold group-hover:text-blue-800 transition-colors">
//                     {item.title}
//                   </h3>
//                   <p className="text-slate-600 text-sm group-hover:text-slate-800 transition-colors">
//                     {item.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Quote */}
//           <motion.div
//             className="border-l-4 border-blue-500 pl-4 py-2 bg-white/80 rounded-md shadow"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 2 }}
//           >
//             <p className="text-lg italic text-blue-700">
//               "We don't just teach innovation. We build it with students."
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
