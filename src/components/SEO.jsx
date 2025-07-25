import { useEffect } from 'react';

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
  useEffect(() => {
    const fullTitle = title.includes('TejStarter') ? title : `${title} | TejStarter`;
    const fullUrl = url.startsWith('http') ? url : `https://tejstarter.com${url}`;
    const fullImage = image.startsWith('http') ? image : `https://tejstarter.com${image}`;

    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, content, attribute = 'name') => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, selector.replace(/meta\[|\]|"/g, '').split('=')[1]);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Helper function to update property meta tags
    const updatePropertyTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Basic Meta Tags
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="keywords"]', keywords);

    // Open Graph
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', fullImage);
    updatePropertyTag('og:url', fullUrl);
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:site_name', 'TejStarter');

    // Twitter Card
    updateMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', fullImage);
    updateMetaTag('meta[name="twitter:site"]', '@tejstarter');

    // Article specific meta tags
    if (article) {
      updatePropertyTag('article:author', 'TejStarter Team');
      updatePropertyTag('article:publisher', 'https://tejstarter.com');
      updatePropertyTag('article:section', 'Entrepreneurship');
      updatePropertyTag('article:tag', keywords);
    }

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullUrl;

    // Update or create structured data
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

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(schemaData || defaultSchemaData);

  }, [title, description, keywords, image, url, type, article, schemaData]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;
