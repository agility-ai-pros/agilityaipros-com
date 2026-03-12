import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

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
          <div className="grid grid-cols-1 gap-6">
            <div className="border-2 border-teal rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-dark-text mb-2">AI Audit</h3>
                  <p className="text-gray-600">45-min discovery + custom AI Action Report + 30-min walkthrough. Guaranteed 5+ hours/week savings.</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-teal">$497</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier 1: Copy & Research */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-text mb-8">Tier 1: Copy & Research</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border-gray">
                  <th className="text-left py-4 px-4 font-bold text-dark-text">Service</th>
                  <th className="text-left py-4 px-4 font-bold text-dark-text whitespace-nowrap">Price</th>
                  <th className="text-left py-4 px-4 font-bold text-dark-text">What You Get</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: 'Market Research Sprint', price: '$250–$350', details: 'Competitor landscape, positioning gaps & audience intel — 48 hrs' },
                  { service: 'Homepage Copy Rewrite', price: '$250', details: 'Hero section, above-the-fold, and CTA — AI-drafted, human-polished' },
                  { service: 'Email Sequence (3 emails)', price: '$250', details: 'Welcome or nurture sequence ready to load into your ESP' },
                  { service: 'Pitch Deck Copy', price: '$350–$500', details: 'Slide-by-slide narrative for a 10–12 slide investor or sales deck' },
                  { service: 'Landing Page Copy', price: '$350', details: 'Full landing page: headline, body, proof, CTA sections' },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-border-gray hover:bg-light-gray transition-colors">
                    <td className="py-4 px-4 font-semibold text-dark-text">{item.service}</td>
                    <td className="py-4 px-4 text-teal font-bold whitespace-nowrap">{item.price}</td>
                    <td className="py-4 px-4 text-gray-600">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tier 2: Manus AI */}
      <section className="section-padding navy-section">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-2">Tier 2: Manus AI — The One-Session Offer</h2>
          <p className="text-white/80 mb-8">After one session, you won't need me. That's the point.</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-white/20">
                  <th className="text-left py-4 px-4 font-bold text-white">Package</th>
                  <th className="text-left py-4 px-4 font-bold text-white whitespace-nowrap">Price</th>
                  <th className="text-left py-4 px-4 font-bold text-white">What's Included</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { package: 'Manus AI Intro Session', price: '$250', details: '90-min live walkthrough — your first use case built together' },
                  { package: 'Manus AI + Website Build', price: '$497–$797', details: 'Session + I build your first Manus AI site (1–3 days)' },
                  { package: 'Affiliate Site Build', price: '$797–$1,200', details: 'Full Manus AI site with affiliate marketing infrastructure' },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">{item.package}</td>
                    <td className="py-4 px-4 text-teal font-bold whitespace-nowrap">{item.price}</td>
                    <td className="py-4 px-4 text-white/80">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border-gray">
                  <th className="text-left py-4 px-4 font-bold text-dark-text">Service</th>
                  <th className="text-left py-4 px-4 font-bold text-dark-text whitespace-nowrap">Price</th>
                  <th className="text-left py-4 px-4 font-bold text-dark-text">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: 'Simple Landing Page', price: '$497', details: '1-page site, copy included, fully launched' },
                  { service: 'Multi-page Website', price: '$997–$1,500', details: '3–5 pages, copy + build' },
                  { service: 'Affiliate Feature Add-on', price: '$400–$600', details: 'Add affiliate infrastructure to an existing site' },
                  { service: 'Custom Automation', price: '$500+', details: 'Specific workflow or integration, built to your specs' },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-border-gray hover:bg-light-gray transition-colors">
                    <td className="py-4 px-4 font-semibold text-dark-text">{item.service}</td>
                    <td className="py-4 px-4 text-teal font-bold whitespace-nowrap">{item.price}</td>
                    <td className="py-4 px-4 text-gray-600">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tier 4: Multi-LLM Research */}
      <section className="section-padding gray-section">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-text mb-8">Tier 4: Multi-LLM Deep Research Intelligence</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border-gray">
                  <th className="text-left py-4 px-4 font-bold text-dark-text">Package</th>
                  <th className="text-left py-4 px-4 font-bold text-dark-text whitespace-nowrap">Price</th>
                  <th className="text-left py-4 px-4 font-bold text-dark-text">Deliverable</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { package: 'Research Sprint', price: '$350–$500', details: 'One question, 3–4 LLMs, synthesis report — 48–72 hrs' },
                  { package: 'New Business Launch Validation', price: '$750–$1,200', details: 'Full market + viability analysis, decision brief + risk flags' },
                  { package: 'Competitive Intelligence Report', price: '$500–$800', details: 'Your product vs. the market, moat analysis included' },
                  { package: 'Investor-Ready Research Package', price: '$1,200–$2,000', details: 'Multi-LLM verified market data for pitch decks and due diligence' },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-border-gray hover:bg-white/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-dark-text">{item.package}</td>
                    <td className="py-4 px-4 text-teal font-bold whitespace-nowrap">{item.price}</td>
                    <td className="py-4 px-4 text-gray-600">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
