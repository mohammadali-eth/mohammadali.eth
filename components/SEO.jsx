"use client";

import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * SEO Component for managing page metadata.
 * Uses react-helmet-async to handle head tags.
 *
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Meta keywords (comma-separated)
 * @param {string} props.url - Canonical URL for the page
 * @param {string} [props.type='website'] - Open Graph type
 */
const SEO = ({ title, description, keywords, url, type = "website" }) => {
  const siteName = "Mohammadali Dhanga";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}

      {/* Additional tags can be added here as needed */}
    </Helmet>
  );
};

export default SEO;
