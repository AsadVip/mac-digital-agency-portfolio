import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  tag,
  title,
  subtitle,
  action,
  align = 'left',
  dark = false,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
        textAlign: align,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: align === 'center' ? 'center' : 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
          {tag && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.08em',
              }}
            >
              {tag}
            </span>
          )}
          {tag && eyebrow && (
            <span style={{ color: dark ? 'var(--line-dark)' : 'var(--line-strong)' }}>/</span>
          )}
          {eyebrow && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 600,
                color: dark ? 'var(--text-light-muted)' : 'var(--text-muted)',
              }}
            >
              {eyebrow}
            </span>
          )}
        </div>
        {action && <div>{action}</div>}
      </div>

      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3.25rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: dark ? 'var(--text-light)' : 'var(--text)',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
            color: dark ? '#A1A1AA' : 'var(--text-secondary)',
            maxWidth: '680px',
            lineHeight: 1.65,
            marginTop: '0.25rem',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
