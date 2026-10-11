import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';

interface TypewriterProps {
  words: string[];
  prefix?: string;
  suffix?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  prefix = '',
  suffix = '',
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseDuration = 2200,
  className = '',
  style,
}) => {
  const { text } = useTypewriter({
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  });

  return (
    <span className={className} style={{ display: 'inline', ...style }}>
      {prefix && <span>{prefix}</span>}
      <span>{text}</span>
      <span className="typewriter-caret" aria-hidden="true" />
      {suffix && <span>{suffix}</span>}
    </span>
  );
};
