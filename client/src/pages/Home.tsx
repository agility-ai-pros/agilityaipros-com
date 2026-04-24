import { Link } from 'wouter';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20an%20AI%20Roadmap%20Session.';

  const faqItems = [
    {
      question: 'How is this different from hiring a full-time AI person?',
      answer: 'You get senior-level AI strategy, workflow analysis, and implementation guidance without the cost or delay of hiring a full-time internal lead.',
    },
    {
      question: 'What if my business has not used AI at all yet?',
      answer: 'That is exactly where the AI Roadmap Session helps most. We start with your real workflows, identify the best opportunities, and build a clear first-step plan based on your business.',
    },
    {
      question: 'Do you personally build every automation?',
      answer: 'My core value is strategy, prioritization, roadmaps, and implementation guidance. When deeper technical execution is needed, I help define what should be built and guide the right internal team, freelancer, or trusted specialist.',
    },
    {
      question: 'How quickly will I see value?',
      answer: 'Most clients leave the first session with a clear action plan, prioritized opportunities, and identified time-saving potential. The goal is immediate clarity and practical next steps.',
    },
  ];

  const services = [
    {
      title: 'AI Roadmaps and Strategy',
      body: 'I analyze your actual workflows, bottlenecks, and growth goals to identify the highest-leverage AI opportunities for time savings, better decision-making, sharper messaging, and faster execution. You get a prioritized, practical plan — not another generic list of tools.',
    },
    {
      title: 'Claude Business Setup',
      body: 'I help businesses turn Claude into a real operating system for daily work by structuring projects, memory, custom skills, and role-based workflows around how the business actually runs.',
    },
    {
      title: 'Manus Builds and Guidance',
      body: 'I use Manus to help build fast-moving assets like websites, research systems, and growth tools, and I help clients understand where Manus can create the most leverage inside their business.',
    },
    {
      title: 'Multi-LLM Deep Research',
      body: 'I run important business questions through multiple frontier AI systems, cross-reference the findings, and turn them into a clear decision brief your business can actually use.',
    },
  ];

  const caseStudies = [
    {
      category: 'Stablecoin Platform',
      title: 'LexiUSD.com',
      body: 'A fintech startup needed a clearer path forward on platform planning and AI integration. Using AI-supported strategy and development planning, I helped reduce projected development costs by $1.6 million while creating a more practical path to launch.',
    },
    {
      category: 'Finance and Deal Flow',
      title: 'GForceToken.com',
      body: 'Built around real-world frustration in capital raising and transaction workflows, GForceToken became a live deal registration and NCNDA protection platform with AI-assisted iteration and execution.',
    },
    {
      category: 'Family Office / Private Capital',
      title: 'AI Due Diligence System',
      body: 'I built a multi-source AI research and due diligence workflow using Claude Projects and Manus wide research to support faster analysis across 47+ public sources and help protect a $106 million deal.',
    },
    {
      category: 'Aviation Finance',
      title: 'LegacyAviationFI.com',
      body: 'A global aviation finance and operations platform was reworked and rebranded in a single day using AI-assisted strategy and build execution.',
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* ===== 1. HERO SECTION ===== */}
      <section id="home" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#1B3A6B' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-semibold mb-4 tracking-wide" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Agility AI Pros
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight" style={{ color: '#ffffff' }}>
            Turn AI Into Clear Business Action
          </h1>
          <p className="text-lg md:text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Built for boutique firms, med spas and clinics
          </p>
          <p className="text-xl md:text-2xl mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
            I help you spot where AI can actually save time, improve execution, and sharpen decisions. Then I turn that into a clear 90-day roadmap your team or specialists can implement.
          </p>
          <p className="text-base md:text-lg mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Result: more high-quality clients, fuller calendars, and fewer dropped leads.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-white rounded-lg font-bold text-lg transition-all"
              style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0f766e')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0D9488')}
            >
              Book Your AI Roadmap Session
            </a>
            <a
              href="#case-studies"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all"
              style={{ border: '2px solid white', color: 'white', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              View Case Studies
            </a>
          </div>

          {/* Credibility Strip */}
          <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Claude • Manus • Perplexity • Grok • Multi-LLM research • AI roadmaps • Implementation guidance
          </p>
        </div>
      </section>

      {/* ===== 2. ABOUT SECTION ===== */}
      <section id="about" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#1B3A6B' }}>
            AI Strategy First. Clear Next Steps Second.
          </h2>
          <div className="space-y-6" style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.1rem' }}>
            <p>
              Most businesses do not need more AI hype. They need someone who can look at how the business actually runs, identify where AI will make a real difference, and turn that into a practical plan.
            </p>
            <p>
              That is where I come in. I work as a Fractional AI Strategist, helping businesses uncover time-saving opportunities, sharpen workflows, improve messaging, and choose the right AI tools for the way they actually operate.
            </p>
            <p>
              I focus on strategy, workflow analysis, AI roadmaps, multi-LLM research, and implementation guidance using tools like Claude, Manus, Perplexity, Grok, and other leading models. When a project needs deeper technical execution, I help define the right path and can guide implementation with internal teams, freelancers, or trusted specialists.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 3. AI ROADMAP SESSION SECTION ===== */}
      <section id="roadmap" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1B3A6B' }}>
            Start With an AI Roadmap Session
          </h2>
          <p className="text-xl mb-12" style={{ color: '#4b5563' }}>
            This is the best place to begin if you know AI could help your business, but you want clarity before you waste time or money on the wrong tools.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Bullets */}
            <div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span style={{ color: '#0D9488', fontWeight: 'bold', marginTop: '2px' }}>✓</span>
                  <span style={{ color: '#4b5563' }}>45-minute discovery call to review your workflows, bottlenecks, tools, and biggest opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#0D9488', fontWeight: 'bold', marginTop: '2px' }}>✓</span>
                  <span style={{ color: '#4b5563' }}>Customized AI Action Report delivered within 48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#0D9488', fontWeight: 'bold', marginTop: '2px' }}>✓</span>
                  <span style={{ color: '#4b5563' }}>Prioritized recommendations with a clear implementation sequence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#0D9488', fontWeight: 'bold', marginTop: '2px' }}>✓</span>
                  <span style={{ color: '#4b5563' }}>30-minute walkthrough call so you know exactly what to do next</span>
                </li>
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg transition-all"
                style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0f766e')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0D9488')}
              >
                Book Your AI Roadmap Session
              </a>
            </div>

            {/* Right: Pricing & Guarantee Box */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#ffffff', border: '2px solid #0D9488' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1f2937' }}>
                AI Roadmap Session
              </h3>
              <div className="mb-8">
                <p className="text-sm" style={{ color: '#6b7280', marginBottom: '8px' }}>
                  Investment
                </p>
                <p className="text-4xl font-bold" style={{ color: '#0D9488' }}>
                  $997
                </p>
              </div>
              <div style={{ borderTop: '2px solid #e5e7eb', paddingTop: '16px' }}>
                <p className="text-lg font-bold mb-3" style={{ color: '#1f2937' }}>
                  Our Guarantee
                </p>
                <p style={{ color: '#0D9488', fontWeight: '600', fontSize: '1.05rem' }}>
                  Identify 17+ hours of weekly time savings or full refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. SERVICES SECTION ===== */}
      <section id="services" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#1B3A6B' }}>
            How I Help Businesses Use AI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 rounded-2xl" style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #0D9488' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1f2937' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '1.05rem' }}>
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. BIO SECTION ===== */}
      <section id="bio" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto">
          {/* Photo */}
          <div className="flex justify-center mb-12">
            <img
              src="/images/patrick.jpg"
              alt="Patrick Daniel"
              className="rounded-2xl shadow-lg w-full max-w-xs object-cover"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>

          {/* Bio Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#1B3A6B' }}>
              Meet Patrick Daniel
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto" style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem' }}>
              <p>
                I am Patrick Daniel, a Fractional AI Strategist who helps growth-focused businesses cut through the noise and use AI in a way that actually supports execution, smarter decisions, and scalable growth. I specialize in turning AI confusion into clear business action.
              </p>
              <p>
                Instead of pushing random tools or generic automation promises, I start with how your business really operates — where the friction is, what is already working, and which AI opportunities will deliver the highest return first.
              </p>
              <p>
                My work spans fintech, private capital, deal flow, messaging, and aviation finance. I combine Claude, Manus, Perplexity, Grok, and other frontier models to deliver clearer strategy, tighter messaging, stronger research, and practical implementation plans.
              </p>
              <p>
                Projects featured on this site include LexiUSD.com, where AI-supported strategy and development planning helped reduce projected development costs by $1.6 million; GForceToken.com, a live deal registration and NCNDA protection platform shaped around real-world transaction workflow needs; an AI Due Diligence System built around 47+ public sources and used to support research tied to a $106 million protected deal; and LegacyAviationFI.com, a global aviation finance and operations platform reworked and rebranded in a single day using AI-assisted strategy and build execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. CASE STUDIES SECTION ===== */}
      <section id="case-studies" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ color: '#1B3A6B' }}>
            Case Studies
          </h2>
          <p className="text-xl text-center mb-16" style={{ color: '#4b5563' }}>
            Here are a few examples of how I have used AI-supported strategy, research, and execution across different industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="p-8 rounded-2xl" style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb' }}>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wide" style={{ backgroundColor: 'rgba(13,148,136,0.1)', color: '#0D9488' }}>
                  {study.category}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1f2937' }}>
                  {study.title}
                </h3>
                <p style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '1.05rem' }}>
                  {study.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. FAQ SECTION ===== */}
      <section id="faq" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#1B3A6B' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between font-semibold transition-all"
                  style={{ color: '#1f2937', backgroundColor: '#ffffff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                >
                  <span className="text-left">{item.question}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: '#0D9488',
                      transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                      marginLeft: '16px',
                    }}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4" style={{ backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
                    <p style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '1.05rem' }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. FINAL CTA SECTION ===== */}
      <section id="cta" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#1B3A6B' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Get Clear on Where AI Fits in Your Business
          </h2>
          <p className="text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
            If you want a practical AI plan built around your real workflows, the best place to start is the AI Roadmap Session. You will walk away with clear priorities, recommended tools, and next steps you can actually use.
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
            Book Your AI Roadmap Session
          </a>
        </div>
      </section>
    </div>
  );
}
