import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { servicesData } from '../../data/services';
import { ArrowUpRight, CheckCircle2, Plus, Minus } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(servicesData[0].number);

  const toggleService = (num: string) => {
    setActiveService((prev) => (prev === num ? '' : num));
  };

  return (
    <section id="services" className="section section-divider" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <SectionHeading
          tag="04"
          eyebrow="ENGINEERING CAPABILITIES"
          title="Services tailored for stability and growth."
          subtitle="Delivering reliable full-stack and modern frontend solutions with clean code, direct developer access, and transparent execution."
        />

        {/* Editorial Numbered Accordion Rows */}
        <div
          style={{
            borderTop: '1px solid var(--line)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {servicesData.map((service) => {
            const isExpanded = activeService === service.number;

            return (
              <div
                key={service.number}
                style={{
                  borderBottom: '1px solid var(--line)',
                  transition: 'background-color var(--transition-fast)',
                  backgroundColor: isExpanded ? 'var(--bg-subtle)' : 'transparent',
                }}
                className="service-row-item"
              >
                {/* Clickable Header Row */}
                <div
                  onClick={() => toggleService(service.number)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(60px, 90px) 1.5fr auto',
                    alignItems: 'center',
                    padding: 'clamp(1.5rem, 3vw, 2.25rem) 1rem',
                    cursor: 'pointer',
                    gap: '1.25rem',
                  }}
                  className="service-click-header"
                >
                  {/* Number */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                      fontWeight: 800,
                      color: isExpanded ? 'var(--accent)' : 'var(--text-muted)',
                      letterSpacing: '-0.02em',
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    {service.number}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3
                      style={{
                        fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: 'var(--text)',
                        marginBottom: '0.25rem',
                        lineHeight: 1.25,
                      }}
                    >
                      {service.title}
                    </h3>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--accent)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      {service.tagline}
                    </div>
                  </div>

                  {/* Expand/Collapse Trigger */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--line)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--surface)',
                      color: 'var(--text)',
                      transition: 'all var(--transition-fast)',
                      flexShrink: 0,
                    }}
                  >
                    {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div
                    style={{
                      padding: '0 1rem clamp(1.75rem, 3vw, 2.5rem) clamp(1rem, 7vw, 6.75rem)',
                      animation: 'serviceDetailsIn 220ms ease-out',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '1rem',
                        lineHeight: 1.75,
                        color: 'var(--text-secondary)',
                        maxWidth: '720px',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {service.description}
                    </p>

                    <div
                      style={{
                        padding: '1.25rem',
                        backgroundColor: 'var(--surface)',
                        border: '1px solid var(--line)',
                        borderRadius: 'var(--radius-xs)',
                        maxWidth: '720px',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--text-muted)',
                          marginBottom: '0.75rem',
                          fontWeight: 700,
                        }}
                      >
                        Core Deliverables Included
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                          gap: '0.75rem',
                        }}
                      >
                        {service.deliverables.map((item) => (
                          <div
                            key={item}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              fontSize: '0.88rem',
                              color: 'var(--text)',
                            }}
                          >
                            <CheckCircle2 size={14} color="var(--accent)" style={{ flexShrink: 0 }} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        borderBottom: '2px solid var(--accent)',
                        paddingBottom: '2px',
                      }}
                    >
                      <span>Inquire about this service scope</span>
                      <ArrowUpRight size={15} color="var(--accent)" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Direct Callout */}
        <div
          style={{
            marginTop: 'clamp(3rem, 5vw, 4.5rem)',
            padding: '2.25rem',
            backgroundColor: 'var(--bg-subtle)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--text)' }}>
              Need custom technical scoping for your product?
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
              Direct scope estimation within 24 hours. Honest advice on stack feasibility with zero sales push.
            </div>
          </div>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--text)',
              color: '#FFFFFF',
              padding: '0.85rem 1.6rem',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '0.92rem',
              textDecoration: 'none',
              transition: 'background-color var(--transition-fast)',
            }}
            className="scope-btn"
          >
            <span>Inquire About A Project</span>
            <ArrowUpRight size={16} color="var(--accent)" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes serviceDetailsIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .service-row-item:hover {
          background-color: var(--bg-subtle);
        }
        .scope-btn:hover {
          background-color: #000000 !important;
        }
      `}</style>
    </section>
  );
};
