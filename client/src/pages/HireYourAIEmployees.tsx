import { useEffect } from 'react';

const BOOKING_LINK = 'https://calendly.com/patrickdanielm/shopify-ai-roadmap';

// Seven AI employee definitions
// SVG icon components — 28×28 viewBox, 1.5px stroke, no fill
const IconPen = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5l4 4L9 23H5v-4L19 5z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8l4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconBolt = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3L6 16h8l-2 9 12-13h-8l2-9z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconScale = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 4v20M4 24h20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 10l-4 8h8L7 10zM21 10l-4 8h8l-4-8z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCompass = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="1.5"/>
    <path d="M18 10l-3 7-4 2 3-7 4-2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconGrid = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="8" height="8" rx="1" stroke={color} strokeWidth="1.5"/>
    <rect x="16" y="4" width="8" height="8" rx="1" stroke={color} strokeWidth="1.5"/>
    <rect x="4" y="16" width="8" height="8" rx="1" stroke={color} strokeWidth="1.5"/>
    <rect x="16" y="16" width="8" height="8" rx="1" stroke={color} strokeWidth="1.5"/>
  </svg>
);
const IconChat = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 6h18a1 1 0 011 1v12a1 1 0 01-1 1H9l-5 4V7a1 1 0 011-1z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11h10M9 15h6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconChart = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 22h20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 22V14M12 22V10M17 22V16M22 22V7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const AI_EMPLOYEES = [
  {
    name: 'Athena',
    role: 'Brand Voice',
    Icon: IconPen,
    color: '#9B72CF',
    desc: 'Consistent tone across every PDP, email, and collection page',
  },
  {
    name: 'Hermes',
    role: 'Product Sourcing',
    Icon: IconBolt,
    color: '#95BF47',
    desc: 'Supplier research and product sourcing workflows',
  },
  {
    name: 'Themis',
    role: 'Policy & Trust',
    Icon: IconScale,
    color: '#9B72CF',
    desc: 'Policy-aligned copy so marketing never contradicts your promises',
  },
  {
    name: 'Odysseus',
    role: 'Dealer Outreach',
    Icon: IconCompass,
    color: '#95BF47',
    desc: 'Application strategy for brands that don\'t openly list programs',
  },
  {
    name: 'Apollo',
    role: 'Catalog Audit',
    Icon: IconGrid,
    color: '#9B72CF',
    desc: 'What to keep, cut, and elevate in your product catalog',
  },
  {
    name: 'Iris',
    role: 'Pre-Purchase FAQ',
    Icon: IconChat,
    color: '#95BF47',
    desc: 'FAQ flows on your highest-ticket pages to reduce drop-off',
  },
  {
    name: 'Thales',
    role: 'Analytics → Action',
    Icon: IconChart,
    color: '#9B72CF',
    desc: 'Decision loop so data drives the next move',
  },
];

// Step SVG icons
const IconCalendar = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="20" height="18" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M3 10h20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 3v4M18 3v4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="15" r="1" fill={color}/>
    <circle cx="13" cy="15" r="1" fill={color}/>
    <circle cx="17" cy="15" r="1" fill={color}/>
  </svg>
);
const IconCard = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="7" width="20" height="13" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M3 11h20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 16h4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconClipboard = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="4" width="16" height="19" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M9 4V6a1 1 0 001 1h6a1 1 0 001-1V4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 12h8M9 16h5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconSearch = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.5"/>
    <path d="M16.5 16.5l5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconMap = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5l7 3 6-3 7 3v14l-7-3-6 3-7-3V5z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 8v13M16 5v13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Click "Book for $197"',
    desc: 'You\'ll land on a Calendly booking page \u2014 pick a time that works for you.',
    StepIcon: IconCalendar,
  },
  {
    step: '02',
    title: 'Pay $197 via PayPal',
    desc: 'Payment is collected securely inside Calendly. One-time. No subscription. Your slot is confirmed instantly.',
    StepIcon: IconCard,
  },
  {
    step: '03',
    title: 'Complete your pre-session form',
    desc: 'A 2-minute form appears right after you book. Your store URL, revenue range, and biggest bottleneck. It\'s how I show up to the call already knowing your store \u2014 not learning it on your clock.',
    StepIcon: IconClipboard,
  },
  {
    step: '04',
    title: 'I review your store',
    desc: 'Before we talk, I look at your actual PDPs, policies, and catalog. Your session is specific to your store, not a template.',
    StepIcon: IconSearch,
  },
  {
    step: '05',
    title: 'You get your roadmap',
    desc: '45-minute working session. You leave with a prioritized AI employee plan and a 30-day roadmap doc.',
    StepIcon: IconMap,
  },
];

const WHAT_YOU_GET = [
  'Patrick reviews your actual store before the call — PDPs, catalog, policies, and copy',
  '45-minute working session: live prioritization of all 7 AI employee roles for your specific store',
  'Week-one action plan you can execute immediately',
  '30-day roadmap doc delivered after the call — ready to hand your AI employee on day one',
  '$197. One-time. No ongoing commitment. No retainer pitch.',
];

export default function HireYourAIEmployees() {
  useEffect(() => {
    document.title = 'Hire Your AI Employees — Shopify AI Roadmap Session | Agility AI Pros';
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#0F1117', color: '#F8F9FA' }}>
      {/* Google Font: Inter */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        .hae-btn-primary {
          display: inline-block;
          background: #95BF47;
          color: #0F1117;
          font-weight: 700;
          font-size: 1.1rem;
          padding: 16px 40px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s ease;
          letter-spacing: 0.01em;
        }
        .hae-btn-primary:hover { background: #86ac3f; }
        .hae-section { padding: 80px 0; }
        .hae-container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .hae-label {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #95BF47;
          margin-bottom: 12px;
        }
        .hae-h2 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          line-height: 1.15;
          margin: 0 0 24px;
          color: #F8F9FA;
        }
        .hae-divider {
          width: 48px;
          height: 3px;
          background: #95BF47;
          margin: 0 0 32px;
          border-radius: 2px;
        }
        .hae-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 28px 24px;
        }
        .hae-check { color: #95BF47; font-weight: 700; margin-right: 10px; flex-shrink: 0; }
        .hae-x { color: #ef4444; font-weight: 700; margin-right: 10px; flex-shrink: 0; }
        @media (max-width: 768px) {
          .hae-section { padding: 56px 0; }
          .hae-grid-3 { grid-template-columns: 1fr !important; }
          .hae-grid-2 { grid-template-columns: 1fr !important; }
          .hae-grid-4 { display: grid !important; grid-template-columns: 1fr !important; gap: 12px !important; }
          .hae-hero-grid { grid-template-columns: 1fr !important; }
          .hae-employee-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hae-grid-4 .hae-card { padding: 20px !important; }
          .hae-grid-4 .hae-card > div:first-child { margin-bottom: 6px !important; }
          .hae-step-card { height: auto !important; min-height: 0 !important; }
        }
        @media (max-width: 480px) {
          .hae-grid-4 { grid-template-columns: 1fr !important; }
          .hae-employee-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #0F1117 0%, #1a1d2e 60%, #0F1117 100%)', paddingTop: '40px', paddingBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="hae-container">
          <div className="hae-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            {/* Left */}
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/shopify-logo-green_8e9b6275.png"
                alt="Shopify"
                style={{ width: '40px', height: '40px', objectFit: 'contain', marginBottom: '12px', display: 'block', margin: '0 auto 12px' }}
              />
              <span className="hae-label">Shopify AI Roadmap Session</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 20px', color: '#F8F9FA' }}>
                Install AI Employees in Your{' '}
                <span style={{ color: '#95BF47' }}>Shopify Store</span>
              </h1>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(248,249,250,0.75)', marginBottom: '16px' }}>
                I help Shopify founders hire practical AI employees — <strong style={{ color: '#9B72CF' }}>Athena, Hermes, Themis, Odysseus, Apollo, Iris, and Thales</strong> — that handle copy, catalog, support, and growth without adding headcount.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(248,249,250,0.5)', marginBottom: '36px', fontStyle: 'italic' }}>
                If you read the May 2026 AI Employees guide, this is where you turn the playbook into action.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                <a href={BOOKING_LINK} className="hae-btn-primary">
                  Book for $197
                </a>
                <span style={{ fontSize: '0.875rem', color: 'rgba(248,249,250,0.45)' }}>
                  Prefer DMs?{' '}
                  <a href="https://x.com/patrickdanielal" target="_blank" rel="noopener noreferrer" style={{ color: '#9B72CF', textDecoration: 'underline' }}>
                    Message 'EMPLOYEE' on X
                  </a>
                </span>
              </div>
            </div>

            {/* Right — AI Employee Cards Grid */}
            <div>
              <div className="hae-employee-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {AI_EMPLOYEES.map((emp, i) => (
                  <div
                    key={emp.name}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: `1px solid ${emp.color}33`,
                      borderRadius: '10px',
                      padding: '16px 12px',
                      textAlign: 'center',
                      gridColumn: i === 6 ? '2' : undefined, // center the 7th card
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}><emp.Icon color={emp.color} /></div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: emp.color, marginBottom: '2px' }}>{emp.name}</div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(248,249,250,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{emp.role}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(149,191,71,0.1)', border: '1px solid rgba(149,191,71,0.3)', borderRadius: '20px', padding: '6px 16px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#95BF47', fontWeight: 600 }}>Connected to your Shopify store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT WE COVER ────────────────────────────────────── */}
      <section className="hae-section" style={{ background: '#0F1117' }}>
        <div className="hae-container">
          <span className="hae-label">The System</span>
          <h2 className="hae-h2">What We Map Out in Your Roadmap Session</h2>
          <div className="hae-divider" />
          <div className="hae-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {/* Column 1 */}
            <div className="hae-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ display: 'flex', gap: '4px' }}><IconPen color="#9B72CF" /><IconScale color="#9B72CF" /></span>
                <div>
                  <div style={{ fontWeight: 700, color: '#9B72CF', fontSize: '0.95rem' }}>Athena & Themis</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(248,249,250,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Brand and Trust</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Consistent brand voice across every PDP, email, and collection page',
                  'Brand Operator File built around your products and tone',
                  'Policy-aligned copy so your marketing never contradicts your promises',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', fontSize: '0.9rem', color: 'rgba(248,249,250,0.75)', lineHeight: 1.5 }}>
                    <span className="hae-check">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="hae-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ display: 'flex', gap: '4px' }}><IconBolt color="#95BF47" /><IconCompass color="#95BF47" /></span>
                <div>
                  <div style={{ fontWeight: 700, color: '#95BF47', fontSize: '0.95rem' }}>Hermes & Odysseus</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(248,249,250,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Products and Partners</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Supplier research and product sourcing workflows',
                  'Dealer outreach systems for premium brands',
                  'Application strategy for brands that don\'t openly list online programs',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', fontSize: '0.9rem', color: 'rgba(248,249,250,0.75)', lineHeight: 1.5 }}>
                    <span className="hae-check">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="hae-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ display: 'flex', gap: '4px' }}><IconGrid color="#9B72CF" /><IconChat color="#95BF47" /><IconChart color="#9B72CF" /></span>
                <div>
                  <div style={{ fontWeight: 700, color: '#9B72CF', fontSize: '0.95rem' }}>Apollo, Iris & Thales</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(248,249,250,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Store Performance</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Catalog audit — what to keep, cut, and elevate',
                  'Pre-purchase FAQ flows on your highest-ticket pages',
                  'Analytics-to-action decision loop so data drives the next move',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', fontSize: '0.9rem', color: 'rgba(248,249,250,0.75)', lineHeight: 1.5 }}>
                    <span className="hae-check">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ─────────────────────────────────────── */}
      <section className="hae-section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="hae-container">
          <span className="hae-label">The Process</span>
          <h2 className="hae-h2">How It Works</h2>
          <div className="hae-divider" />
          <div className="hae-grid-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} style={{ position: 'relative', flex: '0 0 calc(20% - 16px)', minWidth: '160px', maxWidth: '220px' }}>
                {/* Connector line */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div style={{ position: 'absolute', top: '28px', left: 'calc(100% - 10px)', width: '20px', height: '2px', background: 'rgba(149,191,71,0.3)', zIndex: 1 }} className="hae-connector" />
                )}
                <div className="hae-card hae-step-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#95BF47', letterSpacing: '0.1em', background: 'rgba(149,191,71,0.12)', padding: '3px 8px', borderRadius: '4px' }}>
                      STEP {step.step}
                    </span>
                  </div>
                  <div style={{ marginBottom: '10px' }}><step.StepIcon color="#95BF47" /></div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: '#F8F9FA', marginBottom: '8px', lineHeight: 1.3 }}>{step.title}</div>
                  <div style={{ fontSize: '0.875rem', color: 'rgba(248,249,250,0.6)', lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHO THIS IS FOR ──────────────────────────────────── */}
      <section className="hae-section" style={{ background: '#0F1117' }}>
        <div className="hae-container">
          <span className="hae-label">Fit Check</span>
          <h2 className="hae-h2">Who This Is For</h2>
          <div className="hae-divider" />
          <div className="hae-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Ideal fit */}
            <div className="hae-card" style={{ borderColor: 'rgba(149,191,71,0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}><circle cx="10" cy="10" r="8" stroke="#95BF47" strokeWidth="1.5"/><path d="M6 10l3 3 5-5" stroke="#95BF47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontWeight: 700, color: '#95BF47', fontSize: '1rem' }}>This is for you if…</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Shopify founders doing $3K–$100K/month who want to grow without hiring',
                  'Stores with inconsistent copy, catalog discipline issues, or untapped pre-purchase conversion',
                  'Founders using AI but getting random, off-brand output with no system behind it',
                  'Anyone who wants premium-brand dealer access or a cleaner supplier strategy',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', fontSize: '0.9rem', color: 'rgba(248,249,250,0.8)', lineHeight: 1.55 }}>
                    <span className="hae-check">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a fit */}
            <div className="hae-card" style={{ borderColor: 'rgba(239,68,68,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}><circle cx="10" cy="10" r="8" stroke="#ef4444" strokeWidth="1.5"/><path d="M7 7l6 6M13 7l-6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <span style={{ fontWeight: 700, color: '#ef4444', fontSize: '1rem' }}>Not a fit if…</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Stores looking for a one-click magic app',
                  'Founders who aren\'t willing to improve their catalog, policies, or copy',
                  'Anyone expecting a generic audit or a template they fill out themselves',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', fontSize: '0.9rem', color: 'rgba(248,249,250,0.6)', lineHeight: 1.55 }}>
                    <span className="hae-x">✕</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHAT YOU GET ─────────────────────────────────────── */}
      <section className="hae-section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="hae-container" style={{ maxWidth: '720px' }}>
          <span className="hae-label">Deliverables</span>
          <h2 className="hae-h2">What's Included for $197</h2>
          <div className="hae-divider" />
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {WHAT_YOU_GET.map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px 20px', background: 'rgba(149,191,71,0.06)', border: '1px solid rgba(149,191,71,0.15)', borderRadius: '8px' }}>
                <span style={{ color: '#95BF47', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0, marginTop: '1px' }}>✓</span>
                <span style={{ fontSize: '0.95rem', color: 'rgba(248,249,250,0.85)', lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ textAlign: 'center' }}>
            <a href={BOOKING_LINK} className="hae-btn-primary" style={{ fontSize: '1.15rem', padding: '18px 48px' }}>
              Book for $197
            </a>
            <p style={{ marginTop: '12px', fontSize: '0.85rem', color: 'rgba(248,249,250,0.4)' }}>
              Payment collected securely via PayPal inside Calendly. Your slot is confirmed the moment you pay.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. ABOUT / CREDIBILITY ──────────────────────────────── */}
      <section className="hae-section" style={{ background: '#0F1117' }}>
        <div className="hae-container" style={{ maxWidth: '760px' }}>
          <span className="hae-label">Who's Behind This</span>
          <h2 className="hae-h2">Built by a Shopify Founder, Not an Agency</h2>
          <div className="hae-divider" />
          <div className="hae-card" style={{ borderColor: 'rgba(155,114,207,0.25)', padding: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, #9B72CF, #95BF47)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.3rem', color: '#0F1117', flexShrink: 0 }}>
                PD
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#F8F9FA' }}>Patrick Daniel</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(248,249,250,0.5)' }}>Founder, Agility AI Pros · Elysian Outdoor Spaces</div>
              </div>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'rgba(248,249,250,0.8)', marginBottom: '20px' }}>
              I built <strong style={{ color: '#95BF47' }}>Elysian Outdoor Spaces</strong> — a premium outdoor living Shopify store — without an agency, VA, or developer. I used AI to source 41 products, write consistent copy across the entire store, secure dealer approvals from brands that normally require a brick-and-mortar showroom, and audit a 50+ SKU catalog down to only what belongs. I help other Shopify founders build the same system.
            </p>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#9B72CF', margin: 0, borderLeft: '3px solid #9B72CF', paddingLeft: '16px' }}>
              "I'm not selling a dashboard. I'm helping you hire and train AI employees that touch real revenue."
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA STRIP ──────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #1a1d2e 0%, #0F1117 100%)', padding: '80px 0', borderTop: '1px solid rgba(149,191,71,0.15)' }}>
        <div className="hae-container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <span className="hae-label">Ready to Start</span>
          <h2 className="hae-h2" style={{ marginBottom: '12px' }}>
            Ready to see what AI employees could do in your Shopify store?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(248,249,250,0.55)', marginBottom: '36px', lineHeight: 1.6 }}>
            One session. One roadmap. Seven AI employees, prioritized for your specific store.
          </p>
          <a href={BOOKING_LINK} className="hae-btn-primary" style={{ fontSize: '1.2rem', padding: '20px 56px' }}>
            Book for $197
          </a>
          <p style={{ marginTop: '14px', fontSize: '0.85rem', color: 'rgba(248,249,250,0.35)' }}>
            Pick your time on Calendly. Pay $197 via PayPal. Confirmed instantly.
          </p>
          <p style={{ marginTop: '8px', fontSize: '0.875rem', color: 'rgba(248,249,250,0.4)' }}>
            Or{' '}
            <a href="https://x.com/patrickdanielal" target="_blank" rel="noopener noreferrer" style={{ color: '#9B72CF', textDecoration: 'underline' }}>
              DM 'EMPLOYEE' on X
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
