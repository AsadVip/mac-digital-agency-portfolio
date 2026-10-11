import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight, Globe } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { contactDetails, socialLinks } from '../../data/contact';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setLocalTime(timeString);
      } catch {
        setLocalTime('UTC+5 PKT');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0E0F13',
        color: '#F4F4F6',
        paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
        paddingBottom: '3rem',
        borderTop: '1px solid #23252E',
      }}
    >
      <div className="container">
        {/* Top Grid Tier */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid #23252E',
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: '#FFFFFF',
                  color: '#0E0F13',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                }}
              >
                AC
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                  Asad Chaudhary
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.06em',
                  }}
                >
                  MAC DIGITAL AGENCY
                </div>
              </div>
            </div>

            <p style={{ color: '#9CA3AF', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Experienced Website Developer specializing in React, TypeScript, PHP, and responsive modern web architecture. Crafting dependable digital products since 2023.
            </p>

            {/* Timezone / Availability indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: '#9CA3AF',
                padding: '0.35rem 0.75rem',
                backgroundColor: '#16171E',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid #2B2D38',
              }}
            >
              <Globe size={13} color="var(--accent)" />
              <span>ISLAMABAD / LAHORE:</span>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{localTime || 'PKT (UTC+5)'}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--accent)',
                marginBottom: '1.25rem',
                fontWeight: 600,
              }}
            >
              Index Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      color: '#D1D5DB',
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-block',
                    }}
                    className="footer-nav-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--accent)',
                marginBottom: '1.25rem',
                fontWeight: 600,
              }}
            >
              Connect
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#D1D5DB',
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'color var(--transition-fast)',
                    }}
                    className="footer-nav-link"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={13} color="#9CA3AF" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries & Back to Top */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--accent)',
                  marginBottom: '1.25rem',
                  fontWeight: 600,
                }}
              >
                Direct Communication
              </div>
              <a
                href={`mailto:${contactDetails.email}`}
                style={{
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '0.4rem',
                  textDecoration: 'none',
                }}
                className="footer-email-link"
              >
                {contactDetails.email}
              </a>
              <div style={{ color: '#9CA3AF', fontSize: '0.88rem', fontFamily: 'var(--font-mono)' }}>
                Direct: {contactDetails.phoneDisplay}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#9CA3AF',
                fontSize: '0.85rem',
                padding: '0.75rem 0',
                marginTop: '1.5rem',
                cursor: 'pointer',
                transition: 'color var(--transition-fast)',
              }}
              className="back-to-top"
            >
              <span>Back to top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Tech Attribution */}
        <div
          style={{
            paddingTop: '2.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            color: '#71717A',
            fontSize: '0.82rem',
          }}
        >
          <div>
            © {CURRENT_YEAR} Asad Chaudhary. Mac Digital Agency. All rights reserved.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            ENGINEERED WITH REACT, TYPESCRIPT &amp; VITE
          </div>
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover {
          color: var(--accent) !important;
        }
        .footer-email-link:hover {
          color: var(--accent) !important;
        }
        .back-to-top:hover {
          color: #FFFFFF !important;
        }
      `}</style>
    </footer>
  );
};
