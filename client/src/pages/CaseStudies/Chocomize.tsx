import { Link } from 'wouter';

import { useEffect } from 'react';

export default function Chocomize() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-[#0e1d3a] to-[#142a52] text-white relative overflow-hidden py-28">
        <div className="absolute right-[-180px] top-[-120px] w-[520px] h-[520px] rounded-full bg-radial-gradient opacity-20 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-7 relative z-10">
          {/* Breadcrumbs */}
          <div className="text-xs tracking-widest text-white/55 uppercase mb-7">
            <Link href="/case-studies" className="text-white/75 hover:text-white">Case Studies</Link>
            {' '}/ 2x Booked Consults from Same Ad Spend
          </div>

          {/* Label */}
          <span className="inline-block text-xs tracking-wider text-teal-500 uppercase border-l-4 border-teal-500 pl-2.5 mb-6">
            Case Study
          </span>

          {/* Category Tags */}
          <div className="inline-block bg-teal-500/18 text-teal-500 text-xs tracking-wider uppercase px-3.5 py-1.5 rounded mb-6">
            Lead Nurture · Wellness & Med Spa · Email Automation
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl font-bold leading-tight mb-6 max-w-4xl tracking-tight">
            Doubling weekly booked consults from the <span className="text-teal-500">same ad spend</span>.
          </h1>

          {/* Hero Subtitle */}
          <p className="text-lg leading-relaxed text-white/78 max-w-2xl mb-9">
            A growing California wellness studio was running effective Meta ads — but only 18% of leads were actually booking. After a single generic auto-reply, prospects went silent. We mapped the post-form gap, designed a two-stage email nurture system, and lifted the conversion rate to 37% — without changing a single dollar of ad spend.
          </p>

          {/* Client Pill */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4.5 py-3 rounded-full text-white/90 text-sm mb-9">
            <span className="w-7 h-7 rounded-full bg-teal-500 text-navy-900 flex items-center justify-center font-bold text-xs">UC</span>
            <span>Client: <strong>US Cryotherapy</strong> — Walnut Creek, California (recovery & wellness facility)</span>
          </div>

          {/* Meta Row */}
          <div className="grid grid-cols-4 gap-0 border-t border-b border-white/10 py-6 mt-3.5">
            <div className="px-6 pr-6 border-r border-white/10">
              <div className="text-xs text-white/55 tracking-wider uppercase mb-1.5">Industry</div>
              <div className="text-sm text-white font-medium">Wellness / Recovery / Med Spa</div>
            </div>
            <div className="px-6 border-r border-white/10">
              <div className="text-xs text-white/55 tracking-wider uppercase mb-1.5">Challenge</div>
              <div className="text-sm text-white font-medium">18% lead-to-book conversion ceiling</div>
            </div>
            <div className="px-6 border-r border-white/10">
              <div className="text-xs text-white/55 tracking-wider uppercase mb-1.5">AI Role</div>
              <div className="text-sm text-white font-medium">Two-stage automated email nurture</div>
            </div>
            <div className="px-6">
              <div className="text-xs text-white/55 tracking-wider uppercase mb-1.5">Result</div>
              <div className="text-sm text-white font-medium">2× bookings · same ad spend · zero new leads needed</div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-7">
          <span className="inline-block text-xs tracking-wider text-teal-500 uppercase border-l-4 border-teal-500 pl-2.5 mb-5">
            The Problem
          </span>
          <h2 className="text-4xl font-bold mb-5 tracking-tight">The ads were working. The follow-up wasn't.</h2>
          
          <p className="text-lg leading-relaxed text-slate-700 max-w-2xl mb-6">
            The studio was already running a Meta ads campaign that delivered consistent leads every week. Forms were getting filled out, leads were landing in the list, ad spend was producing real intent. From the outside it looked like a healthy funnel — until you measured what happened next.
          </p>
          
          <p className="text-lg leading-relaxed text-slate-700 max-w-2xl mb-6">
            Only 18% of leads were actually booking the free consultation they'd raised their hand for. Once a prospect filled out the form, they got a single generic confirmation email, and then nothing. No nudge. No reminder. No reason to come back. The leads weren't cold — they had self-identified as warm five minutes earlier — but the silence after the form turned them cold within hours.
          </p>
          
          <p className="text-lg leading-relaxed text-slate-700 max-w-2xl">
            The owner's instinct was understandable: <em>"the ads must not be working — let's adjust targeting, change creative, increase spend."</em> That's the default move. It's almost always the wrong one.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-4 gap-5 mt-14">
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <div className="text-4xl font-bold text-navy-900 leading-tight">18<span className="text-teal-500">%</span></div>
              <div className="text-sm text-slate-600 mt-2">Lead-to-booked-consult conversion rate before nurture</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <div className="text-4xl font-bold text-navy-900 leading-tight">5–10</div>
              <div className="text-sm text-slate-600 mt-2">Booked consultations per week — flat across the funnel</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <div className="text-4xl font-bold text-navy-900 leading-tight">1</div>
              <div className="text-sm text-slate-600 mt-2">Generic confirmation email — and that was the entire post-form experience</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <div className="text-4xl font-bold text-navy-900 leading-tight">0</div>
              <div className="text-sm text-slate-600 mt-2">Follow-up touches sent after the confirmation email</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-7">
          <span className="inline-block text-xs tracking-wider text-teal-500 uppercase border-l-4 border-teal-500 pl-2.5 mb-5">
            The Solution
          </span>
          <h2 className="text-4xl font-bold mb-5 tracking-tight">A two-stage nurture system: educate first, re-engage second.</h2>
          
          <p className="text-lg leading-relaxed text-slate-700 max-w-2xl mb-6">
            The problem wasn't the ads. The problem was the gap after the form. We designed a two-stage email sequence that ran automatically after every form submission:
          </p>

          {/* Before/After Grid */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            {/* Before */}
            <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
              <h3 className="text-sm tracking-wider font-bold text-red-700 uppercase mb-5">Before</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-base text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">✗</span>
                  <span>Single generic confirmation email</span>
                </li>
                <li className="flex gap-3 text-base text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">✗</span>
                  <span>No follow-up sequence</span>
                </li>
                <li className="flex gap-3 text-base text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">✗</span>
                  <span>Leads go cold within hours</span>
                </li>
                <li className="flex gap-3 text-base text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">✗</span>
                  <span>18% conversion to booked consult</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-green-50 border border-green-200 rounded-3xl p-8">
              <h3 className="text-sm tracking-wider font-bold text-green-700 uppercase mb-5">After</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-base text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">✓</span>
                  <span>Stage 1: Educational email (benefits of recovery)</span>
                </li>
                <li className="flex gap-3 text-base text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">✓</span>
                  <span>Stage 2: Re-engagement email (limited-time offer)</span>
                </li>
                <li className="flex gap-3 text-base text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">✓</span>
                  <span>Automated, personalized, and always on</span>
                </li>
                <li className="flex gap-3 text-base text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">✓</span>
                  <span>37% conversion to booked consult</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <h3 className="text-2xl font-bold mb-8">The Results</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-8">
                <div className="text-3xl font-bold text-teal-500 mb-2">2×</div>
                <div className="text-base text-slate-700">Booked consults per week (from 5–10 to 10–20)</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-8">
                <div className="text-3xl font-bold text-teal-500 mb-2">37%</div>
                <div className="text-base text-slate-700">Lead-to-book conversion rate (up from 18%)</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-8">
                <div className="text-3xl font-bold text-teal-500 mb-2">$0</div>
                <div className="text-base text-slate-700">Additional ad spend required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-7">
          <div className="bg-gradient-to-r from-teal-500/8 to-transparent border-l-4 border-teal-500 rounded-r-2xl p-9">
            <p className="text-2xl leading-relaxed text-slate-900 italic mb-4">
              "We were spending thousands on ads and only converting 18% of leads. Patrick showed us the real problem wasn't the ads — it was what happened after. The two-stage email system has been running for three months now, and we're consistently booking double the consults from the same ad spend. This is the kind of leverage every wellness studio needs."
            </p>
            <div className="text-sm text-slate-600">Owner, US Cryotherapy — Walnut Creek, CA</div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-7">
          <h2 className="text-4xl font-bold mb-8 tracking-tight">Why This Matters</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-teal-500 rounded-r-2xl p-8">
              <p className="text-base leading-relaxed text-slate-700 mb-4">
                <strong>For wellness studios and med spas:</strong> Most of your marketing budget goes to paid ads. But if your follow-up is broken, you're throwing money away. A two-stage nurture system costs almost nothing to run, but it can double your bookings without increasing ad spend.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                This is the kind of AI-powered leverage that separates studios that grow and studios that stay flat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white text-center">
        <div className="max-w-2xl mx-auto px-7">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Is your follow-up <span className="text-teal-500">leaving money on the table?</span>
          </h2>
          <p className="text-lg text-white/75 mb-8">
            Book an AI Roadmap Session to map your workflow, identify your biggest bottlenecks, and design a clear 90-day implementation plan.
          </p>
          <a href="#" className="inline-block bg-teal-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-base tracking-wide hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Book Your AI Roadmap Session — $997
          </a>
          <div className="text-sm text-white/50 mt-5">
            Most clients identify $2,000–$5,000/month in recoverable value in the first session.
          </div>
        </div>
      </section>
    </div>
  );
}
