import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CREAM = '#f8f6f1';
const INK = '#0d0f13';
const ACCENT = '#c9553a';
const MUTED = '#6b6e76';
const CARD_BG = '#ffffff';
const BORDER = '#e2dfd8';
const NAVY = '#1B3A6B';
const TEAL = '#0D9488';

const GFORCE_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/gforcetoken_hero_b513eb3b.webp';
const LEXIUSD_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/lexiusd_2026-03-11_18-10-56_2875_139dcaf2.webp';

const caseStudies = [
  {
    slug: '/case-studies/due-diligence',
    category: 'Family Office / Private Capital',
    title: 'AI-Powered Due Diligence',
    headline: 'A family office was wasting months on people who shouldn\'t have made it past the first call.',
    description: 'We built an AI-powered vetting system that checks 47+ public data sources and delivers a structured verification report — before a single meeting gets booked.',
    stats: ['47+ sources', 'Hours not months', '$106M deal protected'],
    img: null,
    accent: ACCENT,
  },
  {
    slug: '/portfolio/gforcetoken',
    category: 'Finance & Deal Flow',
    title: 'G-Force Token',
    headline: 'A deal maker was losing deals to red tape — endless NDAs, lost counterparties, broken communication.',
    description: 'AI-assisted iteration turned a real-world frustration into a live deal registration and protection platform in weeks, not months.',
    stats: ['4-step lifecycle', '60s to register', '$34.5M raise'],
    img: GFORCE_IMG,
    accent: TEAL,
  },
  {
    slug: '/portfolio/lexiusd',
    category: 'Stablecoin Platform',
    title: 'LexiUSD',
    headline: '$1.6 Million saved. Built by the founder himself.',
    description: 'AI-powered vibe coding turned a seven-figure development quote into a founder-built fintech platform — live and launching Q2 2026.',
    stats: ['$1.6M saved', 'Founder-built', 'Live demo exchange'],
    img: LEXIUSD_IMG,
    accent: TEAL,
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: CREAM, color: INK, fontFamily: "'DM Sans', sans-serif" }}>
      <Navigation />

      {/* Page hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: MUTED, letterSpacing: '2px' }}>
            Portfolio
          </p>
          <h1
            className="font-black mb-6 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 56px)',
              letterSpacing: '-1px',
              color: INK,
            }}
          >
            Case Studies
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: MUTED }}>
            Real businesses. Real problems. Real AI solutions — built, iterated, and shipped.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-4 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="rounded-2xl overflow-hidden transition-shadow hover:shadow-xl"
              style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}
            >
              {/* Thumbnail if available */}
              {cs.img && (
                <div className="w-full h-48 md:h-56 overflow-hidden">
                  <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* No image — accent bar instead */}
              {!cs.img && (
                <div className="w-full h-2" style={{ backgroundColor: cs.accent }} />
              )}

              <div className="p-8 md:p-10">
                {/* Category pill */}
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                  style={{ backgroundColor: `${cs.accent}18`, color: cs.accent, border: `1px solid ${cs.accent}40` }}
                >
                  {cs.category}
                </div>

                {/* Title */}
                <h2
                  className="font-extrabold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 28px)', color: INK }}
                >
                  {cs.title}
                </h2>

                {/* Headline */}
                <p className="text-base md:text-lg font-medium mb-3 leading-snug" style={{ color: '#3a3d44' }}>
                  {cs.headline}
                </p>

                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: MUTED }}>
                  {cs.description}
                </p>

                {/* Stat pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.stats.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: CREAM, border: `1px solid ${BORDER}`, color: INK }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => { window.scrollTo(0, 0); window.location.href = cs.slug; }}
                  className="px-6 py-3 rounded-full font-bold text-sm text-white transition-all"
                  style={{ backgroundColor: cs.accent, cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = '0.85';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = '1';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  }}
                >
                  Read Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-20 md:py-24 px-4 md:px-8 text-center text-white"
        style={{ backgroundColor: NAVY }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want results like these for your business?
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Book a free 45-minute AI Audit and I'll show you exactly where AI can save you time and money.
          </p>
          <button
            onClick={() => { window.scrollTo(0, 0); window.location.href = '/#contact'; }}
            className="px-10 py-4 rounded-lg font-bold text-lg text-white transition-all"
            style={{ backgroundColor: TEAL, cursor: 'pointer' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0f766e';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = TEAL;
            }}
          >
            Book Your AI Audit — $997
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
