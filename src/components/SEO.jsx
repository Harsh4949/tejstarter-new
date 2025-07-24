import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "TejStarter - College Student Collaboration Platform for Startups",
  description = "Join TejStarter - India's premier platform connecting college students with startup opportunities. Collaborate on innovative projects, gain industry mentorship, and build your entrepreneurial journey while studying.",
  keywords = "college collaboration platform, student startups, entrepreneurship for students, startup incubator, student innovation",
  image = "/src/assets/tej_logo.png",
  url = "https://tejstarter.com/",
  type = "website",
  article = false,
  schemaData = null
}) => {
  const fullTitle = title.includes('TejStarter') ? title : `${title} | TejStarter`;
  const fullUrl = url.startsWith('http') ? url : `https://tejstarter.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://tejstarter.com${image}`;

  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": fullUrl,
    "image": fullImage,
    "publisher": {
      "@type": "Organization",
      "name": "TejStarter",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tejstarter.com/src/assets/tej_logo.png"
      }
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="TejStarter" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@tejstarter" />

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:author" content="TejStarter Team" />
          <meta property="article:publisher" content="https://tejstarter.com" />
          <meta property="article:section" content="Entrepreneurship" />
          <meta property="article:tag" content={keywords} />
        </>
      )}

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultSchemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
