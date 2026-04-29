import { useEffect } from 'react';
import { Link } from 'wouter';

export default function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!-- ============ HERO ============ -->
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
        Chocomize is one example, but the operational shape is everywhere: corporate gifting,
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
    <div class="btn-sub">17-hour time-savings guarantee · 90 minutes · Strategy-first, not a sales call</div>
  </div>
</section>
    ` }} />
  );
}
