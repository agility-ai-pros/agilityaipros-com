import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="hero-section navy-section text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Talk.</h1>
          <p className="text-white/90 text-lg">No pitch. Just a conversation about what AI can do for your business right now.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding" style={{backgroundColor: '#1B3A6B'}}>
        <div className="container max-w-2xl">
          <ContactForm />

          <div className="mt-12 pt-8" style={{borderTop: '1px solid rgba(255,255,255,0.15)'}}>
            <h3 className="text-lg font-bold text-white mb-4">Other ways to connect:</h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/patrickdanielm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors"
                style={{color: '#0D9488'}}
              >
                <Linkedin size={20} />
                <span className="font-semibold">LinkedIn</span>
              </a>
              <p className="text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>I respond within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
