'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const TimeBlock = ({ value, label }: { value: number, label: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
      <div style={{
        background: 'var(--bg-primary)',
        border: '1px solid var(--border-accent)',
        color: 'var(--accent-primary)',
        fontFamily: 'var(--font-heading)',
        fontSize: '1.5rem',
        fontWeight: 800,
        padding: '0.5rem',
        borderRadius: '8px',
        minWidth: '50px',
        textAlign: 'center',
        boxShadow: 'var(--shadow-glow)'
      }}>
        {formatNumber(value)}
      </div>
      <span className="text-small" style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>{label}</span>
    </div>
  );

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <div style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', fontWeight: 800, padding: '0.25rem 0' }}>:</div>
      <TimeBlock value={timeLeft.minutes} label="Mins" />
      <div style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', fontWeight: 800, padding: '0.25rem 0' }}>:</div>
      <TimeBlock value={timeLeft.seconds} label="Secs" />
    </div>
  );
}
