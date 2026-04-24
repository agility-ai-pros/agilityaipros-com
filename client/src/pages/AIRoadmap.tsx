export default function AIRoadmap() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 px-4 md:px-8" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Roadmap Session</h1>
          <p className="text-xl md:text-2xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Identify your highest-value AI opportunities in one strategic session
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: '#1B3A6B' }}>
                17 Hours Back. Per Week. <span style={{ color: '#0D9488' }}>Guaranteed.</span>
              </h2>
              <p className="text-xl font-semibold mb-8" style={{ color: '#0D9488' }}>
                I'll Show You Exactly Where AI Can Save Your Business Time and Money
              </p>
              <div className="space-y-6 mb-8" style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
                <p>
                  Most South Florida businesses are either ignoring AI or using it wrong. Either way, they're losing 5–10 hours a week.
                </p>
                <p>
                  We start with a 45-minute discovery call. You walk me through how your business operates — the tools, the bottlenecks, the tasks your team runs on autopilot. I take it from there.
                </p>
                <p>
                  Using my proprietary AI analysis process, I map your workflows against what's actually working in your vertical right now. The output is a clean, one-to-three page AI Action Report — no jargon, no fluff. Just what's broken, what to fix first, and what it's worth to you.
                </p>
                <p>
                  Then we get back on a 30-minute walkthrough call and I hand it to you with a clear implementation sequence.
                </p>
              </div>
              <a
                href="https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20an%20AI%20Roadmap%20Session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg mb-4"
                style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
              >
                Book Your AI Roadmap Session — $997
              </a>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                Most clients identify $2,000–$5,000/month in recoverable time in the first session.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <div className="p-8 rounded-2xl" style={{ backgroundColor: '#f9fafb', border: '2px solid #0D9488' }}>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1f2937' }}>What's Included</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    '45-min discovery call',
                    'Custom AI Action Report delivered within 48 hours',
                    '30-min walkthrough call with prioritized recommendations',
                    'Clear implementation sequence — what to do first, second, and third',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span style={{ color: '#0D9488', fontWeight: 'bold', marginTop: '2px' }}>✓</span>
                      <span style={{ color: '#4b5563' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8" style={{ borderTop: '2px solid #e5e7eb' }}>
                  <p className="text-lg font-bold" style={{ color: '#1f2937' }}>Our Guarantee</p>
                  <p className="mt-3" style={{ color: '#0D9488', fontWeight: '600' }}>
                    Identify 17+ hours of weekly time savings or full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1B3A6B' }}>
            Ready to identify your AI opportunities?
          </h2>
          <a
            href="https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20an%20AI%20Roadmap%20Session."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg"
            style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
          >
            Book Your Session Now
          </a>
        </div>
      </section>
    </div>
  );
}
