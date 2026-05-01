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
    <div class="crumbs"><a href="/case-studies">Case Studies</a> &nbsp;/&nbsp; $30K from a Single Email Campaign</div>
    <span class="label">Case Study</span>
    <div><span class="cat-tags">Email Campaign · Wellness &amp; Med Spa · List Reactivation</span></div>

    <h1 class="hero-h1"><span class="accent">$30,000</span> from a single email campaign — to a list that had been sitting idle.</h1>
    <p class="hero-sub">
      A wellness studio had spent years building a 3,071-contact list that had quietly gone
      quiet. Cold leads, lapsed clients, no reason to come back. We designed and launched
      a single seasonal campaign — story-driven, scarcity-driven, with a low-friction reply
      CTA — and filled all 20 available spots at $1,500 each within days.
    </p>

    <div class="client-pill">
      <span class="dot">UC</span>
      <span>Client: <strong>US Cryotherapy</strong> — Walnut Creek, California (recovery &amp; wellness facility)</span>
    </div>

    <div class="meta-row">
      <div class="meta-cell"><div class="meta-label">Industry</div><div class="meta-value">Wellness / Recovery / Med Spa</div></div>
      <div class="meta-cell"><div class="meta-label">Challenge</div><div class="meta-value">3,071 dormant contacts going unworked</div></div>
      <div class="meta-cell"><div class="meta-label">AI Role</div><div class="meta-value">Story-driven copy + scarcity sequencing</div></div>
      <div class="meta-cell"><div class="meta-label">Result</div><div class="meta-value">$30K revenue · 20/20 spots booked · zero ad spend</div></div>
    </div>
  </div>
</header>

<section>
  <div class="wrap">
    <span class="eyebrow">The Problem</span>
    <h2 class="section-h">A 3,071-contact list, sitting idle.</h2>
    <p class="lede">
      Over years of running ads, hosting events, and serving clients, the studio had quietly
      built up a database of 3,071 contacts. Some were cold leads who had once expressed
      interest but never booked. Others were past clients who had stopped showing up months
      ago. Either way, they were the most expensive leads the studio had ever paid for —
      and nobody was talking to them.
    </p>
    <p class="lede">
      The instinct in most service businesses is to chase new leads. New ads. New
      partnerships. New audiences. Meanwhile the list of people who already <em>know who
      you are</em> just keeps growing, untouched. Every dormant lead represents real
      money — but only if someone actually gives them a reason to come back.
    </p>

    <div class="metrics">
      <div class="metric"><div class="num">3,071</div><div class="lbl">Contacts in the list — accumulated over years, mostly idle</div></div>
      <div class="metric"><div class="num">0</div><div class="lbl">Reactivation campaigns running before this engagement</div></div>
      <div class="metric"><div class="num">Months</div><div class="lbl">Since most past clients had been meaningfully contacted</div></div>
      <div class="metric"><div class="num">Cold</div><div class="lbl">Default state of every lead in the list — going nowhere fast</div></div>
    </div>
  </div>
</section>

<section class="alt">
  <div class="wrap">
    <span class="eyebrow">The Solution</span>
    <h2 class="section-h">A seasonal campaign with a story, an offer, and a deadline.</h2>
    <p class="lede">
      We designed a single seasonal campaign around a specific time-limited offer: 10% off
      a 5-session pack, available until March 24th, with only 20 spots. The window was
      narrow on purpose. The math was tight on purpose. Everything else — the copy, the
      cadence, the CTA — was engineered to convert.
    </p>
    <p class="lede">
      The launch email was built around a relatable character: <strong>Sarah, a 42-year-old
      who had avoided swimsuits for years.</strong> The copy mirrored the exact emotional
      state of the audience the campaign was written for — pre-summer, body-conscious,
      looking for a reason to act. Instead of a calendar booking link, the CTA was
      deliberately low-friction: <em>reply to this email with your contact number.</em>
    </p>
    <p class="lede">
      The first email alone produced 12 replies — more than half the spots gone in a single
      send. For the remaining 8 spots, we deployed scarcity and deadline emails over the
      following days. By the time the offer closed, all 20 spots were filled.
    </p>

    <div class="diagram-card">
      <div class="d-eyebrow">Campaign anatomy</div>
      <h3 class="d-title">3,071 dormant contacts → 20 booked spots → $30,000 in days</h3>
      <svg viewBox="0 0 1040 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Campaign funnel diagram">
        <line x1="60" y1="120" x2="980" y2="120" stroke="rgba(28,181,184,0.35)" stroke-width="2" stroke-dasharray="4 6"/>

        <text x="60" y="65" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="DM Sans" font-size="10" letter-spacing="2">SEGMENT</text>
        <text x="290" y="65" text-anchor="middle" fill="#1cb5b8" font-family="DM Sans" font-size="10" letter-spacing="2" font-weight="700">LAUNCH</text>
        <text x="520" y="65" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="DM Sans" font-size="10" letter-spacing="2">REPLIES</text>
        <text x="750" y="65" text-anchor="middle" fill="#1cb5b8" font-family="DM Sans" font-size="10" letter-spacing="2" font-weight="700">SCARCITY</text>
        <text x="980" y="65" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="DM Sans" font-size="10" letter-spacing="2">REVENUE</text>

        <g transform="translate(60,120)"><circle r="36" fill="#1cb5b8"/><text y="6" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans, sans-serif" font-weight="700" font-size="13">3,071</text></g>
        <text x="60" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Dormant list</text>
        <text x="60" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">Cold leads + past clients</text>

        <g transform="translate(290,120)"><circle r="36" fill="#142a52" stroke="#1cb5b8" stroke-width="2"/><text y="6" text-anchor="middle" fill="#1cb5b8" font-family="DM Sans, sans-serif" font-weight="700" font-size="13">EMAIL 1</text></g>
        <text x="290" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Story-driven launch</text>
        <text x="290" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">"Sarah, age 42" · reply CTA</text>

        <g transform="translate(520,120)"><circle r="36" fill="#1cb5b8"/><text y="6" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans, sans-serif" font-weight="700" font-size="16">12</text></g>
        <text x="520" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Inbound replies</text>
        <text x="520" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">Off the very first send</text>

        <g transform="translate(750,120)"><circle r="36" fill="#142a52" stroke="#1cb5b8" stroke-width="2"/><text y="6" text-anchor="middle" fill="#1cb5b8" font-family="DM Sans, sans-serif" font-weight="700" font-size="13">+8</text></g>
        <text x="750" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Scarcity emails</text>
        <text x="750" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">Deadline-driven follow-ups</text>

        <g transform="translate(980,120)"><circle r="36" fill="#1cb5b8"/><text y="6" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans, sans-serif" font-weight="700" font-size="13">$30K</text></g>
        <text x="980" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">All 20 spots filled</text>
        <text x="980" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">$1,500 × 20 = $30,000</text>
      </svg>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <span class="eyebrow">Results</span>
    <h2 class="section-h">All 20 spots booked. $30,000 in revenue. Zero ad spend.</h2>
    <p class="lede">
      The campaign hit its cap inside the deadline window. Every spot filled. Cold leads who
      had been ghosting the studio for months came back. Past clients who hadn't been seen
      in half a year rebooked at full price. The studio's email list — the same one that
      had been "doing nothing" the week before — generated $30,000 in revenue from a single
      well-engineered campaign.
    </p>
    <p class="lede">
      The unlock wasn't a clever trick. It was timing (pre-summer), a specific concrete goal
      ("bikini body"), a story that resonated with the actual audience, and a compelling
      reason to act <em>now</em> rather than later. The list was always there. We just gave
      it a reason to engage.
    </p>

    <div class="metrics">
      <div class="metric"><div class="num">$30<span class="unit">K</span></div><div class="lbl">Revenue generated from a single email campaign</div></div>
      <div class="metric"><div class="num">20<span class="unit">/20</span></div><div class="lbl">Spots booked — campaign hit its cap inside the deadline window</div></div>
      <div class="metric"><div class="num">$1,500</div><div class="lbl">Per-spot pricing — premium 5-session pack, full price after the 10% promo</div></div>
      <div class="metric"><div class="num">$0</div><div class="lbl">Ad spend required — every conversion came from the existing list</div></div>
    </div>

    <div class="compare-card">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 24px;">
        <div>
          <div style="font-size: 11px; color: var(--ink-3); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px;">Campaign Funnel</div>
          <div style="font-size: 22px; font-weight: 700; color: var(--ink);">From dormant list to filled cap</div>
        </div>
        <div style="font-size: 13px; color: var(--ink-3);">Single campaign · single send + 2 follow-ups</div>
      </div>
      <svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Campaign funnel">
        <!-- Stage 1: 3071 contacts -->
        <rect x="60" y="40" width="680" height="40" fill="#94a3b8" rx="6"/>
        <text x="400" y="65" text-anchor="middle" fill="#ffffff" font-family="DM Sans" font-size="14" font-weight="700">3,071 dormant contacts</text>
        <text x="60" y="33" fill="#5a6a8a" font-family="DM Sans" font-size="11" letter-spacing="1">STAGE 1 · LIST</text>

        <!-- Arrow -->
        <line x1="400" y1="86" x2="400" y2="104" stroke="#1cb5b8" stroke-width="2"/>
        <polygon points="400,108 395,98 405,98" fill="#1cb5b8"/>

        <!-- Stage 2: 12 + 8 -->
        <rect x="200" y="115" width="400" height="40" fill="#5a6a8a" rx="6"/>
        <text x="400" y="140" text-anchor="middle" fill="#ffffff" font-family="DM Sans" font-size="14" font-weight="700">20 inbound replies (12 launch + 8 scarcity)</text>
        <text x="200" y="108" fill="#5a6a8a" font-family="DM Sans" font-size="11" letter-spacing="1">STAGE 2 · ENGAGEMENT</text>

        <!-- Arrow -->
        <line x1="400" y1="161" x2="400" y2="179" stroke="#1cb5b8" stroke-width="2"/>
        <polygon points="400,183 395,173 405,173" fill="#1cb5b8"/>

        <!-- Stage 3: $30k -->
        <rect x="290" y="190" width="220" height="40" fill="#1cb5b8" rx="6"/>
        <text x="400" y="215" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans" font-size="16" font-weight="700">$30,000 booked</text>
        <text x="290" y="183" fill="#1cb5b8" font-family="DM Sans" font-size="11" letter-spacing="1" font-weight="700">STAGE 3 · REVENUE</text>
      </svg>
    </div>

    <div class="ba-grid">
      <div class="ba-card before">
        <h3>Before</h3>
        <ul>
          <li><span class="icon">×</span><span>3,071 contacts sitting idle in the database</span></li>
          <li><span class="icon">×</span><span>No reactivation strategy for cold leads or lapsed clients</span></li>
          <li><span class="icon">×</span><span>Past clients lapsing without re-engagement</span></li>
          <li><span class="icon">×</span><span>Default growth motion: spend more on new ads</span></li>
        </ul>
      </div>
      <div class="ba-card after">
        <h3>After</h3>
        <ul>
          <li><span class="icon">✓</span><span>3,071-contact list activated by a single strategic send</span></li>
          <li><span class="icon">✓</span><span>20/20 spots booked at $1,500 each within the deadline window</span></li>
          <li><span class="icon">✓</span><span>$30,000 in revenue from existing list — no new ad spend</span></li>
          <li><span class="icon">✓</span><span>Story-driven copy framework now reusable for future campaigns</span></li>
          <li><span class="icon">✓</span><span>Low-friction reply CTA proven to outperform calendar-link CTAs</span></li>
          <li><span class="icon">✓</span><span>Scarcity + deadline sequences proven to fill remaining spots</span></li>
        </ul>
      </div>
    </div>

    <div class="quote-block">
      <p class="q">"'Bikini Season is Around the Corner' campaign filled up all our spots within days. We hadn't seen that kind of response from our list before."</p>
      <div class="attrib">— Tim, Owner · US Cryotherapy, Walnut Creek</div>
    </div>
  </div>
</section>

<section class="alt">
  <div class="wrap">
    <span class="eyebrow">Why this matters</span>
    <h2 class="section-h">Your customer list is worth more than you think.</h2>
    <div class="why-block">
      <p>
        Almost every appointment-driven service business — med spas, cosmetic practices,
        dental offices, recovery studios, fitness studios, IV bars, salons — has been
        accumulating contacts for years. Old leads. Past clients. Walk-ins who left an
        email. None of them are doing anything until someone gives them a reason to.
      </p>
      <p>
        The default move when revenue is soft is to buy more leads. New ads, new audiences,
        new partnerships. That's the most expensive lift in the building. The cheapest one
        is sitting in a database the team has been ignoring — a database the business has
        already paid to build.
      </p>
      <p>
        The pattern that worked here is reusable: pick a moment with real emotional weight
        (pre-summer, holiday season, end-of-year), wrap it in a specific time-limited offer,
        write copy that meets the audience where they actually are, and use a low-friction
        CTA that doesn't ask people to commit before they've raised their hand. Most
        practices have at least one $30K send sitting unsent in their list right now.
      </p>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <span class="eyebrow">What we built</span>
    <h2 class="section-h">Core capabilities delivered.</h2>
    <div class="cap-grid">
      <div class="cap"><div class="cap-num">01</div><h4>Dormant list activation strategy</h4><p>Audited the existing 3,071-contact database, segmented by relationship state (cold leads vs. lapsed clients), and identified the most reactivatable cohort.</p></div>
      <div class="cap"><div class="cap-num">02</div><h4>Story-driven copy framework</h4><p>Built the launch email around a specific relatable character ("Sarah, age 42") that mirrored the audience's actual emotional state — instead of generic promotional copy.</p></div>
      <div class="cap"><div class="cap-num">03</div><h4>Low-friction reply CTA</h4><p>Replaced the typical calendar-link CTA with a direct "reply with your phone number" ask — proven here to convert dramatically better for a price-sensitive offer.</p></div>
      <div class="cap"><div class="cap-num">04</div><h4>Time-limited offer architecture</h4><p>Tight cap (20 spots), tight deadline (March 24th), specific discount mechanic (10% off a 5-session pack) — every constraint engineered to drive immediate action.</p></div>
      <div class="cap"><div class="cap-num">05</div><h4>Scarcity &amp; deadline sequences</h4><p>Two follow-up emails deployed after the launch — surfacing remaining-spot counts and the closing deadline — to fill the final 8 spots before the offer expired.</p></div>
      <div class="cap"><div class="cap-num">06</div><h4>Reactivation cadence playbook</h4><p>The campaign isn't a one-off. We left the studio with a reusable seasonal-campaign template they can run quarterly with different anchors (holiday, end-of-summer, post-holiday recovery, etc.).</p></div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="narrow">
    <h2>Sitting on a list you haven't worked? <span class="accent">That's revenue waiting.</span></h2>
    <p>
      In a working session, we'll audit the dormant list you've been ignoring,
      identify the highest-leverage seasonal campaign for your practice, and lay out a
      reactivation cadence you can run for years. We'll guarantee at least 17 hours/week
      of recoverable time across your team. Or it's on us.
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
