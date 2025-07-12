import React from 'react';
import CollaborationSection from '../components/CollaborationSection';
import OpportunitiesSection from '../components/OpportunitiesSection';
import PartnerCompanies from '../components/PartnerCompanies';
import PartnerInstitutions from '../components/PartnerInstitutions';
import CollaborationCTA from '../components/CollaborationCTA';

const CollaborationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <CollaborationSection />
      <OpportunitiesSection />
      <PartnerCompanies />
      <PartnerInstitutions />
      <CollaborationCTA />
    </div>
  );
};

export default CollaborationPage;