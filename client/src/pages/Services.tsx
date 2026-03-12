import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20discuss%20services.';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Yellow Banner - AI Audit */}
      <div className="w-full py-4 md:py-6" style={{backgroundColor: '#FFD700'}}>
        <div className="px-4 md:px-8 flex items-center justify-center md:justify-start">
          <div className="text-white font-bold text-2xl md:text-3xl" style={{textShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>
            AI Audit
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-section navy-section text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Services & Pricing</h1>
          <p className="text-white/90 text-lg">Fast, focused, and built to deliver results. Minimum engagement: $250.</p>
        </div>
      </section>

      {/* AI Audit - Featured First */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mb-12 pb-8 border-b-2 border-gray-200">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">5 Hours Back. Weekly. Guaranteed.</h2>
            <p className="text-xl text-gray-600 max-w-2xl">45-min discovery call + custom AI Action Report delivered within 48 hours + 30-min walkthrough call with prioritized recommendations.</p>
          </div>
          <h2 className="text-3xl font-bold text-dark-text mb-8">AI Audit — Start Here</h2>
          <div className="max-w-2xl">
            <div className="border-2 border-teal rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-dark-text mb-3">AI Audit</h3>
              <p className="text-gray-600 text-lg mb-6">45-min discovery + custom AI Action Report + 30-min walkthrough. Guaranteed 5+ hours/week savings.</p>
              <p className="text-5xl font-bold text-teal">$497</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tier 1: Copy & Research */}
      <section className="section-padding bg-white pt-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-text mb-8">Tier 1: Copy & Research</h2>
          <div className="max-w-4xl">
            {[
              { service: 'Market Research Sprint', price: '$250–$350', details: 'Competitor landscape, positioning gaps & audience intel — 48 hrs' },
              { service: 'Homepage Copy Rewrite', price: '$250', details: 'Hero section, above-the-fold, and CTA — AI-drafted, human-polished' },
              { service: 'Email Sequence (3 emails)', price: '$250', details: 'Welcome or nurture sequence ready to load into your ESP' },
              { service: 'Pitch Deck Copy', price: '$350–$500', details: 'Slide-by-slide narrative for a 10–12 slide investor or sales deck' },
              { service: 'Landing Page Copy', price: '$350', details: 'Full landing page: headline, body, proof, CTA sections' },
            ].map((item, idx) => (
              <div key={idx} className="pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-center gap-4 mb-3">
                  <h3 className="text-lg font-bold text-dark-text">{item.service}</h3>
                  <p className="text-xl font-bold text-teal flex-shrink-0">{item.price}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 2: Manus AI */}
      <section className="section-padding navy-section">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-2">Tier 2: Manus AI — The One-Session Offer</h2>
          <p className="text-white/80 mb-8">After one session, you won't need me. That's the point.</p>
          <div className="max-w-4xl mb-8">
            {[
              { package: 'Manus AI Intro Session', price: '$250', details: '90-min live walkthrough — your first use case built together' },
              { package: 'Manus AI + Website Build', price: '$497–$797', details: 'Session + I build your first Manus AI site (1–3 days)' },
              { package: 'Affiliate Site Build', price: '$797–$1,200', details: 'Full Manus AI site with affiliate marketing infrastructure' },
            ].map((item, idx) => (
              <div key={idx} className="pb-6 border-b border-white/20 last:border-b-0">
                <div className="flex justify-between items-center gap-4 mb-3">
                  <h3 className="text-lg font-bold text-white">{item.package}</h3>
                  <p className="text-xl font-bold text-teal flex-shrink-0">{item.price}</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-lg p-6 border border-white/20 max-w-4xl">
            <p className="text-white">
              <span className="font-semibold">Bonus:</span> I also teach image generation inside Manus AI — you'll leave knowing how to create professional brand visuals without a designer.
            </p>
          </div>
        </div>
      </section>

      {/* Tier 3: Website & Vibe Coding */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-text mb-8">Tier 3: Website & Vibe Coding</h2>
          <div className="max-w-4xl">
            {[
              { service: 'Simple Landing Page', price: '$497', details: '1-page site, copy included, fully launched' },
              { service: 'Multi-page Website', price: '$997–$1,500', details: '3–5 pages, copy + build' },
              { service: 'Affiliate Feature Add-on', price: '$400–$600', details: 'Add affiliate infrastructure to an existing site' },
              { service: 'Custom Automation', price: '$500+', details: 'Specific workflow or integration, built to your specs' },
            ].map((item, idx) => (
              <div key={idx} className="pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-center gap-4 mb-3">
                  <h3 className="text-lg font-bold text-dark-text">{item.service}</h3>
                  <p className="text-xl font-bold text-teal flex-shrink-0">{item.price}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 4: Multi-LLM Research */}
      <section className="section-padding gray-section">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-text mb-8">Tier 4: Multi-LLM Deep Research Intelligence</h2>
          <div className="max-w-4xl">
            {[
              { package: 'Research Sprint', price: '$350–$500', details: 'One question, 3–4 LLMs, synthesis report — 48–72 hrs' },
              { package: 'New Business Launch Validation', price: '$750–$1,200', details: 'Full market + viability analysis, decision brief + risk flags' },
              { package: 'Competitive Intelligence Report', price: '$500–$800', details: 'Your product vs. the market, moat analysis included' },
              { package: 'Investor-Ready Research Package', price: '$1,200–$2,000', details: 'Multi-LLM verified market data for pitch decks and due diligence' },
            ].map((item, idx) => (
              <div key={idx} className="pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-lg font-bold text-dark-text">{item.package}</h3>
                  <p className="text-xl font-bold text-teal flex-shrink-0">{item.price}</p>
                </div>
                <p className="text-dark-text text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding navy-section text-center">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which service you need?</h2>
          <p className="text-white/90 text-lg mb-8">
            Connect on WhatsApp and we'll figure it out together.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-block"
          >
            Connect on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
