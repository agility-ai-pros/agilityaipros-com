import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  // wouter v3 returns a tuple: [locationString, setLocationFn]
  const [location] = useLocation();

  const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20an%20AI%20Roadmap%20Session.';

  const navLinks = [
    { href: '/', label: 'Home', isPage: true },
    { href: '/about', label: 'About', isPage: true },
    { href: '/ai-roadmap', label: 'AI Roadmap', isPage: true },
    { href: '/automation-offers', label: 'Automation Offers', isPage: true },
    { href: '/case-studies', label: 'Case Studies', isPage: true },
    { href: '/faq', label: 'FAQ', isPage: true },
  ];

  // Returns true if this nav link should be highlighted as active
  function isActive(href: string): boolean {
    if (href === '/case-studies') {
      // Active for the index page AND all detail pages under /case-studies/
      return location === '/case-studies' || location.startsWith('/case-studies/');
    }
    // Exact match for all other links
    return location === href;
  }

  return (
    <nav className="sticky top-0 z-50 bg-white" style={{borderBottom: '1px solid #e5e7eb'}}>
      <div className="container">
        <div className="flex items-center justify-between h-14 md:h-16 overflow-visible">
          {/* Logo */}
          <Link href="/">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/39988e50-1da3-11f1-b583-373c1aaf1f7a_9c284c6b.png" alt="Agility AI Pros" className="flex-shrink-0" style={{height: '45px', width: 'auto', cursor: 'pointer'}} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const hovered = hoveredLink === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <button
                    className="cursor-pointer transition-colors relative"
                    style={{
                      color: active || hovered ? '#0D9488' : '#1f2937',
                      fontWeight: active ? 600 : 500,
                      background: 'none',
                      border: 'none',
                      padding: '4px 0',
                      // Teal underline for active link
                      borderBottom: active ? '2px solid #0D9488' : '2px solid transparent',
                      marginBottom: '-2px', // prevent layout shift from border
                    }}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                  </button>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-white rounded-lg font-semibold text-sm transition-all whitespace-nowrap inline-block"
              style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
            >
              Get Your AI Roadmap
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4" style={{borderTop: '1px solid #e5e7eb'}}>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link key={link.href} href={link.href}>
                  <button
                    className="block w-full text-left py-3 cursor-pointer"
                    style={{
                      color: active ? '#0D9488' : '#1f2937',
                      fontWeight: active ? 600 : 500,
                      background: 'none',
                      border: 'none',
                      padding: '12px 0',
                      // Left border accent for active link on mobile
                      borderLeft: active ? '3px solid #0D9488' : '3px solid transparent',
                      paddingLeft: active ? '10px' : '0',
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </button>
                </Link>
              );
            })}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-6 py-3 text-white text-center rounded-lg font-semibold transition-all"
              style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
              onClick={() => setIsOpen(false)}
            >
              Get Your AI Roadmap
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
