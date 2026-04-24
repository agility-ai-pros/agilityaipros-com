export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 px-4 md:px-8" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl md:text-2xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Real projects. Real results. Real businesses.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {[
            {
              name: 'LexiUSD.com',
              category: 'Stablecoin Infrastructure',
              description: 'Strategic advisor for a 2026 stablecoin launch. Managed fintech infrastructure planning, tokenomics design, and regulatory positioning.',
              results: ['$100M+ funding facilitated', 'Full infrastructure roadmap', 'Regulatory strategy framework'],
            },
            {
              name: 'LegacyAviationFI.com',
              category: 'Aviation Finance Platform',
              description: 'Built and launched a global aviation finance and operations platform. Full site, infrastructure, and go-to-market strategy.',
              results: ['Live platform', 'Multi-region deployment', 'Integrated payment systems'],
            },
            {
              name: 'GForceToken.com',
              category: 'Deal Protection Platform',
              description: 'Designed and built a deal registration and NCNDA protection platform for institutional investors.',
              results: ['Secure deal infrastructure', 'Institutional-grade compliance', 'Multi-asset support'],
            },
            {
              name: 'Family Office AI Vetting',
              category: 'Due Diligence Automation',
              description: 'Built an AI-powered due diligence system that analyzes investment targets across 47+ public data sources.',
              results: ['47+ data source integration', 'Automated risk scoring', 'Executive summary generation'],
            },
          ].map((study, idx) => (
            <div key={idx} className="border-b pb-12 last:border-b-0">
              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide" style={{ backgroundColor: 'rgba(13,148,136,0.1)', color: '#0D9488' }}>
                {study.category}
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#1B3A6B' }}>{study.name}</h3>
              <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                {study.description}
              </p>
              <div>
                <p className="font-bold mb-3" style={{ color: '#1B3A6B' }}>Results:</p>
                <ul className="space-y-2">
                  {study.results.map((result, ridx) => (
                    <li key={ridx} className="flex items-start gap-3" style={{ color: '#4b5563' }}>
                      <span style={{ color: '#0D9488', fontWeight: 'bold' }}>✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Projects */}
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ color: '#4b5563', fontSize: '1.05rem' }}>
            Additional projects available under NDA. Ask on a call.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1B3A6B' }}>
            Ready to see what's possible?
          </h2>
          <a
            href="https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg"
            style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
