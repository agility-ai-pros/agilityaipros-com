import { Link } from 'wouter';
import { Brain, Code, Cpu, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ROBOT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/ai_robot_figure-2vKeEbfmGQUYFMJMfibq5N.webp';
const RESEARCH_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/research_data_screens-guZTcenqbebJoxz6XyUcoy.webp';
const CODE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/website_code_building-H2rYcGaQbUAByAKAvFpAGQ.webp';

const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20connect%20about%20AI%20services.';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="text-white py-24 md:py-32 relative overflow-hidden" style={{backgroundColor: '#1B3A6B'}}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: '#0D9488'}} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: '#0D9488'}} />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Cut Through the AI Noise. <span style={{color: '#0D9488'}}>I'll Teach You.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl" style={{color: 'rgba(255,255,255,0.9)'}}>
              You know your business needs AI. You're drowning in conflicting advice and information overload. I cut through the noise and teach you and your team how to actually use AI — no jargon, no fluff. Real strategies that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <button className="px-8 py-4 text-white rounded-lg font-bold text-lg" style={{backgroundColor: '#0D9488', cursor: 'pointer'}}>
                  See My Services
                </button>
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg font-bold text-lg text-center" 
                style={{border: '2px solid white', color: 'white', cursor: 'pointer'}}
              >
                Connect on WhatsApp
              </a>
            </div>
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

      {/* Services Grid */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#1f2937'}}>What I Do</h2>
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
      <section className="py-24 md:py-32" style={{backgroundColor: '#1B3A6B', color: 'white'}}>
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Built With AI. Launched for Real Businesses.</h2>
          <p className="text-xl mb-16 max-w-2xl" style={{color: 'rgba(255,255,255,0.8)'}}>
            Three live projects showcasing what's possible when you combine AI intelligence with strategic execution.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'LexiusD.com',
                category: 'Stablecoin Platform',
                description: 'Fintech infrastructure and tokenomics for a 2026 launch.',
              },
              {
                name: 'LegacyAviationFI.com',
                category: 'Aviation Finance',
                description: 'Global aviation finance & operations platform.',
              },
              {
                name: 'AgilityAIInnerCircle.com',
                category: 'AI Membership',
                description: 'AI membership site with full affiliate marketing infrastructure.',
              },
            ].map((project, idx) => (
              <div key={idx} className="p-8 rounded-2xl hover:shadow-lg transition-all" style={{backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>
                <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488'}}>
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-lg leading-relaxed" style={{color: 'rgba(255,255,255,0.7)'}}>{project.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-12 text-lg" style={{color: 'rgba(255,255,255,0.6)'}}>Additional projects available under NDA — ask on a call.</p>
        </div>
      </section>

      {/* Manus AI Offer */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#1f2937'}}>
                After One Session with Me, You Won't Need Me Again.
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{color: '#4b5563'}}>
                That's the offer. I'll show you how to use Manus AI to build websites, generate professional AI images, run automations, and grow your business — live, in one session. Most clients walk away and never look back. A few hire me to do it for them. Either way, you win.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg"
                style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
              >
                Book a Manus AI Session — $250
              </a>
            </div>
            <div>
              <img src={ROBOT_IMAGE} alt="AI Robot" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Image Creation */}
      <section className="py-24 md:py-32" style={{backgroundColor: '#f9fafb'}}>
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{color: '#1f2937'}}>
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
        </div>
      </section>

      {/* Multi-LLM Research */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{color: '#1f2937'}}>
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
                Get a Research Sprint — Starting at $350
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 text-center text-white" style={{backgroundColor: '#1B3A6B'}}>
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Move Fast?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{color: 'rgba(255,255,255,0.9)'}}>
            Connect on WhatsApp. No pitch. Just a conversation about what AI can do for your business right now.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg"
            style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
          >
            Connect on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
