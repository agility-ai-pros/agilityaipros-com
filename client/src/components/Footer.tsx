import { Link } from 'wouter';
import { Linkedin } from 'lucide-react';

const LOGO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/logo_v3_circuit_9d608489.png';

export default function Footer() {
  return (
    <footer className="navy-section py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={LOGO_IMAGE} alt="PatrickDanielAi" className="h-10 w-auto mb-4" />
            <p className="text-white/70 text-sm">AI Business Services</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/">
                <span className="text-white/70 hover:text-teal transition-colors cursor-pointer text-sm">Home</span>
              </Link>
              <Link href="/services">
                <span className="text-white/70 hover:text-teal transition-colors cursor-pointer text-sm">Services</span>
              </Link>
              <Link href="/about">
                <span className="text-white/70 hover:text-teal transition-colors cursor-pointer text-sm">About</span>
              </Link>
              <Link href="/contact">
                <span className="text-white/70 hover:text-teal transition-colors cursor-pointer text-sm">Contact</span>
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <a
              href="https://www.linkedin.com/in/patrickdanielm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-teal transition-colors"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/50 text-sm text-center">
            © 2026 Patrick Daniel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
