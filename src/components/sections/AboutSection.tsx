import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Check, Shield, Cpu, Database, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Compass size={18} color="var(--accent)" />,
      title: 'Responsive-First Architecture',
      desc: 'Mobile layouts are composed intentionally from scratch, not simply shrunken desktop grids. Tested rigorously down to 320px for zero overflow, readable type, and fluid touch usability.',
    },
    {
      icon: <Cpu size={18} color="var(--accent)" />,
      title: 'Strict Type-Safe React & Vite',
      desc: 'Using TypeScript in strict mode ensures zero runtime type surprises. Applications load in sub-second times with Vite’s modern bundling pipeline and minimal JavaScript overhead.',
    },
    {
      icon: <Database size={18} color="var(--accent)" />,
      title: 'Relational & Cloud Backend Integration',
      desc: 'Practical database design with PHP and MySQL, as well as modern BaaS systems like Supabase PostgreSQL with Row-Level Security (RLS) and Firebase realtime synchronization.',
    },
    {
      icon: <Shield size={18} color="var(--accent)" />,
      title: 'Human-Centered Editorial Craft',
      desc: 'Visual restraint over decorative gimmicks. Clean typography, high contrast, intentional negative space, and purposeful micro-interactions that elevate brand credibility.',
    },
  ];

  return (
    <section id="about" className="section section-divider">
      <div className="container">
        <SectionHeading
          tag="01"
          eyebrow="ABOUT THE PRACTICE"
          title="Engineering clarity for the modern web."
          subtitle="Delivering resilient digital products with 3+ years of continuous software development since 2023."
        />

        {/* Large Editorial Statement */}
        <div
          style={{
            position: 'relative',
            paddingLeft: 'clamp(1.5rem, 3vw, 2.5rem)',
            borderLeft: '3px solid var(--accent)',
            fontSize: 'clamp(1.35rem, 2.5vw, 2.1rem)',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
          }}
        >
          “Great web development isn’t about piling on bloated libraries or superficial AI gimmicks. It is about crafting fast, predictable, and beautiful software that solves client problems cleanly.”
        </div>

        {/* Editorial 2-Column Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
          }}
          className="about-split-grid"
        >
          {/* Left Column: The Journey & Current Focus */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--accent)',
                fontWeight: 600,
              }}
            >
              Background &amp; Philosophy
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
              }}
            >
              From web foundations to modern reactive architectures.
            </h3>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.75 }}>
              I began my dedicated programming path in 2023 with foundational web standards: semantic HTML, handcrafted CSS systems, JavaScript logic, and server-side PHP data handling.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.75 }}>
              Over 3+ years of daily engineering practice, I expanded into contemporary component-driven development with React and TypeScript, integrating scalable backend solutions like Supabase and Firebase.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.75 }}>
              Under Mac Digital Agency, I work directly with founders, creative studios, and businesses to build websites that feel solid, load instantly, and communicate authority through typography and responsive precision.
            </p>

            {/* Code Quality Promise Box */}
            <div
              style={{
                marginTop: '1rem',
                padding: '1.5rem',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text)',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
                <span>The Bespoke Code Guarantee</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={14} color="var(--accent)" />
                  <span>No template slop or unmaintainable copy-paste frameworks</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={14} color="var(--accent)" />
                  <span>Accessible keyboard navigation and clean semantic HTML</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={14} color="var(--accent)" />
                  <span>Direct developer contact — no account executives or middle layers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Engineering Pillars */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--accent)',
                fontWeight: 600,
              }}
            >
              Core Engineering Principles
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  style={{
                    padding: '1.6rem',
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
                  }}
                  className="interactive-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.6rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'var(--bg-subtle)',
                        border: '1px solid var(--line)',
                        flexShrink: 0,
                      }}
                    >
                      {pillar.icon}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '1.08rem', letterSpacing: '-0.015em', color: 'var(--text)' }}>
                      {pillar.title}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-split-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
