import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const verticals = [
  {
    number: '01',
    title: 'Med Spas & Cosmetic Clinics',
    pain: (
      <>
        You're losing clients between the consultation and the booking because{' '}
        <strong>nobody followed up</strong>. Your front desk is fielding the same 20 questions
        about Botox and filler pricing while your injectors sit idle. I build AI systems that
        handle patient follow-ups, generate personalized treatment plans, and keep your chairs
        full — without hiring another receptionist.
      </>
    ),
  },
  {
    number: '02',
    title: 'Personal Injury Attorneys',
    pain: (
      <>
        Only <strong>7% of your leads</strong> ever make it to a consultation. The rest disappear
        because your intake process is too slow, your follow-up is inconsistent, and demand
        letters take days instead of hours. I build AI workflows that screen cases faster, draft
        demand packages from your templates, and make sure no lead dies in your inbox while
        you're in court.
      </>
    ),
  },
  {
    number: '03',
    title: 'Cosmetic Surgeons & Dermatologists',
    pain: (
      <>
        Your consultations are an hour long and half of it is the same explanation you've given
        a thousand times. Meanwhile,{' '}
        <strong>post-op patients are calling your cell</strong> at 9pm asking if their swelling
        is normal. I set up AI that generates consultation summaries, automates aftercare
        communication, and drafts your before-and-after content so your practice markets itself
        while you operate.
      </>
    ),
  },
  {
    number: '04',
    title: 'Functional Medicine & Longevity Clinics',
    pain: (
      <>
        Your patients hand you 47 pages of lab results and expect a{' '}
        <strong>personalized protocol by Friday</strong>. You're spending evenings writing up
        supplement stacks and lifestyle plans that should take minutes, not hours. I build AI
        that synthesizes lab data into structured protocol drafts, generates patient-facing
        education materials, and keeps your high-ticket clients feeling like they're your only
        patient.
      </>
    ),
  },
  {
    number: '05',
    title: 'Boutique Wealth Managers & RIAs',
    pain: (
      <>
        Your margins are getting squeezed —{' '}
        <strong>operating expenses hit 82% of revenue</strong> at small RIAs last year. Clients
        want estate planning, tax strategy, and market commentary, but you're stuck writing the
        same quarterly report narrative by hand. I deploy AI that drafts compliant client
        communications, generates market commentary in your voice, and turns hours of meeting
        prep into minutes.
      </>
    ),
  },
  {
    number: '06',
    title: 'Family Offices',
    pain: (
      <>
        You're a 5-person team managing everything from{' '}
        <strong>deal flow to estate logistics to travel coordination</strong> for a family worth
        nine figures. Nothing is standardized, everything is in someone's head, and if your key
        person leaves, half the institutional knowledge walks out the door. I turn your tribal
        knowledge into AI-powered systems that capture, organize, and execute your workflows —
        so the office runs on process, not memory.
      </>
    ),
  },
  {
    number: '07',
    title: 'Insurance Agents & Brokers',
    pain: (
      <>
        Hurricane season is coming and you're still{' '}
        <strong>manually comparing policy options</strong> across six carriers while your phone
        rings off the hook with renewal questions. Your clients need fast answers and you need
        faster quotes. I build AI that generates policy comparison summaries, drafts renewal
        outreach sequences, and handles the repetitive client communication that eats your
        selling time alive.
      </>
    ),
  },
  {
    number: '08',
    title: 'Immigration Attorneys',
    pain: (
      <>
        The backlog just hit <strong>1.8 million pending cases</strong> and federal policy
        changes nearly every day. Your paralegals are buried in form preparation, document
        translation, and status update calls — in three languages. I set up AI that extracts
        data from identity documents to auto-populate forms, drafts client updates in English
        and Spanish, and keeps your team focused on case strategy instead of paperwork.
      </>
    ),
  },
  {
    number: '09',
    title: 'Luxury Auto Dealerships',
    pain: (
      <>
        Your BDC team sends <strong>the same generic follow-up</strong> to a first-time buyer
        and a repeat client who's bought four cars from you. Your inventory descriptions are
        copy-pasted from the manufacturer. Your internet leads go cold because nobody responded
        in the first 20 minutes. I build AI that writes personalized follow-ups, generates
        compelling inventory listings, and makes sure every lead gets a response before they
        call your competitor.
      </>
    ),
  },
  {
    number: '10',
    title: 'Yacht Brokers & Marine Services',
    pain: (
      <>
        You're juggling{' '}
        <strong>listing descriptions, buyer matching, survey coordination, and compliance paperwork</strong>{' '}
        — mostly from your phone at the marina. Every deal has six-figure commissions on the
        line and zero room for dropped details. I build AI that drafts professional listings,
        organizes transaction documentation, and handles the coordination that keeps deals from
        stalling while you're at the boat show.
      </>
    ),
  },
  {
    number: '11',
    title: 'Real Estate Teams & Boutique Brokerages',
    pain: (
      <>
        You've heard "AI for real estate" a hundred times and{' '}
        <strong>none of it actually works</strong> the way you do business. Your transaction
        coordinator is overwhelmed, your listing descriptions sound like everyone else's, and
        your market reports take a full day to put together. I don't sell you another CRM
        plugin — I build AI workflows around your actual process so your team closes faster and
        your brand sounds like you, not a template.
      </>
    ),
  },
  {
    number: '12',
    title: 'Fintech Startups',
    pain: (
      <>
        You're moving fast but your{' '}
        <strong>internal documentation is six months behind your product</strong>. Your
        compliance team is drafting policies by hand. Your customer support is scaling slower
        than your user base. I build AI systems that keep your docs current, draft compliance
        language that actually holds up, and create support workflows that scale without hiring
        a team for every new market you enter.
      </>
    ),
  },
];

export default function WhoIServe() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f8f6f1' }}>
      <Navigation />

      {/* Hero */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '80px',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '160px 24px 80px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            color: '#c9553a',
            marginBottom: '28px',
            animation: 'wis-fadeUp 0.6s 0.2s both',
          }}
        >
          South Florida AI Consulting
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 'clamp(38px, 6vw, 68px)',
            lineHeight: 1.08,
            letterSpacing: '-1.5px',
            marginBottom: '28px',
            color: '#0d0f13',
            animation: 'wis-fadeUp 0.6s 0.35s both',
          }}
        >
          Get back{' '}
          <em style={{ fontStyle: 'italic', color: '#c9553a' }}>10–20 hours a week</em> without
          hiring a single person
        </h1>
        <p
          style={{
            fontSize: '19px',
            color: '#6b6e76',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: 1.6,
            animation: 'wis-fadeUp 0.6s 0.5s both',
          }}
        >
          I set up AI systems that handle the repetitive work drowning your team — follow-ups,
          documents, client communication, scheduling — so you can focus on closing deals and
          growing your business.
        </p>
      </section>

      {/* Verticals Grid */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 100px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px',
        }}
      >
        {verticals.map((v, i) => (
          <VerticalCard key={v.number} vertical={v} index={i} />
        ))}
      </section>

      {/* CTA Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '80px 24px 120px',
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: '36px',
            letterSpacing: '-0.5px',
            marginBottom: '18px',
            color: '#0d0f13',
          }}
        >
          Not sure if this is for you?
        </h2>
        <p
          style={{
            fontSize: '17px',
            color: '#6b6e76',
            marginBottom: '36px',
            lineHeight: 1.6,
          }}
        >
          If you run a business where your time is worth more than what you're spending it on,
          we should talk. I'll do a free 45-minute workflow audit and show you exactly where AI
          saves you hours — this week.
        </p>
        <Link href="/#contact">
          <button
            style={{
              display: 'inline-block',
              padding: '16px 44px',
              background: '#c9553a',
              color: '#fff',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              fontWeight: 700,
              border: 'none',
              borderRadius: '60px',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              transition: 'background 0.3s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = '#e8734f';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = '#c9553a';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
            }}
          >
            Book Your Free AI Audit
          </button>
        </Link>
      </section>

      <Footer />

      {/* Keyframe animation injected as a style tag */}
      <style>{`
        @keyframes wis-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .wis-card {
          background: #ffffff;
          border: 1px solid #e2dfd8;
          border-radius: 16px;
          padding: 40px 36px 36px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          animation: wis-fadeUp 0.6s both;
        }
        .wis-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 2px 24px rgba(0,0,0,0.09);
        }
        .wis-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #c9553a, #e8734f);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .wis-card:hover::before { opacity: 1; }
        /* animation-delay set inline per card via style prop */
      `}</style>
    </div>
  );
}

function VerticalCard({
  vertical,
  index,
}: {
  vertical: { number: string; title: string; pain: React.ReactNode };
  index: number;
}) {
  return (
    <div className="wis-card" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
      {/* Faded number in top-right */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: '48px',
          color: '#f8f6f1',
          position: 'absolute',
          top: '12px',
          right: '20px',
          lineHeight: 1,
          WebkitTextStroke: '1px #e2dfd8',
          userSelect: 'none',
        }}
      >
        {vertical.number}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 800,
          fontSize: '22px',
          lineHeight: 1.25,
          marginBottom: '14px',
          letterSpacing: '-0.3px',
          maxWidth: '85%',
          color: '#0d0f13',
        }}
      >
        {vertical.title}
      </h3>

      {/* Pain copy */}
      <p
        style={{
          fontSize: '16px',
          color: '#6b6e76',
          lineHeight: 1.65,
        }}
      >
        {vertical.pain}
      </p>
    </div>
  );
}
