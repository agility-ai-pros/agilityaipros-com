import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20an%20AI%20Roadmap%20Session.';

  const navLinks = [
    { href: '#home', label: 'Home', onClick: () => scrollToSection('home') },
    { href: '#about', label: 'About', onClick: () => scrollToSection('about') },
    { href: '#roadmap', label: 'AI Roadmap', onClick: () => scrollToSection('roadmap') },
    { href: '#services', label: 'Services', onClick: () => scrollToSection('services') },
    { href: '#case-studies', label: 'Case Studies', onClick: () => scrollToSection('case-studies') },
    { href: '#faq', label: 'FAQ', onClick: () => scrollToSection('faq') },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white" style={{borderBottom: '1px solid #e5e7eb'}}>
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20 overflow-visible">
          {/* Logo - Brain Icon with Text */}
          <Link href="/">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/39988e50-1da3-11f1-b583-373c1aaf1f7a_9c284c6b.png" alt="Agility AI Pros" className="flex-shrink-0" style={{height: '60px', width: 'auto', cursor: 'pointer'}} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={link.onClick}
                className="cursor-pointer font-medium transition-colors"
                style={{
                  color: hoveredLink === link.href ? '#0D9488' : '#1f2937',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
              </button>
            ))}
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
              Book Session
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
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={link.onClick}
                className="block w-full text-left py-3 cursor-pointer font-medium"
                style={{color: '#1f2937', background: 'none', border: 'none', padding: '12px 0'}}
              >
                {link.label}
              </button>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-6 py-3 text-white text-center rounded-lg font-semibold transition-all"
              style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
            >
              Book Session
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
