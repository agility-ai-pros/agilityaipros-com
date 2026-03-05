import { Link } from 'wouter';
import { Linkedin } from 'lucide-react';

const LOGO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663309158428/cnrafRbpmoLfeKqyJTjWuU/logo_clean-7Jdsu4zbA2hqJ9UJM3vuGx.webp';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={LOGO_IMAGE} alt="PatrickDanielAi" className="h-8 w-auto mb-6" />
            <p className="text-white/70 text-sm leading-relaxed">
              AI Business Services. Fast, focused, and built to deliver real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Navigation</h4>
            <div className="space-y-3">
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

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Services</h4>
            <div className="space-y-3">
              <p className="text-white/70 text-sm">Market Research & Copy</p>
              <p className="text-white/70 text-sm">Manus AI Websites</p>
              <p className="text-white/70 text-sm">Multi-LLM Research</p>
              <p className="text-white/70 text-sm">AI Training Sessions</p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Connect</h4>
            <a
              href="https://www.linkedin.com/in/patrickdanielm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-teal transition-colors mb-6"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <p className="text-white/70 text-sm">I respond within 24 hours.</p>
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
