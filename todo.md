# Agility AI Pros v2 Redesign — Multi-Page Premium Advisory Site

## Phase 1: Architecture & Routing
- [ ] Update App.tsx with multi-page routing (Home, About, AI Roadmap, Automation Offers, Case Studies, FAQ)
- [ ] Update Navigation.tsx with new nav structure: Home | About | AI Roadmap | Automation Offers | Case Studies | FAQ | Book Session (sticky)
- [ ] Add sticky CTA component to Navigation

## Phase 2: Home Page Rebuild
- [ ] Hero section: "Turn AI Into Clear Business Action" headline + subheadline
- [ ] Hero CTAs: "Book Your AI Roadmap Session" + "Explore Automation Offers"
- [ ] Proof line: "Identify 17+ weekly hours of time savings — or full refund · Operator background across capital-intensive and operationally complex businesses"
- [ ] Section: "Why clients come here" (fragmented tools, unclear next steps, missed leverage)
- [ ] Section: "Two clear paths" (AI Roadmap vs Automation Offers side-by-side premium cards)
- [ ] Section: "What this work improves" (Faster follow-up, Better decision-making, Less repetitive admin, Cleaner execution)
- [ ] Section: "Who this is for" (Boutique wealth firms, Cosmetic practices/med spas, Lean founder-led service businesses)
- [ ] Section: "Featured case studies" (2-3 case studies in premium editorial format)
- [ ] Section: "Final CTA" (strong invitation to book)

## Phase 3: About Page
- [ ] Professional headshot (patrick.jpg)
- [ ] Founder credibility narrative
- [ ] Explanation of why this work matters
- [ ] Operator/strategist perspective
- [ ] Prior-career context (Agility Fi, fintech, operator experience) — framed as bio context only

## Phase 4: AI Roadmap Page
- [ ] Hero section
- [ ] "What an AI Roadmap is" section
- [ ] "What gets diagnosed" section
- [ ] "What clients receive" section (45-min discovery, custom report, prioritized recommendations, 30-min walkthrough)
- [ ] Proof/outcomes section
- [ ] Guarantee section: "Identify at least 17+ weekly hours of time savings across the team, or full refund."
- [ ] CTA: "Book Your AI Roadmap Session"

## Phase 5: Automation Offers Page
- [ ] Hero: "Automation That Removes Bottlenecks" + subheadline + CTAs
- [ ] Section 1: "From AI ideas to working systems"
- [ ] Section 2: "What automation can handle" (Lead capture, Front desk, Internal ops, Research)
- [ ] Section 3: "Best for lean teams that need leverage"
- [ ] Section 4: "A simple implementation path" (Audit, Design, Implement)
- [ ] Section 5: "Example Workflows" (anchor link for secondary CTA)
- [ ] Section 6: "Strategy-led, implementation-supported"
- [ ] Section 7: "Why businesses come to this work"
- [ ] Section 8: "Start with the highest-value bottleneck" + CTAs
- [ ] Ensure both "Book an Automation Audit" and "Book an AI Roadmap Session" CTAs route to same booking flow

## Phase 6: Case Studies Page
- [ ] Use existing case studies
- [ ] Frame with "Role Agility AI Pros played" line on each
- [ ] Use category proof framing for partner-delivered work
- [ ] Do NOT name specific white-label partners
- [ ] Premium editorial format with narrative, result headline, proof metrics

## Phase 7: FAQ Page
- [ ] What is the difference between AI Roadmap and Automation Offers?
- [ ] Do clients need special tools before starting?
- [ ] Is this best for small teams or larger organizations?
- [ ] How is implementation handled?
- [ ] What happens after the roadmap?
- [ ] Do you build everything directly?

## Phase 8: Footer & Global Elements
- [ ] Add footer with email contact, WhatsApp (if appropriate), navigation links, secondary CTA
- [ ] Do NOT include any links to Agility AI Inner Circle
- [ ] Ensure sticky CTA is elegant and not intrusive

## Phase 9: Design & Polish
- [ ] Verify premium spacing and section hierarchy
- [ ] Test visual rhythm and proof placement
- [ ] Ensure mobile layouts are clean, readable, premium
- [ ] Verify no references to specific white-label vendors
- [ ] Verify no references to Agility AI Inner Circle
- [ ] Verify tone is premium, calm, strategic, direct, commercially serious

## Phase 10: Testing & Deployment
- [ ] Test all CTAs and booking flows
- [ ] Test mobile responsiveness across all pages
- [ ] Test sticky CTA on mobile and desktop
- [ ] Verify anchor links work (e.g., "See Example Workflows" → Example Workflows section)
- [ ] Save checkpoint and prepare for deployment

## Previous Work (v1 Single-Page)
- [x] Built initial single-page site with 8 sections
- [x] Fixed Navigation component and restored logo
- [x] Added Patrick's photo to Bio section
- [x] Changed name from "Patrick Daniel Murphy" to "Patrick Daniel"
- [x] Updated pricing across all sections ($997 starting price)
- [x] Updated guarantee to 17+ hours


## Phase 11: Case Studies Expansion (Boutique Vertical)
- [x] Add Cryotherapy case study (45% No-Show Reduction)
- [x] Add Chocomize case study (Doubling Weekly Booked Consults)
- [x] Add EmailCampaign case study ($30K from a Single Email Campaign)
- [ ] Add 4th boutique case study (TBD)
- [ ] Add client testimonials section on Home page
- [ ] Add "For Med Spas" callout section on Automation Offers page
- [ ] Create Results Dashboard on Home page (clients served, hours saved, revenue identified)

## Phase 12: Portfolio Section Restructuring
- [x] Restructure Home Portfolio section into two-column vertical layout
- [x] Left column: Fintech & Ecommerce (GForceToken, Chocomize)
- [x] Right column: Boutique Firms, Med Spas & Clinics (Cryotherapy, EmailCampaign)
- [x] Update section subheading to "Live case studies across fintech, ecommerce, and service businesses"
- [x] Add "See all 7 case studies →" link to /case-studies
- [x] Ensure mobile stacking (left column above right column)
- [x] Maintain existing card design, teal tags, typography, and hover behavior


## Phase 13: HTML Case Studies Conversion
- [x] Convert Chocomize HTML to React component (verbatim content)
- [x] Convert Cryotherapy 2x Bookings HTML to React component (verbatim content)
- [x] Convert Cryotherapy 30k Email Campaign HTML to React component (verbatim content)
- [x] Register all new case study routes in App.tsx
- [x] Update CaseStudies.tsx index with correct slugs and metadata
- [x] Test all case study pages display correctly with full HTML content


## Phase 14: What I Do Section Update
- [x] Update section subheading to "How I help businesses turn AI into clear, measurable outcomes."
- [x] Rename "Claude Business Setup" to "AI Operating System Setup"
- [x] Replace "Manus Builds and Guidance" with "Custom AI Automations & Builds"
- [x] Update Custom AI Automations & Builds body copy with expanded offerings
- [x] Add "See Automation Offers →" link to /automation-offers on the new card
- [x] Test all links and verify navigation works correctly


## Phase 15: Portfolio Section Column Swap
- [x] Swap Portfolio section columns so Boutique Firms is on left, Fintech is on right
- [x] Verify column layout displays correctly in browser


## Phase 16: Chocomize Card and URL Redirect Fixes
- [x] Update Chocomize card preview text in CaseStudies.tsx with correct category, title, and description
- [x] Set up 301 redirect from /case-studies/email-campaign to /case-studies/cryotherapy-30k-email-campaign
- [x] Test Chocomize card preview displays correctly
- [x] Test redirect works and eliminates duplicate content


## Phase 17: Booking Link & CTA Updates
- [x] Swap all 8 case study booking links from agilityaipros.com/book to calendly.com/patrickdanielm/ai-roadmap-session
- [x] Update CTA copy on 4 new case studies to remove "90-minute" (Chocomize, Cryotherapy 2x Bookings, Cryotherapy No-Show Reduction, Cryotherapy 30K Email Campaign)
- [x] Add Calendly CTA button to homepage hero alongside WhatsApp ("Book Your AI Roadmap Session — $997")
- [x] Test all links and CTAs in browser


## Phase 18: SEO, Meta Tags, and Navigation Cleanup
- [x] Remove orphan routes (/services, /who-i-serve, /contact) via wouter Switch + NotFound catch-all
- [x] Update footer NAVIGATION, SERVICES, and CONNECT columns to match header nav and homepage services
- [x] Fix scroll-to-top on route navigation with ScrollReset component
- [x] Reduce section padding on all case study detail pages (80px desktop / 48px mobile)
- [x] Add active nav link indicator (teal underline + font-weight 600) using wouter useLocation
- [x] Create robots.txt and sitemap.xml in client/public/
- [x] Add server-side 301 redirects in Express for orphan routes (work on localhost only)
- [x] Add client-side Redirect routes in App.tsx for /services, /who-i-serve, /contact
- [x] Install react-helmet-async and add HelmetProvider to main.tsx
- [x] Create PageMeta component at client/src/components/PageMeta.tsx
- [x] Add PageMeta to all 14 pages (Home, About, AIRoadmap, AutomationOffers, CaseStudies, FAQ, LexiUSD, GForceToken, DueDiligence, LegacyAviationFI, CryotherapyNoShowReduction, Cryotherapy2xBookings, Cryotherapy30kEmailCampaign, Chocomize)
- [x] Remove static OG tags from client/index.html (replaced with bare title tag)
- [x] Fix CryotherapyNoShowReduction.tsx JSX syntax error (verified parse OK with Babel)
- [x] Verify all four case study pages (Chocomize, Cryotherapy2xBookings, Cryotherapy30kEmailCampaign, CryotherapyNoShowReduction) parse correctly
- [x] Verify OG/Twitter meta tags render correctly on Home and case study pages
- [x] Verify client-side redirects work (/services → /ai-roadmap)


## Phase 19: Three Production Fixes (Priority — do before any new features)
- [x] Issue 1: Server-side OG meta tag injection — post-build script generates per-route index.html files with page-specific og:title, og:description, og:image, og:type, og:url, twitter:*, canonical, meta description baked in (so crawlers see them in raw HTML)
- [x] Issue 2: Redirects for /services, /who-i-serve, /contact — static HTML redirect files with meta http-equiv refresh + JS window.location.replace() generated by post-build script (platform intercepts before Express so HTTP 301 not possible; meta-refresh is the correct fallback)
- [x] Issue 3: Active nav link indicator — confirmed working in dev server (color: rgb(13,148,136), fontWeight: 600, borderBottom: 2px solid teal); production was running old build without the fix — new build deployed
- [x] Verify Issue 1 with: curl -s https://agilityaipros.com/ai-roadmap | grep -E "og:title|og:description" — verified in dist/public/ai-roadmap/index.html has page-specific tags
- [x] Verify Issue 2 with: redirect HTML files generated for /services, /who-i-serve, /contact, /case-studies/email-campaign
- [x] Verify Issue 3 by visiting each route — confirmed in browser console: color rgb(13,148,136), fontWeight 600, borderBottom 2px solid teal

## Phase 20: /hire-your-ai-employees Landing Page
- [x] Create HireYourAIEmployees.tsx with all 7 sections (hero, what we cover, how it works, who it's for, what you get, about, final CTA)
- [x] Register route /hire-your-ai-employees in App.tsx
- [x] Add route to generate-meta-html.mjs post-build script
- [x] Add route to sitemap.xml
- [x] Replace [PAYPAL_LINK] with Calendly URL: https://calendly.com/patrickdanielm/ai-roadmap-session-clone (Calendly handles PayPal payment natively)
