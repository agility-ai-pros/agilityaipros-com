import { Link } from 'wouter';
import Footer from '@/components/Footer';

const SCREENSHOT_1 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/lexiusd_screenshot_1_59f36311.webp';
const SCREENSHOT_2 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/lexiusd_screenshot_2_deee9dfb.webp';
const SCREENSHOT_3 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/lexiusd_screenshot_3_converter_2905d3c6.webp';

export default function LexiUSD() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ffffff' }}>

      {/* Hero */}
      <section className="py-20 md:py-32 text-white" style={{ backgroundColor: '#1B3A6B' }}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ letterSpacing: '2px' }}>
              <Link href="/case-studies">
                <span className="cursor-pointer hover:underline" style={{ color: 'rgba(255,255,255,0.5)' }}>Case Studies</span>
              </Link>
              <span style={{ color: '#0D9488' }}> &nbsp;/&nbsp; LexiUSD</span>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Case Study
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#ffffff' }}>
              LexiUSD
            </h2>
            <div
              className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wide"
              style={{ backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488' }}
            >
              Stablecoin Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              $1.6 Million Saved.{' '}
              <span style={{ color: '#0D9488' }}>Built by the Founder Himself.</span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              How AI-powered vibe coding turned a seven-figure development quote into a founder-built fintech platform.
            </p>
          </div>
        </div>
      </section>

      {/* Body Copy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#374151' }}>
              <p>
                My client came to me in the early stages of building LexiUSD, a stablecoin and fintech platform set for a 2026 launch. Before we connected, he had done what most founders do — he went out and got a quote from a reputable, seven-year-established exchange development firm. The number they came back with: <strong style={{ color: '#1B3A6B' }}>$1.6 million.</strong>
              </p>
              <p>
                That's a real quote. From a real company. For work that, with the right tools and guidance, didn't require a seven-figure budget.
              </p>
              <p>
                Together we went deep — regular working sessions exploring vibe coding platforms, testing AI tools, and figuring out what was actually possible in real time. This wasn't a classroom. It was two people building something live, learning the landscape together, and making smart decisions along the way. He did the building. We built the knowledge together — and what we learned in the process is already shaping what's possible on everything that comes next.
              </p>
              <p>
                The result is <a href="https://lexiusd.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0D9488', fontWeight: 600 }}>LexiUSD.com</a> — a live site with a fully functional demo exchange built right inside it, scheduled to launch in Q2 2026. Real fintech infrastructure, built at a fraction of what the quote demanded, by the person who understands the vision better than any outside dev shop ever could.
              </p>
              <p>
                That's how I prefer to work. Not as a vendor handing you a deliverable — but as a thinking partner in the trenches with you, helping you see what's possible and make smart moves in real time. And when you're ready, I can show you exactly how to do it yourself — or just build it for you. Either way, you win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={SCREENSHOT_1}
                  alt="LexiUSD platform screenshot 1"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={SCREENSHOT_2}
                  alt="LexiUSD platform screenshot 2"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={SCREENSHOT_3}
                  alt="LexiUSD currency converter"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-white text-center" style={{ backgroundColor: '#1B3A6B' }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to find out what's possible for your business?
            </h2>
            <Link href="/#contact">
              <button
                className="px-10 py-4 text-white rounded-lg font-bold text-lg transition-all"
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
