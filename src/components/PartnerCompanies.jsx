import React from 'react';
import { Building } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnerCompanies = () => {
  const companies = [
    { name: "Ydcoders IT SOLUTIONS", location: "Kavathe Mahankal, Sangli" },
    { name: "Reevasoft Engineers", location: "Pune" },
    { name: "Shivkrushiraj Agri Research and Development Producer Company", location: "Kavathe Mahankal, Sangli" },
    { name: "Dcpsnps Employees Foundation", location: "" },
    { name: "Dinnch", location: "Sangli" },
    { name: "Imagine360tour", location: "Pune" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <style>{`
        .company-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 1rem;
          padding: 1.5rem;
          transition: all 0.4s ease;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(10px);
        }
        .company-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
        }
        .company-card h3,
        .company-card p {
          color: #000;
          transition: color 0.3s ease;
        }
        .company-card:hover h3,
        .company-card:hover p {
          color: #1d4ed8;
        }
      `}</style>

      <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-blue-200 rounded-full opacity-30 blur-3xl z-0"></div>
      <div className="absolute bottom-[-60px] left-[-60px] w-[250px] h-[250px] bg-blue-100 rounded-full opacity-30 blur-3xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-8 shadow-md">
            <Building className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            Our Partner Companies
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            We are proud to collaborate with a diverse range of companies, driving innovation and 
            creating opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="company-card cursor-pointer"
            >
              <h3 className="text-lg font-bold mb-2">{company.name}</h3>
              {company.location && (
                <p className="text-sm">{company.location}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCompanies;
