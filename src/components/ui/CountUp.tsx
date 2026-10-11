import React from 'react';
import { useInView } from '../../hooks/useInView';
import { useCounter } from '../../hooks/useCounter';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 1800,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  style,
}) => {
  const { ref, isInView } = useInView<HTMLSpanElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const value = useCounter({
    from: start,
    to: end,
    duration,
    decimals,
    active: isInView,
  });

  return (
    <span
      ref={ref}
      className={`tabular-nums ${className}`}
      style={{ display: 'inline-flex', alignItems: 'baseline', ...style }}
    >
      {prefix && <span>{prefix}</span>}
      <span>{decimals > 0 ? value.toFixed(decimals) : value}</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
};
