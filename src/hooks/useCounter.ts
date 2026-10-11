import { useState, useEffect } from 'react';

interface UseCounterOptions {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  active?: boolean;
}

export function useCounter({
  from = 0,
  to,
  duration = 1600,
  decimals = 0,
  active = true,
}: UseCounterOptions) {
  const [count, setCount] = useState<number>(from);

  useEffect(() => {
    if (!active) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const currentVal = from + (to - from) * easedProgress;

      if (progress < 1) {
        setCount(Number(currentVal.toFixed(decimals)));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [from, to, duration, decimals, active]);

  return count;
}
