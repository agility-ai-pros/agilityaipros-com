import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Yellow Banner */}
      <div className="w-full py-4 md:py-6" style={{backgroundColor: '#FFD700'}}>
        <div className="px-4 md:px-8 flex items-center justify-center md:justify-end">
          <div className="text-white font-bold text-xl md:text-3xl lg:text-5xl text-center md:text-right" style={{textShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>
            AI Audit — $997
          </div>
        </div>
      </div>

      {/* Services Hero */}
      <section className="navy-section text-center py-12 md:py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Three Flagship Services</h1>
          <p className="text-white/90 text-xl max-w-2xl mx-auto">
            Fast, focused, and built to deliver real results for your business.
          </p>
        </div>
      </section>

      {/* Service 1: AI Audit */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left Column */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.1)', color: '#0D9488'}}>
                Flagship Service #1
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{color: '#1B3A6B'}}>
                AI Audit
              </h2>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#0D9488'}}>
                5 Hours Back. Per Week. Guaranteed.
              </h3>
              <div className="space-y-5 mb-8">
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  Most South Florida businesses are either ignoring AI or using it wrong. Either way, they're losing 5–10 hours a week.
                </p>
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  We start with a 45-minute discovery call. You walk me through how your business operates — the tools, the bottlenecks, the tasks your team runs on autopilot. I take it from there.
                </p>
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  Using Claude and Manus in combination, I map your workflows against what's actually working in your vertical right now. The output is a clean, one-page AI Action Report — no jargon, no fluff. Just what's broken, what to fix first, and what it's worth to you.
                </p>
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  Then we get back on a 30-minute walkthrough call and I hand it to you with a clear implementation sequence.
                </p>
              </div>
              <div className="mb-2">
                <span className="text-5xl font-bold" style={{color: '#1B3A6B'}}>$997</span>
              </div>
              <a
                href="/#contact"
                className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg mb-3 mt-4"
                style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
              >
                Book Your AI Audit — $997
              </a>
              <p style={{color: '#6b7280', fontSize: '0.95rem'}}>
                Most clients identify $2,000–$5,000/month in recoverable time in the first session.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <div className="p-8 rounded-2xl" style={{backgroundColor: '#f9fafb', border: '2px solid #0D9488'}}>
                <h3 className="text-2xl font-bold mb-6" style={{color: '#1f2937'}}>What's Included</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    '45-min discovery call',
                    'Custom AI Action Report delivered within 48 hours',
                    '30-min walkthrough call with prioritized recommendations',
                    'Clear implementation sequence — what to do first, second, and third',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span style={{color: '#0D9488', fontWeight: 'bold', marginTop: '2px'}}>✓</span>
                      <span style={{color: '#4b5563'}}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6" style={{borderTop: '2px solid #e5e7eb'}}>
                  <p className="text-lg font-bold" style={{color: '#1f2937'}}>Our Guarantee</p>
                  <p className="mt-2" style={{color: '#0D9488', fontWeight: '600'}}>
                    Identify 5+ hours of weekly time savings or full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full" style={{height: '2px', backgroundColor: '#e5e7eb'}} />

      {/* Service 2: Claude Business Setup */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left Column */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.1)', color: '#0D9488'}}>
                Flagship Service #2
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{color: '#1B3A6B'}}>
                Claude Business Setup
              </h2>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#0D9488'}}>
                Your Team on AI. In One Week.
              </h3>
              <div className="space-y-5 mb-8">
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  ChatGPT is a chatbot. Claude is a business operating system.
                </p>
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  Most of your competitors are using AI wrong — personal accounts, no shared context, starting from scratch every conversation. I set up your team on Claude's full ecosystem so AI actually knows your business, your processes, and your standards.
                </p>
              </div>
              <div className="mb-2">
                <span className="text-5xl font-bold" style={{color: '#1B3A6B'}}>Starting at $2,000</span>
              </div>
              <a
                href="/#contact"
                className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg mb-3 mt-4"
                style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
              >
                Book a Claude Setup Call
              </a>
              <p style={{color: '#6b7280', fontSize: '0.95rem'}}>
                Every package includes migration from your existing AI tools. Your team is productive on day one.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <div className="p-8 rounded-2xl" style={{backgroundColor: '#f9fafb', border: '2px solid #0D9488'}}>
                <h3 className="text-2xl font-bold mb-6" style={{color: '#1f2937'}}>What You Get</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Claude Projects configured for your business — loaded with your SOPs, templates, brand guidelines, and institutional knowledge',
                    'Claude Cowork connected to your files — so you can hand off real tasks (reports, data processing, document creation) and get finished work back',
                    'Custom instructions and skills tailored to your specific workflows — not generic prompts, but your actual processes turned into repeatable AI actions',
                    'Migration from ChatGPT, Gemini, or any other AI tool — Claude\'s memory import makes the switch painless',
                    'Onboarding session — you and your team walk away knowing exactly how to use the system',
                    '30-day support window to fine-tune as you start using it',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span style={{color: '#0D9488', fontWeight: 'bold', marginTop: '2px'}}>✓</span>
                      <span style={{color: '#4b5563'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Table */}
              <div className="mt-8 overflow-x-auto">
                <table className="w-full text-left border-collapse rounded-2xl overflow-hidden" style={{border: '1px solid #e5e7eb'}}>
                  <thead>
                    <tr style={{backgroundColor: '#1B3A6B'}}>
                      <th className="p-4 text-white font-bold text-sm"></th>
                      <th className="p-4 text-white font-bold text-sm">Starter</th>
                      <th className="p-4 text-white font-bold text-sm">Growth</th>
                      <th className="p-4 text-white font-bold text-sm">Full Build</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{backgroundColor: '#f9fafb'}}>
                      <td className="p-4 font-bold text-sm" style={{color: '#1f2937'}}>Best for</td>
                      <td className="p-4 text-sm" style={{color: '#4b5563'}}>Solo operators & 2–3 person teams</td>
                      <td className="p-4 text-sm" style={{color: '#4b5563'}}>Teams of 4–10</td>
                      <td className="p-4 text-sm" style={{color: '#4b5563'}}>Departments & multi-location</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-bold text-sm" style={{color: '#1f2937'}}>Includes</td>
                      <td className="p-4 text-sm" style={{color: '#4b5563'}}>1 Claude Project, Cowork setup, onboarding call, 30-day support</td>
                      <td className="p-4 text-sm" style={{color: '#4b5563'}}>Up to 3 Projects, team onboarding, custom skills, 30-day support</td>
                      <td className="p-4 text-sm" style={{color: '#4b5563'}}>Unlimited Projects, full workflow mapping, custom integrations, 60-day support</td>
                    </tr>
                    <tr style={{backgroundColor: '#f9fafb'}}>
                      <td className="p-4 font-bold text-sm" style={{color: '#1f2937'}}>Price</td>
                      <td className="p-4 font-bold text-lg" style={{color: '#0D9488'}}>$2,000</td>
                      <td className="p-4 font-bold text-lg" style={{color: '#0D9488'}}>$3,500</td>
                      <td className="p-4 font-bold text-lg" style={{color: '#0D9488'}}>$5,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full" style={{height: '2px', backgroundColor: '#e5e7eb'}} />

      {/* Service 3: Manus AI Builds & Training */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left Column */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.1)', color: '#0D9488'}}>
                Flagship Service #3
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{color: '#1B3A6B'}}>
                Manus AI Builds & Training
              </h2>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#0D9488'}}>
                After One Session, You Won't Need Me Again. Or Hire Me to Build It For You.
              </h3>
              <div className="space-y-5 mb-8">
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  Manus AI is the most powerful autonomous agent available — and it's about to be everywhere now that Meta owns it. I'll either build what you need with Manus, or teach you how to build it yourself. Either way, you win.
                </p>
              </div>
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-bold" style={{color: '#1B3A6B'}}>Builds start at $2,500</span>
                <span className="mx-3 text-2xl" style={{color: '#e5e7eb'}}>|</span>
                <span className="text-3xl md:text-4xl font-bold" style={{color: '#1B3A6B'}}>Training starts at $997</span>
              </div>
              <a
                href="/#contact"
                className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg mb-3 mt-4"
                style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
              >
                Book a Manus Session
              </a>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl" style={{backgroundColor: '#f9fafb', border: '2px solid #0D9488'}}>
                <h3 className="text-2xl font-bold mb-6" style={{color: '#1f2937'}}>What I Build with Manus</h3>
                <ul className="space-y-4">
                  {[
                    'Full websites launched in days, not months — including landing pages, affiliate sites, and client-facing platforms',
                    'Automated research workflows — competitor analysis, market reports, and due diligence briefs that run on autopilot',
                    'Professional AI-generated brand images, slide decks, and marketing assets',
                    'Background automation for tasks your team does manually today',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span style={{color: '#0D9488', fontWeight: 'bold', marginTop: '2px'}}>✓</span>
                      <span style={{color: '#4b5563'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl" style={{backgroundColor: '#f9fafb', border: '2px solid #1B3A6B'}}>
                <h3 className="text-2xl font-bold mb-6" style={{color: '#1f2937'}}>What You Learn in a Training Session</h3>
                <ul className="space-y-4">
                  {[
                    'How to build your own sites, apps, and automations with Manus',
                    'Hands-on work on a real project you actually need — not a demo',
                    'AI image generation for your brand',
                    'A clear roadmap for what to build next',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span style={{color: '#0D9488', fontWeight: 'bold', marginTop: '2px'}}>✓</span>
                      <span style={{color: '#4b5563'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding navy-section text-center">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which service is right for you?</h2>
          <p className="text-white/90 text-lg mb-8">
            Fill out the form and we'll figure it out together.
          </p>
          <a
            href="/#contact"
            className="cta-primary inline-block"
          >
            Let's Talk
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
