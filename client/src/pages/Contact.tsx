import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:patrick@patrickdanielai.com?subject=New Inquiry from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DService: ${formData.service}%0D%0DMessage:%0D${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="hero-section navy-section text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Talk.</h1>
          <p className="text-white/90 text-lg">Free conversation. No pitch. Just a discussion about what AI can do for your business right now.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">What do you need help with?</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              >
                <option value="">Select a service</option>
                <option value="Copy & Research">Copy & Research</option>
                <option value="Manus AI Session">Manus AI Session</option>
                <option value="Website Build">Website Build</option>
                <option value="Deep Research">Deep Research</option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark-text mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal resize-none"
                placeholder="Tell me about your project or question..."
              />
            </div>

            <button
              type="submit"
              className="w-full cta-primary py-3 text-base"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border-gray">
            <h3 className="text-lg font-bold text-dark-text mb-4">Other ways to connect:</h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/patrickdanielm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal hover:text-teal/80 transition-colors"
              >
                <Linkedin size={20} />
                <span className="font-semibold">LinkedIn</span>
              </a>
              <p className="text-gray-600 text-sm">I respond within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
