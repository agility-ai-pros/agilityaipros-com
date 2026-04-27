import { useEffect } from 'react';
import { Link } from 'wouter';

export default function EmailCampaign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-16 md:py-20" style={{
        background: 'linear-gradient(180deg, #0e1d3a 0%, #142a52 100%)',
        color: 'white'
      }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-40 -top-32 w-96 h-96 rounded-full blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(28,181,184,0.18) 0%, rgba(28,181,184,0) 65%)'
          }} />
        </div>

        <div className="container relative z-10 max-w-5xl mx-auto px-6">
          {/* Breadcrumbs */}
          <div className="text-xs uppercase tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Link href="/case-studies">
              <a className="hover:text-white transition" style={{ color: 'rgba(255,255,255,0.75)' }}>Case Studies</a>
            </Link>
            <span className="mx-2">/</span>
            <span>$30K from a Single Email Campaign</span>
          </div>

          {/* Label */}
          <div className="inline-block text-xs uppercase tracking-widest font-bold mb-4" style={{
            color: '#1cb5b8',
            borderLeft: '3px solid #1cb5b8',
            paddingLeft: '10px'
          }}>
            Case Study
          </div>

          {/* Category Tags */}
          <div className="inline-block text-xs uppercase tracking-widest font-bold px-3 py-2 rounded mb-6" style={{
            background: 'rgba(28,181,184,0.18)',
            color: '#1cb5b8'
          }}>
            Email Campaign · Wellness & Med Spa · List Reactivation
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl">
            <span style={{ color: '#1cb5b8' }}>$30,000</span> from a single email campaign — to a list that had been sitting idle.
          </h1>

          {/* Hero Subtitle */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            A wellness studio had spent years building a 3,071-contact list that had quietly gone quiet. Cold leads, lapsed clients, no reason to come back. We designed and launched a single seasonal campaign — story-driven, scarcity-driven, with a low-friction reply CTA — and filled all 20 available spots at $1,500 each within days.
          </p>

          {/* Client Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-3 rounded-full mb-8" style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.10)',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '14px'
          }}>
            <span className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs" style={{
              background: '#1cb5b8',
              color: '#0e1d3a'
            }}>UC</span>
            <span>Client: <strong>US Cryotherapy</strong> — Walnut Creek, California (recovery & wellness facility)</span>
          </div>

          {/* Meta Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-b" style={{
            borderColor: 'rgba(255,255,255,0.10)',
            paddingTop: '18px',
            paddingBottom: '18px',
            marginTop: '14px'
          }}>
            <div className="pr-6 border-r" style={{ borderColor: 'rgba(255,255,255,0.10)' }}>
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Industry</div>
              <div className="text-sm font-medium">Wellness / Recovery / Med Spa</div>
            </div>
            <div className="px-6 border-r" style={{ borderColor: 'rgba(255,255,255,0.10)' }}>
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Challenge</div>
              <div className="text-sm font-medium">3,071 dormant contacts going unworked</div>
            </div>
            <div className="px-6 border-r" style={{ borderColor: 'rgba(255,255,255,0.10)' }}>
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.55)' }}>AI Role</div>
              <div className="text-sm font-medium">Story-driven copy + scarcity sequencing</div>
            </div>
            <div className="pl-6">
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Result</div>
              <div className="text-sm font-medium">$30K revenue · 20/20 spots booked · zero ad spend</div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-widest font-bold mb-4" style={{
            color: '#1cb5b8',
            borderLeft: '3px solid #1cb5b8',
            paddingLeft: '10px'
          }}>
            The Problem
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0e1d3a' }}>
            A 3,071-contact list, sitting idle.
          </h2>

          <div className="space-y-4 mb-12 max-w-3xl">
            <p className="text-lg leading-relaxed" style={{ color: '#2a3a5e' }}>
              Over years of running ads, hosting events, and serving clients, the studio had quietly built up a database of 3,071 contacts. Some were cold leads who had once expressed interest but never booked. Others were past clients who had stopped showing up months ago. Either way, they were the most expensive leads the studio had ever paid for — and nobody was talking to them.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#2a3a5e' }}>
              The instinct in most service businesses is to chase new leads. New ads. New partnerships. New audiences. Meanwhile the list of people who already <em>know who you are</em> just keeps growing, untouched. Every dormant lead represents real money — but only if someone actually gives them a reason to come back.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-lg border" style={{
              background: 'white',
              borderColor: '#e1e7f0',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)'
            }}>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0e1d3a' }}>3,071</div>
              <div className="text-sm" style={{ color: '#5a6a8a' }}>Contacts in the list — accumulated over years, mostly idle</div>
            </div>
            <div className="p-6 rounded-lg border" style={{
              background: 'white',
              borderColor: '#e1e7f0',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)'
            }}>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0e1d3a' }}>0</div>
              <div className="text-sm" style={{ color: '#5a6a8a' }}>Reactivation campaigns running before this engagement</div>
            </div>
            <div className="p-6 rounded-lg border" style={{
              background: 'white',
              borderColor: '#e1e7f0',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)'
            }}>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0e1d3a' }}>Months</div>
              <div className="text-sm" style={{ color: '#5a6a8a' }}>Since most past clients had been meaningfully contacted</div>
            </div>
            <div className="p-6 rounded-lg border" style={{
              background: 'white',
              borderColor: '#e1e7f0',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)'
            }}>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0e1d3a' }}>Cold</div>
              <div className="text-sm" style={{ color: '#5a6a8a' }}>Default state of every lead in the list — going nowhere fast</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24" style={{ background: '#f7f9fc' }}>
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-widest font-bold mb-4" style={{
            color: '#1cb5b8',
            borderLeft: '3px solid #1cb5b8',
            paddingLeft: '10px'
          }}>
            The Solution
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0e1d3a' }}>
            A seasonal campaign with a story, an offer, and a deadline.
          </h2>

          <div className="space-y-4 mb-12 max-w-3xl">
            <p className="text-lg leading-relaxed" style={{ color: '#2a3a5e' }}>
              We designed a single seasonal campaign around a specific time-limited offer: 10% off a 5-session pack, available until March 24th, with only 20 spots. The window was narrow on purpose. The math was tight on purpose. Everything else — the copy, the cadence, the CTA — was engineered to convert.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#2a3a5e' }}>
              The launch email was built around a relatable character: <strong>Sarah, a 42-year-old who had avoided swimsuits for years.</strong> The copy mirrored the exact emotional state of the audience the campaign was written for — pre-summer, body-conscious, looking for a reason to act. Instead of a calendar booking link, the CTA was deliberately low-friction: <em>reply to this email with your contact number.</em>
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#2a3a5e' }}>
              The first email alone produced 12 replies — more than half the spots gone in a single send. For the remaining 8 spots, we deployed scarcity and deadline emails over the following days. By the time the offer closed, all 20 spots were filled.
            </p>
          </div>

          {/* Campaign Diagram */}
          <div className="p-8 rounded-2xl mt-12" style={{
            background: '#0e1d3a',
            color: 'white'
          }}>
            <div className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: '#1cb5b8' }}>Campaign anatomy</div>
            <h3 className="text-2xl font-bold mb-8">3,071 dormant contacts → 20 booked spots → $30,000 in days</h3>
            
            <svg viewBox="0 0 1040 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <line x1="60" y1="120" x2="980" y2="120" stroke="rgba(28,181,184,0.35)" strokeWidth="2" strokeDasharray="4 6"/>
              <text x="60" y="65" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="DM Sans" fontSize="10" letterSpacing="2">SEGMENT</text>
              <text x="290" y="65" textAnchor="middle" fill="#1cb5b8" fontFamily="DM Sans" fontSize="10" letterSpacing="2" fontWeight="700">LAUNCH</text>
              <text x="520" y="65" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="DM Sans" fontSize="10" letterSpacing="2">REPLIES</text>
              <text x="750" y="65" textAnchor="middle" fill="#1cb5b8" fontFamily="DM Sans" fontSize="10" letterSpacing="2" fontWeight="700">SCARCITY</text>
              <text x="980" y="65" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="DM Sans" fontSize="10" letterSpacing="2">REVENUE</text>
              
              <g transform="translate(60,120)"><circle r="36" fill="#1cb5b8"/><text y="6" textAnchor="middle" fill="#0e1d3a" fontFamily="DM Sans" fontWeight="700" fontSize="13">3,071</text></g>
              <text x="60" y="195" textAnchor="middle" fill="white" fontFamily="DM Sans" fontSize="13" fontWeight="700">Dormant list</text>
              <text x="60" y="215" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans" fontSize="11">Cold leads + past clients</text>
              
              <g transform="translate(290,120)"><circle r="36" fill="#142a52" stroke="#1cb5b8" strokeWidth="2"/><text y="6" textAnchor="middle" fill="#1cb5b8" fontFamily="DM Sans" fontWeight="700" fontSize="13">EMAIL 1</text></g>
              <text x="290" y="195" textAnchor="middle" fill="white" fontFamily="DM Sans" fontSize="13" fontWeight="700">Story-driven launch</text>
              <text x="290" y="215" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans" fontSize="11">"Sarah, age 42" · reply CTA</text>
              
              <g transform="translate(520,120)"><circle r="36" fill="#1cb5b8"/><text y="6" textAnchor="middle" fill="#0e1d3a" fontFamily="DM Sans" fontWeight="700" fontSize="16">12</text></g>
              <text x="520" y="195" textAnchor="middle" fill="white" fontFamily="DM Sans" fontSize="13" fontWeight="700">Inbound replies</text>
              <text x="520" y="215" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans" fontSize="11">Off the very first send</text>
              
              <g transform="translate(750,120)"><circle r="36" fill="#142a52" stroke="#1cb5b8" strokeWidth="2"/><text y="6" textAnchor="middle" fill="#1cb5b8" fontFamily="DM Sans" fontWeight="700" fontSize="13">+8</text></g>
              <text x="750" y="195" textAnchor="middle" fill="white" fontFamily="DM Sans" fontSize="13" fontWeight="700">Scarcity emails</text>
              <text x="750" y="215" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans" fontSize="11">Deadline-driven follow-ups</text>
              
              <g transform="translate(980,120)"><circle r="36" fill="#1cb5b8"/><text y="6" textAnchor="middle" fill="#0e1d3a" fontFamily="DM Sans" fontWeight="700" fontSize="13">$30K</text></g>
              <text x="980" y="195" textAnchor="middle" fill="white" fontFamily="DM Sans" fontSize="13" fontWeight="700">All 20 spots filled</text>
              <text x="980" y="215" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="DM Sans" fontSize="11">$1,500 × 20 = $30,000</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-widest font-bold mb-4" style={{
            color: '#1cb5b8',
            borderLeft: '3px solid #1cb5b8',
            paddingLeft: '10px'
          }}>
            Results
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0e1d3a' }}>
            All 20 spots booked. $30,000 in revenue. Zero ad spend.
          </h2>

          <div className="space-y-4 mb-12 max-w-3xl">
            <p className="text-lg leading-relaxed" style={{ color: '#2a3a5e' }}>
              The campaign hit its cap inside the deadline window. Every spot filled. Cold leads who had been ghosting the studio for months came back. Past clients who hadn't been seen in half a year rebooked at full price. The studio's email list — the same one that had been "doing nothing" the week before — generated $30,000 in revenue from a single well-engineered campaign.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#2a3a5e' }}>
              The unlock wasn't a clever trick. It was timing (pre-summer), a specific concrete goal ("bikini body"), a story that resonated with the actual audience, and a compelling reason to act <em>now</em> rather than later. The list was always there. We just gave it a reason to engage.
            </p>
          </div>

          {/* Results Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="p-6 rounded-lg border" style={{
              background: 'white',
              borderColor: '#e1e7f0',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)'
            }}>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0e1d3a' }}>
                $30<span style={{ color: '#1cb5b8' }}>K</span>
              </div>
              <div className="text-sm" style={{ color: '#5a6a8a' }}>Revenue generated from a single email campaign</div>
            </div>
            <div className="p-6 rounded-lg border" style={{
              background: 'white',
              borderColor: '#e1e7f0',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)'
            }}>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0e1d3a' }}>
                20<span style={{ color: '#1cb5b8' }}>/20</span>
              </div>
              <div className="text-sm" style={{ color: '#5a6a8a' }}>Spots booked — campaign hit its cap inside the deadline window</div>
            </div>
            <div className="p-6 rounded-lg border" style={{
              background: 'white',
              borderColor: '#e1e7f0',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)'
            }}>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0e1d3a' }}>$1,500</div>
              <div className="text-sm" style={{ color: '#5a6a8a' }}>Per-spot pricing — premium 5-session pack, full price after the 10% promo</div>
            </div>
            <div className="p-6 rounded-lg border" style={{
              background: 'white',
              borderColor: '#e1e7f0',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)'
            }}>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0e1d3a' }}>$0</div>
              <div className="text-sm" style={{ color: '#5a6a8a' }}>Ad spend required — every conversion came from the existing list</div>
            </div>
          </div>

          {/* Funnel Diagram */}
          <div className="p-8 rounded-2xl border" style={{
            background: 'white',
            borderColor: '#e1e7f0'
          }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <div className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: '#5a6a8a' }}>Campaign Funnel</div>
                <div className="text-2xl font-bold" style={{ color: '#0e1d3a' }}>From dormant list to filled cap</div>
              </div>
              <div className="text-sm mt-4 md:mt-0" style={{ color: '#5a6a8a' }}>Single campaign · single send + 2 follow-ups</div>
            </div>

            <svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <rect x="60" y="40" width="680" height="40" fill="#94a3b8" rx="6"/>
              <text x="400" y="65" textAnchor="middle" fill="#ffffff" fontFamily="DM Sans" fontSize="14" fontWeight="700">3,071 dormant contacts</text>
              <text x="60" y="33" fill="#5a6a8a" fontFamily="DM Sans" fontSize="11" letterSpacing="1">STAGE 1 · LIST</text>
              
              <line x1="400" y1="86" x2="400" y2="104" stroke="#1cb5b8" strokeWidth="2"/>
              <polygon points="400,108 395,98 405,98" fill="#1cb5b8"/>
              
              <rect x="200" y="115" width="400" height="40" fill="#5a6a8a" rx="6"/>
              <text x="400" y="140" textAnchor="middle" fill="#ffffff" fontFamily="DM Sans" fontSize="14" fontWeight="700">20 inbound replies (12 launch + 8 scarcity)</text>
              <text x="200" y="108" fill="#5a6a8a" fontFamily="DM Sans" fontSize="11" letterSpacing="1">STAGE 2 · ENGAGEMENT</text>
              
              <line x1="400" y1="161" x2="400" y2="179" stroke="#1cb5b8" strokeWidth="2"/>
              <polygon points="400,183 395,173 405,173" fill="#1cb5b8"/>
              
              <rect x="290" y="190" width="220" height="40" fill="#1cb5b8" rx="6"/>
              <text x="400" y="215" textAnchor="middle" fill="#0e1d3a" fontFamily="DM Sans" fontSize="16" fontWeight="700">$30,000 booked</text>
              <text x="290" y="183" fill="#1cb5b8" fontFamily="DM Sans" fontSize="11" letterSpacing="1" fontWeight="700">STAGE 3 · REVENUE</text>
            </svg>
          </div>

          {/* Before/After */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 rounded-2xl" style={{
              background: '#fdf4f3',
              border: '1px solid #f3d6d3'
            }}>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6" style={{ color: '#b3403a' }}>Before</h3>
              <ul className="space-y-3">
                {[
                  '3,071 contacts sitting idle in the database',
                  'No reactivation strategy for cold leads or lapsed clients',
                  'Past clients lapsing without re-engagement',
                  'List value treated as zero in the studio\'s revenue plan',
                  'No seasonal campaign cadence in place',
                  'Default growth motion: spend more on new ads'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm" style={{ color: '#2a3a5e' }}>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs" style={{
                      background: '#fad7d4',
                      color: '#b3403a'
                    }}>×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl" style={{
              background: '#ecfaf6',
              border: '1px solid #c8ecdf'
            }}>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6" style={{ color: '#16704f' }}>After</h3>
              <ul className="space-y-3">
                {[
                  '3,071-contact list activated by a single strategic send',
                  '20/20 spots booked at $1,500 each within the deadline window',
                  '$30,000 in revenue from existing list — no new ad spend',
                  'Story-driven copy framework now reusable for future campaigns',
                  'Low-friction reply CTA proven to outperform calendar-link CTAs',
                  'Scarcity + deadline sequences proven to fill remaining spots'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm" style={{ color: '#2a3a5e' }}>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs" style={{
                      background: '#c8ecdf',
                      color: '#16704f'
                    }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Client Quote */}
          <div className="mt-12 p-8 rounded-r-2xl" style={{
            background: 'linear-gradient(90deg, rgba(28,181,184,0.08) 0%, rgba(28,181,184,0) 80%)',
            borderLeft: '4px solid #1cb5b8'
          }}>
            <p className="text-xl italic mb-4" style={{ color: '#0e1d3a' }}>
              "'Bikini Season is Around the Corner' campaign filled up all our spots within days. We hadn't seen that kind of response from our list before."
            </p>
            <div className="text-sm" style={{ color: '#5a6a8a' }}>— Tim, Owner · US Cryotherapy, Walnut Creek</div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 md:py-24" style={{ background: '#f7f9fc' }}>
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-widest font-bold mb-4" style={{
            color: '#1cb5b8',
            borderLeft: '3px solid #1cb5b8',
            paddingLeft: '10px'
          }}>
            Why this matters
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#0e1d3a' }}>
            Your customer list is worth more than you think.
          </h2>

          <div className="p-8 rounded-r-2xl border-l-4" style={{
            background: 'white',
            borderColor: '#1cb5b8',
            borderLeftWidth: '4px'
          }}>
            <div className="space-y-6">
              <p className="text-base leading-relaxed" style={{ color: '#2a3a5e' }}>
                Almost every appointment-driven service business — med spas, cosmetic practices, dental offices, recovery studios, fitness studios, IV bars, salons — has been accumulating contacts for years. Old leads. Past clients. Walk-ins who left an email. None of them are doing anything until someone gives them a reason to.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#2a3a5e' }}>
                The default move when revenue is soft is to buy more leads. New ads, new audiences, new partnerships. That's the most expensive lift in the building. The cheapest one is sitting in a database the team has been ignoring — a database the business has already paid to build.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#2a3a5e' }}>
                The pattern that worked here is reusable: pick a moment with real emotional weight (pre-summer, holiday season, end-of-year), wrap it in a specific time-limited offer, write copy that meets the audience where they actually are, and use a low-friction CTA that doesn't ask people to commit before they've raised their hand. Most practices have at least one $30K send sitting unsent in their list right now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Built */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-widest font-bold mb-4" style={{
            color: '#1cb5b8',
            borderLeft: '3px solid #1cb5b8',
            paddingLeft: '10px'
          }}>
            What we built
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0e1d3a' }}>
            Core capabilities delivered.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Dormant list activation strategy',
                desc: 'Audited the existing 3,071-contact database, segmented by relationship state (cold leads vs. lapsed clients), and identified the most reactivatable cohort.'
              },
              {
                num: '02',
                title: 'Story-driven copy framework',
                desc: 'Built the launch email around a specific relatable character ("Sarah, age 42") that mirrored the audience\'s actual emotional state — instead of generic promotional copy.'
              },
              {
                num: '03',
                title: 'Low-friction reply CTA',
                desc: 'Replaced the typical calendar-link CTA with a direct "reply with your phone number" ask — proven here to convert dramatically better for a price-sensitive offer.'
              },
              {
                num: '04',
                title: 'Time-limited offer architecture',
                desc: 'Tight cap (20 spots), tight deadline (March 24th), specific discount mechanic (10% off a 5-session pack) — every constraint engineered to drive immediate action.'
              },
              {
                num: '05',
                title: 'Scarcity & deadline sequences',
                desc: 'Two follow-up emails deployed after the launch — surfacing remaining-spot counts and the closing deadline — to fill the final 8 spots before the offer expired.'
              },
              {
                num: '06',
                title: 'Reactivation cadence playbook',
                desc: 'The campaign isn\'t a one-off. We left the studio with a reusable seasonal-campaign template they can run quarterly with different anchors (holiday, end-of-summer, post-holiday recovery, etc.).'
              }
            ].map((cap, idx) => (
              <div key={idx} className="p-6 rounded-lg border" style={{
                background: 'white',
                borderColor: '#e1e7f0'
              }}>
                <div className="text-xs uppercase tracking-widest font-bold mb-3" style={{ color: '#1cb5b8' }}>{cap.num}</div>
                <h4 className="text-lg font-bold mb-3" style={{ color: '#0e1d3a' }}>{cap.title}</h4>
                <p className="text-sm" style={{ color: '#5a6a8a' }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center text-white" style={{
        background: 'linear-gradient(180deg, #142a52 0%, #0e1d3a 100%)'
      }}>
        <div className="container max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sitting on a list you haven't worked? <span style={{ color: '#1cb5b8' }}>That's revenue waiting.</span>
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            In a 90-minute working session, we'll audit the dormant list you've been ignoring, identify the highest-leverage seasonal campaign for your practice, and lay out a reactivation cadence you can run for years. We'll guarantee at least 17 hours/week of recoverable time across your team. Or it's on us.
          </p>
          <a href="https://agilityaipros.com/book" className="inline-block px-8 py-4 rounded-lg font-bold text-base transition-all hover:shadow-lg hover:-translate-y-0.5" style={{
            background: '#1cb5b8',
            color: '#0e1d3a'
          }}>
            Book Your AI Roadmap Session — $997
          </a>
          <div className="text-sm mt-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            17-hour time-savings guarantee · 90 minutes · Strategy-first, not a sales call
          </div>
        </div>
      </section>
    </div>
  );
}
