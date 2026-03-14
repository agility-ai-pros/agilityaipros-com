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
              Two AI platforms. One system. Built specifically for how your business operates. I'll do it for you, or show you how. Either way, you win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <button className="px-8 py-4 text-white rounded-lg font-bold text-lg" style={{backgroundColor: '#0D9488', cursor: 'pointer'}}>
                  See My Services
                </button>
              </Link>
              <a
                href="/#contact"
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
                href="/#contact"
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
                title: 'AI Audit \u2014 $997',
                description: '45-minute discovery. Custom AI Action Report. Clear implementation sequence. Guaranteed 5+ hours saved per week.',
              },
              {
                icon: <Code size={32} style={{color: '#0D9488'}} />,
                title: 'Claude Business Setup \u2014 Starting at $2,000',
                description: 'Your business on Claude\'s full ecosystem in one week. Projects, Cowork, memory, and custom skills configured for your workflows. Packages for solo operators through full teams.',
              },
              {
                icon: <Zap size={32} style={{color: '#0D9488'}} />,
                title: 'Manus AI Builds & Training',
                description: 'Websites, automations, research systems \u2014 built with Manus AI. Or learn to build them yourself in one live session.',
              },
              {
                icon: <Cpu size={32} style={{color: '#0D9488'}} />,
                title: 'Multi-LLM Deep Research',
                description: 'Your question run through Claude, Manus, Grok, and Perplexity \u2014 each in deep research mode \u2014 then cross-referenced into one decision brief.',
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

      {/* AI Stack Section */}
      <section className="py-16 md:py-32" style={{backgroundColor: '#f9fafb'}}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#1B3A6B'}}>
              Two AI Powerhouses. One System Built for Your Business.
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#4b5563'}}>
              Most consultants give you one tool and a tutorial. I give you an AI operating system — Claude for the daily work, Manus for the heavy lifting.
            </p>
          </div>

          <p className="text-lg mb-12 max-w-3xl mx-auto text-center" style={{color: '#4b5563', lineHeight: '1.8'}}>
            I don't pick sides in the AI wars. I pick what works. That's why every client gets a system built on two platforms that do different things extremely well.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Claude Column */}
            <div className="p-8 md:p-10 rounded-2xl bg-white shadow-lg" style={{borderTop: '4px solid #0D9488'}}>
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{color: '#1B3A6B'}}>Claude</h3>
              <p className="text-lg font-semibold mb-6" style={{color: '#0D9488'}}>Your Team's Always-On AI Brain</p>
              <p className="mb-6" style={{color: '#4b5563', lineHeight: '1.8'}}>
                Claude is the AI your team will live inside every day. It's not a chatbot — it's a business operating system built by Anthropic, the same company trusted by Spotify, Deloitte, and Novo Nordisk.
              </p>
              <p className="font-semibold mb-4" style={{color: '#1B3A6B'}}>Here's what I set up for you:</p>
              <div className="space-y-5">
                <div>
                  <p className="font-bold" style={{color: '#1f2937'}}>Claude Projects</p>
                  <p style={{color: '#4b5563', lineHeight: '1.7'}}>Dedicated workspaces for each department, loaded with your SOPs, brand voice, pricing, templates, and company knowledge. Your team never re-explains context. Claude already knows your business before anyone types a word.</p>
                </div>
                <div>
                  <p className="font-bold" style={{color: '#1f2937'}}>Claude Cowork</p>
                  <p style={{color: '#4b5563', lineHeight: '1.7'}}>AI that connects directly to your files and systems. Describe what you need — organized folders, formatted reports, processed data, a first draft from scattered notes — and come back to finished work. It breaks complex tasks into steps and runs them in parallel while you do something else.</p>
                </div>
                <div>
                  <p className="font-bold" style={{color: '#1f2937'}}>Claude Code</p>
                  <p style={{color: '#4b5563', lineHeight: '1.7'}}>Custom integrations your business actually needs. Connect your CRM to your follow-up system. Build internal tools. Automate the workflows that off-the-shelf software can't touch — without hiring a development team.</p>
                </div>
                <div>
                  <p className="font-bold" style={{color: '#1f2937'}}>Claude Memory</p>
                  <p style={{color: '#4b5563', lineHeight: '1.7'}}>Claude remembers your preferences, your projects, your team's patterns. Every conversation picks up where the last one left off. No more starting from scratch.</p>
                </div>
              </div>
            </div>

            {/* Manus Column */}
            <div className="p-8 md:p-10 rounded-2xl bg-white shadow-lg" style={{borderTop: '4px solid #1B3A6B'}}>
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{color: '#1B3A6B'}}>Manus AI</h3>
              <p className="text-lg font-semibold mb-6" style={{color: '#0D9488'}}>Your Autonomous Execution Engine</p>
              <p className="mb-6" style={{color: '#4b5563', lineHeight: '1.8'}}>
                Manus is the AI that works in the background while you sleep. Acquired by Meta for $2B, it's the most advanced autonomous agent available today — and I'm one of the few consultants who builds with it.
              </p>
              <p className="font-semibold mb-4" style={{color: '#1B3A6B'}}>Here's what Manus does that nothing else can:</p>
              <div className="space-y-5">
                <div>
                  <p className="font-bold" style={{color: '#1f2937'}}>Autonomous Task Execution</p>
                  <p style={{color: '#4b5563', lineHeight: '1.7'}}>Give Manus a goal and walk away. It plans the steps, executes them, and delivers results. Research, reports, data analysis, website builds — start to finish, no hand-holding.</p>
                </div>
                <div>
                  <p className="font-bold" style={{color: '#1f2937'}}>Website & App Building</p>
                  <p style={{color: '#4b5563', lineHeight: '1.7'}}>Need a site launched fast? Manus builds functional websites and web apps from a single prompt. I've used it to build client sites in days, not weeks.</p>
                </div>
                <div>
                  <p className="font-bold" style={{color: '#1f2937'}}>Wide Research</p>
                  <p style={{color: '#4b5563', lineHeight: '1.7'}}>Manus runs parallel research across dozens of sources simultaneously, then compiles and synthesizes the findings. What takes your team a full day takes Manus about 20 minutes.</p>
                </div>
                <div>
                  <p className="font-bold" style={{color: '#1f2937'}}>Background Operation</p>
                  <p style={{color: '#4b5563', lineHeight: '1.7'}}>Unlike chatbots that only work while you're watching, Manus handles long-running tasks entirely in the background. Queue it up, close your laptop, check back later.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold mb-8 max-w-3xl mx-auto" style={{color: '#1B3A6B'}}>
              Claude handles the daily work. Manus handles the heavy lifting. Together, they give your business capabilities that used to require a full-time team.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 text-white rounded-lg font-bold text-lg"
              style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
            >
              See How This Works for Your Business
            </a>
          </div>
        </div>
      </section>

      {/* Why Two Platforms FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{color: '#1B3A6B'}}>
            Why do you use both Claude and Manus instead of just one?
          </h2>
          <p className="text-lg mb-6" style={{color: '#4b5563', lineHeight: '1.8'}}>
            Because they do different things well, and your business needs both.
          </p>
          <p className="text-lg mb-6" style={{color: '#4b5563', lineHeight: '1.8'}}>
            <strong style={{color: '#1B3A6B'}}>Claude</strong> is where your team works every day. It holds your company knowledge, understands your processes, and produces work that sounds like your brand — not like a robot. It's the best AI for ongoing daily operations.
          </p>
          <p className="text-lg mb-6" style={{color: '#4b5563', lineHeight: '1.8'}}>
            <strong style={{color: '#1B3A6B'}}>Manus</strong> is the heavy lifter you deploy for big jobs. Need a website built from scratch? A 50-source research brief? A full competitive analysis running in the background? That's Manus.
          </p>
          <p className="text-lg" style={{color: '#4b5563', lineHeight: '1.8'}}>
            Think of it this way: Claude is your smartest employee. Manus is your most tireless contractor. Together, they cover everything.
          </p>
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
              <p className="text-lg leading-relaxed" style={{color: 'rgba(255,255,255,0.7)'}}>Built with Manus AI and Claude's research capabilities. Fintech infrastructure and tokenomics for a 2026 launch.</p>
              <button
                onClick={() => { window.scrollTo(0, 0); window.location.href = '/case-studies/lexiusd'; }}
                className="mt-4 px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                style={{backgroundColor: '#0D9488', color: 'white', cursor: 'pointer'}}
              >
                View Project
              </button>
            </div>

            {/* G-Force Token Card — links to internal case study page */}
            <div className="p-8 rounded-2xl hover:shadow-lg transition-all" style={{backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488'}}>
                Finance &amp; Deal Flow
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">GForceToken.com</h3>
              <p className="text-sm font-semibold mb-2" style={{color: '#0D9488'}}>Deal registration & NCNDA protection platform — live and raising capital.</p>
              <p className="text-lg leading-relaxed" style={{color: 'rgba(255,255,255,0.7)'}}>AI-assisted iteration using Claude and Manus turned a real-world frustration into a live deal lifecycle system.</p>
              <button
                onClick={() => { window.scrollTo(0, 0); window.location.href = '/case-studies/gforcetoken'; }}
                className="mt-4 px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                style={{backgroundColor: '#0D9488', color: 'white', cursor: 'pointer'}}
              >
                View Project
              </button>
            </div>

            {/* Family Office / Due Diligence Card */}
            <div className="p-8 rounded-2xl hover:shadow-lg transition-all" style={{backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>
              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488'}}>
                Family Office / Private Capital
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI Due Diligence System</h3>
              <p className="text-sm font-semibold mb-2" style={{color: '#0D9488'}}>47+ public sources · Hours, not months · $106M deal protected.</p>
              <p className="text-lg leading-relaxed" style={{color: 'rgba(255,255,255,0.7)'}}>Built using Claude Projects for persistent knowledge and Manus Wide Research for parallel source analysis.</p>
              <button
                onClick={() => { window.scrollTo(0, 0); window.location.href = '/case-studies/due-diligence'; }}
                className="mt-4 px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                style={{backgroundColor: '#0D9488', color: 'white', cursor: 'pointer'}}
              >
                View Project
              </button>
            </div>

            {/* Legacy Aviation FI Card */}
            <div className="p-8 rounded-2xl hover:shadow-lg transition-all" style={{backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>
              <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide" style={{backgroundColor: 'rgba(13,148,136,0.2)', color: '#0D9488'}}>
                Aviation Finance
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">LegacyAviationFI.com</h3>
              <p className="text-teal-400 font-semibold mb-2 text-sm">1 day. 100 developers couldn't do it in a month.</p>
              <p className="text-lg leading-relaxed" style={{color: 'rgba(255,255,255,0.7)'}}>Global aviation finance &amp; operations platform — built and rebranded in a single day.</p>
              <Link href="/case-studies/legacyaviationfi">
                <button
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-4 px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                  style={{backgroundColor: '#0D9488', color: 'white', cursor: 'pointer'}}
                >
                  View Project
                </button>
              </Link>
            </div>

          </div>
          
          <p className="text-center mt-8 text-base" style={{color: 'rgba(255,255,255,0.6)'}}>Additional projects available under NDA — ask on a call.</p>
          <div className="text-center mt-10">
            <button
              onClick={() => { window.scrollTo(0, 0); window.location.href = '/case-studies'; }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-base transition-all"
              style={{border: '2px solid #0D9488', color: '#0D9488', backgroundColor: 'transparent', cursor: 'pointer'}}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0D9488'; (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#0D9488'; }}
            >
              View All Case Studies →
            </button>
          </div>
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
                href="/#contact"
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
              href="/#contact"
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
            <div className="text-center">
              <div className="text-sm font-bold" style={{color: '#1f2937'}}>Claude</div>
              <div className="text-xs" style={{color: '#6b7280'}}>Projects · Cowork · Code</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold" style={{color: '#1f2937'}}>Manus AI</div>
              <div className="text-xs" style={{color: '#6b7280'}}>Builds · Research · Agents</div>
            </div>
            {['Grok', 'Perplexity', 'Gemini'].map((platform) => (
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

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
