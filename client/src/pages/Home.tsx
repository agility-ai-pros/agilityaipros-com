import { Link } from 'wouter';
import { Brain, Code, Cpu, Zap, X } from 'lucide-react';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ROBOT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/ai_robot_figure-2vKeEbfmGQUYFMJMfibq5N.webp';
const RESEARCH_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/research_data_screens-guZTcenqbebJoxz6XyUcoy.webp';
const CODE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/website_code_building_new-Mk22PxCjcdDLQdwZqMK7qp.webp';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Yellow Banner */}
      <div className="w-full py-4 md:py-6" style={{backgroundColor: '#FFD700'}}>
        <div className="px-4 md:px-8 flex items-center justify-center md:justify-end">
          <div className="text-white font-bold text-xl md:text-3xl lg:text-5xl text-center md:text-right" style={{textShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>
            <span>AI Audit — $997</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="text-white py-12 md:py-32 relative overflow-hidden" style={{backgroundColor: '#1B3A6B'}}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: '#0D9488'}} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: '#0D9488'}} />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Start Using AI Effectively <span style={{color: '#0D9488'}}>In Your Business Today.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl" style={{color: 'rgba(255,255,255,0.9)'}}>
              I'll do it for you. Or show you how. Either way, you'll actually know how to use AI in your business — no confusion, no wasted time. Let's get you effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <button className="px-8 py-4 text-white rounded-lg font-bold text-lg" style={{backgroundColor: '#0D9488', cursor: 'pointer'}}>
                  See My Services
                </button>
              </Link>
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg font-bold text-lg text-center" 
                style={{border: '2px solid white', color: 'white', cursor: 'pointer'}}
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Audit Section */}
      <section className="bg-white py-16 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{color: '#1B3A6B'}}>
            AI Audit
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{color: '#1B3A6B'}}>
                5 Hours Back. Per Week. <span style={{color: '#0D9488'}}>Guaranteed.</span>
              </h3>
              <p className="text-xl font-semibold mb-8" style={{color: '#0D9488'}}>
                I'll Show You Exactly Where AI Can Save Your Business Time and Money
              </p>
              <div className="space-y-6 mb-8">
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  Most South Florida businesses are either ignoring AI or using it wrong. Either way, they're losing 5–10 hours a week.
                </p>
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  We start with a 45-minute discovery call. You walk me through how your business operates — the tools, the bottlenecks, the tasks your team runs on autopilot. I take it from there.
                </p>
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  Using my proprietary AI analysis process, I map your workflows against what's actually working in your vertical right now. The output is a clean, one-page AI Action Report — no jargon, no fluff. Just what's broken, what to fix first, and what it's worth to you.
                </p>
                <p style={{color: '#4b5563', lineHeight: '1.8', fontSize: '1.05rem'}}>
                  Then we get back on a 30-minute walkthrough call and I hand it to you with a clear implementation sequence.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg mb-4"
                style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
              >
                Book Your AI Audit — $997
              </a>
              <p style={{color: '#6b7280', fontSize: '0.95rem'}}>
                Most clients identify $2,000–$5,000/month in recoverable time in the first session.
              </p>
            </div>
            
            {/* Right Column */}
            <div>
              <div className="p-8 rounded-2xl" style={{backgroundColor: '#f9fafb', border: '2px solid #0D9488'}}>
                <h3 className="text-2xl font-bold mb-6" style={{color: '#1f2937'}}>What's Included</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    '45-min discovery call',
                    'Custom AI Action Report delivered within 48 hours',
                    '30-min walkthrough call with prioritized recommendations',
                    'Clear implementation sequence — what to do first, second, and third',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span style={{color: '#0D9488', fontWeight: 'bold', marginTop: '2px'}}>✓</span>
                      <span style={{color: '#4b5563'}}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8" style={{borderTop: '2px solid #e5e7eb'}}>
                  <p className="text-lg font-bold" style={{color: '#1f2937'}}>Our Guarantee</p>
                  <p className="mt-3" style={{color: '#0D9488', fontWeight: '600'}}>
                    Identify 5+ hours of weekly time savings or full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#1B3A6B'}}>What I Do</h2>
            <p className="text-xl max-w-2xl" style={{color: '#4b5563'}}>
              Four core services, each designed to deliver real, measurable results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain size={32} style={{color: '#0D9488'}} />,
                title: 'Market Research & Copy',
                description: 'AI-powered research, competitor analysis, and copy that converts. Delivered in 48 hours.',
              },
              {
                icon: <Code size={32} style={{color: '#0D9488'}} />,
                title: 'Manus AI Websites',
                description: 'Full websites built and launched in days, including affiliate marketing infrastructure.',
              },
              {
                icon: <Cpu size={32} style={{color: '#0D9488'}} />,
                title: 'Multi-LLM Deep Research',
                description: 'Your question run through 4 frontier AI systems and synthesized into one clear decision brief.',
              },
              {
                icon: <Zap size={32} style={{color: '#0D9488'}} />,
                title: 'Manus AI Training',
                description: 'One 90-minute session. You\'ll know exactly how to build with Manus AI yourself.',
              },
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-2xl hover:shadow-lg transition-all" style={{backgroundColor: '#f9fafb', borderLeft: '4px solid #0D9488'}}>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3" style={{color: '#1f2937'}}>{service.title}</h3>
                <p className="text-lg leading-relaxed" style={{color: '#4b5563'}}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-20" style={{backgroundColor: '#1B3A6B', color: 'white'}}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Portfolio</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: '#0D9488'}}>Built With AI. Launched for Real Businesses.</h3>
          <p className="text-lg mb-12 max-w-2xl" style={{color: 'rgba(255,255,255,0.8)'}}>
            Four live projects showcasing what's possible when you combine AI intelligence with strategic execution.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* LexiUSD Card — links to internal case study page */}
            <div className="p-8 rounded-2xl hover:shadow-lg transition-all" style={{backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>
              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488'}}>
                Stablecoin Platform
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">LexiUSD.com</h3>
              <p className="text-sm font-semibold mb-2" style={{color: '#0D9488'}}>AI helped my client save $1.6M in development costs.</p>
              <p className="text-lg leading-relaxed" style={{color: 'rgba(255,255,255,0.7)'}}>Fintech infrastructure and tokenomics for a 2026 launch.</p>
              <Link href="/portfolio/lexiusd">
                <button
                  className="mt-4 px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                  style={{backgroundColor: '#0D9488', color: 'white', cursor: 'pointer'}}
                >
                  View Project
                </button>
              </Link>
            </div>

            {/* G-Force Token Card — links to internal case study page */}
            <div className="p-8 rounded-2xl hover:shadow-lg transition-all" style={{backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488'}}>
                Finance &amp; Deal Flow
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">GForceToken.com</h3>
              <p className="text-sm font-semibold mb-2" style={{color: '#0D9488'}}>Deal registration &amp; NCNDA protection platform — live and raising capital.</p>
              <p className="text-lg leading-relaxed" style={{color: 'rgba(255,255,255,0.7)'}}>AI-assisted iteration turned a real-world frustration into a live deal lifecycle system.</p>
              <Link href="/portfolio/gforcetoken">
                <button
                  className="mt-4 px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                  style={{backgroundColor: '#0D9488', color: 'white', cursor: 'pointer'}}
                >
                  View Project
                </button>
              </Link>
            </div>

            {/* Legacy Aviation FI Card */}
            <div className="p-8 rounded-2xl hover:shadow-lg transition-all" style={{backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>
              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488'}}>
                Aviation Finance
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">LegacyAviationFI.com</h3>
              <p className="text-lg leading-relaxed" style={{color: 'rgba(255,255,255,0.7)'}}>Global aviation finance & operations platform.</p>
              <button
                onClick={() => setSelectedProject(1)}
                className="mt-4 px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                style={{backgroundColor: '#0D9488', color: 'white', cursor: 'pointer'}}
              >
                View Project
              </button>
            </div>

            {/* Agility AI Inner Circle Card */}
            <div className="p-8 rounded-2xl hover:shadow-lg transition-all" style={{backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>
              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488'}}>
                AI Membership
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AgilityAIInnerCircle.com</h3>
              <p className="text-lg leading-relaxed" style={{color: 'rgba(255,255,255,0.7)'}}>AI membership site with full affiliate marketing infrastructure.</p>
              <button
                onClick={() => setSelectedProject(2)}
                className="mt-4 px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                style={{backgroundColor: '#0D9488', color: 'white', cursor: 'pointer'}}
              >
                View Project
              </button>
            </div>
          </div>
          
          <p className="text-center mt-8 text-base" style={{color: 'rgba(255,255,255,0.6)'}}>Additional projects available under NDA — ask on a call.</p>
        </div>
      </section>

      {/* Manus AI Offer */}
      <section className="bg-white py-16 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#1B3A6B'}}>
                After One Session with Me, You Won't Need Me Again.
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{color: '#4b5563'}}>
                That's the offer. I'll show you how to use Manus AI to build websites, generate professional AI images, run automations, and grow your business — live, in one session. Most clients walk away and never look back. A few hire me to do it for them. Either way, you win.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg"
                style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
              >
                Book a Manus AI Tutorial — Starts at $997
              </a>
            </div>
            <div>
              <img src={ROBOT_IMAGE} alt="AI Robot" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Image Creation */}
      <section className="py-16 md:py-32" style={{backgroundColor: '#f9fafb'}}>
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{color: '#1B3A6B'}}>
            Yes, I Can Build Your Brand Images Too.
          </h2>
          <p className="text-xl text-center mb-16 max-w-2xl mx-auto" style={{color: '#4b5563'}}>
            Manus AI generates custom, professional AI images on demand. I'll show you how to create hero images, product visuals, and brand assets like the ones on this site.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <img src={RESEARCH_IMAGE} alt="Research Dashboard" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
            <img src={CODE_IMAGE} alt="Web Builder" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
          </div>
          <p className="text-center text-lg italic" style={{color: '#6b7280'}}>All images on this site were generated using AI.</p>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg"
              style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
            >
              Get in Touch About Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Multi-LLM Research */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{color: '#1B3A6B'}}>
            Four AIs Cross-Examining Your Business Question.
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto" style={{color: '#4b5563'}}>
            Most people use one AI and trust the answer. I run your question through Grok, Perplexity, Gemini, and Claude — each in their deepest research modes — then cross-reference the results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              'Cross-verified findings across 4 frontier AI systems',
              'Single-page decision brief — clear and actionable',
              'Moat analysis: where AI can replicate you, and where it can\'t',
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl" style={{backgroundColor: '#f9fafb'}}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'rgba(13,148,136,0.2)'}}>
                  <Cpu style={{color: '#0D9488'}} size={24} />
                </div>
                <p className="font-bold text-lg" style={{color: '#1f2937'}}>{feature}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services">
              <button className="px-8 py-4 text-white rounded-lg font-bold text-lg" style={{backgroundColor: '#0D9488', cursor: 'pointer'}}>
                Learn More About Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-12" style={{borderBottom: '1px solid #e5e7eb'}}>
        <div className="container">
          <p className="text-center text-sm font-semibold mb-8 uppercase tracking-wide" style={{color: '#6b7280'}}>
            Trusted by businesses across AI platforms
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            {['Manus AI', 'Claude', 'Grok', 'Perplexity', 'Gemini'].map((platform) => (
              <div key={platform} className="text-sm font-bold" style={{color: '#1f2937'}}>
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 md:py-32 text-white" style={{backgroundColor: '#1B3A6B'}}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Ready to Move Fast?</h2>
            <p className="text-xl mb-12 text-center" style={{color: 'rgba(255,255,255,0.85)'}}>
              No pitch. Just a conversation about what AI can do for your business right now.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full" 
              style={{backgroundColor: 'rgba(0,0,0,0.7)', color: 'white', cursor: 'pointer'}}
            >
              <X size={24} />
            </button>
            {selectedProject === 0 && (
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/lexiusd_2026-03-11_18-10-56_2875_139dcaf2.webp" alt="LexiUSD" className="w-full h-auto" />
            )}
            {selectedProject === 1 && (
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/legacyaviationfi_2026-03-11_18-12-17_3122_11750452.webp" alt="Legacy Aviation FI" className="w-full h-auto" />
            )}
            {selectedProject === 2 && (
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/agilityaiinnercircle_2026-03-11_18-12-38_4948_8f431570.webp" alt="Agility AI Inner Circle" className="w-full h-auto" />
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
