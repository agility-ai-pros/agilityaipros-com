import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20connect%20about%20AI%20services.';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white" style={{borderBottom: '1px solid #e5e7eb'}}>
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Text Based */}
          <Link href="/">
            <div className="cursor-pointer" style={{fontSize: '18px', fontWeight: 'bold'}}>
              <span style={{color: '#1B3A6B'}}>Agility</span>
              <span style={{color: '#0D9488'}}>AiPros</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="cursor-pointer font-medium transition-colors"
                  style={{
                    color: hoveredLink === link.href ? '#0D9488' : '#1f2937',
                  }}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-white rounded-lg font-semibold text-sm transition-all"
              style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
            >
              Connect on WhatsApp
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
              <Link key={link.href} href={link.href}>
                <span className="block py-3 cursor-pointer font-medium" style={{color: '#1f2937'}}>
                  {link.label}
                </span>
              </Link>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-6 py-3 text-white text-center rounded-lg font-semibold transition-all"
              style={{backgroundColor: '#0D9488', cursor: 'pointer'}}
            >
              Connect on WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
