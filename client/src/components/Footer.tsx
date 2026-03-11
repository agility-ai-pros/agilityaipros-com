import { useState } from 'react';
import { Link } from 'wouter';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer style={{backgroundColor: '#1B3A6B', color: 'white'}} className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/39988e50-1da3-11f1-b583-373c1aaf1f7a_9c284c6b.png" alt="Agility AI Pros" style={{height: '100px', width: 'auto', marginBottom: '24px'}} />
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
                    className="cursor-pointer text-sm transition-colors"
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
              <p className="text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>Market Research & Copy</p>
              <p className="text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>Manus AI Websites</p>
              <p className="text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>Multi-LLM Research</p>
              <p className="text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>AI Training Sessions</p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{color: 'white'}}>Connect</h4>
            <a
              href="https://www.linkedin.com/in/patrickdanielm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors mb-6"
              style={{color: 'rgba(255,255,255,0.7)', cursor: 'pointer'}}
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <p className="text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>I respond within 24 hours.</p>
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
