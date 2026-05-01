import PageMeta from '@/components/PageMeta';
import { Link } from 'wouter';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const CREAM = '#f8f6f1';
const INK = '#0d0f13';
const ACCENT = '#c9553a';
const MUTED = '#6b6e76';
const CARD_BG = '#ffffff';
const BORDER = '#e2dfd8';

function CheckSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="rounded-2xl p-8 md:p-10 my-8"
      style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}
    >
      <h3
        className="text-xl md:text-2xl font-bold mb-6"
        style={{ fontFamily: "'Playfair Display', serif", color: INK }}
      >
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm md:text-base leading-relaxed" style={{ color: '#3a3d44' }}>
            <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: ACCENT }}>✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DueDiligence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <PageMeta
      title="AI Due Diligence Report — Case Study | Agility AI Pros"
      description="How Patrick Daniel used multi-LLM deep research to produce a comprehensive due diligence report for a capital-intensive investment decision in under 48 hours."
      path="/case-studies/due-diligence"
      type="article"
    />
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: CREAM, color: INK, fontFamily: "'DM Sans', sans-serif" }}>

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: ACCENT, letterSpacing: '2px' }}
          >
            <Link href="/case-studies">
              <span className="cursor-pointer hover:underline" style={{ color: MUTED }}>Case Studies</span>
            </Link>
            <span style={{ color: ACCENT }}> &nbsp;/&nbsp; AI-Powered Due Diligence</span>
          </div>

          {/* Project title */}
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: MUTED }}>
            Case Study
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: INK }}
          >
            AI-Powered Due Diligence
          </h2>

          {/* Category pill */}
          <div
            className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wide"
            style={{ backgroundColor: `${ACCENT}18`, color: ACCENT, border: `1px solid ${ACCENT}40` }}
          >
            Family Office / Private Capital
          </div>

          {/* H1 */}
          <h1
            className="font-black leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 5vw, 52px)',
              letterSpacing: '-1px',
              color: INK,
            }}
          >
            A family office was wasting{' '}
            <em style={{ fontStyle: 'italic', color: ACCENT }}>months</em>{' '}
            on people who shouldn't have made it past the first call
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: MUTED, maxWidth: '660px' }}>
            We built an AI-powered vetting system that checks 47+ public data sources and delivers a comprehensive verification report — before a single meeting gets booked.
          </p>
        </div>
      </section>

      {/* Meta bar */}
      <section className="px-4 md:px-8 pb-12">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-8 md:gap-12">
          {[
            { label: 'Industry', value: 'Family Office / Private Capital' },
            { label: 'Challenge', value: 'Counterparty Vetting at Scale' },
            { label: 'AI Role', value: 'Automated Research & Report Generation' },
            { label: 'Result', value: 'Live System — 47+ Sources per Report' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: MUTED, letterSpacing: '2px' }}
              >
                {item.label}
              </span>
              <span className="text-sm font-semibold" style={{ color: INK }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Body content */}
      <article className="px-4 md:px-8 pb-16">
        <div className="max-w-3xl mx-auto space-y-0">

          {/* The Problem */}
          <h2
            className="font-extrabold mt-14 mb-5 pt-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', letterSpacing: '-0.3px', color: INK }}
          >
            The Problem
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#3a3d44' }}>
            The client runs a family office that evaluates dozens of potential deals, funding partners, and investment opportunities every month. The flow never stops — people come through referrals, networking events, conferences, cold outreach. Every one of them has a pitch deck and a compelling story.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#3a3d44' }}>
            The problem wasn't finding deal flow. It was filtering it. The client's team was spending weeks — sometimes months — in conversations with potential partners, conducting meetings, reviewing proposals, and advancing relationships, only to discover deep into the process that someone's credentials didn't check out, their claimed track record was fabricated, or their entities didn't actually exist.
          </p>

          {/* Highlight */}
          <div
            className="rounded-r-2xl p-8 my-8"
            style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}` }}
          >
            <p className="text-base md:text-lg font-medium" style={{ color: INK }}>
              With active transactions including a $106 million data center funding in Canada, the cost of letting the wrong person into the process isn't theoretical — it's nine figures of exposure. The existing vetting process — manual Google searches, gut feel, and hoping referrals were solid — wasn't catching the issues early enough.
            </p>
          </div>

          {/* The Solution */}
          <h2
            className="font-extrabold mt-14 mb-5 pt-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', letterSpacing: '-0.3px', color: INK }}
          >
            The Solution
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#3a3d44' }}>
            We built an AI-powered verification system that runs a comprehensive public records check on any individual or entity before the client commits meaningful time or resources. The system cross-references 47+ independent data sources and produces a structured report that categorizes every claim as Supported, Unverified, or Inconsistent — with links to the original sources so the client can verify everything independently.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#3a3d44' }}>
            Every finding is tagged by source type so the client knows exactly how much weight to give it — whether it came from a government database, an independent third-party platform, or the subject's own self-reported information.
          </p>

          {/* What the Report Covers */}
          <h2
            className="font-extrabold mt-14 mb-5 pt-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', letterSpacing: '-0.3px', color: INK }}
          >
            What the Report Covers
          </h2>

          <CheckSection
            title="Regulatory & Compliance Screening"
            items={[
              'OFAC / Treasury sanctions list',
              'SEC enforcement actions',
              'FINRA BrokerCheck history',
              'SEC Form D filings (fundraising)',
              'SEC Form ADV (investment advisor registration)',
              'FEC political contribution records',
            ]}
          />

          <CheckSection
            title="Entity Verification"
            items={[
              'State Secretary of State business filings',
              'Registered agent and address verification',
              'Domain registration history (RDAP)',
              'Website analytics and technology fingerprinting',
              'International business registries where applicable',
              'Product / app store listings and developer records',
            ]}
          />

          <CheckSection
            title="Claims Verification"
            items={[
              'Education and enrollment records',
              'Professional affiliations and claimed roles',
              'Accelerator and incubator participation',
              'Published media, speaker bios, and interviews',
              'Crunchbase, PitchBook, and venture databases',
              'Social media and LinkedIn cross-referencing',
            ]}
          />

          <CheckSection
            title="Report Structure"
            items={[
              'Every claim categorized: Supported / Unverified / Inconsistent',
              'Source tagging: Government, Platform, Third-Party, or Self-Reported',
              'Full entity map with independent data for each organization',
              'Investigation timeline with verified dates',
              'Clickable source links for independent verification',
              'Actionable next steps with specific follow-up questions',
            ]}
          />

          {/* Source type tags */}
          <div className="mt-2 mb-8">
            <p className="text-base font-bold mb-4" style={{ color: INK }}>Source types used in every report:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'GOV — Government / Institutional', gov: true },
                { label: 'PLATFORM — Data subject can\'t modify', gov: false },
                { label: '3RD PARTY — Independent source', gov: false },
                { label: 'SELF — Subject\'s own statements', gov: false },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="inline-block px-4 py-2 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: CREAM,
                    border: `1px solid ${tag.gov ? ACCENT : BORDER}`,
                    color: tag.gov ? ACCENT : MUTED,
                    letterSpacing: '0.3px',
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* The Results */}
          <h2
            className="font-extrabold mt-14 mb-5 pt-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', letterSpacing: '-0.3px', color: INK }}
          >
            The Results
          </h2>

          {/* Results grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {[
              { number: '47+', desc: 'Independent sources checked per report' },
              { number: 'Hours', desc: 'Not months — to vet a potential partner' },
              { number: '$106M', desc: 'Deal protected from bad counterparty' },
              { number: '100%', desc: 'Source verification with clickable links' },
            ].map((stat) => (
              <div
                key={stat.number}
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: ACCENT }}
                >
                  {stat.number}
                </div>
                <div className="text-sm leading-snug" style={{ color: MUTED }}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#3a3d44' }}>
            The first report the client ran caught three major red flags on someone who had been introduced through a trusted referral. The second report helped confirm the legitimacy of a partner they were serious about. By the third report, the client had already saved themselves from at least one bad relationship and gained confidence in their vetting process.
          </p>

          {/* Why This Matters */}
          <h2
            className="font-extrabold mt-14 mb-5 pt-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', letterSpacing: '-0.3px', color: INK }}
          >
            Why This Matters
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#3a3d44' }}>
            This case study is about what happens when you combine AI's ability to process massive amounts of public data with the human judgment required to know what questions to ask. The system doesn't make decisions for the client — it gives them the information they need to make better ones, faster.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#3a3d44' }}>
            For anyone managing capital, evaluating partnerships, or making decisions that depend on accurate information about people and entities, this is the kind of operational leverage that AI can provide right now. The data exists. The tools exist. Most people just need help connecting them in a way that actually works for their business.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 md:py-28 text-white text-center" style={{ backgroundColor: '#1B3A6B' }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to see what's possible for your business?
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
    </>
  );
}
