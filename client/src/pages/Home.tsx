import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20an%20AI%20Roadmap%20Session.';

  const faqItems = [
    {
      question: "We're getting inquiries, but they fall through the cracks. Can AI actually help us get more booked appointments, not just more leads?",
      answer: "Yes. I focus on plugging the exact gaps where leads usually die: slow follow-up, no-shows, and manual booking. Together we design AI workflows that respond to new leads instantly (even after hours), nurture them with the right messages for your services, and guide them straight to a booked consult on your calendar. You end up with a simple, trackable system that turns more of your existing leads into paying clients—without adding work to your front desk.",
    },
    {
      question: 'There are a million AI tools, agencies, and "systems." I don\'t have time to figure out what\'s legit. How do you help with that?',
      answer: "I treat your tech stack like a menu, not a mystery box. I audit what you already use (CRM, booking, marketing tools), then compare a short list of AI options that actually fit those systems—not whatever is trending this week. You get a clear, vendor-agnostic recommendation: what to keep, what to drop, and what to add, plus the trade-offs in plain language so you can make a confident decision without sitting through five different sales demos.",
    },
    {
      question: "We've already tried AI/chatbots/automation and it didn't really work. What will be different this time?",
      answer: "Most failed AI projects weren't bad tech—they were bad fit and no follow-through. I start with your actual workflows and metrics (intake, follow-up, show-up rate, rebooking), not with a specific tool. Your roadmap includes where AI should not be used (to avoid breaking trust with clients), the minimum viable workflow to prove ROI quickly, and who does what so it doesn't stall once the call is over. The goal is a small, winnable first project that builds confidence instead of another abandoned experiment.",
    },
    {
      question: "My team is already maxed out. Will this just create more work for us?",
      answer: "The whole point is the opposite: fewer manual tasks, not more meetings. In your roadmap, every recommendation must pass a simple test: \"Does this save time or increase revenue in a way my current team can handle?\" If it doesn't, it doesn't make the list. We focus on automating low-value admin (back-and-forth scheduling, reminders, basic FAQs) so your staff can spend more time with clients and less time in the inbox.",
    },
    {
      question: "We're great at client care, not tech. Do we need a full-time AI person to implement this?",
      answer: "No. Your roadmap is written so a normal ops/marketing person or trusted external specialist can implement it step by step. I avoid jargon, specify exactly which tools to connect, and outline the sequence (Week 1, Week 2, etc.), so you're not relying on me forever or hiring a six-figure AI engineer.",
    },
    {
      question: "How do I know this won't just be another expense that doesn't pay off?",
      answer: "Before you ever book the roadmap, we define what \"worth it\" looks like for you—more consults per month, higher show-up rates, fewer hours on admin, or all three. Then, every recommendation in the roadmap is tied to a specific lever (e.g., \"recover more after-hours leads,\" \"reduce no-shows via smarter reminders\"). You'll know how we expect it to move your numbers and what to track over the first 90 days.",
    },
    {
      question: "What if we've barely used AI at all? Are we too early for this?",
      answer: "Being early is actually an advantage. We can skip the messy legacy setups and design simple, modern workflows from day one—things like a basic AI assistant to answer common questions and route people to booking, intake forms that feed directly into your CRM, and follow-up sequences that feel personal, not robotic. You don't need any AI experience; you just need clarity on your bottlenecks and goals, which we'll define together in the session.",
    },
    {
      question: "I'm nervous that AI will make our client experience feel cold or robotic. How do you avoid that?",
      answer: "In a med spa or boutique firm, trust and warmth are non-negotiable. We keep humans front-and-center and use AI mainly to respond faster, answer routine questions consistently, and free your team's time so they can deliver better in-person care. Part of the roadmap is defining \"AI guardrails\"—what must stay human, what AI can draft but staff approves, and how to keep your tone on-brand.",
    },
    {
      question: "Is this just a strategy deck, or do you help us get things live?",
      answer: "The AI Roadmap is designed to be implemented, not just admired. You get a prioritized 90-day plan with \"Phase 1 / Phase 2 / Phase 3,\" tool and vendor recommendations, clear owner for each step (your team, your vendor, or a specialist), and options for follow-on support if you want help reviewing or troubleshooting implementation. No hand-wavy buzzwords—just who does what, by when, with which tools.",
    },
    {
      question: "How long before we see any real impact from this?",
      answer: "Most clients can ship at least one high-impact workflow within 30 days, and a full first wave within 90 days if they follow the plan. Early wins usually show up as more leads captured outside business hours, faster response times, and fewer dropped or no-show appointments. We design your roadmap to stack quick wins first, then build toward deeper automations once the basics are working.",
    },
  ];

  const services = [
    {
      title: 'AI Roadmaps and Strategy',
      body: 'I analyze your actual workflows, bottlenecks, and growth goals to identify the highest-leverage AI opportunities for time savings, better decision-making, sharper messaging, and faster execution. You get a prioritized, practical plan — not another generic list of tools.',
    },
    {
      title: 'AI Operating System Setup',
      body: 'I help businesses turn Claude into a real operating system for daily work by structuring projects, memory, custom skills, and role-based workflows around how the business actually runs.',
    },
    {
      title: 'Custom AI Automations & Builds',
      body: 'I design and build custom AI automations and growth assets — inquiry handling, lead nurture systems, workflow orchestration, AI-built websites, research tools, and full multi-step automations. Whether it\'s a single workflow fix or a fully orchestrated system, the work is vendor-agnostic, outcome-led, and sequenced through vetted implementation partners for fast measurable wins.',
      link: '/automation-offers',
      linkText: 'See Automation Offers →',
    },
    {
      title: 'Multi-LLM Deep Research',
      body: 'I run important business questions through multiple frontier AI systems, cross-reference the findings, and turn them into a clear decision brief your business can actually use.',
    },
  ];

  const fintechCaseStudies = [
    {
      slug: 'gforcetoken',
      category: 'Finance and Deal Flow',
      title: 'GForceToken',
      body: 'Built around real-world frustration in capital raising and transaction workflows, GForceToken became a live deal registration and NCNDA protection platform with AI-assisted iteration and execution.',
    },
    {
      slug: 'chocomize',
      category: 'Lead Nurture · Wellness & Med Spa',
      title: 'Chocomize',
      body: 'A California wellness studio was running effective Meta ads but only 18% of leads were booking. We designed a two-stage email nurture system that lifted conversion to 37% without changing ad spend.',
    },
  ];

  const boutiqueCaseStudies = [
    {
      slug: 'cryotherapy-no-show-reduction',
      category: 'Workflow Automation · Wellness',
      title: 'Cryotherapy: 45% No-Show Reduction',
      body: 'A growing recovery and wellness studio was losing serious revenue to missed appointments. We built a CRM-backed reminder system that cut no-shows from 55% to 30%.',
    },
    {
      slug: 'email-campaign',
      category: 'Email Campaign · Wellness & Med Spa',
      title: '$30K from a Single Email Campaign',
      body: 'A wellness studio had spent years building a 3,071-contact list that had quietly gone idle. We designed and launched a single seasonal campaign and filled all 20 available spots at $1,500 each within days.',
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
          <p className="text-lg md:text-xl mb-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Built for boutique firms, med spas and clinics
          </p>
          <p className="text-lg md:text-xl mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Plus fintech & ecommerce
          </p>
          <p className="text-xl md:text-2xl mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
            I help you spot where AI can actually save time, improve execution, and sharpen decisions — so you can see more of the right clients without burning out your team. Then I turn that into a clear 90-day roadmap your team or specialists can implement.
          </p>
          <p className="text-base md:text-lg mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Result: fuller calendars, fewer dropped leads, and a simple plan instead of AI overwhelm.
          </p>
          <p className="text-sm md:text-base text-center mb-12" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Typically uncovers 3–7 high-leverage AI wins for your next 90 days.
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
              Get Your AI Roadmap
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
        </div>
      </section>

      {/* ===== 2. SERVICES SECTION ===== */}
      <section id="services" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: '#1B3A6B' }}>
            What I Do
          </h2>
          <p className="text-xl text-center mb-16 max-w-2xl mx-auto" style={{ color: '#4b5563' }}>
            How I help businesses turn AI into clear, measurable outcomes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service: any, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl hover:shadow-lg transition-all flex flex-col"
                style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #0D9488' }}
              >
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1f2937' }}>
                  {service.title}
                </h3>
                <p className="text-lg leading-relaxed flex-grow" style={{ color: '#4b5563' }}>
                  {service.body}
                </p>
                {service.link && (
                  <a
                    href={service.link}
                    className="inline-block mt-4 font-bold transition-all"
                    style={{ color: '#0D9488' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    {service.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. CASE STUDIES SECTION ===== */}
      <section id="case-studies" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Portfolio</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#0D9488' }}>
            Built With AI. Launched for Real Businesses.
          </h3>
          <p className="text-lg mb-12 max-w-3xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Live case studies across fintech, ecommerce, and service businesses — what's possible when AI intelligence meets strategic execution.
          </p>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* LEFT COLUMN: Fintech & Ecommerce */}
            <div>
              <h4 className="text-xl font-bold mb-6" style={{ color: '#0D9488' }}>
                Fintech & Ecommerce
              </h4>
              <div className="space-y-6">
                {fintechCaseStudies.map((study, idx) => (
                  <a
                    key={idx}
                    href={`/case-studies/${study.slug}`}
                    className="block p-8 rounded-2xl hover:shadow-lg transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <div
                      className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide"
                      style={{ backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488' }}
                    >
                      {study.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {study.body}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Boutique Firms, Med Spas & Clinics */}
            <div>
              <h4 className="text-xl font-bold mb-6" style={{ color: '#0D9488' }}>
                Boutique Firms, Med Spas & Clinics
              </h4>
              <div className="space-y-6">
                {boutiqueCaseStudies.map((study, idx) => (
                  <a
                    key={idx}
                    href={`/case-studies/${study.slug}`}
                    className="block p-8 rounded-2xl hover:shadow-lg transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <div
                      className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide"
                      style={{ backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488' }}
                    >
                      {study.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {study.body}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* See All Case Studies Link */}
          <div className="text-center">
            <a
              href="/case-studies"
              className="inline-block text-lg font-bold transition-all"
              style={{ color: '#0D9488' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              See all 7 case studies →
            </a>
          </div>
        </div>
      </section>

      {/* ===== 4. FAQ SECTION ===== */}
      <section id="faq" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: '#1B3A6B' }}>
            Common Questions
          </h2>
          <p className="text-xl text-center mb-16 max-w-2xl mx-auto" style={{ color: '#4b5563' }}>
            Clear answers to what's on your mind about AI strategy and implementation.
          </p>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="border rounded-lg overflow-hidden transition-all"
                style={{ borderColor: '#e5e7eb' }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  style={{ backgroundColor: expandedFaq === idx ? '#ffffff' : '#ffffff' }}
                >
                  <h3 className="font-bold text-lg" style={{ color: '#1B3A6B' }}>
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    style={{
                      color: '#0D9488',
                      transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>
                {expandedFaq === idx && (
                  <div
                    className="px-6 py-4 border-t"
                    style={{ borderColor: '#e5e7eb', backgroundColor: '#f9fafb', color: '#4b5563', lineHeight: '1.8' }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6" style={{ color: '#4b5563' }}>
              More questions? Visit the full FAQ page for comprehensive answers.
            </p>
            <a
              href="/faq"
              className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg"
              style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
            >
              View Full FAQ
            </a>
          </div>
        </div>
      </section>

      {/* ===== 5. FINAL CTA SECTION ===== */}
      <section className="py-16 md:py-24 px-4 text-center" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Turn AI Into Action?</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Book your AI Roadmap Session and get a clear, prioritized plan in 90 days.
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
            Get Your AI Roadmap
          </a>
        </div>
      </section>
    </div>
  );
}
