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
    margin-top: 0 !important;
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

const htmlContent = `<!-- ============ HERO ============ -->
<header class="hero">
  <div class="wrap">
    <div class="crumbs">
      <a href="/case-studies">Case Studies</a> &nbsp;/&nbsp; Chocomize
    </div>
    <span class="label">Case Study</span>
    <div><span class="cat-tags">AI Automation · E-commerce · Corporate Gifting</span></div>

    <h1 class="hero-h1">From <span class="accent">4-hour delays</span> to 15-minute replies — at scale.</h1>
    <p class="hero-sub">
      Chocomize was losing high-value B2B leads to slow, inconsistent inquiry handling. We
      designed an end-to-end automation that captures, enriches, drafts, and logs every
      corporate gifting inquiry — so the sales team focuses on closing, not admin.
    </p>

    <div class="client-pill">
      <span class="dot">CZ</span>
      <span>Client: <strong>Chocomize</strong> — Corporate Chocolate Gifting (Shopify, B2B)</span>
    </div>

    <div class="meta-row">
      <div class="meta-cell">
        <div class="meta-label">Industry</div>
        <div class="meta-value">B2B E-commerce / Corporate Gifting</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">Challenge</div>
        <div class="meta-value">Manual inquiry handling at scale</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">AI Role</div>
        <div class="meta-value">RAG-driven drafting + workflow orchestration</div>
      </div>
      <div class="meta-cell">
        <div class="meta-label">Result</div>
        <div class="meta-value">85% faster replies · 0 missed leads · 10+ hrs/rep/wk</div>
      </div>
    </div>
  </div>
</header>

<!-- ============ THE PROBLEM ============ -->
<section>
  <div class="wrap">
    <span class="eyebrow">The Problem</span>
    <h2 class="section-h">Manual workflows couldn't keep pace with B2B inquiry volume.</h2>
    <p class="lede">
      Corporate gifting inquiries aren't simple "what's the price?" messages. Every Shopify
      form submission landed with custom branding requirements, multiple SKUs, quantity tiers,
      and tight delivery windows. The reps were doing the same slow chain on every single one:
      open the dashboard, look up products, draft a personalised reply from scratch, then
      manually create a CRM lead.
    </p>
    <p class="lede">
      During Q4 and other peak gifting cycles, the system broke. Replies slipped from hours to
      days. Messaging quality became inconsistent across reps. And by Chocomize's own
      estimate, roughly one in five high-value inquiries was going cold or unanswered during
      peak volume — a quiet but expensive leak.
    </p>

    <div class="metrics">
      <div class="metric">
        <div class="num">4–8 <span class="unit">hrs</span></div>
        <div class="lbl">Average response time before automation — climbing past 24 hrs at peak</div>
      </div>
      <div class="metric">
        <div class="num">30–45 <span class="unit">min</span></div>
        <div class="lbl">Per reply — including product lookup, drafting, and CRM entry</div>
      </div>
      <div class="metric">
        <div class="num">~20<span class="unit">%</span></div>
        <div class="lbl">Estimated lead drop-off during high-volume periods</div>
      </div>
      <div class="metric">
        <div class="num">500<span class="unit">+</span></div>
        <div class="lbl">Inbound corporate inquiries per month at the time of engagement</div>
      </div>
    </div>
  </div>
</section>

<!-- ============ THE SOLUTION ============ -->
<section class="alt">
  <div class="wrap">
    <span class="eyebrow">The Solution</span>
    <h2 class="section-h">An end-to-end inquiry pipeline — capture, enrich, draft, log.</h2>
    <p class="lede">
      We mapped the workflow, designed the automation architecture, and stood up the build
      with our specialist implementation team. The pipeline triggers the moment a customer
      submits Chocomize's Shopify inquiry form. From there, it pulls relevant product context
      using retrieval-augmented generation, drafts a personalised on-brand reply, creates a
      fully populated CRM lead, and queues it for a 60-second human review before send.
    </p>
    <p class="lede">
      The reps still own the conversation — they just no longer own the 30 minutes of admin
      that used to come with it.
    </p>

    <!-- Workflow visualization -->
    <div class="diagram-card">
      <div class="d-eyebrow">How it flows</div>
      <h3 class="d-title">Inquiry → Reply, in under 15 minutes</h3>
      <svg viewBox="0 0 1040 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Workflow diagram">
        <!-- Connecting line -->
        <line x1="60" y1="120" x2="980" y2="120" stroke="rgba(28,181,184,0.35)" stroke-width="2" stroke-dasharray="4 6"/>

        <!-- Step 1 -->
        <g transform="translate(60,120)">
          <circle r="36" fill="#1cb5b8"/>
          <text y="6" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans, sans-serif" font-weight="700" font-size="16">01</text>
        </g>
        <text x="60" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Inquiry captured</text>
        <text x="60" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">Shopify form fires webhook</text>

        <!-- Step 2 -->
        <g transform="translate(290,120)">
          <circle r="36" fill="#142a52" stroke="#1cb5b8" stroke-width="2"/>
          <text y="6" text-anchor="middle" fill="#1cb5b8" font-family="DM Sans, sans-serif" font-weight="700" font-size="16">02</text>
        </g>
        <text x="290" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Product context</text>
        <text x="290" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">RAG retrieves SKUs &amp; pricing</text>

        <!-- Step 3 -->
        <g transform="translate(520,120)">
          <circle r="36" fill="#1cb5b8"/>
          <text y="6" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans, sans-serif" font-weight="700" font-size="16">03</text>
        </g>
        <text x="520" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">AI draft created</text>
        <text x="520" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">On-brand, personalised</text>

        <!-- Step 4 -->
        <g transform="translate(750,120)">
          <circle r="36" fill="#142a52" stroke="#1cb5b8" stroke-width="2"/>
          <text y="6" text-anchor="middle" fill="#1cb5b8" font-family="DM Sans, sans-serif" font-weight="700" font-size="16">04</text>
        </g>
        <text x="750" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">CRM lead logged</text>
        <text x="750" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">Full inquiry context attached</text>

        <!-- Step 5 -->
        <g transform="translate(980,120)">
          <circle r="36" fill="#1cb5b8"/>
          <text y="6" text-anchor="middle" fill="#0e1d3a" font-family="DM Sans, sans-serif" font-weight="700" font-size="16">05</text>
        </g>
        <text x="980" y="195" text-anchor="middle" fill="white" font-family="DM Sans" font-size="13" font-weight="700">Rep reviews &amp; sends</text>
        <text x="980" y="215" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="DM Sans" font-size="11">~60 seconds, human in loop</text>

        <!-- Top labels -->
        <text x="60" y="65" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="DM Sans" font-size="10" letter-spacing="2">CAPTURE</text>
        <text x="290" y="65" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="DM Sans" font-size="10" letter-spacing="2">ENRICH</text>
        <text x="520" y="65" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="DM Sans" font-size="10" letter-spacing="2">DRAFT</text>
        <text x="750" y="65" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="DM Sans" font-size="10" letter-spacing="2">LOG</text>
        <text x="980" y="65" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="DM Sans" font-size="10" letter-spacing="2">REVIEW</text>
      </svg>
    </div>
  </div>
</section>

<!-- ============ RESULTS ============ -->
<section>
  <div class="wrap">
    <span class="eyebrow">Results</span>
    <h2 class="section-h">What changed for Chocomize after go-live.</h2>
    <p class="lede">
      Within the first week, the sales team's daily admin time was cut in half. By the next
      peak gifting period, Chocomize handled record inquiry volume with the same headcount —
      and Q4 went from being the team's most stressful quarter to its most predictable.
    </p>

    <div class="metrics">
      <div class="metric">
        <div class="num">85<span class="unit">%</span></div>
        <div class="lbl">Reduction in average response time across all inquiry types</div>
      </div>
      <div class="metric">
        <div class="num">&lt;15 <span class="unit">min</span></div>
        <div class="lbl">New average reply time, 24/7 — including weekends and peak season</div>
      </div>
      <div class="metric">
        <div class="num">10<span class="unit">+ hrs</span></div>
        <div class="lbl">Saved per sales rep, per week — reinvested in actual selling</div>
      </div>
      <div class="metric">
        <div class="num">0</div>
        <div class="lbl">Missed leads since the system went live</div>
      </div>
    </div>

    <!-- Before/After Comparison -->
    <div class="ba-grid">
      <div class="ba-card before">
        <h3>Before</h3>
        <ul>
          <li><span class="icon">×</span><span>4–8 hour response time, 24+ hrs at peak season</span></li>
          <li><span class="icon">×</span><span>Manual product lookup on every inquiry</span></li>
          <li><span class="icon">×</span><span>Inconsistent reply quality across reps</span></li>
          <li><span class="icon">×</span><span>CRM leads entered by hand, often delayed</span></li>
          <li><span class="icon">×</span><span>~20% of inquiries missed during peak volume</span></li>
          <li><span class="icon">×</span><span>30–45 minutes per reply, including CRM entry</span></li>
        </ul>
      </div>
      <div class="ba-card after">
        <h3>After</h3>
        <ul>
          <li><span class="icon">✓</span><span>Under 15 minutes, 24/7 — including weekends</span></li>
          <li><span class="icon">✓</span><span>Product context retrieved automatically (RAG)</span></li>
          <li><span class="icon">✓</span><span>AI drafts reviewed &amp; approved before sending</span></li>
          <li><span class="icon">✓</span><span>Every inquiry instantly logged in the CRM</span></li>
          <li><span class="icon">✓</span><span>Zero missed leads since go-live</span></li>
          <li><span class="icon">✓</span><span>Under 2 minutes of rep time per inquiry</span></li>
        </ul>
      </div>
    </div>

    <div class="quote-block">
      <p class="q">"During our last Q4 peak we handled more inquiries than ever — and the team was less stressed than ever. The system just works."</p>
      <div class="attrib">— Sales Lead, Chocomize</div>
    </div>
  </div>
</section>

<!-- ============ WHY THIS MATTERS ============ -->
<section class="alt">
  <div class="wrap">
    <span class="eyebrow">Why this matters</span>
    <h2 class="section-h">This pattern works for any high-consideration B2B e-commerce business.</h2>

    <div class="why-block">
      <p>
        Chocomize is one example, but the operational pattern is universal. Anywhere you have
        custom apparel, branded merchandise, wholesale beverage, premium packaging, B2B SaaS
        with sales-assisted onboarding — anywhere inbound inquiries are <em>complex enough to
        need a thoughtful reply</em>, but <em>repetitive enough that humans shouldn't be
        composing every one from scratch.</em>
      </p>
      <p>
        The expensive failure mode is the same in every case: leads sit. Replies slip. Quality
        drifts. The team feels behind. And the only "fix" anyone has historically proposed is
        hiring more reps — which is slow, expensive, and doesn't actually solve the underlying
        workflow problem.
      </p>
      <p>
        AI doesn't replace the rep here. It clears the runway in front of them. The rep still
        owns judgment and tone. But the lookup, the draft, and the CRM entry — the parts that
        eat hours and add zero strategic value — are gone.
      </p>
    </div>
  </div>
</section>

<!-- ============ CAPABILITIES DELIVERED ============ -->
<section>
  <div class="wrap">
    <span class="eyebrow">What we built</span>
    <h2 class="section-h">Core capabilities delivered.</h2>

    <div class="cap-grid">
      <div class="cap">
        <div class="cap-num">01</div>
        <h4>Real-time inquiry capture</h4>
        <p>Every Shopify form submission triggers the workflow instantly via webhook — no polling, no manual handoff, no delays.</p>
      </div>
      <div class="cap">
        <div class="cap-num">02</div>
        <h4>Dynamic product context (RAG)</h4>
        <p>Relevant product specs, branding options, MOQ thresholds, and pricing tiers are retrieved automatically and injected into the prompt so the draft is grounded — not hallucinated.</p>
      </div>
      <div class="cap">
        <div class="cap-num">03</div>
        <h4>AI-generated draft replies</h4>
        <p>A personalised, on-brand response is drafted for each inquiry — bulk order, branding question, delivery timeline, or general product enquiry.</p>
      </div>
      <div class="cap">
        <div class="cap-num">04</div>
        <h4>Automatic CRM lead creation</h4>
        <p>Every inquiry creates a fully populated CRM lead — customer message, retrieved product context, and the AI draft attached — before a rep ever opens it.</p>
      </div>
      <div class="cap">
        <div class="cap-num">05</div>
        <h4>Human-in-the-loop review</h4>
        <p>Reps review and approve before sending. Full editorial control — without doing any of the upstream legwork.</p>
      </div>
      <div class="cap">
        <div class="cap-num">06</div>
        <h4>Peak-season resilience</h4>
        <p>The pipeline scales to any volume with no degradation. 10 inquiries a day or 1,000 — same 15-minute response window.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ CTA ============ -->
<section class="cta">
  <div class="narrow">
    <h2>Got a workflow that's costing you <span class="accent">deals</span>?</h2>
    <p>
      If you're losing inbound leads to slow replies, inconsistent messaging, or admin drag —
      we'll map your highest-leverage automation opportunity in a working session,
      and guarantee at least 17 hours/week of recoverable time across your team. Or it's on us.
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
