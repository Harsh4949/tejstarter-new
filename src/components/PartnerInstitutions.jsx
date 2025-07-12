import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnerInstitutions = () => {
  const institutions = [
    {
      name: "Shivganga Charitable Trust, Sangli's Vishveshwarya Technical Campus Faculty of Degree & Diploma Engineering, Patgaon, Miraj.",
      subtitle: "An ISO 9001-2008 Certified Institute"
    },
    {
      name: "Shikshan Prasarak Sanstha's Padmabhushan Vasantraodada Patil Mahavidyalaya, Kavathe Mahankal, Sangli",
      subtitle: "(Affiliated to Shivaji University, Kolhapur)"
    },
    {
      name: "Sanjay Bhokare Group of Institutes, Miraj",
      subtitle: ""
    },
    {
      name: "Padmabhooshan Vasantraodada Patil Institute of Technology, Budhgaon",
      subtitle: ""
    },
    {
      name: "Government Polytechnic, Miraj",
      subtitle: ""
    },
    {
      name: "Government Residence Women Polytechnic, Tasgaon",
      subtitle: ""
    },
    {
      name: "शासकीय औद्योगिक प्रशिक्षण संस्था, कवठेमहांकाळ, जि: सांगली (ITI College)",
      subtitle: ""
    },
    {
      name: "शासकीय औद्योगिक प्रशिक्षण संस्था, तासगाव, जि: सांगली (ITI College)",
      subtitle: ""
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <style>{`
        .institution-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: left;
          transition: all 0.4s ease;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(10px);
        }
        .institution-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
        }
        .institution-card h3,
        .institution-card p {
          color: #000;
          transition: color 0.3s ease;
        }
        .institution-card:hover h3,
        .institution-card:hover p {
          color: #1d4ed8;
        }
      `}</style>

      {/* Decorative blobs */}
      <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-blue-200 rounded-full opacity-30 blur-3xl z-0"></div>
      <div className="absolute bottom-[-60px] left-[-60px] w-[250px] h-[250px] bg-purple-100 rounded-full opacity-30 blur-3xl z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-8 shadow-md">
            <GraduationCap className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
            Our Esteemed Partner Institutions
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Collaborating with leading educational institutions to foster talent and bridge academia 
            with industry.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.map((institution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="institution-card cursor-pointer"
            >
              <h3 className="text-base font-bold mb-2 leading-tight">
                {institution.name}
              </h3>
              {institution.subtitle && (
                <p className="text-sm italic">
                  {institution.subtitle}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerInstitutions;
