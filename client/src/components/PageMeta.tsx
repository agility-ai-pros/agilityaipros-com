import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Agility AI Pros';
const DEFAULT_URL = 'https://agilityaipros.com';
// Default OG image — the Agility AI Pros logo (wide enough for 1200×630 crop)
const DEFAULT_OG_IMAGE =
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/39988e50-1da3-11f1-b583-373c1aaf1f7a_9c284c6b.png';

interface PageMetaProps {
  title: string;
  description: string;
  /** Canonical path, e.g. "/about". Defaults to current window.location.pathname. */
  path?: string;
  /** Absolute URL to the OG image (1200×630 recommended). Falls back to DEFAULT_OG_IMAGE. */
  image?: string;
  /** 'website' for top-level pages, 'article' for case studies. Default: 'website'. */
  type?: 'website' | 'article';
}

/**
 * Drop-in component for per-page Open Graph + Twitter Card meta tags.
 * Mount once near the top of each page component.
 *
 * Usage:
 *   <PageMeta
 *     title="AI Roadmap — Agility AI Pros"
 *     description="Get a custom AI Roadmap for your business..."
 *     path="/ai-roadmap"
 *   />
 */
export default function PageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
}: PageMetaProps) {
  const canonicalPath =
    path ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const canonicalUrl = `${DEFAULT_URL}${canonicalPath}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
