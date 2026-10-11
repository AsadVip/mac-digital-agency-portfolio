import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { useScrollProgress } from '../../hooks/useScrollProgress';

interface NavbarProps {
  onOpenMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu, isMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Section intersection check
      const sections = ['about', 'expertise', 'work', 'services', 'why-me', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Precision Scroll Reading Progress Hairline */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? 'rgba(251, 251, 249, 0.94)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--line)' : '1px solid transparent',
          transition: 'background-color var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast)',
          boxShadow: isScrolled ? '0 4px 20px -4px rgba(0, 0, 0, 0.04)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4.75rem',
          }}
        >
          {/* Brand Logo & Editorial Typography */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.9rem',
              textDecoration: 'none',
            }}
            aria-label="Asad Chaudhary - Home"
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-xs)',
                backgroundColor: 'var(--text)',
                color: 'var(--surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '-0.02em',
                flexShrink: 0,
                border: '1px solid var(--text)',
              }}
            >
              AC
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    fontSize: '1.08rem',
                    letterSpacing: '-0.025em',
                    color: 'var(--text)',
                    lineHeight: 1.15,
                  }}
                >
                  Asad Chaudhary
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Mac Digital Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="desktop-nav"
          >
            {navigationItems
              .filter((item) => !item.isAction)
              .map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--text)' : 'var(--text-secondary)',
                      textDecoration: 'none',
                      position: 'relative',
                      padding: '0.4rem 0',
                      transition: 'color var(--transition-fast)',
                    }}
                    className="nav-link"
                  >
                    {item.label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: 'var(--accent)',
                          borderRadius: '1px',
                        }}
                      />
                    )}
                  </a>
                );
              })}
          </nav>

          {/* Right Area: Live Status Pill & Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Live Availability Pill */}
            <div className="status-pill status-pill-desktop" style={{ display: 'none' }}>
              <span className="status-dot-pulse" />
              <span>Available for builds</span>
            </div>

            <a
              href="#contact"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--text)',
                color: '#FFFFFF',
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.86rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all var(--transition-fast)',
                border: '1px solid var(--text)',
              }}
              className="desktop-cta"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={15} color="var(--accent)" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={onOpenMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--line)',
                color: 'var(--text)',
                cursor: 'pointer',
              }}
              className="mobile-toggle"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <style>{`
          @media (min-width: 960px) {
            .desktop-nav {
              display: flex !important;
            }
            .desktop-cta {
              display: inline-flex !important;
            }
            .status-pill-desktop {
              display: inline-flex !important;
            }
            .mobile-toggle {
              display: none !important;
            }
          }
          .nav-link:hover {
            color: var(--text) !important;
          }
          .desktop-cta:hover {
            background-color: #000000 !important;
            border-color: #000000 !important;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
          }
        `}</style>
      </header>
    </>
  );
};
