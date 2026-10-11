import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonialsData } from '../../data/testimonials';
import { Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(testimonialsData[0].id);
  const activeTestimonial = testimonialsData.find((t) => t.id === selectedId) || testimonialsData[0];

  return (
    <section id="testimonials" className="section section-divider" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <SectionHeading
          tag="06"
          eyebrow="CLIENT ENDORSEMENTS"
          title="Direct collaborative feedback."
          subtitle="Feedback from clients and creative partners on engineering rigor, delivery speed, and code quality."
        />

        {/* Lead Quote Interactive Showcase */}
        <div
          style={{
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            backgroundColor: 'var(--bg)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '2.5rem',
            position: 'relative',
            boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* Accent quote mark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.75rem',
            }}
          >
            <Quote
              size={42}
              color="var(--accent)"
              style={{ opacity: 0.8 }}
            />

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 600,
                padding: '0.25rem 0.65rem',
                backgroundColor: 'var(--accent-subtle)',
                borderRadius: 'var(--radius-xs)',
              }}
            >
              <CheckCircle size={13} color="var(--accent)" />
              <span>VERIFIED CLIENT SCOPE</span>
            </div>
          </div>

          <blockquote
            style={{
              fontSize: 'clamp(1.35rem, 2.6vw, 1.95rem)',
              fontWeight: 600,
              lineHeight: 1.45,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '2.25rem',
              minHeight: '4.5em',
            }}
          >
            “{activeTestimonial.quote}”
          </blockquote>

          {/* Client Details Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid var(--line)',
            }}
          >
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text)', marginBottom: '0.15rem' }}>
                {activeTestimonial.clientName}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                {activeTestimonial.clientRole} — <span style={{ color: 'var(--text)', fontWeight: 600 }}>{activeTestimonial.projectScope}</span>
              </div>
            </div>

            {/* Testimonial Selectors */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              {testimonialsData.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedId(t.id)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: 'var(--radius-xs)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    border: '1px solid',
                    borderColor: selectedId === t.id ? 'var(--text)' : 'var(--line)',
                    backgroundColor: selectedId === t.id ? 'var(--text)' : 'var(--surface)',
                    color: selectedId === t.id ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                  }}
                  aria-label={`View feedback from ${t.clientName}`}
                >
                  0{idx + 1} // {t.clientName.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Supporting Quotes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              style={{
                padding: '2rem',
                backgroundColor: selectedId === item.id ? 'var(--bg-subtle)' : 'var(--surface)',
                border: '1px solid',
                borderColor: selectedId === item.id ? 'var(--text)' : 'var(--line)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              className="interactive-card"
            >
              <p
                style={{
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                }}
              >
                “{item.quote}”
              </p>

              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text)' }}>
                    {item.clientName}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {item.clientRole}
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: selectedId === item.id ? 'var(--accent)' : 'var(--text-muted)',
                    fontWeight: 700,
                  }}
                >
                  {selectedId === item.id ? 'ACTIVE' : 'VIEW'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
