import { Link } from 'wouter';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function CryotherapyNoShowReduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ffffff' }}>

    {/* Hero Section */}
    <header style={{
        background: 'linear-gradient(180deg, #0e1d3a 0%, #142a52 100%)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '28px',
        paddingBottom: '80px',
      }}>
        <div style={{
          content: '""',
          position: 'absolute',
          right: '-180px',
          top: '-120px',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(28,181,184,0.18) 0%, rgba(28,181,184,0) 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 10 }}>
          {/* Breadcrumbs */}
          <div style={{
            fontSize: '12px',
            letterSpacing: '1.5px',
            color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}>
            <Link href="/case-studies" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
              Case Studies
            </Link>
            &nbsp;/&nbsp; Reducing No-Shows by 45%
          </div>

          {/* Label */}
          <div style={{
            display: 'inline-block',
            fontSize: '11px',
            letterSpacing: '2px',
            color: '#1cb5b8',
            textTransform: 'uppercase',
            borderLeft: '3px solid #1cb5b8',
            paddingLeft: '10px',
            marginBottom: '22px',
          }}>
            Case Study
          </div>

          {/* Category Tags */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(28,181,184,0.18)',
            color: '#1cb5b8',
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '7px 14px',
            borderRadius: '4px',
            marginBottom: '22px',
            marginLeft: '0',
          }}>
            Workflow Automation · Wellness &amp; Med Spa · Multi-channel Reminders
          </div>

          {/* Hero H1 */}
          <h1 style={{
            fontSize: '54px',
            lineHeight: '1.08',
            fontWeight: '700',
            margin: '0 0 22px',
            maxWidth: '920px',
            letterSpacing: '-0.5px',
          }}>
            Cutting no-shows from 55% to 30% — a <span style={{ color: '#1cb5b8' }}>45% reduction</span> at a California wellness studio.
          </h1>

          {/* Hero Subheading */}
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.78)',
            maxWidth: '720px',
            margin: '0 0 36px',
          }}>
            A growing recovery and wellness studio was losing serious revenue to missed appointments — more than half of every booking was a no-show. We mapped the workflow, designed the automation architecture, and brought in our specialist implementation team to build a CRM-backed reminder system that keeps clients engaged and on the calendar.
          </p>

          {/* Client Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.10)',
            padding: '12px 18px',
            borderRadius: '999px',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '14px',
            marginBottom: '36px',
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: '#1cb5b8',
              color: '#0e1d3a',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '12px',
            }}>
              ✓
            </div>
            <span>Wellness Studio, Northern California</span>
          </div>

          {/* Meta Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            borderTop: '1px solid rgba(255,255,255,0.10)',
            borderBottom: '1px solid rgba(255,255,255,0.10)',
            padding: '22px 0',
            marginTop: '14px',
          }}>
            <div style={{ padding: '0 22px', borderRight: '1px solid rgba(255,255,255,0.10)' }}>
              <div style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}>
                Timeline
              </div>
              <div style={{ fontSize: '15px', color: '#ffffff', fontWeight: '500' }}>8 weeks</div>
            </div>
            <div style={{ padding: '0 22px', borderRight: '1px solid rgba(255,255,255,0.10)' }}>
              <div style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}>
                Reduction
              </div>
              <div style={{ fontSize: '15px', color: '#ffffff', fontWeight: '500' }}>45% no-shows</div>
            </div>
            <div style={{ padding: '0 22px', borderRight: '1px solid rgba(255,255,255,0.10)' }}>
              <div style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}>
                Revenue Impact
              </div>
              <div style={{ fontSize: '15px', color: '#ffffff', fontWeight: '500' }}>$47k/month recovered</div>
            </div>
            <div style={{ padding: '0 22px' }}>
              <div style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}>
                Channels
              </div>
              <div style={{ fontSize: '15px', color: '#ffffff', fontWeight: '500' }}>SMS + Email + App</div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section style={{ padding: '90px 0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '11px',
            letterSpacing: '2px',
            color: '#1cb5b8',
            textTransform: 'uppercase',
            borderLeft: '3px solid #1cb5b8',
            paddingLeft: '10px',
            marginBottom: '18px',
          }}>
            The Problem
          </div>
          <h2 style={{
            fontSize: '38px',
            fontWeight: '700',
            lineHeight: '1.15',
            color: '#0e1d3a',
            margin: '0 0 18px',
            letterSpacing: '-0.3px',
          }}>
            55% no-show rate eating into revenue
          </h2>
          <p style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#2a3a5e',
            maxWidth: '760px',
            marginBottom: '20px',
          }}>
            The studio had built a solid client base, but more than half of all bookings never showed up. Clients would book, forget, or simply not prioritize the appointment. Each no-show meant lost revenue, wasted staff time, and open appointment slots that could have been filled.
          </p>
          <p style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#2a3a5e',
            maxWidth: '760px',
          }}>
            They'd tried basic email reminders, but engagement was low. They needed a multi-channel approach that would actually reach clients where they are — and keep them engaged enough to show up.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section style={{ padding: '90px 0', background: '#f7f9fc' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '11px',
            letterSpacing: '2px',
            color: '#1cb5b8',
            textTransform: 'uppercase',
            borderLeft: '3px solid #1cb5b8',
            paddingLeft: '10px',
            marginBottom: '18px',
          }}>
            The Solution
          </div>
          <h2 style={{
            fontSize: '38px',
            fontWeight: '700',
            lineHeight: '1.15',
            color: '#0e1d3a',
            margin: '0 0 18px',
            letterSpacing: '-0.3px',
          }}>
            Multi-channel reminder automation + behavioral nudges
          </h2>
          <p style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#2a3a5e',
            maxWidth: '760px',
            marginBottom: '20px',
          }}>
            We designed a CRM-backed reminder system that reaches clients across SMS, email, and in-app notifications. The system sends reminders at strategic intervals — 7 days before, 48 hours before, and 24 hours before the appointment.
          </p>
          <p style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#2a3a5e',
            maxWidth: '760px',
          }}>
            Each reminder includes a one-click confirmation button, making it frictionless for clients to confirm they're coming. If they don't confirm, a second touchpoint goes out with a gentle nudge and a link to reschedule if needed. The system also flags high-risk no-shows (clients with history) for staff follow-up.
          </p>

          {/* Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '18px',
            marginTop: '56px',
          }}>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e1e7f0',
              borderRadius: '12px',
              padding: '26px 22px',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)',
            }}>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#0e1d3a',
                lineHeight: '1.1',
                letterSpacing: '-0.5px',
              }}>
                45<span style={{ color: '#1cb5b8' }}>%</span>
              </div>
              <div style={{
                fontSize: '13px',
                color: '#5a6a8a',
                marginTop: '8px',
                lineHeight: '1.45',
              }}>
                Reduction in no-shows
              </div>
            </div>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e1e7f0',
              borderRadius: '12px',
              padding: '26px 22px',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)',
            }}>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#0e1d3a',
                lineHeight: '1.1',
                letterSpacing: '-0.5px',
              }}>
                8<span style={{ color: '#1cb5b8' }}>w</span>
              </div>
              <div style={{
                fontSize: '13px',
                color: '#5a6a8a',
                marginTop: '8px',
                lineHeight: '1.45',
              }}>
                Implementation time
              </div>
            </div>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e1e7f0',
              borderRadius: '12px',
              padding: '26px 22px',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)',
            }}>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#0e1d3a',
                lineHeight: '1.1',
                letterSpacing: '-0.5px',
              }}>
                3<span style={{ color: '#1cb5b8' }}>x</span>
              </div>
              <div style={{
                fontSize: '13px',
                color: '#5a6a8a',
                marginTop: '8px',
                lineHeight: '1.45',
              }}>
                Confirmation rate vs. email alone
              </div>
            </div>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e1e7f0',
              borderRadius: '12px',
              padding: '26px 22px',
              boxShadow: '0 1px 0 rgba(14,29,58,0.02)',
            }}>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#0e1d3a',
                lineHeight: '1.1',
                letterSpacing: '-0.5px',
              }}>
                $47<span style={{ color: '#1cb5b8' }}>k</span>
              </div>
              <div style={{
                fontSize: '13px',
                color: '#5a6a8a',
                marginTop: '8px',
                lineHeight: '1.45',
              }}>
                Monthly revenue recovered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section style={{ padding: '90px 0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '11px',
            letterSpacing: '2px',
            color: '#1cb5b8',
            textTransform: 'uppercase',
            borderLeft: '3px solid #1cb5b8',
            paddingLeft: '10px',
            marginBottom: '18px',
          }}>
            Why This Matters
          </div>
          <h2 style={{
            fontSize: '38px',
            fontWeight: '700',
            lineHeight: '1.15',
            color: '#0e1d3a',
            margin: '0 0 18px',
            letterSpacing: '-0.3px',
          }}>
            For wellness studios, every appointment slot is revenue
          </h2>
          <div style={{
            background: '#ffffff',
            border: '1px solid #e1e7f0',
            borderLeft: '4px solid #1cb5b8',
            borderRadius: '0 14px 14px 0',
            padding: '32px 36px',
            marginTop: '32px',
          }}>
            <p style={{
              margin: '0 0 14px',
              fontSize: '16px',
              color: '#2a3a5e',
              lineHeight: '1.7',
            }}>
              No-shows don't just mean lost revenue — they disrupt scheduling, waste staff time, and create a cascade of downstream problems. A 45% reduction in no-shows means the studio can reliably fill more slots, predict cash flow better, and give staff more predictable schedules.
            </p>
            <p style={{
              margin: '0',
              fontSize: '16px',
              color: '#2a3a5e',
              lineHeight: '1.7',
            }}>
              The multi-channel approach ensures that reminders reach clients where they actually are. SMS gets immediate attention. Email works for planners. In-app notifications work for engaged users. By meeting clients where they are, the studio dramatically increased confirmation rates and reduced no-shows.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section style={{ padding: '90px 0', background: '#f7f9fc' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{
            margin: '56px 0 0',
            padding: '32px 36px',
            background: 'linear-gradient(90deg, rgba(28,181,184,0.08) 0%, rgba(28,181,184,0) 80%)',
            borderLeft: '4px solid #1cb5b8',
            borderRadius: '0 12px 12px 0',
          }}>
            <p style={{
              fontSize: '22px',
              lineHeight: '1.5',
              color: '#0e1d3a',
              fontStyle: 'italic',
              margin: '0 0 14px',
            }}>
              "We were leaving $50k on the table every month. Now we're actually filling our calendar. The system is invisible to clients — they just show up."
            </p>
            <p style={{
              fontSize: '13px',
              color: '#5a6a8a',
              letterSpacing: '0.5px',
            }}>
              — Studio Owner, Northern California
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(180deg, #142a52 0%, #0e1d3a 100%)',
        color: '#ffffff',
        textAlign: 'center',
        padding: '90px 24px',
      }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '38px',
            margin: '0 0 14px',
            fontWeight: '700',
            letterSpacing: '-0.3px',
          }}>
            Ready to <span style={{ color: '#1cb5b8' }}>recover lost revenue</span>?
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '620px',
            margin: '0 auto 28px',
            fontSize: '17px',
            lineHeight: '1.6',
          }}>
            Let's map your workflow and identify where automation can make the biggest impact on your bottom line.
          </p>
          <a
            href="https://wa.me/15615630947?text=Hi%20Patrick%2C%20I%27d%20like%20to%20book%20an%20AI%20Roadmap%20Session."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#1cb5b8',
              color: '#0e1d3a',
              padding: '16px 32px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '15px',
              letterSpacing: '0.3px',
              textDecoration: 'none',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 20px rgba(28,181,184,0.35)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
            }}
          >
            Book Your AI Roadmap Session — $997
          </a>
          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '13px',
            marginTop: '18px',
          }}>
            Typically uncovers 3–7 high-leverage AI wins for your next 90 days.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
