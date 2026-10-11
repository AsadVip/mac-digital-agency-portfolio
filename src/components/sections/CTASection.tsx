import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowUpRight, MessageCircle, Copy, Check } from 'lucide-react';
import { contactDetails } from '../../data/contact';

export const CTASection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      style={{
        backgroundColor: 'var(--surface-dark)',
        color: '#FFFFFF',
        padding: 'clamp(5.5rem, 9vw, 8rem) 0',
        position: 'relative',
        borderTop: '1px solid var(--line-dark)',
        borderBottom: '1px solid var(--line-dark)',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--accent)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1.25rem',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
            <span>START A CONVERSATION</span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(2.3rem, 5.2vw, 4rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              marginBottom: '1.5rem',
            }}
          >
            Ready to build a website that performs with authority?
          </h2>

          {/* Value Paragraph */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.22rem)',
              color: '#A1A1AA',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '660px',
            }}
          >
            Whether you require a new React single-page application, a tailored database architecture, or a responsive editorial rebuild, I am available to scope your project.
          </p>

          {/* Actions Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <Button
              href={contactDetails.whatsappLink}
              external
              variant="accent"
              size="lg"
              icon={<MessageCircle size={18} />}
            >
              Direct WhatsApp ({contactDetails.whatsappDisplay})
            </Button>

            <Button
              href={`mailto:${contactDetails.email}`}
              variant="outline"
              size="lg"
              icon={<ArrowUpRight size={18} />}
              style={{
                color: '#FFFFFF',
                borderColor: '#3F414D',
              }}
            >
              Send An Email
            </Button>

            <button
              onClick={handleCopyEmail}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.95rem 1.4rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid #3F414D',
                color: copied ? 'var(--accent)' : '#D1D5DB',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              title="Copy direct email address"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Direct response commitment */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: '#71717A',
              letterSpacing: '0.04em',
            }}
          >
            Direct engineer scoping within 24 hours · No sales middlemen · Based in Pakistan
          </div>
        </div>
      </div>
    </section>
  );
};
