import { useEffect } from 'react';

const SEO = ({ 
  title = "TejStarter - Premier IT Services & Digital Solutions Company",
  description = "Transform your business with TejStarter's innovative technology solutions. Expert web development, mobile apps, digital marketing, custom software, and UI/UX design services. Cost-effective solutions with 24/7 support.",
  keywords = "web development company, mobile app development, digital marketing agency, custom software development, UI UX design services, e-commerce development, SEO services, technology solutions provider, IT services company, React development, Angular development, Node.js development, PHP development, SaaS development, API integration, responsive web design, CMS development, iOS app development, Android app development, cross-platform development, social media marketing, PPC advertising, content marketing, brand strategy, enterprise applications, healthcare IT solutions, education technology, real estate software, fintech solutions, retail technology, startup development, AWS cloud services, Azure cloud solutions",
  image = "/tej_short_icon_cl.svg",
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
    updateMetaTag('meta[name="author"]', 'TejStarter IT Services');
    updateMetaTag('meta[name="robots"]', 'index, follow');
    updateMetaTag('meta[name="language"]', 'English');
    updateMetaTag('meta[name="revisit-after"]', '7 days');
    updateMetaTag('meta[name="theme-color"]', '#1E40AF');
    updateMetaTag('meta[name="msapplication-TileColor"]', '#1E40AF');

    // Business specific meta tags
    updateMetaTag('meta[name="business:contact_data:country_name"]', 'India');
    updateMetaTag('meta[name="geo.region"]', 'IN');
    updateMetaTag('meta[name="geo.placename"]', 'India');
    updateMetaTag('meta[name="geo.position"]', '28.6139;77.2090'); // Delhi coordinates
    updateMetaTag('meta[name="ICBM"]', '28.6139, 77.2090');

    // Open Graph
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', fullImage);
    updatePropertyTag('og:image:width', '1200');
    updatePropertyTag('og:image:height', '630');
    updatePropertyTag('og:image:alt', 'TejStarter - IT Services & Digital Solutions Company Logo');
    updatePropertyTag('og:url', fullUrl);
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:site_name', 'TejStarter - IT Services & Digital Solutions');
    updatePropertyTag('og:locale', 'en_US');
    updatePropertyTag('og:locale:alternate', 'hi_IN');

    // Twitter Card
    updateMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', fullImage);
    updateMetaTag('meta[name="twitter:image:alt"]', 'TejStarter - IT Services & Digital Solutions Company');
    updateMetaTag('meta[name="twitter:site"]', '@tejstarter');
    updateMetaTag('meta[name="twitter:creator"]', '@tejstarter');

    // Article specific meta tags
    if (article) {
      updatePropertyTag('article:author', 'TejStarter Team');
      updatePropertyTag('article:publisher', 'https://tejstarter.com');
      updatePropertyTag('article:section', 'Technology & Digital Solutions');
      updatePropertyTag('article:tag', keywords);
      updatePropertyTag('article:published_time', new Date().toISOString());
      updatePropertyTag('article:modified_time', new Date().toISOString());
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
      "@type": "Organization",
      "name": "TejStarter",
      "alternateName": ["Tej Starter IT Services", "TejStarter Technologies", "TejStarter Digital Solutions"],
      "description": "Premier IT services company providing web development, mobile app development, digital marketing, and custom software solutions. Transforming businesses through innovative technology with cost-effective solutions and 24/7 support.",
      "url": fullUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `https://tejstarter.com/tej_short_icon_cl.svg`,
        "width": 200,
        "height": 200,
        "caption": "TejStarter Logo"
      },
      "image": fullImage,
      "sameAs": [
        "https://www.linkedin.com/company/tejstarter",
        "https://twitter.com/tejstarter",
        "https://www.facebook.com/tejstarter",
        "https://www.instagram.com/tejstarter",
        "https://github.com/tejstarter"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "India",
        "addressLocality": "Delhi"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "Global"
        },
        {
          "@type": "ContactPoint",
          "contactType": "Technical Support",
          "availableLanguage": ["English"],
          "areaServed": "Global",
          "hoursAvailable": "24/7"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "TejStarter Team"
      },
      "foundingDate": "2024",
      "numberOfEmployees": "10-50",
      "industry": "Information Technology",
      "naics": "541511", // Custom Computer Programming Services
      "keywords": keywords,
      "slogan": "Transforming businesses through innovative technology solutions",
      "services": [
        "Web Development",
        "Mobile App Development", 
        "Digital Marketing",
        "Custom Software Development",
        "UI/UX Design",
        "E-commerce Development",
        "SEO Services",
        "CMS Development",
        "API Integration",
        "Cloud Solutions",
        "Enterprise Applications",
        "SaaS Development"
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 28.6139,
          "longitude": 77.2090
        },
        "geoRadius": "Global"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "Place",
          "name": "Global"
        }
      ],
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Online Payment"],
      "currenciesAccepted": ["INR", "USD", "EUR"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Services & Digital Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development Services",
              "description": "Custom website development, e-commerce solutions, responsive design, CMS development using React, Angular, Vue.js, Node.js, PHP, Python",
              "category": "Web Development",
              "serviceType": "Custom Development"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development",
              "description": "iOS, Android, cross-platform mobile applications using React Native, Flutter, native development",
              "category": "Mobile Development",
              "serviceType": "App Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Digital Marketing Services",
              "description": "SEO services, social media marketing, PPC advertising, content marketing, brand strategy",
              "category": "Digital Marketing",
              "serviceType": "Marketing Solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Custom Software Development",
              "description": "Enterprise applications, SaaS development, API integration, cloud solutions using latest technology stack",
              "category": "Software Development",
              "serviceType": "Custom Solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "UI/UX Design Services",
              "description": "User interface design, user experience optimization, graphic design, brand identity",
              "category": "Design Services",
              "serviceType": "Design & Branding"
            }
          }
        ]
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "Quick Turnaround Time",
          "description": "Fast delivery of projects with maintaining quality standards"
        },
        {
          "@type": "Offer",
          "name": "24/7 Support",
          "description": "Round the clock technical support and customer service"
        },
        {
          "@type": "Offer",
          "name": "Scalable Solutions",
          "description": "Solutions that grow with your business needs"
        }
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Latest Technology Stack Expertise",
        "description": "Expertise in React, Angular, Vue.js, Node.js, PHP, Python, React Native, Flutter, AWS, Azure"
      },
      "targetMarket": [
        "E-commerce",
        "Healthcare", 
        "Education",
        "Real Estate",
        "Finance",
        "Retail",
        "Startups",
        "Small and Medium Businesses",
        "Enterprise"
      ]
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
