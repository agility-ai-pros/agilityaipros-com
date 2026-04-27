import { Link } from 'wouter';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const SCREENSHOT_1 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/gforcetoken_hero_b513eb3b.webp';
const SCREENSHOT_2 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/gforcetoken_four_steps_587cd573.webp';
const SCREENSHOT_3 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/gforcetoken_why_section_f517c5b7.webp';

export default function GForceToken() {
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
              <span style={{ color: '#0D9488' }}> &nbsp;/&nbsp; G-Force Token</span>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Case Study
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#ffffff' }}>
              G-Force Token
            </h2>
            <div
              className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wide"
              style={{ backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488' }}
            >
              Finance &amp; Deal Flow
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A deal maker was losing deals to red tape.{' '}
              <span style={{ color: '#0D9488' }}>So we built a platform to fix it.</span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              How AI-assisted iteration turned a real-world frustration into a live deal registration and protection platform — in weeks, not months.
            </p>
          </div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="py-8 border-b" style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }}>
        <div className="container">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-8 md:gap-12">
            {[
              { label: 'Industry', value: 'Finance & Deal Flow' },
              { label: 'Challenge', value: 'NDA & Deal Tracking at Scale' },
              { label: 'AI Role', value: 'Product Iteration & Refinement' },
              { label: 'Result', value: 'Live Platform — gforcetoken.com' },
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
                The client operates in high-stakes deal flow — oil and gas acquisitions, luxury hotel and resort developments, gold mining operations, data center builds, nuclear energy projects, and power company purchases. Not one or two at a time. Dozens simultaneously, with hundreds more coming across the desk every quarter.
              </p>
              <p>
                Every deal involves multiple parties, each requiring signed NCNDAs (Non-Circumvention, Non-Disclosure Agreements) before any real conversation can happen. The parties change. New brokers get introduced. People get cut out of deals they originated. Commissions disappear.
              </p>
              <p>
                The breaking point came during a fintech acquisition. I had introduced the client to an investment banker to help structure the purchase. The deal stalled — not because of financing, not because of due diligence — but because everyone was waiting on a signed NCNDA. A simple document bottleneck was holding up a live transaction.
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
                  When you're running dozens of active deals across multiple sectors with hundreds of counterparties, managing NDAs and deal registration with email threads and PDF attachments doesn't scale. People get lost. Deals get delayed. Contributors get cut out.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold pt-4" style={{ color: '#1B3A6B' }}>
                The Solution
              </h2>

              <p>
                The client decided to build a platform purpose-built for this exact problem — G-Force Token. The concept: a single system where every deal gets registered, every party signs a legally binding NCNDA digitally, token splits are defined visually before closing, and nobody can get circumvented because everything is on record.
              </p>
              <p>
                The client built the initial version using AI development tools. My role was working alongside him through the iteration process — testing workflows, stress-testing the UX, identifying gaps in the deal registration logic, refining the copy and positioning, and going back and forth across multiple AI tools and LLMs to get each piece right.
              </p>
              <p>
                This wasn't a case where I handed someone a finished product. It was a collaborative process where the client drove the vision and build, and I helped sharpen it at every turn — the kind of AI-assisted product development where having a second set of eyes that understands both the business context and the tools makes the difference between a rough prototype and something you can actually put in front of investors and deal partners.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold pt-4" style={{ color: '#1B3A6B' }}>
                What Got Built
              </h2>

              <p>
                G-Force Token is now a live, functional platform at{' '}
                <a
                  href="https://gforcetoken.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0D9488', fontWeight: 600 }}
                >
                  gforcetoken.com
                </a>
                . It replaces what used to require a patchwork of DocuSign, Salesforce, Excel spreadsheets, and email chains with a single deal lifecycle system.
              </p>

              {/* Results grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {[
                  { number: '4', desc: 'Step deal lifecycle — from NCNDA to token distribution' },
                  { number: '60s', desc: 'To register a new deal on the platform' },
                  { number: '60–70%', desc: 'Fewer clicks vs. previous tool stack' },
                  { number: '$34.5M', desc: 'Target raise via SEC Reg D 506(c) offering' },
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
                The platform handles digital NCNDA signing with e-signature and PDF confirmation, deal registration with full party details, visual token split allocation via pie charts so every party sees their cut before closing, and group voting when new parties need to be added — with approved transfers executing automatically from the proposer's pool.
              </p>
              <p>
                The client also structured a Solana-based token (GFORCE) as a SEC-compliant Regulation D offering for accredited investors, with the token powering the deal ecosystem and aligning incentives between users, investors, and the development team.
              </p>

              <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', margin: '40px 0' }} />

              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#1B3A6B' }}>
                Why This Matters
              </h2>

              <p>
                This case study isn't about building someone a chatbot. It's about what happens when someone with deep domain expertise and a real business problem uses AI tools to build a solution — and has the right support to iterate it from rough to ready.
              </p>
              <p>
                The client knew his industry. He knew the pain. He had the vision. What AI tools provided was the speed to build. What I provided was the pressure-testing, refinement, and collaborative iteration that turned a first draft into a platform that's live, functional, and raising capital.
              </p>
              <p>
                For anyone operating in deal-heavy environments — family offices, investment firms, commercial real estate, energy, infrastructure — this is the kind of operational problem that costs real money every week it goes unsolved. The tools to fix it exist right now. Most people just need help connecting the dots.
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
                  alt="G-Force Token homepage hero"
                  className="w-full h-56 object-cover object-top"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={SCREENSHOT_2}
                  alt="G-Force Token four-step deal lifecycle"
                  className="w-full h-56 object-cover object-top"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={SCREENSHOT_3}
                  alt="G-Force Token why section with feature cards"
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
              Got a workflow that's costing you deals?
            </h2>
            <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
              If your team is losing time, losing track, or losing money to manual processes, I can help you figure out where AI fits — and where it doesn't.
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
