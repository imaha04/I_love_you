'use client';

import { useEffect, useState } from 'react';
import Reveal from '@/src/components/ui/Reveal';

function getRemaining(target) {
  const difference = Math.max(0, new Date(target).getTime() - Date.now());

  return {
    complete: difference === 0,
    values: [
      Math.floor(difference / 86_400_000),
      Math.floor((difference / 3_600_000) % 24),
      Math.floor((difference / 60_000) % 60),
      Math.floor((difference / 1_000) % 60),
    ],
  };
}

export default function Countdown({ content }) {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    const update = () => setRemaining(getRemaining(content.countdownTarget));
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [content.countdownTarget]);

  return (
    <section className="defer-section bg-charcoal px-[var(--page-gutter)] py-[clamp(7rem,12vw,11rem)] text-ivory">
      <Reveal className="mx-auto max-w-5xl text-center">
        <p className="editorial-serif text-[clamp(2.7rem,6.5vw,5.5rem)] italic leading-none">
          {content.countdown.title}
        </p>

        {remaining?.complete ? (
          <p className="editorial-serif mt-14 text-[clamp(3rem,7vw,6rem)] text-champagne">
            {content.countdown.complete}
          </p>
        ) : (
          <div className="mt-14 grid grid-cols-4 gap-2 sm:gap-8">
            {content.countdown.labels.map((label, index) => (
              <div key={label} className="min-w-0 border-l border-white/12 first:border-l-0">
                <span className="editorial-serif block min-h-[1.05em] text-[clamp(2.25rem,8vw,6.8rem)] leading-none tabular-nums tracking-[-0.045em]">
                  {remaining ? String(remaining.values[index]).padStart(2, '0') : '—'}
                </span>
                <span className="mt-4 block truncate text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-champagne/70 sm:text-[0.68rem] sm:tracking-[0.34em]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
