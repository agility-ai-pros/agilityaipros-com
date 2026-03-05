import { Link } from 'wouter';
import { ArrowRight, Zap, Code, Brain, Cpu } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/hero_neural_network-Xy8YRtAFSLvUNGFjHW9p3B.webp';
const ROBOT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/ai_robot_figure-2vKeEbfmGQUYFMJMfibq5N.webp';
const RESEARCH_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/research_data_screens-guZTcenqbebJoxz6XyUcoy.webp';
const CODE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/website_code_building-H2rYcGaQbUAByAKAvFpAGQ.webp';

const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20a%20free%20call.';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section navy-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy/80" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              I Build AI-Powered Businesses. Fast.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Copywriting. Market research. Manus AI websites. Multi-LLM deep research. If your business needs AI that actually works — let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <button className="cta-primary text-base">
                  See My Services
                </button>
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-outline text-base"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-white py-8 border-b border-border-gray">
        <div className="container">
          <p className="text-center text-sm text-gray-600 mb-6">I work across all frontier AI platforms so you don't have to.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
            {['Built with Manus AI', 'Claude Code', 'Grok', 'Perplexity', 'Gemini'].map((platform) => (
              <div key={platform} className="text-sm font-semibold text-dark-text">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do - Service Cards */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4 text-center">What I Do</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Fast, focused services built to deliver real results for your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Brain className="text-teal" size={24} />,
                title: 'Market Research & Copy',
                description: 'AI-powered research, competitor analysis, and copy that converts.',
              },
              {
                icon: <Code className="text-teal" size={24} />,
                title: 'Manus AI Websites',
                description: 'Full websites built and launched in days, including affiliate marketing infrastructure.',
              },
              {
                icon: <Cpu className="text-teal" size={24} />,
                title: 'Multi-LLM Deep Research',
                description: 'Your biggest business question run through 4 frontier AI systems and synthesized into one clear report.',
              },
              {
                icon: <Zap className="text-teal" size={24} />,
                title: 'Manus AI Training',
                description: 'One session. You\'ll know exactly how to build with Manus AI yourself — and you won\'t need me again.',
              },
            ].map((service, idx) => (
              <div key={idx} className="service-card border-l-4 border-teal">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark-text mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/services">
                  <span className="text-teal font-semibold hover:text-teal/80 transition-colors cursor-pointer inline-flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding gray-section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-12 text-center">Built With AI. Launched for Real Businesses.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: 'LexiusD.com',
                category: 'Stablecoin Platform',
                description: 'Fintech infrastructure and tokenomics.',
                link: 'https://lexiusd.com',
              },
              {
                name: 'LegacyAviationFI.com',
                category: 'Aviation Finance',
                description: 'Global aviation finance & operations.',
                link: 'https://legacyaviationfi.com',
              },
              {
                name: 'AgilityAIInnerCircle.com',
                category: 'AI Membership',
                description: 'AI membership site with affiliate marketing.',
                link: 'https://agilityaiinnercircle.com',
              },
            ].map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-block bg-teal/10 text-teal px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {project.category}
                </div>
                <h3 className="text-lg font-bold text-dark-text mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal font-semibold hover:text-teal/80 transition-colors text-sm inline-flex items-center gap-2"
                >
                  Visit Site <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm">Additional projects available under NDA — ask on a call.</p>
        </div>
      </section>

      {/* Manus AI Offer */}
      <section className="section-padding navy-section relative overflow-hidden">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20 hidden lg:block">
          <img src={ROBOT_IMAGE} alt="AI Robot" className="h-96 object-contain" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              After One Session with Me, You Won't Need Me Again.
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              That's the offer. I'll show you how to use Manus AI to build websites, generate professional AI images, run automations, and grow your business — live, in one session. Most clients walk away and never look back. A few hire me to do it for them. Either way, you win.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-block"
            >
              Book a Manus AI Session — $250
            </a>
          </div>
        </div>
      </section>

      {/* AI Neural Network Feature */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
                AI-Powered Intelligence
              </h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Every project I build leverages frontier AI systems working in parallel. Neural networks, deep research, and multi-LLM analysis power everything from copywriting to architecture.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                This isn't just about using AI tools — it's about architecting solutions that scale.
              </p>
            </div>
            <div>
              <img src={HERO_IMAGE} alt="Neural Network" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Image Creation Feature */}
      <section className="section-padding gray-section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6 text-center">
            Yes, I Can Build Your Brand Images Too.
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Manus AI doesn't just build websites — it generates custom, professional AI images on demand. In our session I'll show you how to create hero images, product visuals, and brand assets like the ones you see on this site. No designer required.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <img src={RESEARCH_IMAGE} alt="Research Dashboard" className="rounded-xl shadow-md w-full h-64 object-cover" />
            <img src={CODE_IMAGE} alt="Web Builder" className="rounded-xl shadow-md w-full h-64 object-cover" />
          </div>
          <p className="text-center text-gray-500 text-sm italic">All images on this site were generated using AI.</p>
        </div>
      </section>

      {/* Multi-LLM Research */}
      <section className="section-padding gray-section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6 text-center">
            Four AIs Cross-Examining Your Business Question.
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Most people use one AI and trust the answer. I run your question through Grok, Perplexity, Gemini, and Claude — each in their deepest research modes — then cross-reference the results, identify where they agree, where they disagree, and what none of them found. You get one clear, verified decision brief.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              'Cross-verified findings across 4 frontier AI systems',
              'Single-page decision brief — clear and actionable',
              'Moat analysis: where AI can replicate you, and where it can\'t',
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="text-teal" size={20} />
                </div>
                <p className="text-dark-text font-semibold">{feature}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services">
              <button className="cta-primary">
                Get a Research Sprint — Starting at $350
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding navy-section text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move Fast?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Connect on WhatsApp. No pitch. Just a conversation about what AI can do for your business right now.
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
