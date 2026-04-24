export default function AutomationOffers() {
  const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20an%20Automation%20Audit.';

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#1B3A6B' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#ffffff' }}>
            Automation That Removes Bottlenecks
          </h1>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
            AgilityAIPros helps businesses turn repetitive work, slow follow-up, and disconnected processes into clear, reliable systems — so leads are handled faster, teams waste less time, and growth does not depend on manual hustle.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-white rounded-lg font-bold text-lg transition-all"
              style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0f766e')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0D9488')}
            >
              Book an Automation Audit
            </a>
            <a
              href="#example-workflows"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all"
              style={{ border: '2px solid white', color: 'white', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              See Example Workflows
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: INTRO ===== */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1B3A6B' }}>
            From AI ideas to working systems
          </h2>
          <div className="space-y-6" style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p>
              Most businesses do not need more AI tools. They need better systems. AgilityAIPros identifies where time is being lost, where leads are slipping, and where staff are repeating work that should already be handled. Those opportunities are then turned into practical automations that support execution, follow-up, communication, and internal workflows.
            </p>
            <p>
              This is not about adding technology for its own sake. It is about creating leverage in the places where manual work, slow response, and inconsistent handoffs are quietly holding the business back.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: WHAT WE AUTOMATE ===== */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1B3A6B' }}>
            What automation can handle
          </h2>
          <p className="text-xl mb-12" style={{ color: '#4b5563' }}>
            These offers are designed for businesses that already have demand, but need more consistency, speed, and operational leverage.
          </p>

          <div className="space-y-8">
            {[
              {
                title: 'Lead capture and follow-up',
                desc: 'New inquiries can be captured, categorized, routed, and followed up automatically so fewer leads go cold and response times improve.',
              },
              {
                title: 'Front desk and scheduling workflows',
                desc: 'Missed calls, appointment requests, FAQs, reminders, and intake tasks can be handled more consistently without putting more pressure on the team.',
              },
              {
                title: 'Internal operations',
                desc: 'Repetitive admin work, summaries, reporting, proposal drafting, and handoffs can be streamlined so the team spends less time pushing information around.',
              },
              {
                title: 'Research and monitoring',
                desc: 'Recurring market research, competitor tracking, periodic updates, and signal monitoring can be automated into a steady stream of usable intelligence.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg" style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #0D9488' }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1B3A6B' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#4b5563', lineHeight: '1.8' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: BEST-FIT CLIENTS ===== */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1B3A6B' }}>
            Best for lean teams that need leverage
          </h2>
          <div className="space-y-6" style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p>
              Automation is especially useful for businesses that already have real activity but are losing time and consistency in the middle of execution. This often includes owner-led firms, boutique clinics, med spas, consultancies, and other small teams where a few people are carrying too much operational load.
            </p>
            <p>
              If the business is relying on people to remember every follow-up, manually sort every inquiry, or repeatedly move information between tools, there is usually a strong automation opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: HOW IT WORKS ===== */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: '#1B3A6B' }}>
            A simple implementation path
          </h2>

          <div className="space-y-8">
            {[
              {
                step: 'Step 1 — Audit',
                desc: 'Identify where manual work, delays, missed follow-up, and operational drag are creating avoidable friction.',
              },
              {
                step: 'Step 2 — Design',
                desc: 'Map the workflow, define what should happen automatically, and prioritize the automations that will create the most immediate value.',
              },
              {
                step: 'Step 3 — Implement',
                desc: 'Deploy the workflows using no-code systems, AI tools, and vetted implementation support where needed — without forcing the client to source and manage multiple vendors on their own.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-lg" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#0D9488' }}>
                  {item.step}
                </h3>
                <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: EXAMPLE WORKFLOWS ===== */}
      <section id="example-workflows" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: '#1B3A6B' }}>
            Examples of what this can look like
          </h2>

          <div className="space-y-4">
            {[
              'A new lead comes in and is immediately categorized, logged, summarized, and followed up.',
              'A missed call triggers a capture-and-callback workflow instead of becoming lost revenue.',
              'A booked meeting generates a prep brief so the conversation starts with context.',
              'A request form becomes a draft proposal instead of sitting in someone\'s inbox.',
              'A clinic inquiry gets answered faster with structured follow-up and front-desk support logic.',
            ].map((example, idx) => (
              <div key={idx} className="p-6 rounded-lg flex items-start gap-4" style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }}>
                <span style={{ color: '#0D9488', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '2px' }}>
                  ✓
                </span>
                <p style={{ color: '#4b5563', lineHeight: '1.8' }}>
                  {example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: STRATEGY-LED IMPLEMENTATION ===== */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1B3A6B' }}>
            Strategy-led, implementation-supported
          </h2>
          <div className="space-y-6" style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p>
              AgilityAIPros leads the workflow strategy, prioritization, and execution plan. For more advanced builds, vetted implementation support and proven systems can be coordinated behind the scenes so clients get one strategic lead instead of having to source and manage multiple specialists themselves.
            </p>
            <p>
              This keeps the process focused, efficient, and aligned with business priorities — instead of turning into a patchwork of tools with no clear owner.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: WHY THIS MATTERS ===== */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1B3A6B' }}>
            Why businesses come to this work
          </h2>
          <div className="space-y-6" style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <p>
              The problem is usually not a lack of ideas. It is that too much important work still depends on memory, inboxes, manual follow-up, and people doing the same tasks over and over again.
            </p>
            <p>
              Good automation reduces friction in the places where delay costs money, inconsistency creates risk, and repetitive work drains team capacity. The goal is not to automate everything. The goal is to automate the right things first.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: FINAL CTA ===== */}
      <section className="py-20 md:py-32 px-4" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start with the highest-value bottleneck
          </h2>
          <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
            If your business is dealing with repetitive follow-up, missed inquiries, slow handoffs, or admin work that keeps piling up, start with an Automation Audit. The first step is to identify the few systems that would create the most immediate leverage.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg transition-all"
            style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0f766e')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0D9488')}
          >
            Book an Automation Audit
          </a>
        </div>
      </section>
    </div>
  );
}
