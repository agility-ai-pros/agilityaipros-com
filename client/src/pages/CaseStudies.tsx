import { Link } from 'wouter';
import Footer from '@/components/Footer';

const GFORCE_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/gforcetoken_hero_b513eb3b.webp';
const LEXIUSD_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/lexiusd_2026-03-11_18-10-56_2875_139dcaf2.webp';
const LEGACY_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/legacyaviationfi_hero_c3424d70.webp';

const fintechCaseStudies = [
  {
    slug: 'due-diligence',
    category: 'Family Office / Private Capital',
    title: 'AI-Powered Due Diligence',
    outcome: '$106M deal protected',
    description: 'We built an AI-powered vetting system that checks 47+ public data sources and delivers a structured verification report — before a single meeting gets booked.',
    img: null,
  },
  {
    slug: 'gforcetoken',
    category: 'Finance & Deal Flow',
    title: 'G-Force Token',
    outcome: '$34.5M raise',
    description: 'AI-assisted iteration turned a real-world frustration into a live deal registration and protection platform in weeks, not months.',
    img: GFORCE_IMG,
  },
  {
    slug: 'lexiusd',
    category: 'Stablecoin Platform',
    title: 'LexiUSD',
    outcome: '$1.6M saved',
    description: 'AI-powered vibe coding turned a seven-figure development quote into a founder-built fintech platform — live and launching Q2 2026.',
    img: LEXIUSD_IMG,
  },
  {
    slug: 'legacyaviationfi',
    category: 'Aviation Finance & Operations',
    title: 'Legacy Aviation FI',
    outcome: '1-day build',
    description: 'AI-assisted development and a strategic domain rebrand turned a stalled project into a live global aviation finance platform — in one day.',
    img: LEGACY_IMG,
  },
];

const boutiqueCaseStudies = [
  {
    slug: 'cryotherapy-no-show-reduction',
    category: 'Workflow Automation · Wellness',
    title: 'Cryotherapy: 45% No-Show Reduction',
    outcome: '45% reduction in no-shows',
    description: 'A growing recovery and wellness studio was losing serious revenue to missed appointments. We built a CRM-backed reminder system that cut no-shows from 55% to 30%.',
    img: null,
  },
  {
    slug: 'cryotherapy-2x-bookings',
    category: 'Lead Nurture · Wellness & Med Spa · Email Automation',
    title: 'Doubling Weekly Booked Consults from the Same Ad Spend',
    outcome: '2x bookings from same ad spend',
    description: 'A California wellness studio was running effective Meta ads but only 18% of leads were booking. We designed a two-stage email nurture system that lifted conversion to 37% without changing ad spend.',
    img: null,
  },
  {
    slug: 'cryotherapy-30k-email-campaign',
    category: 'Email Campaign · Wellness & Med Spa · List Reactivation',
    title: '$30K from a Single Email Campaign',
    outcome: '$30K revenue · 20/20 spots booked',
    description: 'A wellness studio had spent years building a 3,071-contact list that had quietly gone idle. We designed and launched a single seasonal campaign and filled all 20 available spots at $1,500 each within days.',
    img: null,
  },
  {
    slug: 'chocomize',
    category: 'AI Automation · E-commerce · Corporate Gifting',
    title: 'Chocomize',
    outcome: '85% reduction in response time',
    description: 'Chocomize was losing high-value B2B leads to slow, inconsistent inquiry handling. We designed an end-to-end automation that captures, enriches, drafts, and logs every corporate gifting inquiry in under 15 minutes.',
    img: null,
  },
];

const CaseStudyCard = ({ cs }: { cs: any }) => (
  <Link href={`/case-studies/${cs.slug}`}>
    <div
      className="rounded-2xl overflow-hidden transition-all hover:shadow-2xl cursor-pointer border"
      style={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb' }}
    >
      {/* Thumbnail if available */}
      {cs.img && (
        <div className="w-full h-48 md:h-56 overflow-hidden">
          <img
            src={cs.img}
            alt={cs.title}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform"
          />
        </div>
      )}

      {/* No image — accent bar instead */}
      {!cs.img && (
        <div className="w-full h-2" style={{ backgroundColor: '#0D9488' }} />
      )}

      <div className="p-8 md:p-10">
        {/* Category pill */}
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
          style={{ backgroundColor: 'rgba(13,148,136,0.1)', color: '#0D9488' }}
        >
          {cs.category}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1B3A6B' }}>
          {cs.title}
        </h3>

        {/* Outcome */}
        <p className="text-lg font-medium mb-3 leading-snug" style={{ color: '#0D9488' }}>
          {cs.outcome}
        </p>

        {/* Description */}
        <p className="text-base leading-relaxed mb-6" style={{ color: '#6b7280' }}>
          {cs.description}
        </p>

        {/* CTA */}
        <div
          className="px-6 py-3 rounded-full font-bold text-sm text-white transition-all inline-block"
          style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
        >
          Read case study →
        </div>
      </div>
    </div>
  </Link>
);

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ffffff' }}>

      {/* Page hero */}
      <section className="py-20 md:py-32 px-4 md:px-8" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl md:text-2xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Real projects. Real results. Real businesses.
          </p>
        </div>
      </section>

      {/* SECTION 1: Boutique Firms, Med Spas & Clinics */}
      <section className="py-20 md:py-32 px-4 md:px-8" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B3A6B' }}>
              Boutique Firms, Med Spas & Clinics
            </h2>
            <p className="text-lg" style={{ color: '#6b7280' }}>
              How AI helps appointment-driven service businesses recover lost revenue — fewer no-shows, more booked consults, more lifetime value per client.
            </p>
          </div>
          <div className="space-y-8">
            {boutiqueCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Fintech & Ecommerce */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B3A6B' }}>
              Fintech & Ecommerce
            </h2>
            <p className="text-lg" style={{ color: '#6b7280' }}>
              How AI is reshaping deal flow, capital operations, and digital commerce — from family-office due diligence to e-commerce inquiry handling.
            </p>
          </div>
          <div className="space-y-8">
            {fintechCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8 text-center" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to see what's possible for your business?
          </h2>
          <Link href="/#contact">
            <button
              className="px-10 py-4 rounded-lg font-bold text-lg text-white transition-all"
              style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0f766e';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0D9488';
              }}
            >
              Book Your AI Audit — $997
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
