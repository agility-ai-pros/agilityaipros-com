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
    padding: 32px 0 80px;
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
  section:not([aria-label*="Notifications"]) { padding: 80px 0; }
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
    padding: 80px 24px;
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
    section:not([aria-label*="Notifications"]) { padding: 48px 0; }
  }
`;

const htmlContent = `<div class="hero">
  <div class="wrap">
    <div class="crumbs"><a href="/case-studies">CASE STUDIES</a> / Reducing No-Shows by 45%</div>
    <div class="label">CASE STUDY</div>
    <div class="cat-tags">WORKFLOW AUTOMATION · WELLNESS & MED SPA · MULTI-CHANNEL REMINDERS</div>
    <h1 class="hero-h1">Cutting no-shows from 55% to 30% — a <span class="accent">45% reduction</span> at a California wellness studio.</h1>
    <p class="hero-sub">A growing recovery and wellness studio was losing serious revenue to missed appointments — more than half of every booking was a no-show. We mapped the workflow, designed the automation architecture, and brought in our specialist implementation team to build a CRM-backed reminder system that keeps clients informed, the front desk in the loop, and empty slots refilled.</p>
    <div class="client-pill">
      <div class="dot">US</div>
      <span><strong>Client: US Cryotherapy</strong> — Walnut Creek, California (recovery & wellness facility)</span>
    </div>
    <div class="meta-row">
      <div class="meta-cell">
        <div class="meta-label">INDUSTRY</div>
        <div class="meta-value">Wellness / Recovery / Med Spa</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">CHALLENGE</div>
        <div class="meta-value">55% no-show rate eroding revenue</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">AI ROLE</div>
        <div class="meta-value">Automated multi-channel reminders + status routing</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">RESULT</div>
        <div class="meta-value">45% fewer no-shows · 8 weeks to impact</div>
      </div>
    </div>
  </div>
</div>

<section>
  <div class="narrow">
    <div class="eyebrow">The Problem</div>
    <h2 class="section-h">More than half of every booking was disappearing.</h2>
    <p class="lede">The studio was steadily growing its client roster, running real marketing, and getting real bookings. The problem wasn't demand — it was follow-through. Roughly 55% of booked appointments were ending in no-shows. That's not a soft number; it's lost session revenue every single day, plus idle staff time, plus the trickle-down effect on retention when clients lose momentum.</p>
    <p class="lede">When we diagnosed the workflow, the root cause was structural: there was no centralized CRM tracking who had booked what, no automated reminders going out before sessions, and no system flagging missed appointments so the front desk could rebook the slot. Every reminder was either manual or non-existent. At a single-location wellness studio with a growing roster, that doesn't scale.</p>
    <div class="metrics">
      <div class="metric">
        <div class="num">55<span class="unit">%</span></div>
        <div class="lbl">No-show rate before automation — more than half of every booking missed</div>
      </div>
      <div class="metric">
        <div class="num">0</div>
        <div class="lbl">Pre-session reminders going out automatically before the build</div>
      </div>
      <div class="metric">
        <div class="num">No</div>
        <div class="lbl">Centralized CRM tracking booking status across staff and channels</div>
      </div>
      <div class="metric">
        <div class="num">Manual</div>
        <div class="lbl">Rebooking workflow — empty slots stayed empty unless the front desk caught it</div>
      </div>
    </div>
  </div>
</section>

<section class="alt">
  <div class="narrow">
    <div class="eyebrow">The Solution</div>
    <h2 class="section-h">A CRM-backed reminder system with humans in the loop where it counts.</h2>
    <p class="lede">We designed an end-to-end booking lifecycle with the CRM at the center. Every booking — whether it came from the POS, the website, or a manual entry — was automatically synced into the CRM with a clear status. From there, the system ran two parallel jobs: nudging the client to actually show up, and looping in staff the moment something looked off.</p>
    <p class="lede">The point wasn't to remove humans from the workflow — it was to remove humans from the busywork. Reminders go out automatically. Status changes are tracked automatically. Empty slots get flagged automatically. But the moment a client looks at risk of missing, a real person gets the alert and decides what to do. That's the line we held: automation handles the predictable part, humans handle the judgment part.</p>
    <div class="diagram-card">
      <div class="d-eyebrow">How it flows</div>
      <div class="d-title">Booking → Reminder → Show-up (or rebook)</div>
      <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            .step-num { font-size: 12px; font-weight: 700; fill: #0e1d3a; }
            .step-label { font-size: 14px; fill: #ffffff; font-weight: 500; }
            .step-desc { font-size: 12px; fill: rgba(255,255,255,0.7); }
            .arrow { stroke: rgba(28,181,184,0.4); stroke-width: 2; fill: none; }
          </style>
        </defs>
        <g>
          <!-- Step 1 -->
          <circle cx="80" cy="100" r="35" fill="rgba(28,181,184,0.2)" stroke="#1cb5b8" stroke-width="2"/>
          <text class="step-num" x="80" y="105" text-anchor="middle">01</text>
          <text class="step-label" x="80" y="145" text-anchor="middle">Booking captured</text>
          <text class="step-desc" x="80" y="160" text-anchor="middle">POS or online → CRM</text>
          
          <!-- Arrow 1 -->
          <path class="arrow" d="M 115 100 L 165 100" marker-end="url(#arrowhead)"/>
          
          <!-- Step 2 -->
          <circle cx="220" cy="100" r="35" fill="rgba(28,181,184,0.2)" stroke="#1cb5b8" stroke-width="2"/>
          <text class="step-num" x="220" y="105" text-anchor="middle">02</text>
          <text class="step-label" x="220" y="145" text-anchor="middle">Reminders sent</text>
          <text class="step-desc" x="220" y="160" text-anchor="middle">Email + SMS, multi-touch</text>
          
          <!-- Arrow 2 -->
          <path class="arrow" d="M 255 100 L 305 100" marker-end="url(#arrowhead)"/>
          
          <!-- Step 3 -->
          <circle cx="360" cy="100" r="35" fill="rgba(28,181,184,0.2)" stroke="#1cb5b8" stroke-width="2"/>
          <text class="step-num" x="360" y="105" text-anchor="middle">03</text>
          <text class="step-label" x="360" y="145" text-anchor="middle">Status detected</text>
          <text class="step-desc" x="360" y="160" text-anchor="middle">Confirmed · cancelled · no-show</text>
          
          <!-- Arrow 3 -->
          <path class="arrow" d="M 395 100 L 445 100" marker-end="url(#arrowhead)"/>
          
          <!-- Step 4 -->
          <circle cx="500" cy="100" r="35" fill="rgba(28,181,184,0.2)" stroke="#1cb5b8" stroke-width="2"/>
          <text class="step-num" x="500" y="105" text-anchor="middle">04</text>
          <text class="step-label" x="500" y="145" text-anchor="middle">Staff alerted</text>
          <text class="step-desc" x="500" y="160" text-anchor="middle">At-risk & missed flagged</text>
          
          <!-- Arrow 4 -->
          <path class="arrow" d="M 535 100 L 585 100" marker-end="url(#arrowhead)"/>
          
          <!-- Step 5 -->
          <circle cx="640" cy="100" r="35" fill="rgba(28,181,184,0.2)" stroke="#1cb5b8" stroke-width="2"/>
          <text class="step-num" x="640" y="105" text-anchor="middle">05</text>
          <text class="step-label" x="640" y="145" text-anchor="middle">Rebook sequence</text>
          <text class="step-desc" x="640" y="160" text-anchor="middle">Auto-recovery + human follow</text>
        </g>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#1cb5b8"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>
</section>

<section>
  <div class="narrow">
    <div class="eyebrow">Results</div>
    <h2 class="section-h">8 weeks in, no-shows had dropped from 55% to 30%.</h2>
    <p class="lede">The headline is the no-show rate falling by 45% in relative terms — from a 55% miss rate down to 30%. But the operational story is just as important: the front desk stopped spending its day chasing reminders and started spending it on actual customer service. Empty slots got refilled faster. Clients felt cared for, not pestered. And the studio had, for the first time, a real-time view of which appointments were on track and which ones needed a human touch.</p>
    <div class="metrics">
      <div class="metric">
        <div class="num">45<span class="unit">%</span></div>
        <div class="lbl">Reduction in no-shows (55% → 30%) within 8 weeks of go-live</div>
      </div>
      <div class="metric">
        <div class="num">8<span class="unit"> weeks</span></div>
        <div class="lbl">From kickoff to measurable impact on no-show rates</div>
      </div>
      <div class="metric">
        <div class="num">100<span class="unit">%</span></div>
        <div class="lbl">Of bookings now flowing into the CRM with a tracked status</div>
      </div>
      <div class="metric">
        <div class="num">2<span class="unit"> channels</span></div>
        <div class="lbl">Email + SMS reminders, with internal Slack/email alerts to staff</div>
      </div>
    </div>
    <div class="compare-card">
      <h3 style="text-align: center; margin: 0 0 24px; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; color: var(--ink-3);">No-show rate — Before vs. After Automation</h3>
      <p style="text-align: center; font-size: 12px; color: var(--ink-3); margin: 0;">8-week measurement window</p>
      <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            .bar-bg { fill: #f0f4f8; }
            .bar-before { fill: #dc2626; }
            .bar-after { fill: #16a34a; }
            .bar-label { font-size: 14px; font-weight: 700; fill: #0e1d3a; }
            .bar-pct { font-size: 28px; font-weight: 700; fill: #0e1d3a; }
            .bar-desc { font-size: 12px; fill: var(--ink-3); }
            .axis-label { font-size: 12px; fill: var(--ink-3); }
          </style>
        </defs>
        <!-- Y-axis labels -->
        <text class="axis-label" x="30" y="25">% of bookings</text>
        <text class="axis-label" x="50" y="55">60%</text>
        <text class="axis-label" x="50" y="115">40%</text>
        <text class="axis-label" x="50" y="175">20%</text>
        <text class="axis-label" x="60" y="235">0%</text>
        
        <!-- Grid lines -->
        <line x1="80" y1="50" x2="580" y2="50" stroke="#e1e7f0" stroke-width="1"/>
        <line x1="80" y1="110" x2="580" y2="110" stroke="#e1e7f0" stroke-width="1"/>
        <line x1="80" y1="170" x2="580" y2="170" stroke="#e1e7f0" stroke-width="1"/>
        <line x1="80" y1="230" x2="580" y2="230" stroke="#e1e7f0" stroke-width="1"/>
        
        <!-- Before bar -->
        <rect class="bar-bg" x="150" y="50" width="80" height="180"/>
        <rect class="bar-before" x="150" y="50" width="80" height="165"/>
        <text class="bar-pct" x="190" y="140" text-anchor="middle">55%</text>
        <text class="bar-label" x="190" y="260" text-anchor="middle">Before</text>
        
        <!-- Arrow and reduction -->
        <g>
          <path d="M 280 140 L 320 140" stroke="#1cb5b8" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
          <text class="bar-pct" x="300" y="115" text-anchor="middle" fill="#1cb5b8">−45%</text>
        </g>
        
        <!-- After bar -->
        <rect class="bar-bg" x="370" y="50" width="80" height="180"/>
        <rect class="bar-after" x="370" y="50" width="80" height="54"/>
        <text class="bar-pct" x="410" y="90" text-anchor="middle">30%</text>
        <text class="bar-label" x="410" y="260" text-anchor="middle">After</text>
        
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#1cb5b8"/>
          </marker>
        </defs>
      </svg>
    </div>
    <div class="ba-grid">
      <div class="ba-card before">
        <h3>Before</h3>
        <ul>
          <li><span class="icon">×</span>55% of booked appointments ending in no-shows</li>
          <li><span class="icon">×</span>No centralized CRM — booking data scattered across systems</li>
          <li><span class="icon">×</span>Reminders sent manually, when at all</li>
          <li><span class="icon">×</span>Missed appointments quietly went unrecovered</li>
          <li><span class="icon">×</span>Front desk burning hours on manual follow-up</li>
          <li><span class="icon">×</span>No visibility into upcoming vs. completed appointments</li>
        </ul>
      </div>
      <div class="ba-card after">
        <h3>After</h3>
        <ul>
          <li><span class="icon">✓</span>30% no-show rate — a 45% relative reduction in 8 weeks</li>
          <li><span class="icon">✓</span>Single CRM source of truth, status auto-updated end-to-end</li>
          <li><span class="icon">✓</span>Email + SMS reminders sent automatically before each session</li>
          <li><span class="icon">✓</span>Missed appointments trigger an automated rebook sequence</li>
          <li><span class="icon">✓</span>Staff alerted only when a real human decision is needed</li>
          <li><span class="icon">✓</span>Daily visibility into the studio's full appointment book</li>
        </ul>
      </div>
    </div>
    <div class="quote-block">
      <p class="q">"After implementing the new follow-up system, more clients are showing up and actually completing the session. Our team is less stressed about empty slots and more driven to serve."</p>
      <p class="attrib">— Tim, Owner · US Cryotherapy, Walnut Creek</p>
    </div>
  </div>
</section>

<section class="alt">
  <div class="narrow">
    <div class="eyebrow">Why this matters</div>
    <h2 class="section-h">This pattern works for any appointment-driven service business.</h2>
    <p class="lede">US Cryotherapy is one example, but the operational shape is everywhere: med spas, cosmetic practices, dental offices, chiropractors, physical therapy clinics, recovery studios, hair and beauty salons, IV bars, infusion clinics — anywhere the business runs on booked sessions and the cost of a no-show is the price of a session plus the wasted staff time around it.</p>
    <p class="lede">The default "fix" most owners try is hiring someone to babysit the calendar. That works until volume grows, the person gets sick, or two locations turn into three. It's a workflow problem, not a headcount problem.</p>
    <p class="lede">The real lift comes from putting the CRM at the center, automating the repeatable nudges, and reserving human time for the moments where judgment actually matters — deciding which at-risk client gets a personal call, which gap in the calendar gets filled with a waitlist offer, which lapsed client deserves a re-engagement. That's where the strategist mindset earns its keep, and that's the work we orchestrate.</p>
  </div>
</section>

<section>
  <div class="narrow">
    <div class="eyebrow">What we built</div>
    <h2 class="section-h">Core capabilities delivered.</h2>
    <div class="cap-grid">
      <div class="cap">
        <div class="cap-num">01</div>
        <h4>Centralized booking CRM</h4>
        <p>Every booking from the POS, the website, or a manual entry flows into one CRM with a tracked status (Booked, Confirmed, No-Show, Cancelled). One source of truth, no more scattered logs.</p>
      </div>
      <div class="cap">
        <div class="cap-num">02</div>
        <h4>Automated reminder sequences</h4>
        <p>Multi-touch reminder cadence over email and SMS in the days leading up to a session — designed to give the client a real reason to show up, not just a calendar ping.</p>
      </div>
      <div class="cap">
        <div class="cap-num">03</div>
        <h4>Status auto-routing</h4>
        <p>Confirmed clients move through the lifecycle untouched. Unconfirmed or cancelled bookings auto-flag to "No-Show" status and trigger the rebook flow without human intervention.</p>
      </div>
      <div class="cap">
        <div class="cap-num">04</div>
        <h4>Missed-appointment recovery</h4>
        <p>If a client misses a session, an automated re-engagement sequence kicks in — designed to bring them back into the studio with a clear, low-friction path to rebooking.</p>
      </div>
      <div class="cap">
        <div class="cap-num">05</div>
        <h4>Internal staff alerts</h4>
        <p>The team gets real-time visibility into which appointments are tracking on schedule and which need a human touch — so the front desk acts on signal, not noise.</p>
      </div>
      <div class="cap">
        <div class="cap-num">06</div>
        <h4>Calendar visibility</h4>
        <p>A clear daily view of upcoming and completed appointments across the entire studio — so owners and managers know exactly what's happening on the floor at any moment.</p>
      </div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="narrow">
    <h2>If your calendar is bleeding no-shows, we can stop it.</h2>
    <p>In a working session, we'll map your booking lifecycle, identify the highest-leverage automation in your workflow, and guarantee at least 17 hours/week of recoverable time across your team. Or it's on us.</p>
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
