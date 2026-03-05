import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

const LOGO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/logo_v3_circuit_9d608489.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = 'https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20connect%20about%20AI%20services.';

  return (
    <nav className="nav-sticky border-b border-border-gray">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={LOGO_IMAGE} alt="PatrickDanielAi" className="h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <span className="text-dark-text hover:text-teal transition-colors cursor-pointer">Home</span>
            </Link>
            <Link href="/services">
              <span className="text-dark-text hover:text-teal transition-colors cursor-pointer">Services</span>
            </Link>
            <Link href="/about">
              <span className="text-dark-text hover:text-teal transition-colors cursor-pointer">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-dark-text hover:text-teal transition-colors cursor-pointer">Contact</span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary text-sm"
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
          <div className="md:hidden pb-4 border-t border-border-gray">
            <Link href="/">
              <span className="block py-2 text-dark-text hover:text-teal cursor-pointer">Home</span>
            </Link>
            <Link href="/services">
              <span className="block py-2 text-dark-text hover:text-teal cursor-pointer">Services</span>
            </Link>
            <Link href="/about">
              <span className="block py-2 text-dark-text hover:text-teal cursor-pointer">About</span>
            </Link>
            <Link href="/contact">
              <span className="block py-2 text-dark-text hover:text-teal cursor-pointer">Contact</span>
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 cta-primary text-center"
            >
              Connect on WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
