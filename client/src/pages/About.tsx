export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-12 md:py-20 px-4 md:px-8" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Patrick Daniel</h1>
          <p className="text-xl md:text-2xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
            AI strategist, operator, and implementation guide for lean teams
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Photo & Bio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            {/* Photo */}
            <div className="flex justify-center">
              <img
                src="/images/patrick.jpg"
                alt="Patrick Daniel"
                className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
                style={{ aspectRatio: '1 / 1' }}
              />
            </div>

            {/* Bio */}
            <div className="space-y-6" style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <p>
                I am Patrick Daniel, a Fractional AI Strategist who helps growth-focused businesses cut through the noise and use AI in a way that actually supports execution, smarter decisions, and scalable growth. I specialize in turning AI confusion into clear business action.
              </p>
              <p>
                Instead of pushing random tools or generic automation promises, I start with how your business really operates — where the friction is, what is already working, and which AI opportunities will deliver the highest return first.
              </p>
              <p>
                My background spans capital-intensive operations, fintech strategy, and complex workflow optimization. That operator perspective shapes everything I do: I prioritize practical leverage over hype, clear thinking over noisy trends, and execution over experimentation.
              </p>
            </div>
          </div>

          {/* Why This Work Matters */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#1B3A6B' }}>Why This Work Matters</h2>
            <div className="space-y-6" style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <p>
                Most businesses do not lack AI ideas. They lack prioritization, workflow clarity, and implementation logic. Teams experiment with tools, but without a strategic roadmap, those experiments scatter and rarely compound into real business value.
              </p>
              <p>
                The goal of my work is to help you identify where AI can create the most leverage, prioritize those opportunities in a way that aligns with your business model, and then execute reliably — either directly or with vetted specialist support.
              </p>
              <p>
                I believe in:
              </p>
              <ul className="space-y-3 ml-6">
                <li>• <strong>AI without hype</strong> — practical tools and workflows, not buzzwords</li>
                <li>• <strong>Strategy before tools</strong> — understand the business first, then choose the right systems</li>
                <li>• <strong>Practical leverage over experimentation</strong> — focus on the few moves that matter most</li>
                <li>• <strong>Clear thinking over noisy trends</strong> — ignore the noise, focus on what works for your team</li>
                <li>• <strong>One trusted guide instead of fragmented vendor conversations</strong> — you get a single strategic lead, not a patchwork of consultants</li>
              </ul>
            </div>
          </div>

          {/* Operator Background */}
          <div>
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#1B3A6B' }}>Operator Background</h2>
            <div className="space-y-6" style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <p>
                Before focusing full-time on AI strategy and implementation, I spent years in capital-intensive operations and fintech strategy. That background taught me how to prioritize under constraint, how to build systems that scale, and how to recognize which operational improvements actually move the needle.
              </p>
              <p>
                That operator lens is why I approach AI differently. I do not sell tools or push features. I ask: where is your team losing time? Where are leads slipping? Where is inconsistency costing you money? Then I build a roadmap that addresses those specific bottlenecks in a way that fits your existing workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 px-4 md:px-8" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1B3A6B' }}>
            Ready to turn AI into clear business action?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#4b5563' }}>
            Start with an AI Roadmap Session or Automation Audit to identify your highest-value opportunities.
          </p>
          <a
            href="https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20an%20AI%20Roadmap%20Session."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg"
            style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
          >
            Book Your AI Roadmap Session
          </a>
        </div>
      </section>
    </div>
  );
}
