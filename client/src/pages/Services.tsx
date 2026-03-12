import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
  const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20an%20AI%20Audit.';

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Two Flagship Services</h1>
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
                  Using my proprietary AI analysis process, I map your workflows against what's actually working in your vertical right now. The output is a clean, one-page AI Action Report — no jargon, no fluff. Just what's broken, what to fix first, and what it's worth to you.
                </p>
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  Then we get back on a 30-minute walkthrough call and I hand it to you with a clear implementation sequence.
                </p>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-bold" style={{color: '#1B3A6B'}}>$997</span>
              </div>
              <a
                href="/#contact"
                className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg mb-3"
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

      {/* Service 2: Manus AI Tutorial */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left Column */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.1)', color: '#0D9488'}}>
                Flagship Service #2
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{color: '#1B3A6B'}}>
                Manus AI Tutorial
              </h2>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#0D9488'}}>
                After One Session with Me, You Won't Need Me Again.
              </h3>
              <div className="space-y-5 mb-8">
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  That's the offer. I'll show you how to use Manus AI to build websites, generate professional AI images, run automations, and grow your business — live, in one session. Most clients walk away and never look back. A few hire me to do it for them. Either way, you win.
                </p>
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  We work on a real project you actually need — not a demo, not a sandbox exercise. By the end of the session, you'll have something live and you'll know exactly how to keep building.
                </p>
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  This isn't a course. It's a working session with someone who builds with these tools every day. You bring the idea. I bring the knowledge. We build it together.
                </p>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-bold" style={{color: '#1B3A6B'}}>Starts at $997</span>
              </div>
              <a
                href="/#contact"
                className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg mb-3"
                style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
              >
                Book a Manus AI Tutorial
              </a>
              <p style={{color: '#6b7280', fontSize: '0.95rem'}}>
                Pricing varies based on project scope and session length.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <div className="p-8 rounded-2xl" style={{backgroundColor: '#f9fafb', border: '2px solid #0D9488'}}>
                <h3 className="text-2xl font-bold mb-6" style={{color: '#1f2937'}}>What You'll Walk Away With</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'A live project built during our session — something you actually need',
                    'Hands-on Manus AI skills you can use immediately',
                    'The ability to build websites, automations, and AI tools yourself',
                    'A clear roadmap for what to build next',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span style={{color: '#0D9488', fontWeight: 'bold', marginTop: '2px'}}>✓</span>
                      <span style={{color: '#4b5563'}}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6" style={{borderTop: '2px solid #e5e7eb'}}>
                  <p className="text-lg font-bold" style={{color: '#1f2937'}}>Who This Is For</p>
                  <p className="mt-2" style={{color: '#4b5563'}}>
                    Business owners, founders, and entrepreneurs who want to build with AI — not just read about it.
                  </p>
                </div>
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
