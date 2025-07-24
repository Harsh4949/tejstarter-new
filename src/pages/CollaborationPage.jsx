import React from 'react';
import CollaborationSection from '../components/CollaborationSection';
import OpportunitiesSection from '../components/OpportunitiesSection';
import PartnerCompanies from '../components/PartnerCompanies';
import PartnerInstitutions from '../components/PartnerInstitutions';
import CollaborationCTA from '../components/CollaborationCTA';
import SEO from '../components/SEO';

const CollaborationPage = () => {
  const collaborationPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Collaboration Opportunities - TejStarter",
    "description": "Explore collaboration opportunities with 100+ partner institutions and 50+ industry partners. Join startup projects, get mentorship, and build your entrepreneurial journey.",
    "url": "https://tejstarter.com/collaboration",
    "mainEntity": {
      "@type": "Service",
      "name": "Student Collaboration Platform",
      "provider": {
        "@type": "Organization",
        "name": "TejStarter"
      },
      "serviceType": "Educational Collaboration Platform",
      "areaServed": "India",
      "description": "Platform connecting students with startup opportunities and industry partnerships"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Collaboration Opportunities - Partner Institutions & Industry | TejStarter"
        description="Join 100+ partner institutions and 50+ industry partners in India's largest student collaboration network. Explore startup projects, mentorship programs, and entrepreneurship opportunities designed for college students."
        keywords="student collaboration opportunities, college partnerships India, industry mentorship, startup projects for students, educational partnerships, student innovation programs, entrepreneurship collaboration, college industry connect"
        url="/collaboration"
        type="website"
        schemaData={collaborationPageSchema}
      />
      <OpportunitiesSection />
     
      <CollaborationSection />
      
      <PartnerCompanies />
      <PartnerInstitutions />
      <CollaborationCTA />
    </div>
  );
};

export default CollaborationPage;