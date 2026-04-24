export default function AutomationOffers() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 px-4 md:px-8" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Automation Offers</h1>
          <p className="text-xl md:text-2xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Custom AI automation built for your specific business workflows
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <p>
                After your AI Roadmap Session, you'll have a clear list of automation opportunities. This is where we build them.
              </p>
              <p className="mt-6">
                I specialize in custom AI automation that fits into your existing workflows — no rip-and-replace, no months of implementation. We build what you actually need, test it with your team, and deploy it fast.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Lead Qualification & Scoring',
                  description: 'AI-powered system that qualifies inbound leads, scores them by fit, and routes them to the right team member.',
                },
                {
                  title: 'Email & Content Automation',
                  description: 'Automated email sequences, content drafts, and follow-up logic triggered by customer behavior.',
                },
                {
                  title: 'Data Extraction & Integration',
                  description: 'Pull data from multiple sources, clean it, and sync it to your CRM or database automatically.',
                },
                {
                  title: 'Customer Support Automation',
                  description: 'AI-powered chatbots and ticket routing that handle common questions and escalate complex issues.',
                },
              ].map((offer, idx) => (
                <div key={idx} className="p-8 rounded-2xl" style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #0D9488' }}>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#1f2937' }}>{offer.title}</h3>
                  <p style={{ color: '#4b5563' }}>{offer.description}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#f0fdf4', border: '2px solid #0D9488' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1B3A6B' }}>How It Works</h3>
              <ol className="space-y-4" style={{ color: '#4b5563' }}>
                <li><strong>1. Scope & Design</strong> — We define the automation, map the data flow, and agree on success metrics.</li>
                <li><strong>2. Build & Test</strong> — I build the automation using Claude Code, Manus AI, and custom integrations. Your team tests it.</li>
                <li><strong>3. Deploy & Train</strong> — We deploy to your production environment and train your team on how to manage it.</li>
                <li><strong>4. Optimize</strong> — We monitor performance and refine based on real-world usage.</li>
              </ol>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1B3A6B' }}>Pricing</h3>
              <p style={{ color: '#4b5563', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Custom automation projects start at <strong>$2,500</strong> and scale based on complexity and integration requirements.
              </p>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Most projects deliver ROI within 30–60 days of deployment.
              </p>
              <a
                href="https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20discuss%20custom%20automation%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg"
                style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
              >
                Discuss Your Automation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
