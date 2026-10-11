import React from 'react';
import { CountUp } from '../ui/CountUp';
import { ShieldCheck, Zap, Code, Layout, Calendar } from 'lucide-react';

export const CredibilityStrip: React.FC = () => {
  const stats = [
    {
      icon: <Calendar size={16} color="var(--accent)" />,
      label: 'CONTINUOUS DEV',
      val: 3,
      suffix: '+ YEARS',
      detail: 'Daily coding practice since 2023',
    },
    {
      icon: <Code size={16} color="var(--accent)" />,
      label: 'FOUNDATION YEAR',
      val: 2023,
      start: 2015,
      suffix: '',
      detail: 'Modern standards & full-stack',
    },
    {
      icon: <Layout size={16} color="var(--accent)" />,
      label: 'RESPONSIVE RIGOR',
      val: 100,
      suffix: '% TESTED',
      detail: 'Tailored down to 320px screens',
    },
    {
      icon: <Zap size={16} color="var(--accent)" />,
      label: 'TARGET PERFORMANCE',
      val: 450,
      start: 900,
      prefix: '<',
      suffix: 'ms LCP',
      detail: 'Vite bundling & clean assets',
    },
    {
      icon: <ShieldCheck size={16} color="var(--accent)" />,
      label: 'CODE INTEGRITY',
      val: 100,
      suffix: '% BESPOKE',
      detail: 'Zero AI slop · 100% Handcrafted',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--surface-dark)',
        color: '#FFFFFF',
        borderTop: '1px solid var(--line-dark)',
        borderBottom: '1px solid var(--line-dark)',
        padding: 'clamp(2rem, 3.5vw, 2.75rem) 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
          className="credibility-grid"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                borderLeft: '2px solid var(--line-dark)',
                paddingLeft: '1.25rem',
                transition: 'border-color var(--transition-fast)',
              }}
              className="credibility-stat-cell"
            >
              {/* Category & Icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-light-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.icon}
                <span>{stat.label}</span>
              </div>

              {/* Number Count-Up Display */}
              <div
                style={{
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: '#FFFFFF',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                }}
              >
                <CountUp
                  start={stat.start ?? 0}
                  end={stat.val}
                  prefix={stat.prefix}
                  suffix={stat.suffix ? ` ${stat.suffix}` : ''}
                  duration={2000}
                />
              </div>

              {/* Detail description */}
              <div
                style={{
                  fontSize: '0.8rem',
                  color: '#8E929E',
                  lineHeight: 1.4,
                }}
              >
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .credibility-stat-cell:hover {
          border-left-color: var(--accent) !important;
        }
      `}</style>
    </div>
  );
};
