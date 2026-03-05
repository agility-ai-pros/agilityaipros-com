import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { CheckCircle } from 'lucide-react';

const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20learn%20more.';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="hero-section navy-section text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white">I Build What Others Just Talk About.</h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-text mb-6">About Patrick Daniel</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Patrick Daniel is the founder of Agility AI Agents and Strategic Advisor for LexiUSD, a stablecoin launching in 2026. He has facilitated over $100 million in funding for enterprise infrastructure and datacenter projects. After watching small businesses struggle with overpriced, overcomplicated AI solutions, he now works directly with business owners and entrepreneurs to deploy AI in practical, revenue-generating ways — fast.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Patrick specializes in AI prompting, copywriting, market research, Manus AI website builds (including full affiliate marketing infrastructure), vibe coding with Claude Code, and multi-LLM deep research intelligence. He has built sites and systems across fintech, aviation finance, stablecoin infrastructure, and AI automation — many under NDA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding gray-section">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-text mb-12 text-center">A Few Things I've Built</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: 'LexiusD.com', description: 'Stablecoin platform with fintech infrastructure' },
              { name: 'LegacyAviationFI.com', description: 'Global aviation finance and operations' },
              { name: 'AgilityAIInnerCircle.com', description: 'AI membership site with affiliate marketing' },
            ].map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dark-text mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600">Additional projects available under NDA.</p>
        </div>
      </section>

      {/* Credibility */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-dark-text mb-12 text-center">Why This Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: 'I use the same tools I sell.',
                  description: 'Every site I build is built with Manus AI or Claude Code. I\'m not selling you something I don\'t use.',
                },
                {
                  title: 'I\'ve worked across high-stakes industries.',
                  description: 'Fintech, aviation finance, stablecoin infrastructure, AI automation — so I understand what it takes to build credible, scalable systems.',
                },
                {
                  title: 'I keep projects small and fast.',
                  description: 'You get a real deliverable, not a 6-week engagement with scope creep. Fast iteration, real results.',
                },
              ].map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="text-teal flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-dark-text mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding navy-section text-center">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Talk.</h2>
          <p className="text-white/90 text-lg mb-8">
            Connect on WhatsApp. No pitch. Just a conversation about what AI can do for your business.
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
