import { Link } from 'wouter';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const SCREENSHOT_1 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/legacyaviationfi_hero_c3424d70.webp';
const SCREENSHOT_2 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/legacyaviationfi_divisions_d22b4c74.webp';
const SCREENSHOT_3 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/legacyaviationfi_leadership_e3d4df7b.webp';

export default function LegacyAviationFI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <span style={{ color: '#0D9488' }}> &nbsp;/&nbsp; Legacy Aviation Finance</span>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Case Study
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#ffffff' }}>
              LegacyAviationFI.com
            </h2>
            <div
              className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wide"
              style={{ backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488' }}
            >
              Aviation Finance &amp; Operations
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A month of waiting. A team of 100.{' '}
              <span style={{ color: '#0D9488' }}>We launched the next day.</span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              How one AI-assisted build day replaced a month of delays from a 100-person overseas development team — and how a new domain name became part of the deliverable.
            </p>
          </div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="py-8 border-b" style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }}>
        <div className="container">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-8 md:gap-12">
            {[
              { label: 'Industry', value: 'Aviation Finance & Operations' },
              { label: 'Challenge', value: 'Month-long development delays' },
              { label: 'AI Role', value: 'Full site build in one day' },
              { label: 'Result', value: 'Live at LegacyAviationFI.com' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6b7280' }}>
                  {item.label}
                </span>
                <span className="text-sm font-semibold" style={{ color: '#1f2937' }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Copy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#374151' }}>

              <h2 className="text-2xl md:text-3xl font-bold pt-4" style={{ color: '#1B3A6B' }}>
                The Problem
              </h2>

              <p>
                The client came to me with a website project that had been stuck in limbo for a month. They had hired an overseas development team — reportedly 100 website developers based in India — to build a professional web presence for their global aviation finance and operations company.
              </p>
              <p>
                The results were painful. Every single change request took 24 to 48 hours to come back. Revisions led to more revisions. A month passed and the site still wasn't where it needed to be. For a company operating at the level of Legacy Aviation — managing aircraft fleets, financing commercial airline acquisitions, and running FBO operations across 18 global locations — a stalled website wasn't just an inconvenience. It was a credibility problem.
              </p>

              {/* Highlight block */}
              <div
                className="rounded-r-2xl p-8 my-8"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderLeft: '4px solid #0D9488',
                }}
              >
                <p className="text-lg font-medium" style={{ color: '#1f2937' }}>
                  One hundred developers. Four weeks. Still no website. When they handed the project to me, I had it done the following day.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold pt-4" style={{ color: '#1B3A6B' }}>
                The Solution
              </h2>

              <p>
                They gave me the project. I built the site using AI-assisted development — the same approach I use across all my builds: fast, focused, and built to reflect the actual quality and scale of the business it represents.
              </p>
              <p>
                But the build itself wasn't the only thing I delivered. The client had been operating under the name "Legacy Aviation Finance." I looked at it and immediately saw the opportunity. The domain <strong>LegacyAviationFI.com</strong> was available — cleaner, more memorable, and with the "FI" abbreviation carrying a natural double meaning: Finance and the FAA's standard abbreviation for Fixed-base operator Infrastructure. I suggested the name change, bought the domain, and built the site around it.
              </p>
              <p>
                The client was thrilled. What started as a rescue operation turned into a full rebrand — a new name, a new domain, and a site that actually matched the scale of what they were building.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold pt-4" style={{ color: '#1B3A6B' }}>
                What Got Built
              </h2>

              <p>
                The site at{' '}
                <a
                  href="https://legacyaviationfi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0D9488', fontWeight: 600 }}
                >
                  LegacyAviationFI.com
                </a>{' '}
                presents a full-scale aviation enterprise: six specialized divisions (Commercial Airline Finance, Global Transportation Finance, Charter &amp; Jet Management, Aeromedical Operations, FBO Operations, and Aerospace Ventures), a leadership team section, an investor portal, and a charter booking flow — all built in a single day.
              </p>

              {/* Results grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {[
                  { number: '1 Day', desc: 'From project handoff to live website' },
                  { number: '30 Days', desc: 'Wasted by the previous 100-person team' },
                  { number: '6', desc: 'Specialized aviation divisions covered' },
                  { number: '18', desc: 'Global locations represented on the site' },
                ].map((stat) => (
                  <div
                    key={stat.number}
                    className="rounded-2xl p-6 text-center"
                    style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }}
                  >
                    <div
                      className="text-3xl md:text-4xl font-bold mb-2"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#0D9488' }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm leading-snug" style={{ color: '#6b7280' }}>
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>

              <p>
                The site covers 117+ aircraft, $10B in assets under management, and 26+ years of industry experience — all presented in a design that communicates the credibility and scale the client needed to attract institutional investors, charter clients, and aviation finance partners.
              </p>

              <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', margin: '40px 0' }} />

              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#1B3A6B' }}>
                Why This Matters
              </h2>

              <p>
                This project is a direct illustration of what AI-assisted development changes. A 100-person team operating through traditional workflows couldn't deliver in a month what I delivered in a day. Not because they lacked talent — but because the process was wrong.
              </p>
              <p>
                AI tools collapse the feedback loop. When I'm building, I'm iterating in real time — not waiting 24 to 48 hours per change. The client sees progress immediately. Decisions get made faster. The final product reflects the actual vision instead of a compromise shaped by delay and frustration.
              </p>
              <p>
                The domain suggestion was part of the same mindset. Good AI-assisted work isn't just execution — it's thinking alongside the client about what the business actually needs. Sometimes that's a website. Sometimes it's a name.
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
                  alt="Legacy Aviation FI homepage hero"
                  className="w-full h-56 object-cover object-top"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={SCREENSHOT_2}
                  alt="Legacy Aviation FI core divisions and stats"
                  className="w-full h-56 object-cover object-top"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={SCREENSHOT_3}
                  alt="Legacy Aviation FI leadership section"
                  className="w-full h-56 object-cover object-top"
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
              Stuck with a slow team or a stalled project?
            </h2>
            <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
              If your current process is costing you weeks instead of days, I can help. One session is often all it takes to get unstuck and moving.
            </p>
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
