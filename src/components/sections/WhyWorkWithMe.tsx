import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { whyWorkData } from '../../data/whyWork';
import { ShieldCheck } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section id="why-me" className="section section-divider" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">
        <SectionHeading
          tag="05"
          eyebrow="STANDARDS & WORK ETHIC"
          title="Why work with Asad Chaudhary."
          subtitle="Honest software engineering grounded in real development experience, thoughtful architecture, and direct client care."
        />

        {/* Editorial Grid of Standards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
          className="why-work-grid"
        >
          {whyWorkData.map((item) => (
            <div
              key={item.number}
              style={{
                padding: '2.25rem',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              className="interactive-card"
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--accent)',
                    }}
                  >
                    {item.number}
                  </span>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    <ShieldCheck size={13} color="var(--accent)" />
                    <span>VERIFIED STANDARD</span>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '-0.015em',
                    marginBottom: '0.85rem',
                    lineHeight: 1.3,
                    color: 'var(--text)',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--line)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>MAC DIGITAL STANDARD</span>
                <span style={{ color: 'var(--accent)' }}>● ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
