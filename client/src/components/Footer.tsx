import { useState } from 'react';
import { Link } from 'wouter';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/ai-roadmap', label: 'AI Roadmap' },
    { href: '/automation-offers', label: 'Automation Offers' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/faq', label: 'FAQ' },
  ];

  const serviceLinks = [
    { href: '/ai-roadmap', label: 'AI Roadmaps and Strategy' },
    { href: '/', label: 'AI Operating System Setup' },
    { href: '/automation-offers', label: 'Custom AI Automations & Builds' },
    { href: '/', label: 'Multi-LLM Deep Research' },
  ];

  return (
    <footer style={{backgroundColor: '#1B3A6B', color: 'white'}} className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/agility_ai_pros_logo_white_v2_ec09ed28.png" alt="Agility AI Pros" className="w-full max-w-[240px]" style={{height: 'auto', marginBottom: '16px'}} />
            <p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.7)'}}>
              AI Business Services. Fast, focused, and built to deliver real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{color: 'white'}}>Navigation</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="block cursor-pointer text-sm transition-colors"
                    style={{
                      color: hoveredLink === link.href ? '#0D9488' : 'rgba(255,255,255,0.7)',
                    }}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{color: 'white'}}>Services</h4>
            <div className="space-y-3">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="block cursor-pointer text-sm transition-colors"
                    style={{
                      color: hoveredLink === link.href ? '#0D9488' : 'rgba(255,255,255,0.7)',
                    }}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{color: 'white'}}>Connect</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/patrickdanielm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors"
                style={{color: 'rgba(255,255,255,0.7)', cursor: 'pointer'}}
              >
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <br />
              <a
                href="https://wa.me/15615630947"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm transition-colors hover:text-teal-400"
                style={{color: 'rgba(255,255,255,0.7)'}}
              >
                Contact
              </a>
            </div>
            <p className="text-sm mt-4" style={{color: 'rgba(255,255,255,0.7)'}}>I respond within 24 hours.</p>
          </div>
        </div>

        <div style={{borderTop: '1px solid rgba(255,255,255,0.1)'}} className="pt-8">
          <p className="text-sm text-center" style={{color: 'rgba(255,255,255,0.5)'}}>
            © 2026 Agility AI Pros. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
