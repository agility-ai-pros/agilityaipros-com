import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GFORCE_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/gforcetoken_hero_b513eb3b.webp';
const LEXIUSD_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/lexiusd_2026-03-11_18-10-56_2875_139dcaf2.webp';
const LEGACY_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/legacyaviationfi_hero_c3424d70.webp';

const caseStudies = [
  {
    slug: 'due-diligence',
    category: 'Family Office / Private Capital',
    title: 'AI-Powered Due Diligence',
    headline: 'A family office was wasting months on people who shouldn\'t have made it past the first call.',
    description: 'We built an AI-powered vetting system that checks 47+ public data sources and delivers a structured verification report — before a single meeting gets booked.',
    stats: ['47+ sources', 'Hours not months', '$106M deal protected'],
    img: null,
  },
  {
    slug: 'gforcetoken',
    category: 'Finance & Deal Flow',
    title: 'G-Force Token',
    headline: 'A deal maker was losing deals to red tape.',
    description: 'AI-assisted iteration turned a real-world frustration into a live deal registration and protection platform in weeks, not months.',
    stats: ['4-step lifecycle', '60s to register', '$34.5M raise'],
    img: GFORCE_IMG,
  },
  {
    slug: 'lexiusd',
    category: 'Stablecoin Platform',
    title: 'LexiUSD',
    headline: '$1.6 Million saved. Built by the founder himself.',
    description: 'AI-powered vibe coding turned a seven-figure development quote into a founder-built fintech platform — live and launching Q2 2026.',
    stats: ['$1.6M saved', 'Founder-built', 'Live demo exchange'],
    img: LEXIUSD_IMG,
  },
  {
    slug: 'legacyaviationfi',
    category: 'Aviation Finance & Operations',
    title: 'Legacy Aviation FI',
    headline: 'A 100-person overseas team couldn\'t deliver in a month.',
    description: 'AI-assisted development and a strategic domain rebrand turned a stalled project into a live global aviation finance platform — in one day.',
    stats: ['1-day build', '30 days saved', '6 divisions covered'],
    img: LEGACY_IMG,
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ffffff' }}>
      <Navigation />

      {/* Page hero */}
      <section className="py-20 md:py-32 px-4 md:px-8" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl md:text-2xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Real projects. Real results. Real businesses.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {caseStudies.map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`}>
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1B3A6B' }}>
                    {cs.title}
                  </h2>

                  {/* Headline */}
                  <p className="text-lg font-medium mb-3 leading-snug" style={{ color: '#374151' }}>
                    {cs.headline}
                  </p>

                  {/* Description */}
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#6b7280' }}>
                    {cs.description}
                  </p>

                  {/* Stat pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.stats.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', color: '#374151' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className="px-6 py-3 rounded-full font-bold text-sm text-white transition-all inline-block"
                    style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
                  >
                    Read Full Case Study →
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
