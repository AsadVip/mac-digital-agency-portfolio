import React from 'react';
import { ArrowUpRight, ArrowDown, MessageCircle, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';
import { Typewriter } from '../ui/Typewriter';
import { contactDetails } from '../../data/contact';

export const Hero: React.FC = () => {
  const typewriterSpecialties = [
    'Responsive Full-Stack Web Development',
    'Type-Safe React & Vite Architecture',
    'PHP & Relational Database Engineering',
    'Realtime Supabase & Firebase Integration',
    'High-Performance Digital Products',
  ];

  return (
    <section
      id="hero"
      style={{
        paddingTop: 'clamp(7.5rem, 13vw, 10.5rem)',
        paddingBottom: 'clamp(5rem, 9vw, 7.5rem)',
        position: 'relative',
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Typography, Dynamic Typewriter & Actions */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              zIndex: 2,
            }}
            className="hero-content"
          >
            {/* Live Eyebrow Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
              }}
            >
              <div className="status-pill">
                <span className="status-dot-pulse" />
                <span>AVAILABLE FOR Q2 PROJECTS</span>
              </div>
              <span style={{ color: 'var(--line-strong)', display: 'inline-block' }}>/</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                SINCE 2023 · 3+ YEARS DEV
              </span>
            </div>

            {/* Monumental Editorial Name Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.9rem, 6.8vw, 5.2rem)',
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                color: 'var(--text)',
                marginBottom: '1rem',
              }}
            >
              Asad Chaudhary<span style={{ color: 'var(--accent)' }}>.</span>
            </h1>

            {/* Dynamic Animated Typewriter Headline */}
            <div
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
                fontWeight: 600,
                lineHeight: 1.35,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                marginBottom: '1.25rem',
                minHeight: '2.7em',
                display: 'flex',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                gap: '0.4rem',
              }}
            >
              <span style={{ color: 'var(--text-muted)' }}>Specializing in</span>
              <span style={{ color: 'var(--text)', borderBottom: '2px solid var(--accent)' }}>
                <Typewriter
                  words={typewriterSpecialties}
                  typingSpeed={60}
                  deletingSpeed={35}
                  pauseDuration={2400}
                />
              </span>
            </div>

            {/* Concise Value Statement */}
            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.25vw, 1.15rem)',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                maxWidth: '580px',
                marginBottom: '2.25rem',
              }}
            >
              Building resilient single-page web applications, clean database architectures, and responsive digital products. Engineered with TypeScript rigor, intentional typography, and zero template fluff.
            </p>

            {/* Action Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              <Button href="#contact" variant="accent" size="lg" icon={<ArrowUpRight size={18} />}>
                Hire Me
              </Button>
              <Button href="#work" variant="outline" size="lg" icon={<ArrowDown size={17} />}>
                View Selected Work
              </Button>
              <a
                href={contactDetails.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.85rem 1.15rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--line)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  transition: 'border-color var(--transition-fast)',
                }}
                className="hero-whatsapp-pill"
              >
                <MessageCircle size={16} color="#10B981" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

            {/* Verified Tech Core Strip */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--line)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                <Terminal size={13} color="var(--accent)" />
                <span>Core Production Technologies</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['React 19', 'TypeScript', 'PHP & MySQL', 'Supabase', 'Firebase', 'Vite', 'Modern CSS'].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--line)',
                      color: 'var(--text)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Unobstructed Editorial Portrait */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '470px',
              margin: '0 auto',
            }}
            className="hero-image-wrapper"
          >
            {/* Outer Architectural Framing & Corner Crosshairs */}
            <div
              style={{
                position: 'relative',
                padding: '12px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--line-strong)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.09)',
              }}
              className="editorial-photo-frame"
            >
              {/* Corner crosshair indicators (editorial design hallmark) */}
              <div style={{ position: 'absolute', top: -4, left: -4, width: 8, height: 8, borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }} />
              <div style={{ position: 'absolute', top: -4, right: -4, width: 8, height: 8, borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />
              <div style={{ position: 'absolute', bottom: -4, left: -4, width: 8, height: 8, borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }} />
              <div style={{ position: 'absolute', bottom: -4, right: -4, width: 8, height: 8, borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />

              {/* Photo Container */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--line)',
                }}
              >
                <img
                  src="/images/profile.png"
                  alt="Asad Chaudhary - Experienced Website Developer"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '4 / 5',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                    transition: 'transform var(--transition-smooth)',
                  }}
                  className="hero-portrait-img"
                />

                {/* Vertical Accent Hairline */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '3px',
                    height: '70px',
                    backgroundColor: 'var(--accent)',
                  }}
                />
              </div>

              {/* Editorial Caption Strip */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '0.85rem',
                  padding: '0 0.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--text-muted)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>■</span>
                  <span>ASAD CHAUDHARY</span>
                </div>
                <span>WEBSITE DEVELOPER // 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.75fr !important;
          }
          .hero-image-wrapper {
            margin-left: auto !important;
            margin-right: 0 !important;
          }
        }
        @media (max-width: 959px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-content {
            order: 1 !important;
          }
          .hero-image-wrapper {
            order: 2 !important;
            max-width: 380px !important;
          }
        }
        .hero-portrait-img:hover {
          transform: scale(1.02);
        }
        .hero-whatsapp-pill:hover {
          border-color: #10B981 !important;
        }
      `}</style>
    </section>
  );
};
