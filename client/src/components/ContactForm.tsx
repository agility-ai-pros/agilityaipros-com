import { useState } from 'react';
import { trpc } from '@/lib/trpc';

const INTEREST_OPTIONS = [
  { value: 'ai-audit', label: 'AI Audit ($997)' },
  { value: 'manus-tutorial', label: 'Manus AI Tutorial (Starts at $997)' },
  { value: 'other', label: 'Other' },
];

type InterestValue = 'ai-audit' | 'manus-tutorial' | 'other';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [smsConsent, setSmsConsent] = useState(true); // pre-checked
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setInterest('');
      setSmsConsent(true);
    },
    onError: (err: { message?: string }) => {
      setError(err.message || 'Something went wrong. Please try again.');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name.trim() || !email.trim() || !phone.trim() || !interest) {
      setError('Please fill in all required fields.');
      return;
    }
    submitContact.mutate({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      interest: interest as InterestValue,
      smsConsent,
    });
  };

  const inputStyle = {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    fontSize: '1rem',
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#0D9488';
    e.target.style.boxShadow = '0 0 0 2px rgba(13,148,136,0.3)';
  };

  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.2)';
    e.target.style.boxShadow = 'none';
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{
          backgroundColor: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: '#0D9488' }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
          Thanks! We'll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-8 md:p-10"
      style={{
        backgroundColor: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
      }}
    >
      <div className="space-y-6">

        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold mb-2"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            Name <span style={{ color: '#0D9488' }}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 outline-none transition-all"
            style={inputStyle}
            onFocus={focusStyle}
            onBlur={blurStyle}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold mb-2"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            Email <span style={{ color: '#0D9488' }}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 outline-none transition-all"
            style={inputStyle}
            onFocus={focusStyle}
            onBlur={blurStyle}
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-semibold mb-2"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            Phone <span style={{ color: '#0D9488' }}>*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (561) 000-0000"
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 outline-none transition-all"
            style={inputStyle}
            onFocus={focusStyle}
            onBlur={blurStyle}
          />
        </div>

        {/* Interest Dropdown */}
        <div>
          <label
            htmlFor="contact-interest"
            className="block text-sm font-semibold mb-2"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            What are you interested in? <span style={{ color: '#0D9488' }}>*</span>
          </label>
          <select
            id="contact-interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full px-4 py-3 rounded-lg outline-none transition-all appearance-none cursor-pointer"
            style={{
              ...inputStyle,
              color: interest ? 'white' : 'rgba(255,255,255,0.45)',
            }}
            onFocus={focusStyle}
            onBlur={blurStyle}
          >
            <option value="" disabled style={{ backgroundColor: '#1B3A6B', color: 'rgba(255,255,255,0.5)' }}>
              Select a service...
            </option>
            {INTEREST_OPTIONS.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                style={{ backgroundColor: '#1B3A6B', color: 'white' }}
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* SMS Consent Checkbox */}
        <div
          className="flex items-start gap-3 p-4 rounded-lg cursor-pointer"
          style={{ backgroundColor: 'rgba(13,148,136,0.12)', border: '1px solid rgba(13,148,136,0.3)' }}
          onClick={() => setSmsConsent(!smsConsent)}
        >
          {/* Custom checkbox */}
          <div
            className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center mt-0.5 transition-all"
            style={{
              backgroundColor: smsConsent ? '#0D9488' : 'rgba(255,255,255,0.1)',
              border: smsConsent ? '2px solid #0D9488' : '2px solid rgba(255,255,255,0.3)',
            }}
          >
            {smsConsent && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <polyline
                  points="2 6 5 9 10 3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <p className="text-sm leading-relaxed select-none" style={{ color: 'rgba(255,255,255,0.85)' }}>
            I agree to receive SMS messages from Agility AI Pros regarding my inquiry and relevant offers. Message & data rates may apply. Reply STOP to unsubscribe at any time.
          </p>
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm" style={{ color: '#f87171' }}>
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitContact.isPending}
          className="w-full py-4 rounded-lg font-bold text-lg text-white transition-all"
          style={{
            backgroundColor: submitContact.isPending ? 'rgba(13,148,136,0.6)' : '#0D9488',
            cursor: submitContact.isPending ? 'not-allowed' : 'pointer',
          }}
          onMouseEnter={(e) => {
            if (!submitContact.isPending) {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0f766e';
            }
          }}
          onMouseLeave={(e) => {
            if (!submitContact.isPending) {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0D9488';
            }
          }}
        >
          {submitContact.isPending ? 'Sending...' : "Let's Talk"}
        </button>
      </div>
    </form>
  );
}
