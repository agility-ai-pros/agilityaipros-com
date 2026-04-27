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
