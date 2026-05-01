import { useEffect } from 'react';

const styles = `
  :root {
    --navy: #0e1d3a;
    --navy-2: #142a52;
    --navy-3: #1a3464;
    --teal: #1cb5b8;
    --teal-2: #14a3a6;
    --teal-soft: #e7f8f8;
    --ink: #0e1d3a;
    --ink-2: #2a3a5e;
    --ink-3: #5a6a8a;
    --line: #e1e7f0;
    --bg-soft: #f7f9fc;
    --white: #ffffff;
    --good: #16a34a;
    --bad: #dc2626;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: var(--ink);
    background: var(--white);
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
  }
  a { color: var(--teal); text-decoration: none; }
  .wrap { max-width: 1120px; margin: 0 auto; padding: 0 28px; }
  .narrow { max-width: 860px; margin: 0 auto; padding: 0 28px; }
  /* ---------- HERO ---------- */
  .hero {
    background: linear-gradient(180deg, var(--navy) 0%, var(--navy-2) 100%);
    color: var(--white);
    position: relative;
    overflow: hidden;
    padding: 28px 0 80px;
  }
  .hero::after {
    content: "";
    position: absolute;
    right: -180px;
    top: -120px;
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(28,181,184,0.18) 0%, rgba(28,181,184,0) 65%);
    pointer-events: none;
  }
  .crumbs {
    font-size: 12px;
    letter-spacing: 1.5px;
    color: rgba(255,255,255,0.55);
    text-transform: uppercase;
    margin-bottom: 28px;
  }
  .crumbs a { color: rgba(255,255,255,0.75); }
  .label {
    display: inline-block;
    font-size: 11px;
    letter-spacing: 2px;
    color: var(--teal);
    text-transform: uppercase;
    border-left: 3px solid var(--teal);
    padding-left: 10px;
    margin-bottom: 22px;
  }
  .cat-tags {
    display: inline-block;
    background: rgba(28,181,184,0.18);
    color: var(--teal);
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 7px 14px;
    border-radius: 4px;
    margin-bottom: 22px;
  }
  h1.hero-h1 {
    font-size: 54px;
    line-height: 1.08;
    font-weight: 700;
    margin: 0 0 22px;
    max-width: 920px;
    letter-spacing: -0.5px;
  }
  h1.hero-h1 .accent { color: var(--teal); }
  .hero-sub {
    font-size: 18px;
    line-height: 1.6;
    color: rgba(255,255,255,0.78);
    max-width: 720px;
    margin: 0 0 36px;
  }
  .client-pill {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.10);
    padding: 12px 18px;
    border-radius: 999px;
    color: rgba(255,255,255,0.9);
    font-size: 14px;
    margin-bottom: 36px;
  }
  .client-pill .dot {
    width: 28px; height: 28px; border-radius: 50%;
    background: var(--teal); color: var(--navy);
    display: inline-flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 12px;
  }
  /* ---------- METADATA ROW ---------- */
  .meta-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    border-top: 1px solid rgba(255,255,255,0.10);
    border-bottom: 1px solid rgba(255,255,255,0.10);
    padding: 22px 0;
    margin-top: 14px;
  }
  .meta-cell { padding: 0 22px; border-right: 1px solid rgba(255,255,255,0.10); }
  .meta-cell:last-child { border-right: none; }
  .meta-cell:first-child { padding-left: 0; }
  .meta-label {
    font-size: 11px;
    color: rgba(255,255,255,0.55);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .meta-value { font-size: 15px; color: var(--white); font-weight: 500; }
  /* ---------- SECTIONS ---------- */
  section { padding: 90px 0; }
  section.alt { background: var(--bg-soft); }
  h2.section-h {
    font-size: 38px;
    font-weight: 700;
    line-height: 1.15;
    color: var(--ink);
    margin: 0 0 18px;
    letter-spacing: -0.3px;
  }
  .eyebrow {
    display: inline-block;
    font-size: 11px;
    letter-spacing: 2px;
    color: var(--teal);
    text-transform: uppercase;
    border-left: 3px solid var(--teal);
    padding-left: 10px;
    margin-bottom: 18px;
  }
  .lede {
    font-size: 17px;
    line-height: 1.7;
    color: var(--ink-2);
    max-width: 760px;
  }
  .lede + .lede { margin-top: 20px; }
  /* ---------- METRICS ---------- */
  .metrics {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-top: 56px;
  }
  .metric {
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 26px 22px;
    box-shadow: 0 1px 0 rgba(14,29,58,0.02);
  }
  .metric .num {
    font-size: 36px;
    font-weight: 700;
    color: var(--navy);
    line-height: 1.1;
    letter-spacing: -0.5px;
  }
  .metric .num .unit { color: var(--teal); }
  .metric .lbl {
    font-size: 13px;
    color: var(--ink-3);
    margin-top: 8px;
    line-height: 1.45;
  }
  /* ---------- BEFORE / AFTER ---------- */
  .ba-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;
    margin-top: 44px;
  }
  .ba-card {
    border-radius: 14px;
    padding: 32px 30px;
  }
  .ba-card.before {
    background: #fdf4f3;
    border: 1px solid #f3d6d3;
  }
  .ba-card.after {
    background: #ecfaf6;
    border: 1px solid #c8ecdf;
  }
  .ba-card h3 {
    margin: 0 0 18px;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .before h3 { color: #b3403a; }
  .after h3 { color: #16704f; }
  .ba-card ul { margin: 0; padding: 0; list-style: none; }
  .ba-card li {
    display: flex;
    gap: 12px;
    padding: 10px 0;
    font-size: 15px;
    line-height: 1.5;
    color: var(--ink-2);
    border-bottom: 1px dashed rgba(0,0,0,0.06);
  }
  .ba-card li:last-child { border-bottom: none; }
  .ba-card li .icon {
    width: 22px; height: 22px;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 700;
    margin-top: 1px;
  }
  .before li .icon { background: #fad7d4; color: #b3403a; }
  .after li .icon { background: #c8ecdf; color: #16704f; }
  /* ---------- CAPABILITIES GRID ---------- */
  .cap-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-top: 44px;
  }
  .cap {
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 26px 24px;
  }
  .cap .cap-num {
    font-size: 11px;
    color: var(--teal);
    letter-spacing: 2px;
    margin-bottom: 12px;
    font-weight: 700;
  }
  .cap h4 {
    margin: 0 0 10px;
    font-size: 17px;
    color: var(--ink);
    line-height: 1.3;
  }
  .cap p {
    margin: 0;
    font-size: 14px;
    color: var(--ink-3);
    line-height: 1.55;
  }
  /* ---------- QUOTE ---------- */
  .quote-block {
    margin: 56px 0 0;
    padding: 32px 36px;
    background: linear-gradient(90deg, rgba(28,181,184,0.08) 0%, rgba(28,181,184,0) 80%);
    border-left: 4px solid var(--teal);
    border-radius: 0 12px 12px 0;
  }
  .quote-block .q {
    font-size: 22px;
    line-height: 1.5;
    color: var(--ink);
    font-style: italic;
    margin: 0 0 14px;
  }
  .quote-block .attrib {
    font-size: 13px;
    color: var(--ink-3);
    letter-spacing: 0.5px;
  }
  /* ---------- DIAGRAM CARD ---------- */
  .diagram-card {
    background: var(--navy);
    border-radius: 16px;
    padding: 36px;
    margin-top: 44px;
    color: var(--white);
  }
  .diagram-card .d-eyebrow {
    color: var(--teal);
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .diagram-card .d-title {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 24px;
  }
  .diagram-card svg { width: 100%; height: auto; display: block; }
  /* ---------- WHY MATTERS ---------- */
  .why-block {
    background: var(--white);
    border: 1px solid var(--line);
    border-left: 4px solid var(--teal);
    border-radius: 0 14px 14px 0;
    padding: 32px 36px;
    margin-top: 32px;
  }
  .why-block p { margin: 0 0 14px; font-size: 16px; color: var(--ink-2); line-height: 1.7; }
  .why-block p:last-child { margin-bottom: 0; }
  /* ---------- VISUAL: NO-SHOW BAR ---------- */
  .compare-card {
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 36px;
    margin-top: 44px;
    box-shadow: 0 8px 32px rgba(14,29,58,0.06);
  }
  /* ---------- CTA ---------- */
  .cta {
    background: linear-gradient(180deg, var(--navy-2) 0%, var(--navy) 100%);
    color: var(--white);
    text-align: center;
    padding: 90px 24px;
  }
  .cta h2 {
    font-size: 38px;
    margin: 0 0 14px;
    font-weight: 700;
    letter-spacing: -0.3px;
  }
  .cta h2 .accent { color: var(--teal); }
  .cta p {
    color: rgba(255,255,255,0.75);
    max-width: 620px;
    margin: 0 auto 28px;
    font-size: 17px;
    line-height: 1.6;
  }
  .btn {
    display: inline-block;
    background: var(--teal);
    color: var(--navy);
    padding: 16px 32px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.3px;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(28,181,184,0.35);
  }
  .btn-sub { color: rgba(255,255,255,0.5); font-size: 13px; margin-top: 18px; }
  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 920px) {
    h1.hero-h1 { font-size: 38px; }
    h2.section-h { font-size: 28px; }
    .meta-row { grid-template-columns: repeat(2, 1fr); }
    .meta-cell { border-right: none; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .metrics { grid-template-columns: repeat(2, 1fr); }
    .ba-grid { grid-template-columns: 1fr; }
    .cap-grid { grid-template-columns: 1fr; }
    section { padding: 60px 0; }
  }
`;

const htmlContent = `<header class="hero">
  <div class="wrap">
    <div class="crumbs"><a href="/case-studies">Case Studies</a> &nbsp;/&nbsp; 2x Booked Consults from Same Ad Spend</div>
    <span class="label">Case Study</span>
    <div><span class="cat-tags">Lead Nurture · Wellness &amp; Med Spa · Email Automation</span></div>

    <h1 class="hero-h1">Doubling weekly booked consults from the <span class="accent">same ad spend</span>.</h1>
    <p class="hero-sub">
      A growing California wellness studio was running effective Meta ads — but only 18% of
      leads were actually booking. After a single generic auto-reply, prospects went silent.
      We mapped the post-form gap, designed a two-stage email nurture system, and lifted the
      conversion rate to 37% — without changing a single dollar of ad spend.
    </p>

    <div class="client-pill">
      <span class="dot">UC</span>
      <span>Client: <strong>US Cryotherapy</strong> — Walnut Creek, California (recovery &amp; wellness facility)</span>
    </div>

    <div class="meta-row">
      <div class="meta-cell"><div class="meta-label">Industry</div><div class="meta-value">Wellness / Recovery / Med Spa</div></div>
      <div class="meta-cell"><div class="meta-label">Challenge</div><div class="meta-value">18% lead-to-book conversion ceiling</div></div>
      <div class="meta-cell"><div class="meta-label">AI Role</div><div class="meta-value">Two-stage automated email nurture</div></div>
      <div class="meta-cell"><div class="meta-label">Result</div><div class="meta-value">2× bookings · same ad spend · zero new leads needed</div></div>
    </div>
  </div>
</header>

<section>
  <div class="wrap">
    <span class="eyebrow">The Problem</span>
    <h2 class="section-h">The ads were working. The follow-up wasn't.</h2>
    <p class="lede">
      The studio was already running a Meta ads campaign that delivered consistent leads
      every week. Forms were getting filled out, leads were landing in the list, ad spend
      was producing real intent. From the outside it looked like a healthy funnel — until
      you measured what happened next.
    </p>
    <p class="lede">
      Only 18% of leads were actually booking the free consultation they'd raised their hand
      for. Once a prospect filled out the form, they got a single generic confirmation email,
      and then nothing. No nudge. No reminder. No reason to come back. The leads weren't
      cold — they had self-identified as warm five minutes earlier — but the silence after
      the form turned them cold within hours.
    </p>
    <p class="lede">
      The owner's instinct was understandable: <em>"the ads must not be working — let's adjust
      targeting, change creative, increase spend."</em> That's the default move. It's almost
      always the wrong one.
    </p>

    <div class="metrics">
      <div class="metric"><div class="num">18<span class="unit">%</span></div><div class="lbl">Lead-to-booked-consult conversion rate before nurture</div></div>
      <div class="metric"><div class="num">5–10</div><div class="lbl">Booked consultations per week — flat across the funnel</div></div>
      <div class="metric"><div class="num">1</div><div class="lbl">Generic confirmation email — and that was the entire post-form experience</div></div>
      <div class="metric"><div class="num">0</div><div class="lbl">Follow-up touches sent after the confirmation email</div></div>
    </div>
  </div>
</section>

<section class="alt">
  <div class="wrap">
    <span class="eyebrow">The Solution</span>
    <h2 class="section-h">A two-stage nurture system: educate first, re-engage second.</h2>
    <p class="lede">
      We mapped the post-form lead journey and designed a two-stage automated email nurture.
      Stage one carries the warm leads through a structured introduction to the practice.
      Stage two re-engages the leads who didn't book the first time — without nagging them.
      The whole system runs on autopilot, but the messaging is anything but generic.
    </p>
    <p class="lede">
      Stage one is a <strong>5-part welcome sequence</strong> designed to do three things in
      sequence: educate the lead on what cryotherapy actually does, build trust by sharing
      the practice's approach and credentials, and address the most common objections
      (price, time commitment, "is this for me?") before they become silent dealbreakers.
    </p>
    <p class="lede">
      Stage two is a <strong>4-part nurture sequence</strong> for the prospects who didn't
      book during the welcome. This one isn't about more education — they've already heard
      the pitch. It's about inspiration: real success stories, transformation narratives,
      and reasons to come back to the offer they already raised their hand for.
    </p>

    <div class="diagram-card">
      <div class="d-eyebrow">How it flows</div>
      <h3 class="d-title">9 touches across two stages, fully automated</h3>
      <svg viewBox="0 0 1040 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-stage nurture sequence diagram">
        <line x1="60" y1="120" x2="980" y2="120" stroke="rgba(28,181,184,0.35)" stroke-width="2" stroke-dasharray="4 6"/>

        <text x="60" y="65" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="DM Sans" font-size="10" letter-spacing="2">SUBSCRIBE</text>
        <text x="290" y="65" text-anchor="middle" fill="#1cb5b8" font-family="DM Sans" font-size="10" letter-spacing="2" font-weight="700">STAGE 1 · WELCOME</text>
        <text x="520" y="65" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="DM Sans" font-size="10" letter-spacing="2">CHECKPOINT</text>
        <text x="750" y="65" text-anchor="middle" fill="#1cb5b8" font-family="DM Sans" font-size="10" letter-spacing="2" font-weight="700">STAGE 2 · NURTURE</text>
        <text x="980" y="65" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="DM Sans" font-size="10" letter-spacing="2">CONVERSION</text>

        <g transform="translate(60,120)"><circle r="36" fill="#1cb5b8"/><text y="6" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans, sans-serif" font-weight="700" font-size="14">FORM</text></g>
        <text x="60" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Lead joins list</text>
        <text x="60" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">Meta ad → form fill</text>

        <g transform="translate(290,120)"><circle r="36" fill="#142a52" stroke="#1cb5b8" stroke-width="2"/><text y="6" text-anchor="middle" fill="#1cb5b8" font-family="DM Sans, sans-serif" font-weight="700" font-size="16">5</text></g>
        <text x="290" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Welcome sequence</text>
        <text x="290" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">Educate · trust · objections</text>

        <g transform="translate(520,120)"><polygon points="-28,0 0,-28 28,0 0,28" fill="#1cb5b8"/><text y="6" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans, sans-serif" font-weight="700" font-size="13">?</text></g>
        <text x="520" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Booked?</text>
        <text x="520" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">Yes → exit · No → continue</text>

        <g transform="translate(750,120)"><circle r="36" fill="#142a52" stroke="#1cb5b8" stroke-width="2"/><text y="6" text-anchor="middle" fill="#1cb5b8" font-family="DM Sans, sans-serif" font-weight="700" font-size="16">4</text></g>
        <text x="750" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Nurture sequence</text>
        <text x="750" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">Stories · inspiration</text>

        <g transform="translate(980,120)"><circle r="36" fill="#1cb5b8"/><text y="6" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans, sans-serif" font-weight="700" font-size="14">BOOK</text></g>
        <text x="980" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Consult booked</text>
        <text x="980" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">37% conversion · 2× lift</text>
      </svg>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <span class="eyebrow">Results</span>
    <h2 class="section-h">Same leads, same ad spend, twice the bookings.</h2>
    <p class="lede">
      The conversion rate jumped from 18% to 37% — more than doubling. Weekly booked consults
      went from 5–10 per week to 15–20 per week, off the same lead volume the studio was
      already paying for. The leads that were previously slipping through the cracks were
      now being nurtured into actual appointments.
    </p>
    <p class="lede">
      The ads weren't broken. The funnel was. Every dollar of ad spend now produces roughly
      twice the consults it used to, because the post-form journey finally does the work
      the ad creative was already paying for.
    </p>

    <div class="metrics">
      <div class="metric"><div class="num">2<span class="unit">×</span></div><div class="lbl">Increase in weekly booked consults — same leads, same spend</div></div>
      <div class="metric"><div class="num">37<span class="unit">%</span></div><div class="lbl">New lead-to-book conversion rate (up from 18%)</div></div>
      <div class="metric"><div class="num">9 <span class="unit">touches</span></div><div class="lbl">Across two stages — fully automated, zero ongoing rep time</div></div>
      <div class="metric"><div class="num">$0</div><div class="lbl">Additional ad spend required to deliver the lift</div></div>
    </div>

    <div class="compare-card">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 24px;">
        <div>
          <div style="font-size: 11px; color: var(--ink-3); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px;">Lead-to-Book Conversion</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--ink);">Before vs. After Nurture</div>
        </div>
        <div style="font-size: 13px; color: var(--ink-3);">Identical ad spend &amp; targeting</div>
      </div>
      <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conversion rate comparison">
        <text x="20" y="28" fill="#5a6a8a" font-family="DM Sans" font-size="11">% of leads who book</text>
        <line x1="80" y1="40" x2="780" y2="40" stroke="#eef1f6" stroke-width="1"/>
        <line x1="80" y1="90" x2="780" y2="90" stroke="#eef1f6" stroke-width="1"/>
        <line x1="80" y1="140" x2="780" y2="140" stroke="#eef1f6" stroke-width="1"/>
        <line x1="80" y1="180" x2="780" y2="180" stroke="#0e1d3a" stroke-width="1.5"/>
        <text x="70" y="44" text-anchor="end" fill="#5a6a8a" font-family="DM Sans" font-size="10">40%</text>
        <text x="70" y="94" text-anchor="end" fill="#5a6a8a" font-family="DM Sans" font-size="10">25%</text>
        <text x="70" y="144" text-anchor="end" fill="#5a6a8a" font-family="DM Sans" font-size="10">15%</text>
        <text x="70" y="184" text-anchor="end" fill="#5a6a8a" font-family="DM Sans" font-size="10">0%</text>

        <rect x="200" y="120" width="160" height="60" fill="#94a3b8" rx="6"/>
        <text x="280" y="112" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans" font-size="22" font-weight="700">18%</text>
        <text x="280" y="200" text-anchor="middle" fill="#5a6a8a" font-family="DM Sans" font-size="13" font-weight="500">Before</text>

        <line x1="395" y1="90" x2="475" y2="90" stroke="#1cb5b8" stroke-width="2" stroke-dasharray="4 4"/>
        <polygon points="475,90 467,85 467,95" fill="#1cb5b8"/>
        <text x="435" y="80" text-anchor="middle" fill="#1cb5b8" font-family="DM Sans" font-size="13" font-weight="700">+106%</text>

        <rect x="510" y="55" width="160" height="125" fill="#1cb5b8" rx="6"/>
        <text x="590" y="47" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans" font-size="22" font-weight="700">37%</text>
        <text x="590" y="200" text-anchor="middle" fill="#5a6a8a" font-family="DM Sans" font-size="13" font-weight="500">After</text>
      </svg>
    </div>

    <div class="ba-grid">
      <div class="ba-card before">
        <h3>Before</h3>
        <ul>
          <li><span class="icon">×</span><span>18% of leads booked a consult after joining the list</span></li>
          <li><span class="icon">×</span><span>5–10 booked consultations per week</span></li>
          <li><span class="icon">×</span><span>One generic confirmation email — then total silence</span></li>
          <li><span class="icon">×</span><span>Zero re-engagement for leads who didn't book first time</span></li>
          <li><span class="icon">×</span><span>Ad spend mistaken for the bottleneck — ROI looked off</span></li>
          <li><span class="icon">×</span><span>Warm leads going cold within hours of form fill</span></li>
        </ul>
      </div>
      <div class="ba-card after">
        <h3>After</h3>
        <ul>
          <li><span class="icon">✓</span><span>37% of leads now booking — more than double</span></li>
          <li><span class="icon">✓</span><span>15–20 booked consultations per week, off the same lead flow</span></li>
          <li><span class="icon">✓</span><span>5-part welcome sequence educating, building trust, handling objections</span></li>
          <li><span class="icon">✓</span><span>4-part nurture re-engaging non-bookers with story-driven content</span></li>
          <li><span class="icon">✓</span><span>Real ROI on existing ad spend — the funnel finally finishes the job</span></li>
          <li><span class="icon">✓</span><span>Auto-exit logic — booked leads stop receiving the sequence immediately</span></li>
        </ul>
      </div>
    </div>

    <div class="quote-block">
      <p class="q">"I have been anxious about our ads not delivering ROI — but quite surprising, it wasn't ads. We are grateful for the email marketing team in helping us achieve these numbers."</p>
      <div class="attrib">— Tim, Owner · US Cryotherapy, Walnut Creek</div>
    </div>
  </div>
</section>

<section class="alt">
  <div class="wrap">
    <span class="eyebrow">Why this matters</span>
    <h2 class="section-h">If your conversion rate is single digits, the answer probably isn't more ads.</h2>
    <div class="why-block">
      <p>
        Med spa owners, cosmetic practices, dental offices, chiropractors, physical therapy
        clinics, fitness studios — almost any consultation-driven service business — share
        the same hidden problem: the gap between "lead" and "booked consult" is where most
        of the marketing budget quietly evaporates.
      </p>
      <p>
        When conversion rates are stuck in the teens, the instinct is to spend more on ads,
        change the creative, swap targeting, hire another media buyer. Sometimes that's the
        right call. Most of the time it isn't. The bottleneck is the post-form silence —
        warm leads that get one auto-reply and then nothing. Every hour they sit unworked,
        the conversion math gets worse.
      </p>
      <p>
        The fix isn't more leads. It's a structured, automated nurture that meets leads where
        they are emotionally — educating the curious, reassuring the skeptical, and giving
        the hesitant a reason to act. Once that's in place, the existing ad spend starts
        producing the consults it should have been producing all along.
      </p>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <span class="eyebrow">What we built</span>
    <h2 class="section-h">Core capabilities delivered.</h2>
    <div class="cap-grid">
      <div class="cap"><div class="cap-num">01</div><h4>Lead-source-aware welcome trigger</h4><p>The moment a Meta ad lead fills out the form, the welcome sequence fires automatically — no delays, no manual handoff, no missed leads.</p></div>
      <div class="cap"><div class="cap-num">02</div><h4>5-part welcome sequence</h4><p>Educate on the offering, build trust through real practice voice, address the top three objections (price, time, fit) before they become silent dealbreakers.</p></div>
      <div class="cap"><div class="cap-num">03</div><h4>Booking-detection branch logic</h4><p>The system knows the moment a lead books — so they exit the sequence immediately and don't get hit with nurture emails for an offer they've already accepted.</p></div>
      <div class="cap"><div class="cap-num">04</div><h4>4-part re-engagement nurture</h4><p>For leads who didn't book during the welcome, a story-driven follow-up that uses real client transformations and inspiration to bring them back to the offer.</p></div>
      <div class="cap"><div class="cap-num">05</div><h4>Conversion analytics</h4><p>Per-touch open and click tracking, so the studio knows which emails are doing the heavy lifting and which can be tightened over time.</p></div>
      <div class="cap"><div class="cap-num">06</div><h4>Brand-aligned voice throughout</h4><p>The sequences are written to sound like the studio itself, not generic marketing — because warm leads can smell template copy from a mile away.</p></div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="narrow">
    <h2>Stop blaming the <span class="accent">ads</span>. Fix what happens after the click.</h2>
    <p>
      In a working session, we'll map your lead-to-consult funnel, identify exactly
      where leads are going cold, and lay out the highest-leverage nurture system for your
      practice. We'll guarantee at least 17 hours/week of recoverable time across your team.
      Or it's on us.
    </p>
    <a href="https://calendly.com/patrickdanielm/ai-roadmap-session" class="btn">Book Your AI Roadmap Session — $997</a>
    <div class="btn-sub">17-hour time-savings guarantee · Strategy-first, not a sales call</div>
  </div>
</section>`;

export default function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}
