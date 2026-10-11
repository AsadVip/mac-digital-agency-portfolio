import React, { useEffect } from 'react';
import { ArrowUpRight, MessageCircle, Mail, Phone, X } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { contactDetails } from '../../data/contact';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bg)',
        overflowY: 'auto',
        padding: '1.5rem',
        animation: 'mobileFadeIn 220ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Top Bar inside Menu */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: 'var(--radius-xs)',
              backgroundColor: 'var(--text)',
              color: 'var(--surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontWeight: 800,
              fontSize: '0.85rem',
            }}
          >
            AC
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text)' }}>Asad Chaudhary</div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
              }}
            >
              Mac Digital Agency
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--line)',
            color: 'var(--text)',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Nav Links */}
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem 0',
          gap: '1.25rem',
        }}
      >
        {navigationItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              padding: '0.75rem 0',
              borderBottom: '1px solid var(--line)',
              textDecoration: 'none',
              color: 'var(--text)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                }}
              >
                0{index + 1}
              </span>
              <span
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                {item.label}
              </span>
            </div>
            <ArrowUpRight size={18} color="var(--text-muted)" />
          </a>
        ))}
      </nav>

      {/* Quick Direct Contact */}
      <div
        style={{
          marginTop: 'auto',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--line)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
            marginBottom: '0.25rem',
          }}
        >
          Direct Priority Channels
        </div>

        <a
          href={contactDetails.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--accent)',
            color: '#121316',
            padding: '0.9rem',
            borderRadius: 'var(--radius-sm)',
            fontWeight: 700,
            fontSize: '0.95rem',
            textDecoration: 'none',
          }}
        >
          <MessageCircle size={18} />
          <span>Chat on WhatsApp ({contactDetails.whatsappDisplay})</span>
        </a>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
          }}
        >
          <a
            href={`mailto:${contactDetails.email}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--line)',
              padding: '0.8rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text)',
            }}
          >
            <Mail size={16} />
            <span>Email</span>
          </a>

          <a
            href={`tel:${contactDetails.phoneTel}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--line)',
              padding: '0.8rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text)',
            }}
          >
            <Phone size={16} />
            <span>Call</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes mobileFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
