import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How long does an AI Roadmap Session take?',
      a: 'The full process is about 75 minutes total: 45 minutes for discovery, then I spend 24–48 hours building your AI Action Report, and we finish with a 30-minute walkthrough call.',
    },
    {
      q: "What if I don't identify 17+ hours of savings in my session?",
      a: 'You get a full refund. No questions. The guarantee is real because I\'m confident in the process — most clients find 20–40 hours of potential weekly savings.',
    },
    {
      q: 'Do I need technical knowledge to understand the recommendations?',
      a: 'No. The AI Action Report is written for business owners and operators, not engineers. You\'ll get clear, actionable steps in plain English.',
    },
    {
      q: 'Can I use the recommendations myself, or do I need to hire you to implement?',
      a: 'You can absolutely use them yourself. The whole point is to give you the roadmap so you can decide: do it in-house, hire me, or use a specialist. Either way, you win.',
    },
    {
      q: 'What\'s included in custom automation projects?',
      a: 'Scope & design, build & test, deployment, team training, and 30 days of optimization. Pricing starts at $2,500 and scales based on complexity and integrations.',
    },
    {
      q: 'How do I get started?',
      a: 'Send me a message on WhatsApp or email. We\'ll schedule a quick call to make sure we\'re a good fit, then book your AI Roadmap Session.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 px-4 md:px-8" style={{ backgroundColor: '#1B3A6B', color: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Clear answers to common questions about AI strategy and implementation
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 px-4 md:px-8">
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
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: '#f9fafb' }}>
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
  );
}
