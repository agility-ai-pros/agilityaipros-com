import PageMeta from '@/components/PageMeta';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "We're getting inquiries, but they fall through the cracks. Can AI actually help us get more booked appointments, not just more leads?",
      a: "Yes. I focus on plugging the exact gaps where leads usually die: slow follow-up, no-shows, and manual booking. Together we design AI workflows that respond to new leads instantly (even after hours), nurture them with the right messages for your services, and guide them straight to a booked consult on your calendar. You end up with a simple, trackable system that turns more of your existing leads into paying clients—without adding work to your front desk.",
    },
    {
      q: 'There are a million AI tools, agencies, and "systems." I don\'t have time to figure out what\'s legit. How do you help with that?',
      a: "I treat your tech stack like a menu, not a mystery box. I audit what you already use (CRM, booking, marketing tools), then compare a short list of AI options that actually fit those systems—not whatever is trending this week. You get a clear, vendor-agnostic recommendation: what to keep, what to drop, and what to add, plus the trade-offs in plain language so you can make a confident decision without sitting through five different sales demos.",
    },
    {
      q: "We've already tried AI/chatbots/automation and it didn't really work. What will be different this time?",
      a: "Most failed AI projects weren't bad tech—they were bad fit and no follow-through. I start with your actual workflows and metrics (intake, follow-up, show-up rate, rebooking), not with a specific tool. Your roadmap includes where AI should not be used (to avoid breaking trust with clients), the minimum viable workflow to prove ROI quickly, and who does what so it doesn't stall once the call is over. The goal is a small, winnable first project that builds confidence instead of another abandoned experiment.",
    },
    {
      q: "My team is already maxed out. Will this just create more work for us?",
      a: "The whole point is the opposite: fewer manual tasks, not more meetings. In your roadmap, every recommendation must pass a simple test: \"Does this save time or increase revenue in a way my current team can handle?\" If it doesn't, it doesn't make the list. We focus on automating low-value admin (back-and-forth scheduling, reminders, basic FAQs) so your staff can spend more time with clients and less time in the inbox.",
    },
    {
      q: "We're great at client care, not tech. Do we need a full-time AI person to implement this?",
      a: "No. Your roadmap is written so a normal ops/marketing person or trusted external specialist can implement it step by step. I avoid jargon, specify exactly which tools to connect, and outline the sequence (Week 1, Week 2, etc.), so you're not relying on me forever or hiring a six-figure AI engineer.",
    },
    {
      q: "How do I know this won't just be another expense that doesn't pay off?",
      a: "Before you ever book the roadmap, we define what \"worth it\" looks like for you—more consults per month, higher show-up rates, fewer hours on admin, or all three. Then, every recommendation in the roadmap is tied to a specific lever (e.g., \"recover more after-hours leads,\" \"reduce no-shows via smarter reminders\"). You'll know how we expect it to move your numbers and what to track over the first 90 days.",
    },
    {
      q: "What if we've barely used AI at all? Are we too early for this?",
      a: "Being early is actually an advantage. We can skip the messy legacy setups and design simple, modern workflows from day one—things like a basic AI assistant to answer common questions and route people to booking, intake forms that feed directly into your CRM, and follow-up sequences that feel personal, not robotic. You don't need any AI experience; you just need clarity on your bottlenecks and goals, which we'll define together in the session.",
    },
    {
      q: "I'm nervous that AI will make our client experience feel cold or robotic. How do you avoid that?",
      a: "In a med spa or boutique firm, trust and warmth are non-negotiable. We keep humans front-and-center and use AI mainly to respond faster, answer routine questions consistently, and free your team's time so they can deliver better in-person care. Part of the roadmap is defining \"AI guardrails\"—what must stay human, what AI can draft but staff approves, and how to keep your tone on-brand.",
    },
    {
      q: "Is this just a strategy deck, or do you help us get things live?",
      a: "The AI Roadmap is designed to be implemented, not just admired. You get a prioritized 90-day plan with \"Phase 1 / Phase 2 / Phase 3,\" tool and vendor recommendations, clear owner for each step (your team, your vendor, or a specialist), and options for follow-on support if you want help reviewing or troubleshooting implementation. No hand-wavy buzzwords—just who does what, by when, with which tools.",
    },
    {
      q: "How long before we see any real impact from this?",
      a: "Most clients can ship at least one high-impact workflow within 30 days, and a full first wave within 90 days if they follow the plan. Early wins usually show up as more leads captured outside business hours, faster response times, and fewer dropped or no-show appointments. We design your roadmap to stack quick wins first, then build toward deeper automations once the basics are working.",
    },
    {
      q: "How long does an AI Roadmap Session take?",
      a: "The full process is about 75 minutes total: 45 minutes for discovery, then I spend 24–48 hours building your AI Action Report, and we finish with a 30-minute walkthrough call.",
    },
    {
      q: "What if I don't identify 17+ hours of savings in my session?",
      a: "You get a full refund. No questions. The guarantee is real because I'm confident in the process — most clients find 20–40 hours of potential weekly savings.",
    },
    {
      q: "Do I need technical knowledge to understand the recommendations?",
      a: "No. The AI Action Report is written for business owners and operators, not engineers. You'll get clear, actionable steps in plain English.",
    },
    {
      q: "Can I use the recommendations myself, or do I need to hire you to implement?",
      a: "You can absolutely use them yourself. The whole point is to give you the roadmap so you can decide: do it in-house, hire me, or use a specialist. Either way, you win.",
    },
    {
      q: "What's included in custom automation projects?",
      a: "Scope & design, build & test, deployment, team training, and 30 days of optimization. Pricing starts at $2,500 and scales based on complexity and integrations.",
    },
    {
      q: "How do I get started?",
      a: "Send me a message on WhatsApp or email. We'll schedule a quick call to make sure we're a good fit, then book your AI Roadmap Session.",
    },
  ];

  return (
    <>
    <PageMeta
      title="FAQ — Agility AI Pros"
      description="Answers to the most common questions about AI consulting, AI audits, automation builds, and working with Patrick Daniel at Agility AI Pros."
      path="/faq"
      type="website"
    />
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-12 md:py-20 px-4 md:px-8" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Clear answers to common questions about AI strategy and implementation
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border rounded-lg overflow-hidden transition-all"
                style={{ borderColor: '#e5e7eb' }}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  style={{ backgroundColor: openIdx === idx ? '#f9fafb' : 'white' }}
                >
                  <h3 className="font-bold text-lg" style={{ color: '#1B3A6B' }}>
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={24}
                    style={{
                      color: '#0D9488',
                      transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>
                {openIdx === idx && (
                  <div
                    className="px-6 py-4 border-t"
                    style={{ borderColor: '#e5e7eb', backgroundColor: '#f9fafb', color: '#4b5563', lineHeight: '1.8' }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 px-4 md:px-8" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1B3A6B' }}>
            Still have questions?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#4b5563' }}>
            Send me a message and I will answer anything else you want to know.
          </p>
          <a
            href="https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg"
            style={{ backgroundColor: '#0D9488', cursor: 'pointer' }}
          >
            Send a Message
          </a>
        </div>
      </section>
    </div>
    </>
  );
}
