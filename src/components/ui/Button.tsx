import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    fontWeight: 600,
    fontFamily: 'var(--font-sans)',
    textDecoration: 'none',
    transition: 'all var(--transition-fast)',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    letterSpacing: '-0.01em',
    lineHeight: 1.2,
    border: '1px solid transparent',
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: '0.5rem 1rem', fontSize: '0.85rem' },
    md: { padding: '0.75rem 1.4rem', fontSize: '0.95rem' },
    lg: { padding: '0.95rem 1.85rem', fontSize: '1.05rem' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--text)',
      color: 'var(--surface)',
      borderColor: 'var(--text)',
    },
    accent: {
      backgroundColor: 'var(--accent)',
      color: '#121316',
      borderColor: 'var(--accent)',
      fontWeight: 700,
    },
    secondary: {
      backgroundColor: 'var(--bg-subtle)',
      color: 'var(--text)',
      borderColor: 'var(--line)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--text)',
      borderColor: 'var(--line-strong)',
    },
    text: {
      backgroundColor: 'transparent',
      color: 'var(--text)',
      padding: '0.5rem 0',
      borderRadius: 0,
      borderBottom: '1px solid var(--text)',
    },
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...(variant !== 'text' ? sizeStyles[size] : sizeStyles.sm),
    ...variantStyles[variant],
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span style={{ display: 'inline-flex' }}>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        style={combinedStyles}
        className={`editorial-btn editorial-btn-${variant} ${className}`}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      style={combinedStyles}
      className={`editorial-btn editorial-btn-${variant} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
