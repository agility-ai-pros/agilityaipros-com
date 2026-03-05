import { Link } from 'wouter';
import { ArrowRight, Zap, Code, Brain, Cpu } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ROBOT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/ai_robot_figure-2vKeEbfmGQUYFMJMfibq5N.webp';
const RESEARCH_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/research_data_screens-guZTcenqbebJoxz6XyUcoy.webp';
const CODE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/website_code_building-H2rYcGaQbUAByAKAvFpAGQ.webp';

const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20a%20free%20call.';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section - Redesigned */}
      <section className="bg-gradient-to-b from-navy via-navy to-navy/95 text-white py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              I Build AI-Powered Businesses. <span className="text-teal">Fast.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              Copywriting. Market research. Manus AI websites. Multi-LLM deep research. If your business needs AI that actually works — let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <button className="px-8 py-4 bg-teal text-white rounded-lg font-bold hover:bg-teal/90 transition-all text-lg">
                  See My Services
                </button>
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all text-lg text-center"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-12 border-b border-border-gray">
        <div className="container">
          <p className="text-center text-sm text-gray-600 font-semibold mb-8 uppercase tracking-wide">Trusted by businesses across AI platforms</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            {['Manus AI', 'Claude', 'Grok', 'Perplexity', 'Gemini'].map((platform) => (
              <div key={platform} className="text-sm font-bold text-dark-text">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Redesigned */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Four core services, each designed to deliver real, measurable results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="text-teal" size={32} />,
                title: 'Market Research & Copy',
                description: 'AI-powered research, competitor analysis, and copy that converts. Delivered in 48 hours.',
              },
              {
                icon: <Code className="text-teal" size={32} />,
                title: 'Manus AI Websites',
                description: 'Full websites built and launched in days, including affiliate marketing infrastructure.',
              },
              {
                icon: <Cpu className="text-teal" size={32} />,
                title: 'Multi-LLM Deep Research',
                description: 'Your question run through 4 frontier AI systems and synthesized into one clear decision brief.',
              },
              {
                icon: <Zap className="text-teal" size={32} />,
                title: 'Manus AI Training',
                description: 'One 90-minute session. You\'ll know exactly how to build with Manus AI yourself.',
              },
            ].map((service, idx) => (
              <div key={idx} className="p-8 bg-light-gray rounded-2xl hover:shadow-lg transition-all border-l-4 border-teal">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-dark-text mb-3">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-navy text-white py-24 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Built With AI. Launched for Real Businesses.</h2>
          <p className="text-xl text-white/80 mb-16 max-w-2xl">
            Three live projects showcasing what's possible when you combine AI intelligence with strategic execution.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'LexiusD.com',
                category: 'Stablecoin Platform',
                description: 'Fintech infrastructure and tokenomics for a 2026 launch.',
                link: 'https://lexiusd.com',
              },
              {
                name: 'LegacyAviationFI.com',
                category: 'Aviation Finance',
                description: 'Global aviation finance & operations platform.',
                link: 'https://legacyaviationfi.com',
              },
              {
                name: 'AgilityAIInnerCircle.com',
                category: 'AI Membership',
                description: 'AI membership site with full affiliate marketing infrastructure.',
                link: 'https://agilityaiinnercircle.com',
              },
            ].map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10 hover:border-teal/50 group"
              >
                <div className="inline-block bg-teal/20 text-teal px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal transition-colors">{project.name}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{project.description}</p>
              </a>
            ))}
          </div>
          
          <p className="text-white/60 text-center mt-12 text-lg">Additional projects available under NDA — ask on a call.</p>
        </div>
      </section>

      {/* The Manus AI Offer */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
                After One Session with Me, You Won't Need Me Again.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                That's the offer. I'll show you how to use Manus AI to build websites, generate professional AI images, run automations, and grow your business — live, in one session. Most clients walk away and never look back. A few hire me to do it for them. Either way, you win.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-teal text-white rounded-lg font-bold hover:bg-teal/90 transition-all text-lg"
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

      {/* Image Creation Feature */}
      <section className="bg-light-gray py-24 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6 text-center">
            Yes, I Can Build Your Brand Images Too.
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Manus AI generates custom, professional AI images on demand. I'll show you how to create hero images, product visuals, and brand assets like the ones on this site.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <img src={RESEARCH_IMAGE} alt="Research Dashboard" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
            <img src={CODE_IMAGE} alt="Web Builder" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
          </div>
          <p className="text-center text-gray-500 text-lg italic">All images on this site were generated using AI.</p>
        </div>
      </section>

      {/* Multi-LLM Research */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6 text-center">
            Four AIs Cross-Examining Your Business Question.
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Most people use one AI and trust the answer. I run your question through Grok, Perplexity, Gemini, and Claude — each in their deepest research modes — then cross-reference the results to identify where they agree, disagree, and what none of them found.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              'Cross-verified findings across 4 frontier AI systems',
              'Single-page decision brief — clear and actionable',
              'Moat analysis: where AI can replicate you, and where it can\'t',
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-light-gray rounded-2xl">
                <div className="w-12 h-12 bg-teal/20 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="text-teal" size={24} />
                </div>
                <p className="text-dark-text font-bold text-lg">{feature}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services">
              <button className="px-8 py-4 bg-teal text-white rounded-lg font-bold hover:bg-teal/90 transition-all text-lg">
                Get a Research Sprint — Starting at $350
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy text-white py-24 md:py-32 text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Move Fast?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Connect on WhatsApp. No pitch. Just a conversation about what AI can do for your business right now.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-teal text-white rounded-lg font-bold hover:bg-teal/90 transition-all text-lg"
          >
            Connect on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
