/**
 * Post-build script: generate per-route HTML files with page-specific OG meta tags.
 *
 * For each known route, this script:
 * 1. Reads the built dist/public/index.html
 * 2. Injects page-specific <title>, og:*, twitter:*, canonical, and meta description
 * 3. Writes the result to dist/public/<route>/index.html
 *
 * This ensures crawlers (LinkedIn, Facebook, Twitter, Slack, WhatsApp, etc.) that
 * do NOT execute JavaScript receive the correct page-specific meta tags in the raw
 * HTML response.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist/public');
const BASE_URL = 'https://agilityaipros.com';
const OG_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/39988e50-1da3-11f1-b583-373c1aaf1f7a_9c284c6b.png';

/**
 * Orphan routes that should redirect to canonical destinations.
 * These generate static HTML files with meta-refresh + JS redirect.
 * Since the Manus hosting platform intercepts all non-API routes before
 * Express, we cannot issue HTTP 301s from Express for these paths.
 * The static HTML approach ensures both crawlers and browsers are redirected.
 */
const REDIRECTS = [
  { from: '/services', to: '/ai-roadmap' },
  { from: '/who-i-serve', to: '/about' },
  { from: '/contact', to: '/ai-roadmap' },
  { from: '/case-studies/email-campaign', to: '/case-studies/cryotherapy-30k-email-campaign' },
];

/**
 * Route meta data map.
 * Each entry: { title, description, type, path }
 */
const ROUTES = [
  {
    path: '/',
    title: 'AI Consulting for South Florida Businesses — Agility AI Pros',
    description: 'Patrick Daniel helps South Florida businesses save 5+ hours a week with AI. AI audits, automations, Manus AI websites, and multi-LLM research — results guaranteed.',
    type: 'website',
  },
  {
    path: '/about',
    title: 'About Patrick Daniel — Agility AI Pros',
    description: 'Patrick Daniel is an AI consultant and operator helping South Florida businesses implement AI systems that save time and drive measurable results.',
    type: 'website',
  },
  {
    path: '/ai-roadmap',
    title: 'AI Roadmap Session — Agility AI Pros',
    description: 'A focused 45-minute discovery call + custom AI Action Report. Identify 17+ weekly hours of time savings for your business — or full refund.',
    type: 'website',
  },
  {
    path: '/automation-offers',
    title: 'AI Automation Services — Agility AI Pros',
    description: 'Custom AI automations for South Florida businesses. Lead capture, front desk automation, internal ops, and multi-LLM research — built and deployed for you.',
    type: 'website',
  },
  {
    path: '/case-studies',
    title: 'AI Case Studies — Agility AI Pros',
    description: 'Real AI results for boutique firms, med spas, clinics, and e-commerce. See how AI automation reduced no-shows, doubled bookings, and generated $30K in a week.',
    type: 'website',
  },
  {
    path: '/hire-your-ai-employees',
    title: 'Hire Your AI Employees — Shopify AI Roadmap Session | Agility AI Pros',
    description: 'Install AI employees in your Shopify store. One 45-minute session maps out Athena, Hermes, Themis, Odysseus, Apollo, Iris & Thales for your specific store. $197. No retainer.',
  },
  {
    path: '/faq',
    title: 'FAQ — Agility AI Pros',
    description: 'Answers to common questions about AI Roadmap sessions, automation offers, implementation, and what to expect when working with Agility AI Pros.',
    type: 'website',
  },
  {
    path: '/case-studies/cryotherapy-no-show-reduction',
    title: 'Cryotherapy No-Show Reduction — Case Study | Agility AI Pros',
    description: 'How AI-powered multi-channel reminders cut no-shows from 55% to 30% — a 45% reduction — at a California wellness studio in 8 weeks.',
    type: 'article',
  },
  {
    path: '/case-studies/cryotherapy-2x-bookings',
    title: 'Cryotherapy 2x Bookings — Case Study | Agility AI Pros',
    description: 'How AI-driven marketing automation doubled monthly bookings for a US Cryotherapy franchise using targeted follow-up sequences and smart scheduling.',
    type: 'article',
  },
  {
    path: '/case-studies/cryotherapy-30k-email-campaign',
    title: 'Cryotherapy $30K Email Campaign — Case Study | Agility AI Pros',
    description: 'How a single AI-written email campaign generated $30,000 in revenue for a US Cryotherapy franchise in one week, using segmented offers and urgency copy.',
    type: 'article',
  },
  {
    path: '/case-studies/chocomize',
    title: 'Chocomize E-commerce AI — Case Study | Agility AI Pros',
    description: 'How AI-powered product descriptions, SEO copy, and automation helped Chocomize scale their custom chocolate e-commerce store and reduce manual work.',
    type: 'article',
  },
  {
    path: '/case-studies/lexiusd',
    title: 'LexiUSD Stablecoin Platform — Case Study | Agility AI Pros',
    description: 'How AI-powered research and content strategy supported the LexiUSD stablecoin platform launch, including tokenomics documentation and fintech copywriting.',
    type: 'article',
  },
  {
    path: '/case-studies/gforcetoken',
    title: 'GForce Token — Case Study | Agility AI Pros',
    description: 'How AI-assisted research and content development supported the GForce Token project, delivering clear technical documentation and investor-facing copy.',
    type: 'article',
  },
  {
    path: '/case-studies/due-diligence',
    title: 'Multi-LLM Due Diligence — Case Study | Agility AI Pros',
    description: 'How a multi-LLM deep research process delivered a comprehensive due diligence report, synthesizing findings from four frontier AI systems into one decision brief.',
    type: 'article',
  },
  {
    path: '/case-studies/legacyaviationfi',
    title: 'Legacy Aviation FI — Case Study | Agility AI Pros',
    description: 'How AI-powered content and research strategy supported Legacy Aviation FI, a global aviation finance and operations platform, from concept to launch.',
    type: 'article',
  },
];

function buildMetaTags(route) {
  const url = `${BASE_URL}${route.path}`;
  return `
    <title>${route.title}</title>
    <meta name="description" content="${escapeAttr(route.description)}" />
    <meta property="og:type" content="${route.type}" />
    <meta property="og:site_name" content="Agility AI Pros" />
    <meta property="og:title" content="${escapeAttr(route.title)}" />
    <meta property="og:description" content="${escapeAttr(route.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(route.title)}" />
    <meta name="twitter:description" content="${escapeAttr(route.description)}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />
    <link rel="canonical" href="${url}" />`.trim();
}

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectMetaIntoHtml(html, route) {
  const metaTags = buildMetaTags(route);

  // Remove existing title tag (we'll replace it)
  let result = html.replace(/<title>[^<]*<\/title>/, '');

  // Remove any existing og:, twitter:, canonical, or description meta tags
  result = result.replace(/<meta\s+(?:property="og:[^"]*"|name="twitter:[^"]*"|name="description"|name="twitter:card")[^>]*\/?>/gi, '');
  result = result.replace(/<link\s+rel="canonical"[^>]*\/?>/gi, '');

  // Inject our meta tags right after <head> opening tag
  result = result.replace(/(<head[^>]*>)/, `$1\n    ${metaTags}`);

  return result;
}

async function main() {
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`ERROR: ${indexHtmlPath} not found. Run 'pnpm build' first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  console.log(`Read base HTML (${baseHtml.length} bytes)`);

  let generated = 0;

  for (const route of ROUTES) {
    const customHtml = injectMetaIntoHtml(baseHtml, route);

    if (route.path === '/') {
      // Root: overwrite the index.html itself
      fs.writeFileSync(indexHtmlPath, customHtml, 'utf-8');
      console.log(`✓ / → dist/public/index.html`);
    } else {
      // Sub-routes: create directory + index.html
      const routeDir = path.join(DIST_DIR, route.path);
      fs.mkdirSync(routeDir, { recursive: true });
      const outPath = path.join(routeDir, 'index.html');
      fs.writeFileSync(outPath, customHtml, 'utf-8');
      console.log(`✓ ${route.path} → dist/public${route.path}/index.html`);
    }

    generated++;
  }

  console.log(`\n✅ Generated ${generated} route HTML files with page-specific meta tags.`);

  // Generate redirect HTML files for orphan routes
  let redirectsGenerated = 0;
  for (const redirect of REDIRECTS) {
    const targetUrl = `${BASE_URL}${redirect.to}`;
    const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Redirecting... — Agility AI Pros</title>
  <meta http-equiv="refresh" content="0; url=${targetUrl}" />
  <link rel="canonical" href="${targetUrl}" />
  <meta property="og:url" content="${targetUrl}" />
  <script>window.location.replace("${targetUrl}");</script>
</head>
<body>
  <p>Redirecting to <a href="${targetUrl}">${targetUrl}</a>...</p>
</body>
</html>`;

    const routeDir = path.join(DIST_DIR, redirect.from);
    fs.mkdirSync(routeDir, { recursive: true });
    const outPath = path.join(routeDir, 'index.html');
    fs.writeFileSync(outPath, redirectHtml, 'utf-8');
    console.log(`↪ ${redirect.from} → ${redirect.to} (redirect HTML)`);
    redirectsGenerated++;
  }

  console.log(`✅ Generated ${redirectsGenerated} redirect HTML files.`);
}

main().catch(err => {
  console.error('ERROR:', err);
  process.exit(1);
});
